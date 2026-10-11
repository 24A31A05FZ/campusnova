import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    ArrowRight, CheckCircle, BookOpen, ClipboardList, CalendarCheck, Clock,
    CalendarDays, Users, MessageSquare, ShoppingBag, Search, Briefcase,
    AlertCircle, Bell, Bot, GraduationCap, Shield, Star,
    Zap, Globe, Heart, TrendingUp, Award, ChevronRight,
} from 'lucide-react';

const features = [
    { icon: BookOpen, title: 'Academics', desc: 'Subjects, materials, faculty & calendar', color: 'from-blue-500 to-blue-600', path: '/dashboard/academics' },
    { icon: ClipboardList, title: 'Assignments', desc: 'Track deadlines & submission history', color: 'from-violet-500 to-purple-600', path: '/dashboard/assignments' },
    { icon: CalendarCheck, title: 'Attendance', desc: 'Real-time subject-wise attendance', color: 'from-green-500 to-emerald-600', path: '/dashboard/attendance' },
    { icon: Clock, title: 'Timetable', desc: 'Daily & weekly class schedules', color: 'from-orange-500 to-amber-500', path: '/dashboard/timetable' },
    { icon: CalendarDays, title: 'Events', desc: 'Tech, cultural, sports & more', color: 'from-red-500 to-rose-500', path: '/dashboard/events' },
    { icon: Users, title: 'Clubs', desc: '24+ clubs across all categories', color: 'from-pink-500 to-rose-500', path: '/dashboard/clubs' },
    { icon: Briefcase, title: 'Placements', desc: 'Jobs, internships & hackathons', color: 'from-indigo-500 to-blue-600', path: '/dashboard/placements' },
    { icon: ShoppingBag, title: 'Marketplace', desc: 'Buy & sell campus essentials', color: 'from-teal-500 to-cyan-600', path: '/dashboard/marketplace' },
    { icon: MessageSquare, title: 'Community', desc: 'Discussion feeds & study groups', color: 'from-yellow-500 to-orange-500', path: '/dashboard/community' },
    { icon: Search, title: 'Lost & Found', desc: 'Report & discover lost items', color: 'from-slate-500 to-slate-600', path: '/dashboard/lost-found' },
    { icon: AlertCircle, title: 'Complaints', desc: 'Submit & track campus issues', color: 'from-red-400 to-rose-500', path: '/dashboard/complaints' },
    { icon: GraduationCap, title: 'Faculty Portal', desc: 'Teaching, assignments & materials', color: 'from-blue-600 to-indigo-700', path: '/dashboard/faculty-portal' },
    { icon: Shield, title: 'Admin Dashboard', desc: 'Campus-wide management & analytics', color: 'from-slate-700 to-slate-800', path: '/dashboard/admin' },
    { icon: Bot, title: 'AI Assistant', desc: 'AI-powered campus companion', color: 'from-violet-600 to-purple-700', path: '/dashboard/ai-assistant' },
    { icon: Bell, title: 'Smart Alerts', desc: 'Personalized notification system', color: 'from-amber-500 to-yellow-500', path: '/dashboard/notifications' },
    { icon: Star, title: 'Club Portals', desc: 'Portals for club leaders & officers', color: 'from-purple-500 to-violet-600', path: '/dashboard/club-leader' },
];

const problems = [
    { text: 'Announcements scattered in WhatsApp groups', icon: '📱' },
    { text: 'Event info buried in emails', icon: '📧' },
    { text: 'Exam schedules on separate portals', icon: '🗓️' },
    { text: 'Job postings only on LinkedIn or notice boards', icon: '📋' },
    { text: 'No single place for attendance & timetable', icon: '📊' },
    { text: 'Club registrations through paper forms', icon: '📝' },
];

const benefits = [
    {
        audience: 'Students',
        icon: Users,
        color: 'blue',
        points: [
            'Access all academics in one place',
            'Never miss an event or deadline',
            'Discover clubs and career opportunities',
            'Connect with peers through community',
        ],
    },
    {
        audience: 'Faculty',
        icon: GraduationCap,
        color: 'green',
        points: [
            'Manage subjects and assignments easily',
            'Track student attendance digitally',
            'Share materials and announcements',
            'View teaching schedule at a glance',
        ],
    },
    {
        audience: 'Club Leaders',
        icon: Star,
        color: 'violet',
        points: [
            'Create and manage club events',
            'Handle member registrations digitally',
            'Post club announcements centrally',
            'Track club activities and growth',
        ],
    },
    {
        audience: 'Placement Cell',
        icon: Briefcase,
        color: 'indigo',
        points: [
            'Post internships and job openings',
            'Manage candidate applications',
            'Track placement analytics',
            'Connect with recruiters efficiently',
        ],
    },
    {
        audience: 'Administration',
        icon: Shield,
        color: 'red',
        points: [
            'Unified campus management dashboard',
            'Monitor all campus activities',
            'Handle complaints efficiently',
            'Campus-wide analytics and reporting',
        ],
    },
];

