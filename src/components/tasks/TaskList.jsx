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
        <Card.Title as="h2" className="h5">
          Session Tasks
        </Card.Title>
        <Form.Group className="mb-3" controlId="sessionNewTask">
          <Form.Label>New task</Form.Label>
          <Stack direction="horizontal" gap={2}>
            <Form.Control
              placeholder="Add a task for this study session"
              value={newTask}
              onChange={(event) => setNewTask(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  addTask();
                }
              }}
            />
            <Button variant="danger" type="button" onClick={addTask}>
              Add
            </Button>
          </Stack>
        </Form.Group>
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

