import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout.jsx";
import StartSessionPage from "./pages/StartSessionPage.jsx";
import SessionHistoryPage from "./pages/SessionHistoryPage.jsx";
import PresetsPage from "./pages/PresetsPage.jsx";
import HelpPage from "./pages/HelpPage.jsx";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/start" replace />} />
        <Route path="/start" element={<StartSessionPage />} />
        <Route path="/history" element={<SessionHistoryPage />} />
        <Route path="/presets" element={<PresetsPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="*" element={<Navigate to="/start" replace />} />
      </Routes>
    </AppLayout>
  );
}

