import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";

export default function SessionControls({ isActive, isPaused, onPauseResume, onSkip, onEnd }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title as="h2" className="h5">
          Session Controls
        </Card.Title>
        <ButtonGroup aria-label="Session controls">
          <Button type="button" variant="danger" disabled={!isActive} onClick={onPauseResume}>
            {isPaused ? "Resume" : "Pause"}
          </Button>
          <Button type="button" variant="outline-light" disabled={!isActive} onClick={onSkip}>
            Skip Step
          </Button>
          <Button type="button" variant="outline-warning" disabled={!isActive} onClick={onEnd}>
            End Early
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}

