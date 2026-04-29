import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";

const PRESET_STORAGE_KEY = "stoodyPendingPreset";

export default function PresetList({ presets }) {
  const navigate = useNavigate();

  const applyPreset = (preset) => {
    localStorage.setItem(
      PRESET_STORAGE_KEY,
      JSON.stringify({
        workMinutes: preset.workMinutes,
        breakMinutes: preset.breakMinutes,
        cycles: preset.cycles
      })
    );
    navigate("/start");
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title as="h2" className="h5">
          Saved Presets
        </Card.Title>
        <p className="text-muted small mb-3">
          Apply a preset to copy its timing values into Start Session. You can adjust them before you begin.
        </p>
        <ListGroup>
          {presets.map((preset) => (
            <ListGroup.Item
              key={preset.id}
              className="d-flex flex-wrap justify-content-between align-items-center gap-2"
            >
              <div>
                <strong>{preset.name}</strong>
                <div className="text-muted">
                  {preset.workMinutes}m work / {preset.breakMinutes}m break / {preset.cycles} cycles
                </div>
              </div>
              <div className="d-flex align-items-center gap-2 ms-auto">
                <Badge bg="danger">Ready</Badge>
                <Button variant="outline-light" type="button" onClick={() => applyPreset(preset)}>
                  Use preset
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

