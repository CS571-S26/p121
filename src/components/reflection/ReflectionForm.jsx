import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const DISTRACTIONS = ["Phone", "Noise", "Social media", "Other"];

export default function ReflectionForm() {
  const [distraction, setDistraction] = useState("Phone");
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);

  return (
    <Card>
      <Card.Body>
        <Card.Title as="h2" className="h5">
          Quick Reflection
        </Card.Title>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            setSaved(true);
          }}
        >
          <Form.Group className="mb-3" controlId="reflectionDistraction">
            <Form.Label>Main distraction</Form.Label>
            <Form.Select value={distraction} onChange={(event) => setDistraction(event.target.value)}>
              {DISTRACTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="reflectionNote">
            <Form.Label>What worked well?</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={note}
              onChange={(event) => setNote(event.target.value)}
              placeholder="Write a short reflection..."
            />
          </Form.Group>
          <Button variant="danger" type="submit">
            Save Reflection
          </Button>
          {saved ? <p className="text-success mt-3 mb-0">Reflection saved (demo).</p> : null}
        </Form>
      </Card.Body>
    </Card>
  );
}

