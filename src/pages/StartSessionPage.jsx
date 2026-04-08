import React from "react";
import { useMemo, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import TimerSetupForm from "../components/timer/TimerSetupForm.jsx";
import TaskList from "../components/tasks/TaskList.jsx";
import ReflectionForm from "../components/reflection/ReflectionForm.jsx";
import StatCard from "../components/common/StatCard.jsx";

export default function StartSessionPage() {
  const [form, setForm] = useState({
    workMinutes: 25,
    breakMinutes: 5,
    cycles: 4
  });
  const [started, setStarted] = useState(false);

  const totalMinutes = useMemo(
    () => form.cycles * (form.workMinutes + form.breakMinutes),
    [form.breakMinutes, form.cycles, form.workMinutes]
  );

  const updateField = (field, value) => {
    setForm((previous) => ({ ...previous, [field]: Number.isNaN(value) ? 1 : Math.max(value, 1) }));
  };

  return (
    <section aria-label="Start session">
      <h1 className="mb-3">Start Session</h1>
      <p className="text-muted">
        Configure your study session and track tasks while working. This is milestone progress toward
        the full Stoody flow.
      </p>
      {started ? (
        <Alert variant="success">
          Session started (demo state). Next milestone will add the active countdown timer behavior.
        </Alert>
      ) : null}
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
          <TimerSetupForm form={form} onChange={updateField} onStart={() => setStarted(true)} />
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

