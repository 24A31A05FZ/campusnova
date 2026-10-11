import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    BookOpen, ClipboardList, CalendarCheck, Clock, CalendarDays, Users,
    Briefcase, ShoppingBag, MessageSquare, Search, AlertCircle, GraduationCap,
    Shield, Bot, Bell, Star, ArrowRight, CheckCircle, Zap
} from 'lucide-react';

export default function Features({ dark, setDark }) {
    const modules = [
        {
            category: 'Academic Excellence',
            desc: 'Everything related to curriculum, faculty, exams, and attendance management.',
            items: [
                { icon: BookOpen, title: 'Academics & Study Vault', desc: 'Centralized syllabus tracking, lecture notes, textbook PDFs, and faculty contact directory.', path: '/dashboard/academics' },
                { icon: ClipboardList, title: 'Assignments & Projects', desc: 'Unified submission pipelines with automatic deadline countdowns and grade feedback loops.', path: '/dashboard/assignments' },
                { icon: CalendarCheck, title: 'Real-Time Attendance', desc: 'Live attendance stats with automated safety margin calculations to prevent exam detentions.', path: '/dashboard/attendance' },
                { icon: Clock, title: 'Dynamic Timetable', desc: 'Weekly schedules synced with room allotments and lab batch rotations.', path: '/dashboard/timetable' },
            ],
        },
        {
            category: 'Campus Vibrancy & Community',
            desc: 'Student life, extracurricular clubs, events, and collaborative exchange.',
            items: [
                { icon: CalendarDays, title: 'Campus Events Hub', desc: 'One-click registration for hackathons, cultural festivals, tech symposia, and athletic meets.', path: '/dashboard/events' },
                { icon: Users, title: 'Clubs & Societies', desc: 'Join 24+ technical and cultural student groups with activity channels and direct memberships.', path: '/dashboard/clubs' },
                { icon: MessageSquare, title: 'Peer Community Forum', desc: 'Crowdsourced questions, study circles, project partner recruitment, and campus discussions.', path: '/dashboard/community' },
                { icon: ShoppingBag, title: 'Student Marketplace', desc: 'Safe peer-to-peer commerce for used textbooks, drawing instruments, and hostel appliances.', path: '/dashboard/marketplace' },
                { icon: Search, title: 'Lost & Found Network', desc: 'Crowdsourced reporting board with search tags to recover misplaced belongings quickly.', path: '/dashboard/lost-found' },
            ],
        },
        {
            category: 'Career & Corporate Connect',
            desc: 'Placements, internships, and professional portfolio development.',
            items: [
                { icon: Briefcase, title: 'Placements & Internships', desc: 'Direct corporate recruitment drives with automatic eligibility filters by CGPA and branch.', path: '/dashboard/placements' },
                { icon: Bot, title: 'AI Campus Assistant', desc: 'Instant AI answers for syllabus queries, upcoming deadlines, and campus procedures.', path: '/dashboard/ai-assistant' },
                { icon: AlertCircle, title: 'Service Grievance Desk', desc: 'Track maintenance requests for campus Wi-Fi, classroom equipment, hostels, and buses.', path: '/dashboard/complaints' },
                { icon: Bell, title: 'Smart Notification Bell', desc: 'Noise-free alerts prioritizing urgent academic deadlines over casual notices.', path: '/dashboard/notifications' },
            ],
        },
        {
            category: 'Governance & Institutional Portals',
            desc: 'Dedicated role-tailored dashboards for administration, faculty, and student leaders.',
            items: [
                { icon: GraduationCap, title: 'Faculty Portal', desc: 'Mark lecture attendance, distribute assignments, and post announcements without WhatsApp groups.', path: '/dashboard/faculty-portal' },
                { icon: Star, title: 'Club Leader Console', desc: 'Manage event capacities, check-in attendees via QR, and communicate directly with members.', path: '/dashboard/club-leader' },
                { icon: Briefcase, title: 'Placement Officer Suite', desc: 'Coordinate campus drives, download verified candidate resumes, and analyze CTC trends.', path: '/dashboard/placement-officer' },
                { icon: Shield, title: 'SuperAdmin Command Center', desc: 'Institution-wide audit logs, user provisioning, and operational health metrics.', path: '/dashboard/admin' },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-background dark:bg-slate-900">
            <Navbar dark={dark} setDark={setDark} />

            {/* Header */}
            <section className="pt-28 pb-16 gradient-hero text-white text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 relative">
                    <span className="badge bg-white/20 text-white mb-3">Comprehensive Module Breakdown</span>
                    <h1 className="text-4xl sm:text-5xl font-black mt-2">Every Dimension of Campus Life</h1>
                    <p className="text-blue-200 text-lg mt-4 max-w-2xl mx-auto">
                        Discover how CampusNova replaces dozens of disconnected tools with a single unified, role-based platform designed specifically for higher education.
                    </p>
                </div>
            </section>

            {/* Module Categories */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                {modules.map((category, catIdx) => (
                    <div key={catIdx}>
                        <div className="mb-6">
                            <h2 className="text-2xl font-black text-navy dark:text-white">{category.category}</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{category.desc}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {category.items.map((item, itemIdx) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={itemIdx}
                                        to={item.path}
                                        className="card p-5 flex flex-col group hover:-translate-y-1 transition-all duration-200"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Icon size={20} />
                                        </div>
                                        <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed flex-1">
                                            {item.desc}
                                        </p>
                                        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-primary">
                                            <span>Explore Module</span>
                                            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </section>

            {/* CTA */}
            <section className="py-16 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-black text-navy dark:text-white">Experience All 16 Modules in Action</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-3 mb-6">
                        Jump directly into the interactive demonstration dashboard and experience CampusNova from the student, faculty, or leadership perspective.
                    </p>
                    <Link to="/dashboard" className="btn-primary text-base py-3 px-8 shadow-xl">
                        Open Interactive Showcase <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
