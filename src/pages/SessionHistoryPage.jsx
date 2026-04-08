import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import StatCard from "../components/common/StatCard.jsx";

export default function SessionHistoryPage() {
  const sessions = [
    { id: 1, date: "2026-03-15", focus: 90, completed: 5, distraction: "Phone" },
    { id: 2, date: "2026-03-16", focus: 120, completed: 6, distraction: "Noise" },
    { id: 3, date: "2026-03-17", focus: 60, completed: 3, distraction: "Social media" }
  ];

  const totalFocus = sessions.reduce((sum, session) => sum + session.focus, 0);

  return (
    <section aria-label="Session history">
      <h1 className="mb-3">Past Session History</h1>
      <p className="text-muted">Session summaries are now shown in a simple table layout.</p>
      <Row className="g-3 mb-3">
        <Col md={4}>
          <StatCard label="Sessions" value={sessions.length} hint="Demo records" />
        </Col>
        <Col md={4}>
          <StatCard label="Focus Time" value={`${totalFocus} min`} hint="Total accumulated" />
        </Col>
        <Col md={4}>
          <StatCard label="Avg/Session" value={`${Math.round(totalFocus / sessions.length)} min`} />
        </Col>
      </Row>
      <div className="card">
        <Table responsive striped hover className="mb-0">
          <thead>
            <tr>
              <th>Date</th>
              <th>Focus Minutes</th>
              <th>Tasks Completed</th>
              <th>Main Distraction</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr key={session.id}>
                <td>{session.date}</td>
                <td>{session.focus}</td>
                <td>{session.completed}</td>
                <td>{session.distraction}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
}

