import { useState } from 'react';
import { Link } from 'react-router-dom';
import { placements } from '../data/demoData';
import { Briefcase, ArrowLeft, Award, MapPin, Clock, Target, ChevronRight } from 'lucide-react';

const typeColors = { Internship: 'badge-blue', 'Full-time': 'badge-green', Hackathon: 'badge-violet' };
const tabs = ['All', 'Internship', 'Full-time', 'Hackathon'];

export default function Placements() {
    const [filter, setFilter] = useState('All');
    const [applied, setApplied] = useState([]);

    const filtered = filter === 'All' ? placements : placements.filter(p => p.type === filter);

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
            <Link to="/dashboard" className="btn-ghost text-sm mb-6 inline-flex"><ArrowLeft size={15} /> Back to Dashboard</Link>
            <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <Briefcase size={22} className="text-white" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-black text-navy dark:text-white">Placements & Career</h1>
                        <span className="badge-blue">Preview</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Internships, full-time jobs, hackathons, and career resources in one place.</p>
                </div>
            </div>

            {/* Career tools strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {[
                    { label: 'Resume Builder', icon: '📄', path: '#', soon: true },
                    { label: 'Interview Prep', icon: '🎯', path: '#', soon: true },
                    { label: 'Career Workshops', icon: '🏆', path: '#', soon: false },
                    { label: 'Application Track', icon: '📊', path: '#', soon: false },
                ].map(t => (
                    <div key={t.label} className="card p-4 flex items-center gap-3 hover:shadow-card-hover transition-all cursor-pointer">
                        <span className="text-xl">{t.icon}</span>
                        <div>
                            <p className="text-sm font-semibold text-textDark dark:text-white">{t.label}</p>
                            {t.soon && <span className="badge-violet text-[10px]">Soon</span>}
                        </div>
                    </div>
                ))}
            </div>

            {/* Type filter */}
            <div className="flex gap-2 mb-5 flex-wrap">
                {tabs.map(t => (
                    <button key={t} onClick={() => setFilter(t)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${filter === t ? 'bg-primary text-white border-primary' : 'border-slate-200 text-slate-600 hover:border-primary hover:text-primary'}`}>
                        {t}
                    </button>
                ))}
            </div>

            <div className="space-y-4">
                {filtered.map(p => {
                    const isApplied = applied.includes(p.id);
                    return (
                        <div key={p.id} className="card p-5 hover:-translate-y-0.5 transition-all">
                            <div className="flex items-start justify-between flex-wrap gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0 font-bold text-lg text-textDark dark:text-white">
                                        {p.company[0]}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h3 className="font-bold text-textDark dark:text-white">{p.role}</h3>
                                            <span className={`${typeColors[p.type]}`}>{p.type}</span>
                                        </div>
                                        <p className="text-sm font-semibold text-primary mt-0.5">{p.company}</p>
                                        <div className="flex items-center gap-4 mt-2 text-xs text-slate-500 flex-wrap">
                                            <span className="flex items-center gap-1"><MapPin size={11} /> {p.location}</span>
                                            <span className="flex items-center gap-1"><Clock size={11} /> Deadline: {p.deadline}</span>
                                            <span className="font-semibold text-green-600">{p.stipend}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5 mt-2">
                                            {p.skills.map(s => <span key={s} className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-2 py-0.5 rounded-full">{s}</span>)}
                                        </div>
                                        <p className="text-xs text-slate-400 mt-1.5">Eligibility: {p.eligibility}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <button
                                        onClick={() => setApplied(prev => prev.includes(p.id) ? prev : [...prev, p.id])}
                                        className={`text-sm font-semibold px-4 py-2 rounded-xl transition-all ${isApplied ? 'bg-green-100 text-green-600' : 'bg-primary text-white hover:bg-blue-700'}`}
                                    >
                                        {isApplied ? '✓ Applied' : 'Apply Now'}
                                    </button>
                                    <button className="btn-ghost text-xs">Save</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-8 card p-5 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100">
                <h3 className="font-bold text-textDark dark:text-white mb-2 flex items-center gap-2"><Award size={16} className="text-indigo-500" /> How Placements Helps You</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                    Find internships, full-time jobs, and hackathons filtered to your eligibility. Build your resume, prep for interviews, and track all applications from a single career hub.
                </p>
            </div>
        </div>
    );
}
