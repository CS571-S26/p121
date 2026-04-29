import React, { useMemo } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function TimerSetupForm({ form, onChange, onStart }) {
  const totalMinutes = useMemo(() => {
    return form.cycles * (form.workMinutes + form.breakMinutes);
  }, [form.breakMinutes, form.cycles, form.workMinutes]);

  return (
    <Card>
      <Card.Body>
        <Card.Title as="h2" className="h5">
          Session Setup
        </Card.Title>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            onStart();
          }}
        >
          <Row className="g-3">
            <Col md={4}>
              <Form.Group controlId="workMinutes">
                <Form.Label>Work minutes</Form.Label>
                <Form.Control
                  type="number"
                  min={1}
                  value={form.workMinutes}
                  onChange={(event) => onChange("workMinutes", Number(event.target.value))}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="breakMinutes">
                <Form.Label>Break minutes</Form.Label>
                <Form.Control
                  type="number"
                  min={1}
                  value={form.breakMinutes}
                  onChange={(event) => onChange("breakMinutes", Number(event.target.value))}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="cycles">
                <Form.Label>Cycles</Form.Label>
                <Form.Control
                  type="number"
                  min={1}
                  value={form.cycles}
                  onChange={(event) => onChange("cycles", Number(event.target.value))}
                />
              </Form.Group>
            </Col>
          </Row>
          <p className="text-muted mt-3 mb-2">Estimated total: {totalMinutes} minutes</p>
          <Button variant="danger" type="submit">
            Start Session
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