const howItWorks = [
    { step: '01', title: 'Connect to Your Campus', desc: 'Sign in with your college credentials and your entire campus digital world is instantly accessible.', icon: Globe },
    { step: '02', title: 'Explore Everything in One Place', desc: 'Navigate academics, events, clubs, placements, and services from a single, beautiful dashboard.', icon: Zap },
    { step: '03', title: 'Stay Informed and Engaged', desc: 'Get smart notifications, participate in community discussions, and never miss an important update.', icon: Heart },
];

function MockDashboard() {
    return (
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white text-left text-xs">
            {/* Top bar */}
            <div className="h-8 bg-slate-800 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-3 text-slate-400 text-[10px] font-mono">campusnova.in/dashboard</span>
            </div>
            <div className="flex h-48">
                {/* Sidebar mock */}
                <div className="w-28 bg-slate-50 border-r border-slate-200 flex flex-col gap-1 p-2 flex-shrink-0">
                    <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest px-1 mb-1">Overview</div>
                    <div className="bg-primary/10 text-primary rounded-lg px-2 py-1 text-[9px] font-semibold">Dashboard</div>
                    <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest px-1 mt-1 mb-1">Academics</div>
                    <div className="text-slate-500 rounded px-2 py-1 text-[9px]">Subjects</div>
                    <div className="text-slate-500 rounded px-2 py-1 text-[9px]">Assignments</div>
                    <div className="text-slate-500 rounded px-2 py-1 text-[9px]">Attendance</div>
                    <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest px-1 mt-1 mb-1">Life</div>
                    <div className="text-slate-500 rounded px-2 py-1 text-[9px]">Events</div>
                    <div className="text-slate-500 rounded px-2 py-1 text-[9px]">Clubs</div>
                </div>
                {/* Main content mock */}
                <div className="flex-1 p-3 bg-background">
                    <p className="font-bold text-[10px] text-navy mb-2">Welcome to CampusNova</p>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                        {[
                            { label: 'Subjects', value: '6', color: 'bg-blue-100 text-blue-600' },
                            { label: 'Attendance', value: '82%', color: 'bg-green-100 text-green-600' },
                            { label: 'Events', value: '5', color: 'bg-orange-100 text-orange-600' },
                            { label: 'Placements', value: '8', color: 'bg-violet-100 text-violet-600' },
                        ].map(c => (
                            <div key={c.label} className="bg-white rounded-lg p-2 shadow-sm border border-slate-100">
                                <p className="text-slate-400 text-[7px]">{c.label}</p>
                                <p className={`font-bold text-xs ${c.color.split(' ')[1]}`}>{c.value}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-white rounded-lg p-2 shadow-sm border border-slate-100">
                        <p className="text-slate-400 text-[7px] mb-1">Today's Timetable</p>
                        {[
                            { time: '9 AM', sub: 'Data Structures', room: 'CSE-201' },
                            { time: '11 AM', sub: 'DBMS Lab', room: 'CSE-102' },
                        ].map(c => (
                            <div key={c.time} className="flex items-center gap-2 py-0.5">
                                <span className="text-[7px] text-blue-500 font-semibold w-8">{c.time}</span>
                                <span className="text-[8px] text-slate-600 font-medium">{c.sub}</span>
                                <span className="text-[7px] text-slate-400 ml-auto">{c.room}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Home({ dark, setDark }) {
    const colorMap = { blue: 'border-blue-200 bg-blue-50', green: 'border-green-200 bg-green-50', violet: 'border-violet-200 bg-violet-50', indigo: 'border-indigo-200 bg-indigo-50', red: 'border-red-200 bg-red-50' };
    const iconColorMap = { blue: 'text-blue-500', green: 'text-green-500', violet: 'text-violet-500', indigo: 'text-indigo-500', red: 'text-red-500' };

    return (
        <div className="min-h-screen bg-background dark:bg-slate-900">
            <Navbar dark={dark} setDark={setDark} />

            {/* HERO */}
            <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 gradient-hero relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-3xl" />
                    <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/3 blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in-up">
                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-blue-200 mb-6 backdrop-blur-sm">
                                <Zap size={14} className="text-yellow-400" />
                                Introducing CampusNova — One Platform. Every Campus Need.
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                                Your Entire Campus.{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-violet-300">
                                    One Connected Platform.
                                </span>
                            </h1>
                            <p className="mt-6 text-lg text-blue-200 leading-relaxed max-w-xl">
                                CampusNova brings academics, campus events, student communities, career opportunities, and campus services together in one connected digital ecosystem.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link to="/dashboard" className="btn-primary text-base py-3 px-7 bg-white text-primary hover:bg-blue-50 shadow-xl">
                                    Explore CampusNova <ArrowRight size={18} />
                                </Link>
                                <Link to="/features" className="btn-secondary text-base py-3 px-7 border-white/30 text-white hover:bg-white/10 bg-transparent">
                                    Discover Features
                                </Link>
                            </div>
                            <div className="mt-10 flex flex-wrap gap-6 text-sm text-blue-200">
                                {['16+ Modules', '5 User Roles', 'AI-Powered', 'Mobile Ready'].map(t => (
                                    <div key={t} className="flex items-center gap-1.5">
                                        <CheckCircle size={14} className="text-green-400" />
                                        {t}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mock dashboard */}
                        <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-violet-500 rounded-2xl opacity-20 blur-2xl scale-105" />
                                <MockDashboard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROBLEM */}
            <section className="py-16 lg:py-20 bg-white dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="badge-red mb-3">The Problem</span>
                        <h2 className="section-title dark:text-white mt-2">Campus Information is Scattered Everywhere</h2>
                        <p className="section-subtitle mx-auto dark:text-slate-400">
                            Students, faculty, and administrators juggle a dozen different apps and platforms just to get through a typical college day.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {problems.map((p, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50">
                                <span className="text-2xl flex-shrink-0">{p.icon}</span>
                                <p className="text-slate-700 dark:text-slate-200 text-sm font-medium">{p.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOLUTION */}
            <section className="py-16 lg:py-20 bg-gradient-to-br from-background to-blue-50 dark:from-slate-900 dark:to-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="badge-blue mb-3">The Solution</span>
                        <h2 className="section-title dark:text-white mt-2">CampusNova Brings Everything Together</h2>
                        <p className="section-subtitle mx-auto dark:text-slate-400">
                            One login. One dashboard. Everything your campus needs — academics, events, clubs, placements, and services — unified in a single, beautifully designed platform.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                            {[
                                { label: 'Modules', value: '16+', icon: '🧩' },
                                { label: 'User Roles', value: '5', icon: '👥' },
                                { label: 'Features', value: '50+', icon: '⚡' },
                                { label: 'AI-Powered', value: '∞', icon: '🤖' },
                            ].map(s => (
                                <div key={s.label} className="card p-4 text-center">
                                    <p className="text-2xl mb-1">{s.icon}</p>
                                    <p className="font-black text-2xl text-primary">{s.value}</p>
                                    <p className="text-xs text-slate-500 font-medium">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES OVERVIEW */}
            <section id="features" className="py-16 lg:py-24 bg-white dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="badge-blue mb-3">Platform Modules</span>
                        <h2 className="section-title dark:text-white mt-2">Everything Built for Campus Life</h2>
                        <p className="section-subtitle mx-auto dark:text-slate-400">
                            Explore all 16 modules designed to cover every aspect of student and campus life.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {features.map((f, i) => {
                            const Icon = f.icon;
                            return (
                                <Link key={i} to={f.path} className="card p-5 flex flex-col gap-3 group hover:-translate-y-1 transition-all duration-200">
                                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                                        <Icon size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm text-textDark dark:text-white group-hover:text-primary transition-colors">{f.title}</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">{f.desc}</p>
                                    </div>
                                    <div className="text-primary text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                                        Explore <ChevronRight size={12} />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    <div className="text-center mt-10">
                        <Link to="/dashboard" className="btn-primary text-base py-3 px-8">
                            Explore Full Dashboard <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-16 lg:py-24 bg-gradient-to-br from-navy to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="badge bg-white/20 text-white mb-3">How It Works</span>
                        <h2 className="text-3xl font-black text-white mt-2">Getting Started is Simple</h2>
                        <p className="text-blue-200 text-lg mt-3">Three steps to your connected campus experience.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-white/10" />
                        {howItWorks.map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <div key={i} className="text-center relative">
                                    <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mx-auto mb-6 shadow-xl">
                                        <Icon size={28} className="text-blue-200" />
                                    </div>
                                    <div className="text-4xl font-black text-white/10 absolute -top-2 left-1/2 -translate-x-1/2 select-none">{step.step}</div>
                                    <h3 className="font-bold text-lg text-white mb-3">{step.title}</h3>
                                    <p className="text-blue-200 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="py-16 lg:py-24 bg-background dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="badge-violet mb-3">Built For Everyone</span>
                        <h2 className="section-title dark:text-white mt-2">A Platform for Every Role</h2>
                        <p className="section-subtitle mx-auto dark:text-slate-400">
                            CampusNova is designed to serve students, faculty, club leaders, placement cells, and administrators.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((b, i) => {
                            const Icon = b.icon;
                            return (
                                <div key={i} className={`card p-6 border-2 ${colorMap[b.color]}`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm`}>
                                            <Icon size={20} className={iconColorMap[b.color]} />
                                        </div>
                                        <h3 className="font-bold text-lg text-textDark dark:text-white">For {b.audience}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {b.points.map((pt, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                                <CheckCircle size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                                                {pt}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 lg:py-20 gradient-hero">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                        Ready to Experience the Future of Campus Life?
                    </h2>
                    <p className="text-blue-200 text-lg mt-4 mb-8">
                        Explore CampusNova's complete feature set through our interactive prototype.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/dashboard" className="btn-primary text-base py-3 px-8 bg-white text-primary hover:bg-blue-50">
                            Explore Dashboard <ArrowRight size={18} />
                        </Link>
                        <Link to="/features" className="btn-secondary text-base py-3 px-8 border-white/30 text-white bg-transparent hover:bg-white/10">
                            View All Features
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
