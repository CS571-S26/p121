import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import SiteFooter from "./SiteFooter.jsx";

export default function AppLayout({ children }) {
  const mainRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Ensure keyboard users land on a meaningful focus target after navigation.
    mainRef.current?.focus();
  }, [location.pathname]);

  return (
    <>
      <a href="#main-content" className="skip-link">
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

      <SiteFooter />
    </>
  );
}

