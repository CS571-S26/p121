import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function HelpPage() {
  const heroSrc = `${import.meta.env.BASE_URL}study-focus.svg`;

  return (
    <section aria-label="Help">
      <h1 className="mb-3">Help</h1>
      <div className="card mb-4">
        <div className="p-3 d-flex flex-column flex-md-row gap-3 align-items-center">
          <img
            src={heroSrc}
            width={120}
            height={120}
            alt="Stoody app icon showing a clock over a book, representing focused study time"
          />
          <div>
            <h2 className="h5 mb-2">About Stoody</h2>
            <p className="text-muted mb-0">
              Stoody helps you plan Pomodoro-style work blocks, track tasks during a session, and reflect on
              distractions. Use the live timer on Start Session as your primary interactive study tool.
            </p>
          </div>
        </div>
      </div>
      <h2 className="h5 mb-3">Frequently asked questions</h2>
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

