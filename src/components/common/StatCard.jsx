import React from "react";
import Card from "react-bootstrap/Card";

export default function StatCard({ label, value, hint }) {
  return (
    <Card className="h-100">
      <Card.Body>
        <p className="mb-2 small text-muted">{label}</p>
        <p className="fs-4 fw-semibold mb-0">{value}</p>
        {hint ? <p className="text-muted small mb-0 mt-2">{hint}</p> : null}
      </Card.Body>
    </Card>
  );
}
