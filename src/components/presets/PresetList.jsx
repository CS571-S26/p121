import React from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function PresetList({ presets }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Saved Presets</Card.Title>
        <ListGroup>
          {presets.map((preset) => (
            <ListGroup.Item key={preset.id} className="d-flex justify-content-between align-items-center">
              <div>
                <strong>{preset.name}</strong>
                <div className="text-muted">
                  {preset.workMinutes}m work / {preset.breakMinutes}m break / {preset.cycles} cycles
                </div>
              </div>
              <Badge bg="danger">Ready</Badge>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

