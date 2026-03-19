## Stoody (CS571 UI Project) - Study Mode Website

### Project Overview
Stoody is a study mode website that helps students plan and run focused study sessions in one place.

The main feature is a study session timer that supports:
- Pomodoro sessions
- Custom intervals (work and break durations)
- A configurable number of cycles

While a session is running, Stoody shows clear status (for example, `Work` or `Break`), time remaining, and progress through the session. Users can control the session without losing context: pause, resume, skip to the next step, or end early.

Stoody also includes a lightweight task list for the current session. During a session, users can add tasks, reorder them, and check items off as they go.

### Break Experience (Guided Meditation)
During breaks, Stoody offers a simple guided meditation feature with short options:
- 1 minute
- 3 minutes
- 5 minutes

Users can start meditation with one click, control playback (play/pause), and it ends automatically when the break ends so they can smoothly return to work.

### Post-Session Reflection + History
After each session, Stoody prompts users to do a quick reflection:
- Select what distracted them (simple predefined options)
- Write a short note about what worked

Stoody saves a session summary so users can review their past sessions later.

### Pages / Navigation
Stoody will have these pages:
- **Start Session**: configure/select a preset and begin
- **Past Session History**: view saved summaries
- **Saved Session Presets**: manage presets (work/break/cycles)
- **Help**: explain how to use the app

### Local-First (No Account Required)
Stoody will store user settings and session history locally in the browser (via `localStorage`), so it works without needing an account.

### Accessibility + UI Requirements
The UI will include accessible forms and controls with:
- clear labels
- keyboard support
- readable contrast

### Tech Stack (Planned)
- React for the UI
- React Router for navigation
- A React UI component library (to be selected during implementation)
- Local storage for settings/history
- Public deployment

### Incremental Development Approach
To keep the project understandable and testable, development will happen step-by-step:
1. Scaffold the React app + routing
2. Implement the study session timer (work/break, cycles, progress)
3. Add session controls (pause/resume/skip/end early)
4. Add the session task list (add/reorder/check)
5. Add meditation during breaks (simple play/pause + auto end)
6. Add reflection form + persistence
7. Add session history view
8. Add preset management page
9. Accessibility polish (labels, focus management, keyboard flows)
10. UI polish and deployment

