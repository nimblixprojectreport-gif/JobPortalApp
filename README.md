# JobSphere — Job Seeker Dashboard

A production-ready React dashboard implementing FR-16 from the Job Portal Application requirements.

## Features
- ✨ Recommended Jobs with match %
- 🔖 Saved Jobs with deadline countdown
- 🕐 Recently Viewed Jobs
- 📊 Application Tracker with animated bar chart & filter tabs
- 👤 Profile Completion with animated progress bar
- 🔔 Notifications with read/unread state

---

## How to Run

### Prerequisites
Make sure you have these installed:
- **Node.js** v16 or above → https://nodejs.org
- **npm** (comes with Node.js)

Check your versions:
```bash
node -v
npm -v
```

---

### Step 1 — Extract the ZIP
Unzip the downloaded file:
```bash
unzip jobsphere-dashboard.zip
cd jobsphere
```

### Step 2 — Install Dependencies
```bash
npm install
```
This downloads all required packages into a `node_modules/` folder.  
_(Takes ~1–2 minutes on first run)_

### Step 3 — Start Development Server
```bash
npm start
```
The app will open automatically at:
```
http://localhost:3000
```

---

## Project Structure

```
jobsphere/
├── public/
│   └── index.html            # HTML entry point
├── src/
│   ├── index.js              # React root render
│   ├── App.js                # App wrapper
│   ├── data/
│   │   └── dashboardData.js  # All mock data (jobs, notifications, etc.)
│   ├── styles/
│   │   └── dashboard.css     # All styles & CSS variables
│   └── components/
│       ├── Dashboard.jsx         # Main layout orchestrator
│       ├── Sidebar.jsx           # Left navigation sidebar
│       ├── StatCards.jsx         # 4 top stat cards
│       ├── RecommendedJobs.jsx   # FR-16: Recommended jobs
│       ├── ProfileCard.jsx       # FR-16: Profile completion %
│       ├── ApplicationTracker.jsx# FR-16: Application statistics
│       ├── SavedAndRecent.jsx    # FR-16: Saved + Recently viewed
│       └── NotificationsCard.jsx # FR-16: Notifications
└── package.json
```

---

## Build for Production
```bash
npm run build
```
Output goes to the `build/` folder — ready to deploy to any static host (Netlify, Vercel, etc.).

---

## Customizing Data
All mock data is in `src/data/dashboardData.js`.  
Edit the arrays to change job listings, notifications, application statuses, etc.
