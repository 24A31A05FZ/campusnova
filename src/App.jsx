import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layout
import DashboardLayout from './layouts/DashboardLayout';

// Public Pages
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';

// Dashboard & Feature Pages
import Dashboard from './pages/Dashboard';
import Academics from './pages/Academics';
import Assignments from './pages/Assignments';
import Attendance from './pages/Attendance';
import Timetable from './pages/Timetable';
import Events from './pages/Events';
import Clubs from './pages/Clubs';
import Placements from './pages/Placements';
import Marketplace from './pages/Marketplace';
import Community from './pages/Community';
import LostFound from './pages/LostFound';
import Complaints from './pages/Complaints';
import AIAssistant from './pages/AIAssistant';
import Notifications from './pages/Notifications';

// Management & Role Portals
import FacultyPortal from './pages/FacultyPortal';
import ClubLeaderPortal from './pages/ClubLeaderPortal';
import PlacementOfficerPortal from './pages/PlacementOfficerPortal';
import AdminDashboard from './pages/AdminDashboard';

// Account Pages
import Profile from './pages/Profile';
import Settings from './pages/Settings';

export default function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('campusnova-theme') === 'dark';
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('campusnova-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('campusnova-theme', 'light');
    }
  }, [dark]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Website Pages */}
        <Route path="/" element={<Home dark={dark} setDark={setDark} />} />
        <Route path="/features" element={<Features dark={dark} setDark={setDark} />} />
        <Route path="/about" element={<About dark={dark} setDark={setDark} />} />
        <Route path="/contact" element={<Contact dark={dark} setDark={setDark} />} />

        {/* Protected / Dashboard SaaS Pages */}
        <Route path="/dashboard" element={<DashboardLayout dark={dark} setDark={setDark} />}>
          <Route index element={<Dashboard />} />
          <Route path="academics" element={<Academics />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="events" element={<Events />} />
          <Route path="clubs" element={<Clubs />} />
          <Route path="placements" element={<Placements />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="community" element={<Community />} />
          <Route path="lost-found" element={<LostFound />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="ai-assistant" element={<AIAssistant />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="faculty-portal" element={<FacultyPortal />} />
          <Route path="club-leader" element={<ClubLeaderPortal />} />
          <Route path="placement-officer" element={<PlacementOfficerPortal />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
