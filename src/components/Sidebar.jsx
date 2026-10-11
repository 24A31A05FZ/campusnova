import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard, BookOpen, ClipboardList, CalendarCheck, Clock,
    CalendarDays, Users, MessageSquare, ShoppingBag, Search,
    Briefcase, FileText, AlertCircle, Bell, Bot,
    GraduationCap, Star, Target, Shield, User, Settings,
    ChevronDown, ChevronRight, PanelLeftClose, PanelLeft, X,
} from 'lucide-react';

const iconMap = {
    LayoutDashboard, BookOpen, ClipboardList, CalendarCheck, Clock,
    CalendarDays, Users, MessageSquare, ShoppingBag, Search,
    Briefcase, FileText, AlertCircle, Bell, Bot,
    GraduationCap, Star, Target, Shield, User, Settings,
};

const sections = [
    {
        title: 'Overview',
        items: [
            { label: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard' },
        ],
    },
    {
        title: 'Academics',
        items: [
            { label: 'Subjects', path: '/dashboard/academics', icon: 'BookOpen' },
            { label: 'Assignments', path: '/dashboard/assignments', icon: 'ClipboardList' },
            { label: 'Attendance', path: '/dashboard/attendance', icon: 'CalendarCheck' },
            { label: 'Timetable', path: '/dashboard/timetable', icon: 'Clock' },
        ],
    },
    {
        title: 'Campus Life',
        items: [
            { label: 'Events', path: '/dashboard/events', icon: 'CalendarDays' },
            { label: 'Clubs', path: '/dashboard/clubs', icon: 'Users' },
            { label: 'Community', path: '/dashboard/community', icon: 'MessageSquare' },
            { label: 'Marketplace', path: '/dashboard/marketplace', icon: 'ShoppingBag' },
            { label: 'Lost & Found', path: '/dashboard/lost-found', icon: 'Search' },
        ],
    },
    {
        title: 'Career',
        items: [
            { label: 'Placements', path: '/dashboard/placements', icon: 'Briefcase' },
            { label: 'Resume Builder', path: '/dashboard/placements', icon: 'FileText' },
        ],
    },
    {
        title: 'Services',
        items: [
            { label: 'Complaints', path: '/dashboard/complaints', icon: 'AlertCircle' },
            { label: 'Notifications', path: '/dashboard/notifications', icon: 'Bell' },
            { label: 'AI Assistant', path: '/dashboard/ai-assistant', icon: 'Bot' },
        ],
    },
    {
        title: 'Management',
        items: [
            { label: 'Faculty Portal', path: '/dashboard/faculty-portal', icon: 'GraduationCap' },
            { label: 'Club Leader', path: '/dashboard/club-leader', icon: 'Star' },
            { label: 'Placement Officer', path: '/dashboard/placement-officer', icon: 'Target' },
            { label: 'Admin', path: '/dashboard/admin', icon: 'Shield' },
        ],
    },
    {
        title: 'Account',
        items: [
            { label: 'Profile', path: '/dashboard/profile', icon: 'User' },
            { label: 'Settings', path: '/dashboard/settings', icon: 'Settings' },
        ],
    },
];

function SidebarItem({ item, collapsed }) {
    const location = useLocation();
    const Icon = iconMap[item.icon] || LayoutDashboard;
    const active = location.pathname === item.path;

    return (
        <Link
            to={item.path}
            title={collapsed ? item.label : undefined}
            className={`sidebar-link ${active ? 'active' : ''} ${collapsed ? 'justify-center px-2' : ''}`}
        >
            <Icon size={18} className="flex-shrink-0" />
            {!collapsed && <span className="text-sm">{item.label}</span>}
        </Link>
    );
}

export default function Sidebar({ mobileOpen, setMobileOpen }) {
    const [collapsed, setCollapsed] = useState(false);
    const [expanded, setExpanded] = useState(
        Object.fromEntries(sections.map(s => [s.title, true]))
    );

    const toggle = (title) => setExpanded(e => ({ ...e, [title]: !e[title] }));

    const sidebarContent = (
        <div className="flex flex-col h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700">
            {/* Header */}
            <div className={`flex items-center h-16 px-4 border-b border-slate-200 dark:border-slate-700 ${collapsed ? 'justify-center' : 'justify-between'}`}>
                {!collapsed && (
                    <Link to="/dashboard" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg gradient-card flex items-center justify-center">
                            <span className="text-white font-black text-base">N</span>
                        </div>
                        <span className="font-bold text-navy dark:text-white text-base">CampusNova</span>
                    </Link>
                )}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="hidden lg:flex p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                    {collapsed ? <PanelLeft size={18} /> : <PanelLeftClose size={18} />}
                </button>
            </div>

            {/* Nav Items */}
            <nav className="flex-1 overflow-y-auto scrollbar-thin px-2 py-3 space-y-1">
                {sections.map(section => (
                    <div key={section.title} className="mb-1">
                        {!collapsed && (
                            <button
                                onClick={() => toggle(section.title)}
                                className="w-full flex items-center justify-between px-2 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors"
                            >
                                {section.title}
                                {expanded[section.title] ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                            </button>
                        )}
                        {(collapsed || expanded[section.title]) && (
                            <div className="space-y-0.5 mt-0.5">
                                {section.items.map(item => (
                                    <SidebarItem key={item.path + item.label} item={item} collapsed={collapsed} />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>

            {/* Bottom */}
            {!collapsed && (
                <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full gradient-card flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-bold">JS</span>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-800 dark:text-white leading-none">John Student</p>
                            <p className="text-xs text-slate-400 mt-0.5">CSE — Semester 5</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside
                className={`hidden lg:flex flex-col flex-shrink-0 h-screen sticky top-0 transition-all duration-300 ${collapsed ? 'w-[70px]' : 'w-[260px]'
                    }`}
            >
                {sidebarContent}
            </aside>

            {/* Mobile Sidebar */}
            {mobileOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
                    <aside className="absolute left-0 top-0 bottom-0 w-[260px] shadow-2xl">
                        <div className="h-full">
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 z-10"
                            >
                                <X size={18} />
                            </button>
                            {sidebarContent}
                        </div>
                    </aside>
                </div>
            )}
        </>
    );
}
