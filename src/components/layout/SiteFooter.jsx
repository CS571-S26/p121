import React from "react";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer container" role="contentinfo">
      <p className="mb-0 small text-muted">
        © {year} Stoody — Focus timers for studying. Built with React and React Bootstrap.
      </p>
    </footer>
  );
}
