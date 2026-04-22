import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";

export default function SessionControls({ isActive, isPaused, onPauseResume, onSkip, onEnd }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Session Controls</Card.Title>
        <ButtonGroup aria-label="Session controls">
          <Button variant="danger" disabled={!isActive} onClick={onPauseResume}>
            {isPaused ? "Resume" : "Pause"}
          </Button>
          <Button variant="outline-light" disabled={!isActive} onClick={onSkip}>
            Skip Step
          </Button>
          <Button variant="outline-warning" disabled={!isActive} onClick={onEnd}>
            End Early
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}

