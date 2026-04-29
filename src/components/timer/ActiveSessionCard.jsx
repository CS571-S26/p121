import React from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";

function formatSeconds(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default function ActiveSessionCard({
  isActive,
  phase,
  secondsLeft,
  phaseTotalSeconds,
  currentCycle,
  totalCycles
}) {
  const phaseLabel = phase === "work" ? "Work" : "Break";
  const completedPercent = phaseTotalSeconds
    ? ((phaseTotalSeconds - secondsLeft) / phaseTotalSeconds) * 100
    : 0;

  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Card.Title as="h2" className="h5 mb-0">
            Active Session
          </Card.Title>
          <Badge bg={phase === "work" ? "danger" : "secondary"}>{isActive ? phaseLabel : "Idle"}</Badge>
        </div>
        <Card.Text className="fs-3 fw-bold mb-1">{formatSeconds(secondsLeft)}</Card.Text>
        <Card.Text className="mb-2">
          Cycle {currentCycle} of {totalCycles}
        </Card.Text>
        <ProgressBar
          now={Math.min(100, Math.max(0, completedPercent))}
          min={0}
          max={100}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(Math.min(100, Math.max(0, completedPercent)))}
          aria-label={isActive ? `${phaseLabel} phase progress` : "Timer idle"}
        />
      </Card.Body>
    </Card>
  );
}

