import React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import TimerSetupForm from "../components/timer/TimerSetupForm.jsx";
import ActiveSessionCard from "../components/timer/ActiveSessionCard.jsx";
import SessionControls from "../components/timer/SessionControls.jsx";
import TaskList from "../components/tasks/TaskList.jsx";
import ReflectionForm from "../components/reflection/ReflectionForm.jsx";
import StatCard from "../components/common/StatCard.jsx";

const SESSION_HISTORY_KEY = "stoodySessionHistory";
const PRESET_STORAGE_KEY = "stoodyPendingPreset";

export default function StartSessionPage() {
  const [form, setForm] = useState({
    workMinutes: 25,
    breakMinutes: 5,
    cycles: 4
  });
  const [session, setSession] = useState({
    isActive: false,
    isPaused: false,
    phase: "work",
    secondsLeft: 25 * 60,
    phaseTotalSeconds: 25 * 60,
    currentCycle: 1,
    totalCycles: 4
  });
  const [focusSecondsCompleted, setFocusSecondsCompleted] = useState(0);
  const [notice, setNotice] = useState("");
  const previousSecondsLeftRef = useRef(session.secondsLeft);

  useEffect(() => {
    const raw = localStorage.getItem(PRESET_STORAGE_KEY);
    if (!raw) return;
    try {
      const preset = JSON.parse(raw);
      if (
        preset &&
        typeof preset.workMinutes === "number" &&
        typeof preset.breakMinutes === "number" &&
        typeof preset.cycles === "number"
      ) {
        setForm({
          workMinutes: Math.max(1, preset.workMinutes),
          breakMinutes: Math.max(1, preset.breakMinutes),
          cycles: Math.max(1, preset.cycles)
        });
        setNotice("Preset values loaded into session setup.");
      }
    } catch {
      // ignore invalid preset payloads
    }
    localStorage.removeItem(PRESET_STORAGE_KEY);
  }, []);

  const totalMinutes = useMemo(
    () => form.cycles * (form.workMinutes + form.breakMinutes),
    [form.breakMinutes, form.cycles, form.workMinutes]
  );

  const updateField = (field, value) => {
    setForm((previous) => ({ ...previous, [field]: Number.isNaN(value) ? 1 : Math.max(value, 1) }));
  };

  const saveHistoryEntry = (entry) => {
    const existing = JSON.parse(localStorage.getItem(SESSION_HISTORY_KEY) || "[]");
    const updated = [entry, ...existing].slice(0, 25);
    localStorage.setItem(SESSION_HISTORY_KEY, JSON.stringify(updated));
  };

  const endSession = (reason) => {
    setSession((previous) => ({ ...previous, isActive: false, isPaused: false }));
    const focusMinutes = Math.max(1, Math.round(focusSecondsCompleted / 60));
    saveHistoryEntry({
      id: Date.now(),
      date: new Date().toISOString().slice(0, 10),
      focus: focusMinutes,
      completed: 0,
      distraction: reason === "completed" ? "Not recorded" : "Ended early"
    });
    setNotice(reason === "completed" ? "Session complete. Saved to history." : "Session ended early.");
  };

  const moveToNextStep = () => {
    setSession((previous) => {
      if (previous.phase === "work") {
        if (previous.currentCycle >= previous.totalCycles) {
          return { ...previous, isActive: false, isPaused: false, secondsLeft: 0 };
        }
        return {
          ...previous,
          phase: "break",
          secondsLeft: form.breakMinutes * 60,
          phaseTotalSeconds: form.breakMinutes * 60
        };
      }
      return {
        ...previous,
        phase: "work",
        currentCycle: previous.currentCycle + 1,
        secondsLeft: form.workMinutes * 60,
        phaseTotalSeconds: form.workMinutes * 60
      };
    });
  };

  useEffect(() => {
    if (!session.isActive || session.isPaused) return undefined;
    const timerId = setInterval(() => {
      setSession((previous) => {
        if (!previous.isActive || previous.isPaused) return previous;
        if (previous.secondsLeft <= 1) return { ...previous, secondsLeft: 0 };
        return { ...previous, secondsLeft: previous.secondsLeft - 1 };
      });
    }, 1000);
    return () => clearInterval(timerId);
  }, [session.isActive, session.isPaused]);

  useEffect(() => {
    const previousSeconds = previousSecondsLeftRef.current;
    if (
      session.isActive &&
      !session.isPaused &&
      session.phase === "work" &&
      session.secondsLeft < previousSeconds
    ) {
      setFocusSecondsCompleted((previous) => previous + (previousSeconds - session.secondsLeft));
    }
    previousSecondsLeftRef.current = session.secondsLeft;
  }, [session.isActive, session.isPaused, session.phase, session.secondsLeft]);

  useEffect(() => {
    if (!session.isActive) return;
    if (session.secondsLeft > 0) return;
    if (session.phase === "work" && session.currentCycle >= session.totalCycles) {
      endSession("completed");
      return;
    }
    moveToNextStep();
  }, [session.currentCycle, session.isActive, session.phase, session.secondsLeft, session.totalCycles]);

  const startSession = () => {
    setFocusSecondsCompleted(0);
    setNotice("Session started.");
    previousSecondsLeftRef.current = form.workMinutes * 60;
    setSession({
      isActive: true,
      isPaused: false,
      phase: "work",
      secondsLeft: form.workMinutes * 60,
      phaseTotalSeconds: form.workMinutes * 60,
      currentCycle: 1,
      totalCycles: form.cycles
    });
  };

  return (
    <section aria-label="Start session">
      <h1 className="mb-3">Start Session</h1>
      <p className="text-muted">
        Configure your study session and run a live timer with pause, resume, skip, and end controls.
      </p>
      {notice ? <Alert variant="success">{notice}</Alert> : null}
      <Row className="g-3 mb-3">
        <Col md={4}>
          <StatCard label="Work" value={`${form.workMinutes} min`} hint="Per cycle focus block" />
        </Col>
        <Col md={4}>
          <StatCard label="Break" value={`${form.breakMinutes} min`} hint="Per cycle recovery" />
        </Col>
        <Col md={4}>
          <StatCard label="Total Plan" value={`${totalMinutes} min`} hint={`${form.cycles} cycles`} />
        </Col>
      </Row>
      <Row className="g-3">
        <Col lg={7}>
          <TimerSetupForm form={form} onChange={updateField} onStart={startSession} />
          <div className="mt-3">
            <ActiveSessionCard
              isActive={session.isActive}
              phase={session.phase}
              secondsLeft={session.secondsLeft}
              phaseTotalSeconds={session.phaseTotalSeconds}
              currentCycle={session.currentCycle}
              totalCycles={session.totalCycles}
            />
          </div>
          <div className="mt-3">
            <SessionControls
              isActive={session.isActive}
              isPaused={session.isPaused}
              onPauseResume={() =>
                setSession((previous) => ({ ...previous, isPaused: previous.isActive && !previous.isPaused }))
              }
              onSkip={moveToNextStep}
              onEnd={() => endSession("early")}
            />
          </div>
        </Col>
        <Col lg={5}>
          <TaskList />
        </Col>
      </Row>
      <div className="mt-3">
        <ReflectionForm />
      </div>
    </section>
  );
}

