import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, ArrowLeft, Briefcase, Users, FileCheck, TrendingUp, Award, Plus, Download } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function PlacementOfficerPortal() {
    const [activeTab, setActiveTab] = useState('Overview');
    const tabs = ['Overview', 'Manage Drives', 'Candidate Shortlists', 'Placement Analytics'];

    const chartData = [
        { year: '2023', offers: 320, highest: 28 },
        { year: '2024', offers: 410, highest: 36 },
        { year: '2025', offers: 485, highest: 42 },
        { year: '2026 (YTD)', offers: 260, highest: 45 },
    ];

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
            <Link to="/dashboard" className="btn-ghost text-sm mb-6 inline-flex"><ArrowLeft size={15} /> Back to Dashboard</Link>

            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-700 flex items-center justify-center shadow-md flex-shrink-0">
                        <Target size={24} className="text-white" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-black text-navy dark:text-white">Placement Officer Portal</h1>
                            <span className="badge-blue">T&P Cell Preview</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Corporate recruitment drives, student eligibility filters, offers, and campus placement analytics.</p>
                    </div>
                </div>
                <div>
                    <span className="badge-green">Dr. S. K. Roy (Training & Placement Head)</span>
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
                    { label: 'Total Placed (2026)', val: '260 Students', sub: '78% Placement Rate' },
                    { label: 'Highest Package', val: '₹45 LPA', sub: 'Google Inc.' },
                    { label: 'Average Package', val: '₹8.4 LPA', sub: '+14% YoY growth' },
                    { label: 'Active Drives', val: '6 Companies', sub: 'Visiting this month' },
                ].map((s, i) => (
                    <div key={i} className="card p-4">
                        <p className="text-xs text-slate-500">{s.label}</p>
                        <p className="text-xl font-black text-navy dark:text-white mt-1">{s.val}</p>
                        <p className="text-[11px] text-primary font-medium mt-1">{s.sub}</p>
                    </div>
                ))}
            </div>

            {activeTab === 'Overview' && (
                <div className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="card p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-base font-bold text-navy dark:text-white">Active Recruitment Drives</h3>
                                <button className="btn-primary text-xs py-1.5 px-3 flex items-center gap-1">
                                    <Plus size={14} /> New Drive
                                </button>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { company: 'Google', role: 'SWE Full Time', ctc: '₹45 LPA', reg: '142 Eligible', date: 'Drive on Oct 25' },
                                    { company: 'Infosys', role: 'SE Specialist', ctc: '₹9.5 LPA', reg: '280 Eligible', date: 'Drive on Oct 20' },
                                    { company: 'Flipkart', role: 'ML Intern', ctc: '₹35k/mo', reg: '98 Eligible', date: 'Drive on Oct 28' },
                                ].map((d, i) => (
                                    <div key={i} className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex justify-between items-center flex-wrap gap-2">
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white text-sm">{d.company} — {d.role}</h4>
                                            <p className="text-xs text-slate-500">{d.ctc} • {d.reg}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="badge-blue text-xs">{d.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="card p-6 flex flex-col">
                            <h3 className="text-base font-bold text-navy dark:text-white mb-4">Placement Trends (Offers Received)</h3>
                            <div className="h-56 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                                        <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                                        <YAxis tick={{ fontSize: 11 }} />
                                        <Tooltip />
                                        <Bar dataKey="offers" fill="#2563EB" radius={[6, 6, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'Manage Drives' && (
                <div className="card p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-base font-bold text-navy dark:text-white">Scheduled Company Visits</h3>
                        <button className="btn-secondary text-xs py-1.5 px-3 flex items-center gap-1.5">
                            <Download size={14} /> Export Eligibility Data
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-xs">
                            <thead>
                                <tr className="border-b border-slate-200 dark:border-slate-700 text-left text-slate-500 font-semibold">
                                    <th className="pb-3">Company</th>
                                    <th className="pb-3">Role</th>
                                    <th className="pb-3">Package / Stipend</th>
                                    <th className="pb-3">Cut-off Criteria</th>
                                    <th className="pb-3">Applicants</th>
                                    <th className="pb-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                {[
                                    { name: 'Google', role: 'SWE', ctc: '₹45 LPA', crit: 'CGPA 8.0+, No Backlogs', app: 112 },
                                    { name: 'Infosys', role: 'SE Intern', ctc: '₹25,000/mo', crit: 'CGPA 7.0+', app: 230 },
                                    { name: 'TCS', role: 'Data Analyst', ctc: '₹7 LPA', crit: 'CGPA 6.5+', app: 310 },
                                    { name: 'Flipkart', role: 'ML Intern', ctc: '₹35,000/mo', crit: 'CGPA 7.5+', app: 88 },
                                ].map((row, i) => (
                                    <tr key={i}>
                                        <td className="py-3 font-bold text-slate-900 dark:text-white">{row.name}</td>
                                        <td className="py-3 text-slate-600 dark:text-slate-300">{row.role}</td>
                                        <td className="py-3 font-semibold text-green-600">{row.ctc}</td>
                                        <td className="py-3 text-slate-500">{row.crit}</td>
                                        <td className="py-3 font-mono text-primary">{row.app} Applied</td>
                                        <td className="py-3 text-right">
                                            <button className="btn-ghost text-xs py-1 px-2.5">Manage</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {activeTab === 'Candidate Shortlists' && (
                <div className="card p-6">
                    <h3 className="text-base font-bold text-navy dark:text-white mb-2">Round 1 Shortlisted Candidates — Google SWE</h3>
                    <p className="text-xs text-slate-500 mb-4">Technical coding assessment cleared by 12 candidates.</p>
                    <div className="space-y-3">
                        {[
                            { name: 'Aarav Sharma', branch: 'CSE 4th Year', cgpa: '9.4', score: '300 / 300 CodeScore', status: 'Interview Slot Assigned' },
                            { name: 'Riya Sen', branch: 'IT 4th Year', cgpa: '9.1', score: '280 / 300 CodeScore', status: 'Interview Slot Assigned' },
                            { name: 'Vikram Seth', branch: 'CSE 4th Year', cgpa: '8.8', score: '275 / 300 CodeScore', status: 'Pending Confirmation' },
                        ].map((c, i) => (
                            <div key={i} className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-700 flex justify-between items-center flex-wrap gap-2">
                                <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{c.name}</h4>
                                    <p className="text-xs text-slate-500">{c.branch} • CGPA: {c.cgpa} • {c.score}</p>
                                </div>
                                <span className="badge-green text-xs">{c.status}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'Placement Analytics' && (
                <div className="card p-6">
                    <h3 className="text-base font-bold text-navy dark:text-white mb-4">Department-wise Placement Performance (2026)</h3>
                    <div className="space-y-4">
                        {[
                            { dept: 'Computer Science & Engineering', rate: '92%', offers: '142 Offers', avg: '₹10.2 LPA' },
                            { dept: 'Information Technology', rate: '88%', offers: '94 Offers', avg: '₹8.8 LPA' },
                            { dept: 'Electronics & Communication', rate: '74%', offers: '68 Offers', avg: '₹6.5 LPA' },
                            { dept: 'Mechanical & Civil Engineering', rate: '62%', offers: '45 Offers', avg: '₹5.8 LPA' },
                        ].map((d, i) => (
                            <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                                <div className="flex justify-between items-center text-sm font-semibold mb-2">
                                    <span className="text-slate-900 dark:text-white">{d.dept}</span>
                                    <span className="text-primary font-bold">{d.rate} Placed</span>
                                </div>
                                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mb-2">
                                    <div className="h-full bg-primary rounded-full" style={{ width: d.rate }} />
                                </div>
                                <div className="flex justify-between text-xs text-slate-500">
                                    <span>{d.offers}</span>
                                    <span>Average CTC: {d.avg}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* How it helps */}
            <div className="mt-8 card p-5 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
                <h3 className="font-bold text-textDark dark:text-white mb-2 flex items-center gap-2">
                    <Award size={16} className="text-indigo-600" /> How Placement Cell Automation Powers Career Growth
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    T&P officers can automatically filter eligible candidates by CGPA and backlogs, invite verified recruiters, monitor interview slots, and produce audit-ready placement reports in seconds.
                </p>
            </div>
        </div>
    );
}
