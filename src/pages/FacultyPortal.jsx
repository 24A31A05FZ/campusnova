import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowLeft, Calendar, FileText, CheckCircle, Users, Bell, Award, Plus } from 'lucide-react';

export default function FacultyPortal() {
    const [activeTab, setActiveTab] = useState('Teaching Schedule');
    const tabs = ['Teaching Schedule', 'Subject Management', 'Assignment Management', 'Attendance Marking', 'Announcements'];

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
            <Link to="/dashboard" className="btn-ghost text-sm mb-6 inline-flex"><ArrowLeft size={15} /> Back to Dashboard</Link>

            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-md flex-shrink-0">
                        <GraduationCap size={24} className="text-white" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-black text-navy dark:text-white">Faculty Portal</h1>
                            <span className="badge-blue">Faculty View Preview</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Teaching schedule, attendance marking, grading assignments, and class communications.</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="badge-green">Prof. Ravi Kumar (Dept. of CSE)</span>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 flex-wrap mb-6 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit">
                {tabs.map(t => (
                    <button
                        key={t}
                        onClick={() => setActiveTab(t)}
                        className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${activeTab === t ? 'bg-white dark:bg-slate-700 text-primary shadow-sm font-semibold' : 'text-slate-500 hover:text-slate-700'
                            }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                    { label: 'Assigned Subjects', val: '2 Classes', color: 'text-blue-600 bg-blue-50' },
                    { label: 'Total Students', val: '124 Enrolled', color: 'text-violet-600 bg-violet-50' },
                    { label: 'Pending Evaluations', val: '18 Submissions', color: 'text-amber-600 bg-amber-50' },
                    { label: 'Avg Attendance', val: '86%', color: 'text-green-600 bg-green-50' },
                ].map((s, i) => (
                    <div key={i} className="card p-4">
                        <p className="text-xs text-slate-500">{s.label}</p>
                        <p className="text-lg font-black text-navy dark:text-white mt-1">{s.val}</p>
                    </div>
                ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'Teaching Schedule' && (
                <div className="space-y-4">
                    <div className="card p-6">
                        <h3 className="text-base font-bold text-navy dark:text-white mb-4">Today's Lectures & Labs (Wednesday)</h3>
                        <div className="space-y-3">
                            {[
                                { time: '09:00 AM - 10:00 AM', sub: 'CS302: Database Management Systems', room: 'Hall 201', type: 'Lecture', count: '64 Students' },
                                { time: '11:30 AM - 01:00 PM', sub: 'CS302: DBMS Practical Lab - Batch B', room: 'Database Lab 2', type: 'Lab', count: '32 Students' },
                                { time: '03:00 PM - 04:00 PM', sub: 'CS302: Tutorial & Doubt Clearing', room: 'Hall 201', type: 'Tutorial', count: '28 Students' },
                            ].map((c, i) => (
                                <div key={i} className="p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex items-center justify-between flex-wrap gap-3">
                                    <div>
                                        <span className="text-xs font-semibold text-primary">{c.time}</span>
                                        <h4 className="font-bold text-slate-900 dark:text-white text-sm mt-0.5">{c.sub}</h4>
                                        <p className="text-xs text-slate-500 mt-0.5">{c.room} • {c.count}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="badge-blue text-xs">{c.type}</span>
                                        <button className="btn-primary text-xs py-1.5 px-3">Mark Attendance</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'Subject Management' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { code: 'CS302', name: 'Database Management Systems', semester: 'Semester 5', syllabus: '72% Covered', students: 64 },
                        { code: 'CS508', name: 'Advanced SQL & Data Warehousing', semester: 'Semester 7 Elective', syllabus: '60% Covered', students: 60 },
                    ].map((sub, i) => (
                        <div key={i} className="card p-6">
                            <div className="flex justify-between items-start mb-3">
                                <span className="badge-blue text-xs">{sub.code}</span>
                                <span className="text-xs font-semibold text-slate-400">{sub.semester}</span>
                            </div>
                            <h3 className="font-bold text-navy dark:text-white text-base">{sub.name}</h3>
                            <p className="text-xs text-slate-500 mt-1">{sub.students} Enrolled Students</p>

                            <div className="mt-4">
                                <div className="flex justify-between text-xs text-slate-500 mb-1">
                                    <span>Syllabus Completion</span>
                                    <span className="font-semibold text-primary">{sub.syllabus}</span>
                                </div>
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary rounded-full" style={{ width: sub.syllabus.split('%')[0] + '%' }} />
                                </div>
                            </div>

                            <div className="flex gap-2 mt-5">
                                <button className="btn-primary text-xs py-1.5 px-3 flex-1 justify-center">Upload Materials</button>
                                <button className="btn-secondary text-xs py-1.5 px-3 flex-1 justify-center">Student List</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'Assignment Management' && (
                <div className="card p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-base font-bold text-navy dark:text-white">Active Assignments</h3>
                        <button className="btn-primary text-xs py-1.5 px-3 flex items-center gap-1.5">
                            <Plus size={14} /> Create Assignment
                        </button>
                    </div>
                    <div className="space-y-3">
                        {[
                            { title: 'Design ER Diagram for Library Management System', subject: 'CS302', submitted: '58 / 64', deadline: 'Oct 18, 2026', status: 'Active' },
                            { title: 'Normalized SQL Queries & Indexes Experiment', subject: 'CS302', submitted: '64 / 64', deadline: 'Oct 04, 2026', status: 'Grading Complete' },
                            { title: 'Data Warehousing Star Schema Case Study', subject: 'CS508', submitted: '42 / 60', deadline: 'Oct 22, 2026', status: 'Active' },
                        ].map((a, i) => (
                            <div key={i} className="p-4 rounded-xl border border-slate-100 dark:border-slate-700 flex justify-between items-center flex-wrap gap-3">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="badge-violet text-xs">{a.subject}</span>
                                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{a.title}</h4>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1">Deadline: {a.deadline} • Submitted: {a.submitted}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className={a.status === 'Active' ? 'badge-amber' : 'badge-green'}>{a.status}</span>
                                    <button className="btn-ghost text-xs py-1.5">Review Submissions</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'Attendance Marking' && (
                <div className="card p-6">
                    <h3 className="text-base font-bold text-navy dark:text-white mb-2">Mark Today's Attendance</h3>
                    <p className="text-xs text-slate-500 mb-4">Select subject: <strong>CS302 - Database Management Systems (64 Students)</strong></p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-xs">
                            <thead>
                                <tr className="border-b border-slate-200 dark:border-slate-700 text-left text-slate-500 font-semibold">
                                    <th className="pb-3">Roll No</th>
                                    <th className="pb-3">Student Name</th>
                                    <th className="pb-3">Current %</th>
                                    <th className="pb-3 text-right">Today's Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                {[
                                    { roll: '23CS001', name: 'Aarav Sharma', perc: '92%', status: 'Present' },
                                    { roll: '23CS002', name: 'Ananya Deshmukh', perc: '84%', status: 'Present' },
                                    { roll: '23CS003', name: 'Farhan Akhtar', perc: '68%', status: 'Absent' },
                                    { roll: '23CS004', name: 'Isha Patel', perc: '88%', status: 'Present' },
                                    { roll: '23CS005', name: 'John Student', perc: '82%', status: 'Present' },
                                ].map((s, idx) => (
                                    <tr key={idx}>
                                        <td className="py-2.5 font-mono text-slate-600 dark:text-slate-300">{s.roll}</td>
                                        <td className="py-2.5 font-medium text-slate-900 dark:text-white">{s.name}</td>
                                        <td className="py-2.5 text-slate-500">{s.perc}</td>
                                        <td className="py-2.5 text-right">
                                            <span className={`badge ${s.status === 'Present' ? 'badge-green' : 'badge-red'}`}>{s.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 flex justify-end gap-2">
                        <button className="btn-secondary text-xs py-1.5 px-4">Mark All Present</button>
                        <button className="btn-primary text-xs py-1.5 px-4">Save Attendance</button>
                    </div>
                </div>
            )}

            {activeTab === 'Announcements' && (
                <div className="card p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-base font-bold text-navy dark:text-white">Class Announcements</h3>
                        <button className="btn-primary text-xs py-1.5 px-3 flex items-center gap-1.5">
                            <Plus size={14} /> Broadcast Announcement
                        </button>
                    </div>
                    <div className="space-y-3">
                        {[
                            { target: 'CS302 Batch A & B', date: 'Yesterday at 4:30 PM', text: 'DBMS Unit 3 notes and ER diagram templates uploaded. Please review before Friday quiz.' },
                            { target: 'CS508 Elective', date: 'Oct 08, 2026', text: 'Lab schedule for Data Warehouse project evaluation has been adjusted by 30 minutes.' },
                        ].map((an, i) => (
                            <div key={i} className="p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
                                <div className="flex justify-between items-center text-xs mb-1">
                                    <span className="badge-blue">{an.target}</span>
                                    <span className="text-slate-400">{an.date}</span>
                                </div>
                                <p className="text-xs text-slate-700 dark:text-slate-300 mt-2">{an.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* How it helps */}
            <div className="mt-8 card p-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                <h3 className="font-bold text-textDark dark:text-white mb-2 flex items-center gap-2">
                    <Award size={16} className="text-primary" /> How Faculty Portal Empowers Educators
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Faculty members can take attendance in seconds, organize lecture materials, publish assignments, and broadcast urgent academic updates without relying on unstructured messaging apps.
                </p>
            </div>
        </div>
    );
}
