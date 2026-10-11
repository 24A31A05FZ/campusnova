# CampusNova 🚀
> **The All-in-One Digital Campus Platform** — High-fidelity frontend showcase built for entrepreneurship presentation and investor pitch.

---

## 🌟 Pitch Deck Narrative & Problem Statement

Colleges and universities worldwide suffer from extreme digital fragmentation:
- **Attendance & Academics** are locked inside obsolete legacy ERP systems.
- **Assignments & Deadlines** are scattered across WhatsApp group chats and informal drives.
- **Clubs & Events** rely on posters, word of mouth, and Google Forms with zero unified discovery.
- **Placements & Internships** live on clunky spreadsheets and outdated email threads.
- **Campus Services** (buying/selling textbooks, lost & found, reporting grievances) happen informally on unverified social groups.

### The Solution: CampusNova
CampusNova is the unified digital operating system for modern higher education. It delivers a modern, high-speed SaaS interface that integrates **16 core campus modules** under role-tailored views for **Students**, **Faculty**, **Club Leaders**, **Placement Officers**, and **Superadmins**.

---

## 💻 Tech Stack & Architecture

- **Core**: React 19 + Vite 8
- **Styling**: Tailwind CSS with custom SaaS tokens, dark mode support, glassmorphism, and responsive layouts
- **Icons**: Lucide Icons & Custom SVG social links
- **Charts & Metrics**: Recharts (smooth SVG attendance & placement trends)
- **Routing**: React Router v7 (`react-router-dom`) with layout nesting
- **Typography**: Plus Jakarta Sans & Space Grotesk via Google Fonts
- **Data Layer**: Clean mock data architecture in `src/data/demoData.js` simulating real multi-user collegiate datasets

---

## 📦 All 16 Platform Modules Included

| # | Module | Route | Key Features |
|---|---|---|---|
| 1 | **Academics** | `/dashboard/academics` | Course progress, study materials (PDF/code), syllabus, faculty directories, academic calendar, exam schedule |
| 2 | **Assignments** | `/dashboard/assignments` | Status tabs (Pending/Submitted/Graded), deadline urgency badges, simulated file upload dialog |
| 3 | **Attendance** | `/dashboard/attendance` | Subject-wise attendance % tracker, 75% eligibility warning indicators, monthly trend chart |
| 4 | **Timetable** | `/dashboard/timetable` | Day-by-day lecture scheduler, current ongoing class indicator, room & instructor labels |
| 5 | **Events & Fests** | `/dashboard/events` | Hackathons, workshops, cultural fests, category filters, interactive RSVP registration with ticket previews |
| 6 | **Student Clubs** | `/dashboard/clubs` | Technical, cultural, sports clubs, member counts, interactive Join/Leave toggles, lead info |
| 7 | **Placements & Careers** | `/dashboard/placements` | Job & internship listings, eligibility filters, skill tags, live "Apply Now" button toggle, resume builder link |
| 8 | **Marketplace** | `/dashboard/marketplace` | Peer-to-peer student commerce: books, drafters, calculators, laptops; condition badges, price tags |
| 9 | **Campus Community** | `/dashboard/community` | Reddit-style campus forum: technical queries, general banter, hostel life; interactive like toggles |
| 10 | **Lost & Found** | `/dashboard/lost-found` | Report missing IDs, keys, water bottles, earphones; status badges (Lost / Claimed / Returned) |
| 11 | **Grievances & Complaints** | `/dashboard/complaints` | Maintenance & administration complaint filing form, category tagging, live status tracking |
| 12 | **AI Campus Companion** | `/dashboard/ai-assistant` | Interactive conversational bot with suggested prompt chips and pre-scripted intelligent campus guidance |
| 13 | **Notification Center** | `/dashboard/notifications` | Categorized alerts (Academic, Placement, Club, Event) with read/unread toggles and clear actions |
| 14 | **Faculty Portal** | `/dashboard/faculty-portal` | Class teaching schedules, assignment grading queues, interactive attendance roll-call sheet |
| 15 | **Club Leader Portal** | `/dashboard/club-leader` | Event creator, membership approval queue, live attendee QR check-in tracker, broadcasts |
| 16 | **Placement Officer Portal** | `/dashboard/placement-officer` | Placement drive coordinator, shortlist review table, departmental hiring trends |

**Plus Platform Infrastructure:**
- **Superadmin Dashboard** (`/dashboard/admin`): Active user metrics, audit logs, system health, pending event triage.
- **Student Profile** (`/dashboard/profile`): Bio, CGPA, enrolled clubs, activity timeline.
- **Settings** (`/dashboard/settings`): Dark mode, notification preferences, security & session control.
- **Public Showcase Pages**: Homepage (`/`), Interactive Features Hub (`/features`), About (`/about`), and Contact (`/contact`).

---

## 🚀 Running the Project Locally

```bash
# 1. Navigate to the project directory
cd campusnova

# 2. Install dependencies (if needed)
npm install

# 3. Start development server
npm run dev
```
Open **`http://localhost:5173/`** in your browser.

```bash
# 4. Production build test
npm run build
```

---

## 🎯 Presentation & Demo Tips for Entrepreneurship Pitch

1. **Start at the Homepage (`/`)**:
   - Highlight the **"The Problem"** section (students opening 8 tabs for basic college tasks).
   - Point to the **16 Module Grid** showing that CampusNova covers the whole collegiate lifecycle.

2. **Transition to the Dashboard (`/dashboard`)**:
   - Click **"Launch Showcase"** to enter the student hub.
   - Show how GPA, Attendance alerts, and Upcoming Deadlines are visible at a glance.

3. **Demonstrate Interactivity**:
   - Go to **Placements** (`/dashboard/placements`) and click **"Apply Now"** to demonstrate one-click career workflows.
   - Go to **AI Assistant** (`/dashboard/ai-assistant`) and click on the suggested prompt *"What events are happening this week?"* to showcase student guidance.
   - Go to **Faculty Portal** (`/dashboard/faculty-portal`) and switch to **"Attendance Marking"** to show how easy professors' daily tasks become.
   - Toggle **Dark/Light Mode** via the moon/sun icon in the top bar to display responsive SaaS polish.
