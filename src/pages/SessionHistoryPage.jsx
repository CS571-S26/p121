import React from "react";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import StatCard from "../components/common/StatCard.jsx";

const SESSION_HISTORY_KEY = "stoodySessionHistory";

export default function SessionHistoryPage() {
  const [sessions, setSessions] = useState([
    { id: 1, date: "2026-03-15", focus: 90, completed: 5, distraction: "Phone" },
    { id: 2, date: "2026-03-16", focus: 120, completed: 6, distraction: "Noise" },
    { id: 3, date: "2026-03-17", focus: 60, completed: 3, distraction: "Social media" }
  ]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(SESSION_HISTORY_KEY) || "[]");
    if (saved.length) {
      setSessions(saved);
    }
  }, []);

  const totalFocus = sessions.reduce((sum, session) => sum + session.focus, 0);
  const sessionCount = sessions.length;
  const avgPerSession =
    sessionCount > 0 ? Math.round(totalFocus / sessionCount) : 0;

  return (
    <section aria-label="Session history">
      <h1 className="mb-3">Past Session History</h1>
      <p className="text-muted">Session summaries are shown in a simple table layout.</p>
      <Row className="g-3 mb-3">
        <Col md={4}>
          <StatCard label="Sessions" value={sessions.length} hint="Demo records" />
        </Col>
        <Col md={4}>
          <StatCard label="Focus Time" value={`${totalFocus} min`} hint="Total accumulated" />
        </Col>
        <Col md={4}>
          <StatCard label="Avg/Session" value={`${avgPerSession} min`} />
        </Col>
      </Row>
      <h2 className="h5 mt-4 mb-2">Session log</h2>
      <div className="card">
        <Table responsive striped hover className="mb-0">
          <caption className="text-muted">
            Focus minutes and distraction notes for each saved study session
          </caption>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Focus Minutes</th>
              <th scope="col">Tasks Completed</th>
              <th scope="col">Main Distraction</th>
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

