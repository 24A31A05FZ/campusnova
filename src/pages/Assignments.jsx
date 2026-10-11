import { useState } from 'react';
import { Link } from 'react-router-dom';
import { assignments } from '../data/demoData';
import { ClipboardList, ArrowLeft, Clock, CheckCircle, AlertCircle, Award } from 'lucide-react';

const statusConfig = {
    pending: { label: 'Pending', class: 'badge-amber' },
    submitted: { label: 'Submitted', class: 'badge-blue' },
    graded: { label: 'Graded', class: 'badge-green' },
};

const priorityConfig = {
    high: 'text-red-500',
    medium: 'text-amber-500',
    low: 'text-green-500',
};

export default function Assignments() {
    const [filter, setFilter] = useState('All');
    const filters = ['All', 'Pending', 'Submitted', 'Graded'];

    const filtered = filter === 'All' ? assignments : assignments.filter(a => a.status.toLowerCase() === filter.toLowerCase());

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
            <Link to="/dashboard" className="btn-ghost text-sm mb-6 inline-flex"><ArrowLeft size={15} /> Back to Dashboard</Link>
            <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <ClipboardList size={22} className="text-white" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-black text-navy dark:text-white">Assignments</h1>
                        <span className="badge-violet">Preview</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Track pending deadlines, submissions, and grades in one place.</p>
                </div>
            </div>

            {/* Summary stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                    { label: 'Pending', count: assignments.filter(a => a.status === 'pending').length, color: 'bg-amber-50 text-amber-600', icon: Clock },
                    { label: 'Submitted', count: assignments.filter(a => a.status === 'submitted').length, color: 'bg-blue-50 text-blue-600', icon: CheckCircle },
                    { label: 'Graded', count: assignments.filter(a => a.status === 'graded').length, color: 'bg-green-50 text-green-600', icon: Award },
                ].map(s => {
                    const Icon = s.icon;
                    return (
                        <div key={s.label} className="card p-4 text-center">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2 ${s.color}`}><Icon size={16} /></div>
                            <p className="font-black text-2xl text-textDark dark:text-white">{s.count}</p>
                            <p className="text-xs text-slate-500 font-medium">{s.label}</p>
                        </div>
                    );
                })}
            </div>

            {/* Filters */}
            <div className="flex gap-2 mb-5 flex-wrap">
                {filters.map(f => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${filter === f ? 'bg-primary text-white border-primary' : 'border-slate-200 text-slate-600 hover:border-primary hover:text-primary'}`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Assignments list */}
            <div className="space-y-3">
                {filtered.map(a => (
                    <div key={a.id} className="card p-5 hover:-translate-y-0.5 transition-all">
                        <div className="flex items-start justify-between flex-wrap gap-3">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap mb-1">
                                    <span className="badge-violet">{a.subject}</span>
                                    {a.priority && (
                                        <span className={`text-xs font-semibold uppercase ${priorityConfig[a.priority]}`}>
                                            ● {a.priority}
                                        </span>
                                    )}
                                </div>
                                <h3 className="font-bold text-textDark dark:text-white">{a.title}</h3>
                                <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                                    <span className="flex items-center gap-1"><Clock size={12} /> Due: {a.deadline}</span>
                                    <span>Marks: {a.marks}</span>
                                    {a.grade && <span className="font-semibold text-green-600">Grade: {a.grade}</span>}
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <span className={statusConfig[a.status].class}>{statusConfig[a.status].label}</span>
                                {a.status === 'pending' && (
                                    <button className="btn-primary text-xs py-1.5 px-3">Submit</button>
                                )}
                                {a.status === 'submitted' && (
                                    <button className="btn-ghost text-xs py-1.5">View Submission</button>
                                )}
                                {a.status === 'graded' && (
                                    <button className="btn-ghost text-xs py-1.5">View Feedback</button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 card p-5 bg-violet-50 dark:bg-violet-900/20 border border-violet-100 dark:border-violet-800">
                <h3 className="font-bold text-textDark dark:text-white mb-2 flex items-center gap-2"><Award size={16} className="text-violet" /> How Assignments Helps You</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Never miss a deadline again. View all assignments by subject, priority level, and status. Submit directly from the platform and get grade feedback — all in one organized view.
                </p>
            </div>
        </div>
    );
}
