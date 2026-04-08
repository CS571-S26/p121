import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function HelpPage() {
  return (
    <section aria-label="Help">
      <h1 className="mb-3">Help</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How do I start a study session?</Accordion.Header>
          <Accordion.Body>
            Open Start Session, set work/break/cycle values, then click Start Session.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Where can I see previous sessions?</Accordion.Header>
          <Accordion.Body>
            Open the History page to review focus time and distraction summaries.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What is implemented right now?</Accordion.Header>
          <Accordion.Body>
            This milestone includes navigation, multiple routed pages, React Bootstrap UI, and core
            structure for timer/tasks/reflection.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}

