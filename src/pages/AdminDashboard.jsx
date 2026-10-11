import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, Users, GraduationCap, Calendar, AlertCircle, BarChart3, Award, Settings } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('Overview');
    const tabs = ['Overview', 'User Management', 'Event Oversight', 'Complaints Resolution', 'Campus Analytics'];

    const campusTraffic = [
        { day: 'Mon', active: 3800 },
        { day: 'Tue', active: 4200 },
        { day: 'Wed', active: 4600 },
        { day: 'Thu', active: 4100 },
        { day: 'Fri', active: 4450 },
        { day: 'Sat', active: 1800 },
        { day: 'Sun', active: 950 },
    ];

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
            <Link to="/dashboard" className="btn-ghost text-sm mb-6 inline-flex"><ArrowLeft size={15} /> Back to Dashboard</Link>

            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shadow-md flex-shrink-0">
                        <Shield size={24} className="text-white" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-black text-navy dark:text-white">Admin Dashboard</h1>
                            <span className="badge-red">Institution SuperAdmin</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Campus-wide platform monitoring, user management, audit logs, and service ticket triage.</p>
                    </div>
                </div>
                <div>
                    <span className="badge-green">Dean of Academic Affairs & Systems</span>
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

            {/* High-level metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                    { label: 'Total Enrolled Students', val: '5,420', sub: '98% Active this sem' },
                    { label: 'Faculty Members', val: '248', sub: '18 Academic Depts' },
                    { label: 'Registered Clubs', val: '24', sub: '6 New this year' },
                    { label: 'Open Service Tickets', val: '4', sub: 'Avg resolve time: 48h' },
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
                            <h3 className="text-base font-bold text-navy dark:text-white mb-4">Daily Active Campus Logins</h3>
                            <div className="h-56 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={campusTraffic}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                                        <XAxis dataKey="day" tick={{ fontSize: 11 }} />
                                        <YAxis tick={{ fontSize: 11 }} />
                                        <Tooltip />
                                        <Bar dataKey="active" fill="#7C3AED" radius={[6, 6, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="card p-6">
                            <h3 className="text-base font-bold text-navy dark:text-white mb-4">System Alerts & Audit Log</h3>
                            <div className="space-y-3">
                                {[
                                    { level: 'Info', text: 'Semester mid-term timetable published by Dean Office', time: '1 hr ago' },
                                    { level: 'Warning', text: 'Elevated Wi-Fi complaint volume reported in Hostel Block C', time: '3 hrs ago' },
                                    { level: 'Info', text: 'Backup verification completed across all academic databases', time: '6 hrs ago' },
                                    { level: 'Success', text: 'New club "Robocraft Society" approved by Student Affairs', time: '1 day ago' },
                                ].map((log, i) => (
                                    <div key={i} className="p-3 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex items-start gap-3">
                                        <span className={`badge text-[10px] mt-0.5 ${log.level === 'Warning' ? 'badge-amber' : log.level === 'Success' ? 'badge-green' : 'badge-blue'}`}>{log.level}</span>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs text-slate-800 dark:text-slate-200">{log.text}</p>
                                            <p className="text-[10px] text-slate-400 mt-0.5">{log.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'User Management' && (
                <div className="card p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-base font-bold text-navy dark:text-white">Campus Directory & Role Permissions</h3>
                        <button className="btn-primary text-xs py-1.5 px-3">+ Provision User</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-xs">
                            <thead>
                                <tr className="border-b border-slate-200 dark:border-slate-700 text-left text-slate-500 font-semibold">
                                    <th className="pb-3">Name</th>
                                    <th className="pb-3">Institutional Email</th>
                                    <th className="pb-3">Assigned Role</th>
                                    <th className="pb-3">Status</th>
                                    <th className="pb-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                {[
                                    { name: 'Dr. Ananya Reddy', email: 'ananya.reddy@campus.edu', role: 'Faculty / HOD', status: 'Active' },
                                    { name: 'John Student', email: 'john.student@campus.edu', role: 'Student (CSE)', status: 'Active' },
                                    { name: 'Dr. S. K. Roy', email: 'sk.roy@campus.edu', role: 'Placement Officer', status: 'Active' },
                                    { name: 'Rohan Gupta', email: 'rohan.gupta@campus.edu', role: 'Club Leader (ACM)', status: 'Active' },
                                ].map((u, i) => (
                                    <tr key={i}>
                                        <td className="py-3 font-semibold text-slate-900 dark:text-white">{u.name}</td>
                                        <td className="py-3 font-mono text-slate-500">{u.email}</td>
                                        <td className="py-3"><span className="badge-blue">{u.role}</span></td>
                                        <td className="py-3"><span className="badge-green">{u.status}</span></td>
                                        <td className="py-3 text-right">
                                            <button className="btn-ghost text-xs py-1 px-2.5">Edit Role</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {activeTab === 'Event Oversight' && (
                <div className="card p-6">
                    <h3 className="text-base font-bold text-navy dark:text-white mb-4">Campus Event Approvals & Venue Allotments</h3>
                    <div className="space-y-3">
                        {[
                            { event: 'CodeFest 2026', org: 'ACM Chapter', venue: 'Main Auditorium', date: 'Oct 20, 2026', status: 'Approved' },
                            { event: 'Inter-College Cricket League', org: 'Sports Council', venue: 'Campus Grounds', date: 'Nov 08, 2026', status: 'Approved' },
                            { event: 'Annual Cultural Fest - Rhythm 2026', org: 'Cultural Committee', venue: 'Amphitheater', date: 'Oct 28, 2026', status: 'Venue Pending Review' },
                        ].map((e, i) => (
                            <div key={i} className="p-4 rounded-xl border border-slate-100 dark:border-slate-700 flex justify-between items-center flex-wrap gap-2">
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{e.event}</h4>
                                    <p className="text-xs text-slate-500">{e.org} • {e.venue} • {e.date}</p>
                                </div>
                                <span className={`badge ${e.status === 'Approved' ? 'badge-green' : 'badge-amber'}`}>{e.status}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'Complaints Resolution' && (
                <div className="card p-6">
                    <h3 className="text-base font-bold text-navy dark:text-white mb-4">Campus Maintenance Escalation Triage</h3>
                    <div className="space-y-3">
                        {[
                            { ticket: 'CMP-003', issue: 'Water supply issue in Hostel Block D', priority: 'High', assigned: 'Estate & Hostel Ops', status: 'Pending' },
                            { ticket: 'CMP-002', issue: 'Projector in CS-301 not working', priority: 'Medium', assigned: 'IT Support Team', status: 'In Progress' },
                            { ticket: 'CMP-004', issue: 'Bus Route 4 morning timing mismatch', priority: 'Medium', assigned: 'Transport Dept', status: 'Pending' },
                            { ticket: 'CMP-001', issue: 'Block B Wi-Fi disconnect issue', priority: 'High', assigned: 'Network NOC', status: 'Resolved' },
                        ].map((c, i) => (
                            <div key={i} className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-700 flex justify-between items-center flex-wrap gap-2">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-mono text-xs text-slate-400">{c.ticket}</span>
                                        <span className={`badge text-[10px] ${c.priority === 'High' ? 'badge-red' : 'badge-amber'}`}>{c.priority}</span>
                                        <h4 className="font-semibold text-slate-900 dark:text-white text-xs">{c.issue}</h4>
                                    </div>
                                    <p className="text-[11px] text-slate-500 mt-1">Assigned to: {c.assigned}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className={`badge ${c.status === 'Resolved' ? 'badge-green' : c.status === 'In Progress' ? 'badge-amber' : 'badge-red'}`}>{c.status}</span>
                                    {c.status !== 'Resolved' && <button className="btn-primary text-xs py-1 px-2.5">Resolve Ticket</button>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'Campus Analytics' && (
                <div className="card p-6">
                    <h3 className="text-base font-bold text-navy dark:text-white mb-4">Overall Campus Infrastructure Health</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { metric: 'Campus Wi-Fi Uptime', val: '99.4%', status: 'Normal Operating Range' },
                            { metric: 'Library Digital Access', val: '12,480 Logins', status: '+22% usage increase' },
                            { metric: 'Hostel Occupancy', val: '94%', status: '1,880 residents' },
                        ].map((m, i) => (
                            <div key={i} className="p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
                                <p className="text-xs text-slate-500">{m.metric}</p>
                                <p className="text-xl font-bold text-navy dark:text-white mt-1">{m.val}</p>
                                <p className="text-xs text-primary font-medium mt-1">{m.status}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* How it helps */}
            <div className="mt-8 card p-5 bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-textDark dark:text-white mb-2 flex items-center gap-2">
                    <Award size={16} className="text-slate-600" /> Executive Oversight for Institutional Leadership
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    The Admin Dashboard gives university leaders a single cockpit to oversee student welfare, resolve infrastructural bottlenecks, track campus event approvals, and protect institutional compliance.
                </p>
            </div>
        </div>
    );
}
