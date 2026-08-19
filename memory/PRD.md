# Career Path 2028 — PRD

## Problem Statement
An 11th-grade student wants a single self-contained HTML/CSS/JS file study tracker for JEE, CET & 12th Boards. Must be one downloadable file, work offline, save data in-browser, integrate Groq AI (user's own key), with landing, dashboard, syllabus, revision/study/timer/AI, tests/analytics, insights, settings, file manager.

## Architecture
- Single file: `/app/frontend/public/career-path-2028.html` (also copied to `/app/career-path-2028.html` and `/app/index.html` for GitHub Pages root serving).
- Pure client-side: localStorage for state, IndexedDB for uploaded files. No backend.
- Groq AI via browser fetch using `openai/gpt-oss-120b` (user pastes key in Settings; llama-3.3-70b-versatile was deprecated Aug 2026).

## Implemented (2026-08-19)
- Landing: 3 exam cards (JEE/CET/Boards), colored hover glow + hover sound, click beep, particle bg, theme toggle, dark default.
- Dashboard: dynamic countdown (uses editable exam dates), tentative month/year auto from date, overall progress bar (color-coded, legend text removed), quick stats, Today's Target.
- Upcoming Tests: **popup** to add (name/date/marks); when date arrives auto-prompts "Enter Result" (P/C/M + portion) → moves to Tests section with celebration.
- Syllabus: full NCERT Class 11/12 Phy/Chem/Maths; Theory/Module/DPP/Mains PYQ/Advance PYQ checkboxes with tick sound; chapter progress; celebration on 100%; add custom topics; stays expanded on tick.
- Revision: due/upcoming/completed, manual + AI auto-schedule, spaced repetition 1/3/7/14/30.
- Timer: 25–120 min modes, start/pause/stop, session logging, summaries.
- AI Chat: Groq (gpt-oss-120b) + smart offline fallback.
- Tests: create, analytics bar chart, history, rank simulator.
- Insights: weakness heatmap (legend text removed, colors kept), custom modal, personal analytics.
- Files: **own nav section** (moved out of Settings); upload PDFs/images tagged Subject→Chapter→Topic; opens via Blob URL (fixed blank-open bug).
- Settings: daily target, Groq key + Test API, manage syllabus, **exam dates editor** (drives countdown), data export/import/clear.
- Sounds: hover, click, tick, ok/save, and multi-note fanfare celebration on completions.

## Backlog / Next
- P1: Study streak counter; PWA install; Pomodoro break chime.
- P2: Per-subject syllabus per exam; cloud sync.

## Notes
- To publish to GitHub Pages: user clicks "Save to GitHub" in Emergent, then GitHub Pages (root) serves `index.html` = the app.
