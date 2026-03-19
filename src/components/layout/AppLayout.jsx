import React, { useEffect, useRef } from "react";
import NavBar from "./NavBar.jsx";

export default function AppLayout({ children }) {
  const mainRef = useRef(null);

  useEffect(() => {
    // Ensure keyboard users land on a meaningful focus target after navigation.
    mainRef.current?.focus();
  }, []);

  return (
    <>
      <a
        href="#main-content"
        style={{
          position: "absolute",
          left: -10000,
          top: "auto",
          width: 1,
          height: 1,
          overflow: "hidden"
        }}
      >
        Skip to content
      </a>

      <header className="container">
        <NavBar />
      </header>

      <main
        id="main-content"
        ref={mainRef}
        className="container"
        tabIndex={-1}
        aria-label="Main content"
      >
        {children}
      </main>
    </>
  );
}

