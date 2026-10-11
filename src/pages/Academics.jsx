import { useState } from 'react';
import { Link } from 'react-router-dom';
import { subjects } from '../data/demoData';
import { BookOpen, ArrowLeft, Search, Calendar, FileText, Users, ChevronRight, Award } from 'lucide-react';

const tabs = ['My Subjects', 'Study Materials', 'Faculty', 'Academic Calendar', 'Exam Schedule'];

export default function Academics() {
    const [activeTab, setActiveTab] = useState('My Subjects');
    const [search, setSearch] = useState('');

    const filtered = subjects.filter(s =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.code.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
            <Link to="/dashboard" className="btn-ghost text-sm mb-6 inline-flex"><ArrowLeft size={15} /> Back to Dashboard</Link>
            <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <BookOpen size={22} className="text-white" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-black text-navy dark:text-white">Academics</h1>
                        <span className="badge-blue">Preview</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Manage your subjects, materials, faculty info, and academic schedule.</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 flex-wrap mb-6 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit">
                {tabs.map(t => (
                    <button
                        key={t}
                        onClick={() => setActiveTab(t)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${activeTab === t ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            {/* My Subjects Tab */}
            {activeTab === 'My Subjects' && (
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="relative flex-1 max-w-sm">
                            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search subjects..." className="input-field pl-9 py-2 text-sm" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filtered.map(s => (
                            <div key={s.code} className="card p-5 hover:-translate-y-0.5 transition-all">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <span className="badge-blue text-xs mb-1">{s.code}</span>
                                        <h3 className="font-bold text-textDark dark:text-white text-sm mt-1">{s.name}</h3>
                                        <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1"><Users size={11} /> {s.faculty}</p>
                                    </div>
                                    <span className="text-xs font-semibold text-slate-400">{s.credits} Credits</span>
                                </div>
                                <div className="mt-3">
                                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                                        <span>Course Progress</span>
                                        <span className="font-semibold text-primary">{s.progress}%</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full transition-all" style={{ width: `${s.progress}%` }} />
                                    </div>
                                </div>
                                <div className="flex gap-2 mt-4">
                                    <button className="btn-ghost text-xs py-1.5"><FileText size={13} /> Materials</button>
                                    <button className="btn-ghost text-xs py-1.5"><Calendar size={13} /> Schedule</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Study Materials */}
            {activeTab === 'Study Materials' && (
                <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { type: 'PDF', name: 'DSA Lecture Notes - Week 1-8', sub: 'Data Structures', size: '4.2 MB' },
                            { type: 'PPT', name: 'DBMS ER Diagrams', sub: 'Database Systems', size: '8.1 MB' },
                            { type: 'Video', name: 'OS Deadlock Explained', sub: 'Operating Systems', size: '120 MB' },
                            { type: 'PDF', name: 'CN Protocol Stack Notes', sub: 'Computer Networks', size: '2.8 MB' },
                            { type: 'PDF', name: 'ML Regression Guide', sub: 'Machine Learning', size: '5.5 MB' },
                            { type: 'Code', name: 'DSA Lab Solutions', sub: 'Data Structures', size: '180 KB' },
                        ].map((m, i) => (
                            <div key={i} className="card p-4 flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 ${m.type === 'PDF' ? 'bg-red-50 text-red-500' : m.type === 'PPT' ? 'bg-orange-50 text-orange-500' : m.type === 'Video' ? 'bg-blue-50 text-blue-500' : 'bg-green-50 text-green-500'}`}>
                                    {m.type}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-semibold text-textDark dark:text-white truncate">{m.name}</p>
                                    <p className="text-xs text-slate-400">{m.sub} · {m.size}</p>
                                </div>
                                <button className="btn-ghost text-xs py-1">View</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Faculty */}
            {activeTab === 'Faculty' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {subjects.map(s => (
                        <div key={s.code} className="card p-5 text-center">
                            <div className="w-14 h-14 rounded-full gradient-card flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg">
                                {s.faculty.split(' ').map(n => n[0]).join('').slice(0, 2)}
                            </div>
                            <h3 className="font-bold text-textDark dark:text-white text-sm">{s.faculty}</h3>
                            <p className="text-xs text-primary mt-0.5">{s.name}</p>
                            <p className="text-xs text-slate-400 mt-0.5">{s.code}</p>
                            <button className="btn-ghost text-xs mt-3 w-full justify-center">View Profile</button>
                        </div>
                    ))}
                </div>
            )}

            {/* Academic Calendar */}
            {activeTab === 'Academic Calendar' && (
                <div className="card p-6">
                    <h3 className="font-bold text-lg text-textDark dark:text-white mb-4">Semester Events</h3>
                    <div className="space-y-3">
                        {[
                            { date: 'Oct 1', event: 'Semester Begins', type: 'info' },
                            { date: 'Oct 20', event: 'Mid-Semester Exams Begin', type: 'exam' },
                            { date: 'Nov 5', event: 'Project Submission Deadline', type: 'deadline' },
                            { date: 'Nov 15', event: 'Campus Placement Season Begins', type: 'info' },
                            { date: 'Dec 1', event: 'End Semester Exams', type: 'exam' },
                            { date: 'Dec 20', event: 'Winter Break', type: 'holiday' },
                        ].map((ev, i) => (
                            <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                                <span className="text-sm font-semibold text-primary w-14">{ev.date}</span>
                                <span className="text-sm text-textDark dark:text-white">{ev.event}</span>
                                <span className={`ml-auto badge ${ev.type === 'exam' ? 'badge-red' : ev.type === 'deadline' ? 'badge-amber' : ev.type === 'holiday' ? 'badge-green' : 'badge-blue'}`}>
                                    {ev.type}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Exam Schedule */}
            {activeTab === 'Exam Schedule' && (
                <div className="card p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <h3 className="font-bold text-lg text-textDark dark:text-white">Mid-Semester Exams</h3>
                        <span className="badge-amber">Upcoming</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-200 dark:border-slate-700">
                                    <th className="text-left pb-3 text-slate-500 font-semibold">Date</th>
                                    <th className="text-left pb-3 text-slate-500 font-semibold">Time</th>
                                    <th className="text-left pb-3 text-slate-500 font-semibold">Subject</th>
                                    <th className="text-left pb-3 text-slate-500 font-semibold">Room</th>
                                    <th className="text-left pb-3 text-slate-500 font-semibold">Marks</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                {[
                                    { date: 'Oct 20', time: '9 AM', subject: 'Data Structures', room: 'Hall A', marks: 50 },
                                    { date: 'Oct 22', time: '11 AM', subject: 'DBMS', room: 'Hall B', marks: 50 },
                                    { date: 'Oct 24', time: '9 AM', subject: 'Operating Systems', room: 'Hall A', marks: 50 },
                                    { date: 'Oct 26', time: '2 PM', subject: 'Computer Networks', room: 'Hall C', marks: 50 },
                                    { date: 'Oct 28', time: '11 AM', subject: 'Software Engineering', room: 'Hall B', marks: 50 },
                                ].map((ex, i) => (
                                    <tr key={i}>
                                        <td className="py-3 font-medium text-primary">{ex.date}</td>
                                        <td className="py-3 text-slate-600 dark:text-slate-300">{ex.time}</td>
                                        <td className="py-3 text-textDark dark:text-white font-medium">{ex.subject}</td>
                                        <td className="py-3 text-slate-500">{ex.room}</td>
                                        <td className="py-3 text-slate-500">{ex.marks}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* How it helps */}
            <div className="mt-8 card p-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                <h3 className="font-bold text-textDark dark:text-white mb-2 flex items-center gap-2"><Award size={16} className="text-primary" /> How Academics Helps You</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    The Academics module centralizes everything related to your coursework — from subject details and faculty, to study materials, exams, and the academic calendar. No more searching across multiple college portals.
                </p>
            </div>
        </div>
    );
}
