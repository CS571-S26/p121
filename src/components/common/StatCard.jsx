import React from "react";
import Card from "react-bootstrap/Card";

export default function StatCard({ label, value, hint }) {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">{label}</Card.Subtitle>
        <Card.Title>{value}</Card.Title>
        {hint ? <Card.Text className="text-muted mb-0">{hint}</Card.Text> : null}
      </Card.Body>
    </Card>
  );
}

