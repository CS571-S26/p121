import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav aria-label="Primary navigation">
      <div className="row" style={{ alignItems: "center" }}>
        <div className="col" style={{ flex: "0 0 auto" }}>
          <strong>Stoody</strong>
        </div>
        <div className="col" style={{ flex: "1 1 auto" }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <NavLink to="/start" className={({ isActive }) => (isActive ? "btn btnPrimary" : "btn")}>
              Start Session
            </NavLink>
            <NavLink
              to="/history"
              className={({ isActive }) => (isActive ? "btn btnPrimary" : "btn")}
            >
              History
            </NavLink>
            <NavLink
              to="/presets"
              className={({ isActive }) => (isActive ? "btn btnPrimary" : "btn")}
            >
              Presets
            </NavLink>
            <NavLink
              to="/help"
              className={({ isActive }) => (isActive ? "btn btnPrimary" : "btn")}
            >
              Help
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

