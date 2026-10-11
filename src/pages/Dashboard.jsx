import { Link } from 'react-router-dom';
import { dashboardModules } from '../data/demoData';
import { ArrowRight, Bell } from 'lucide-react';
import * as Icons from 'lucide-react';

const colorGradients = {
    'from-blue-500 to-blue-600': 'from-blue-500 to-blue-600',
    'from-violet-500 to-purple-600': 'from-violet-500 to-purple-600',
    'from-green-500 to-emerald-600': 'from-green-500 to-emerald-600',
    'from-orange-500 to-red-500': 'from-orange-500 to-red-500',
    'from-pink-500 to-rose-500': 'from-pink-500 to-rose-500',
    'from-indigo-500 to-blue-600': 'from-indigo-500 to-blue-600',
    'from-teal-500 to-cyan-600': 'from-teal-500 to-cyan-600',
    'from-yellow-500 to-orange-500': 'from-yellow-500 to-orange-500',
    'from-slate-500 to-slate-600': 'from-slate-500 to-slate-600',
    'from-red-500 to-rose-600': 'from-red-500 to-rose-600',
    'from-violet-500 to-purple-700': 'from-violet-500 to-purple-700',
    'from-blue-400 to-blue-500': 'from-blue-400 to-blue-500',
};

export default function Dashboard() {
    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-navy dark:text-white">Welcome to CampusNova</h1>
                        <p className="text-slate-500 dark:text-slate-400 mt-1">Everything happening on your campus, all in one place.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="badge-blue text-xs">Preview Mode</span>
                        <Link to="/dashboard/notifications" className="relative btn-ghost text-sm">
                            <Bell size={16} />
                            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
                        </Link>
                    </div>
                </div>

                {/* Quick stats */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                        { label: 'Active Subjects', value: '6', icon: 'BookOpen', color: 'text-blue-600 bg-blue-50' },
                        { label: 'Pending Assignments', value: '3', icon: 'ClipboardList', color: 'text-amber-600 bg-amber-50' },
                        { label: 'Attendance', value: '82%', icon: 'CalendarCheck', color: 'text-green-600 bg-green-50' },
                        { label: 'Upcoming Events', value: '5', icon: 'CalendarDays', color: 'text-violet-600 bg-violet-50' },
                    ].map(s => {
                        const Icon = Icons[s.icon];
                        return (
                            <div key={s.label} className="card p-4 flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${s.color}`}>
                                    <Icon size={18} />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-xs">{s.label}</p>
                                    <p className="font-black text-lg text-textDark dark:text-white leading-none">{s.value}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Module grid */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-bold text-lg text-textDark dark:text-white">Campus Modules</h2>
                    <span className="text-xs text-slate-400">{dashboardModules.length} modules available</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {dashboardModules.map((mod, i) => {
                        const Icon = Icons[mod.icon] || Icons.Layers;
                        const badgeType = mod.badgeType;
                        const badgeClass = badgeType === 'green' ? 'badge-green' : badgeType === 'amber' ? 'badge-amber' : badgeType === 'red' ? 'badge-red' : badgeType === 'violet' ? 'badge-violet' : 'badge-blue';
                        return (
                            <Link
                                key={i}
                                to={mod.path}
                                className="card p-5 flex flex-col gap-3 group hover:-translate-y-1 transition-all duration-200"
                            >
                                <div className="flex items-start justify-between">
                                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${mod.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                                        <Icon size={20} className="text-white" />
                                    </div>
                                    <span className={`${badgeClass} text-xs`}>{mod.badge}</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm text-textDark dark:text-white group-hover:text-primary transition-colors">{mod.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 leading-relaxed">{mod.description}</p>
                                </div>
                                <div className="text-xs text-slate-400 font-medium border-t border-slate-100 dark:border-slate-700 pt-2 mt-auto flex items-center justify-between">
                                    <span>{mod.stats}</span>
                                    <span className="text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                                        Explore <ArrowRight size={12} />
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Announcements strip */}
            <div className="card p-5 flex items-center gap-4 border-l-4 border-primary">
                <Bell size={20} className="text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-textDark dark:text-white">Mid-Semester Exam Schedule Released</p>
                    <p className="text-xs text-slate-500 mt-0.5">Check the academics section for your personalized exam timetable.</p>
                </div>
                <Link to="/dashboard/notifications" className="btn-ghost text-xs text-primary flex-shrink-0">
                    View All
                </Link>
            </div>
        </div>
    );
}
