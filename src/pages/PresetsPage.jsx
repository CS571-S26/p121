import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import PresetList from "../components/presets/PresetList.jsx";

export default function PresetsPage() {
  const presets = [
    { id: 1, name: "Classic Pomodoro", workMinutes: 25, breakMinutes: 5, cycles: 4 },
    { id: 2, name: "Deep Work", workMinutes: 45, breakMinutes: 10, cycles: 3 },
    { id: 3, name: "Quick Review", workMinutes: 15, breakMinutes: 3, cycles: 4 }
  ];

  return (
    <section aria-label="Saved presets">
      <h1 className="mb-3">Saved Session Presets</h1>
      <p className="text-muted">Choose a preset to speed up session setup.</p>
      <Row className="g-3">
        <Col lg={8}>
          <PresetList presets={presets} />
        </Col>
        <Col lg={4}>
          <Card>
            <Card.Body>
              <Card.Title as="h2" className="h5">
                Next Step
              </Card.Title>
              <Card.Text className="mb-0">
                In a later milestone, users will create, edit, and delete presets with localStorage.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

