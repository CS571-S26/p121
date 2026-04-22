import React, { useMemo, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Stack from "react-bootstrap/Stack";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Review lecture slides", done: false },
    { id: 2, text: "Work on assignment draft", done: false }
  ]);
  const [newTask, setNewTask] = useState("");

  const completedCount = useMemo(() => tasks.filter((task) => task.done).length, [tasks]);

  const addTask = () => {
    const trimmed = newTask.trim();
    if (!trimmed) return;
    setTasks((previous) => [...previous, { id: Date.now(), text: trimmed, done: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks((previous) =>
      previous.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    );
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Session Tasks</Card.Title>
        <Stack direction="horizontal" gap={2} className="mb-3">
          <Form.Control
            aria-label="New task"
            placeholder="Add a task for this study session"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
          <Button variant="danger" onClick={addTask}>
            Add
          </Button>
        </Stack>
        <ListGroup>
          {tasks.map((task) => (
            <ListGroup.Item key={task.id} className="d-flex justify-content-between align-items-center">
              <Form.Check
                id={`task-${task.id}`}
                checked={task.done}
                onChange={() => toggleTask(task.id)}
                label={task.text}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
        <p className="text-muted mt-3 mb-0">
          {completedCount} of {tasks.length} tasks completed
        </p>
      </Card.Body>
    </Card>
  );
}

