import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowLeft, Users, CalendarPlus, Bell, Award, CheckCircle, BarChart3, Plus } from 'lucide-react';

export default function ClubLeaderPortal() {
    const [activeTab, setActiveTab] = useState('Overview');
    const tabs = ['Overview', 'Create Event', 'Member Management', 'Registrations', 'Announcements'];

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
            <Link to="/dashboard" className="btn-ghost text-sm mb-6 inline-flex"><ArrowLeft size={15} /> Back to Dashboard</Link>

            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-md flex-shrink-0">
                        <Star size={24} className="text-white" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-black text-navy dark:text-white">Club Leader Portal</h1>
                            <span className="badge-violet">Club Admin Preview</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Manage club events, approve memberships, track attendee check-ins, and broadcast to members.</p>
                    </div>
                </div>
                <div>
                    <span className="badge-violet">ACM Student Chapter (Lead)</span>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 flex-wrap mb-6 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit">
                {tabs.map(t => (
                    <button
                        key={t}
                        onClick={() => setActiveTab(t)}
                        className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${activeTab === t ? 'bg-white dark:bg-slate-700 text-purple-600 shadow-sm font-semibold' : 'text-slate-500 hover:text-slate-700'
                            }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                    { label: 'Active Members', val: '120 Students', color: 'text-purple-600 bg-purple-50' },
                    { label: 'Upcoming Events', val: '2 Scheduled', color: 'text-blue-600 bg-blue-50' },
                    { label: 'Pending Join Requests', val: '14 Pending', color: 'text-amber-600 bg-amber-50' },
                    { label: 'Total Event Signups', val: '342 Registrations', color: 'text-green-600 bg-green-50' },
                ].map((s, i) => (
                    <div key={i} className="card p-4">
                        <p className="text-xs text-slate-500">{s.label}</p>
                        <p className="text-lg font-black text-navy dark:text-white mt-1">{s.val}</p>
                    </div>
                ))}
            </div>

            {activeTab === 'Overview' && (
                <div className="space-y-6">
                    <div className="card p-6">
                        <h3 className="text-base font-bold text-navy dark:text-white mb-4">ACM Student Chapter Activities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
                                <span className="badge-blue text-xs">Flagship Event</span>
                                <h4 className="font-bold text-slate-900 dark:text-white text-sm mt-2">CodeFest 2026 Competitive Hack</h4>
                                <p className="text-xs text-slate-500 mt-1">Oct 20, 2026 • 200 Seats • 142 Registered</p>
                                <div className="mt-3 flex gap-2">
                                    <button className="btn-primary text-xs py-1.5 px-3">View Attendees</button>
                                    <button className="btn-ghost text-xs py-1.5">Edit Event</button>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
                                <span className="badge-green text-xs">Weekly Session</span>
                                <h4 className="font-bold text-slate-900 dark:text-white text-sm mt-2">Weekly LeetCode & DSA Problem Review</h4>
                                <p className="text-xs text-slate-500 mt-1">Every Wednesday 6:00 PM • Google Meet & Lab 102</p>
                                <div className="mt-3 flex gap-2">
                                    <button className="btn-secondary text-xs py-1.5 px-3">Send Reminder</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'Create Event' && (
                <div className="card p-6">
                    <h3 className="text-base font-bold text-navy dark:text-white mb-4">Create New Club Event</h3>
                    <div className="space-y-4 max-w-2xl">
                        <div>
                            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Event Title</label>
                            <input type="text" placeholder="e.g. Winter Hackathon 2026" className="input-field" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Category</label>
                                <select className="input-field">
                                    <option>Technical</option>
                                    <option>Workshop</option>
                                    <option>Coding Competition</option>
                                    <option>Guest Lecture</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Max Capacity</label>
                                <input type="number" placeholder="e.g. 150" className="input-field" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Date & Time</label>
                                <input type="text" placeholder="e.g. Nov 14, 2026 at 2:00 PM" className="input-field" />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Venue / Platform</label>
                                <input type="text" placeholder="e.g. Auditorium / Lab 3" className="input-field" />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Description</label>
                            <textarea rows={3} placeholder="Describe the event, agenda, prizes, and prerequisites..." className="input-field resize-none" />
                        </div>
                        <button className="btn-primary text-xs py-2 px-4">Publish Event to Campus Feed</button>
                    </div>
                </div>
            )}

            {activeTab === 'Member Management' && (
                <div className="card p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-base font-bold text-navy dark:text-white">Club Members (120)</h3>
                        <span className="badge-amber">14 Join Requests Pending</span>
                    </div>
                    <div className="space-y-3">
                        {[
                            { name: 'Tanvi Verma', year: 'CSE 2nd Year', status: 'Pending Request', date: 'Applied today' },
                            { name: 'Karthik Rao', year: 'ECE 3rd Year', status: 'Pending Request', date: 'Applied yesterday' },
                            { name: 'Rohan Gupta', year: 'CSE 3rd Year', status: 'Core Member (Web Lead)', date: 'Joined Aug 2025' },
                            { name: 'Megha Iyer', year: 'AI&DS 2nd Year', status: 'Active Member', date: 'Joined Sep 2025' },
                        ].map((m, i) => (
                            <div key={i} className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-700 flex justify-between items-center flex-wrap gap-2">
                                <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{m.name}</h4>
                                    <p className="text-xs text-slate-500">{m.year} • {m.date}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className={`badge ${m.status.includes('Pending') ? 'badge-amber' : 'badge-green'}`}>{m.status}</span>
                                    {m.status.includes('Pending') && (
                                        <>
                                            <button className="btn-primary text-xs py-1 px-2.5">Approve</button>
                                            <button className="btn-ghost text-xs py-1 px-2 text-red-500">Decline</button>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'Registrations' && (
                <div className="card p-6">
                    <h3 className="text-base font-bold text-navy dark:text-white mb-3">CodeFest 2026 — Live Attendee Check-ins</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-xs">
                            <thead>
                                <tr className="border-b border-slate-200 dark:border-slate-700 text-left text-slate-500 font-semibold">
                                    <th className="pb-3">Ticket ID</th>
                                    <th className="pb-3">Participant</th>
                                    <th className="pb-3">Department</th>
                                    <th className="pb-3">Registered At</th>
                                    <th className="pb-3 text-right">Check-in Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                {[
                                    { id: 'CF26-081', name: 'John Student', dept: 'CSE - Sem 5', time: 'Oct 08, 11:20 AM', status: 'Confirmed' },
                                    { id: 'CF26-082', name: 'Divya Nair', dept: 'IT - Sem 5', time: 'Oct 08, 12:45 PM', status: 'Confirmed' },
                                    { id: 'CF26-083', name: 'Siddharth Joshi', dept: 'ECE - Sem 3', time: 'Oct 09, 09:15 AM', status: 'Checked In' },
                                ].map((reg, i) => (
                                    <tr key={i}>
                                        <td className="py-2.5 font-mono text-slate-600 dark:text-slate-300">{reg.id}</td>
                                        <td className="py-2.5 font-semibold text-slate-900 dark:text-white">{reg.name}</td>
                                        <td className="py-2.5 text-slate-500">{reg.dept}</td>
                                        <td className="py-2.5 text-slate-500">{reg.time}</td>
                                        <td className="py-2.5 text-right">
                                            <span className={`badge ${reg.status === 'Checked In' ? 'badge-green' : 'badge-blue'}`}>{reg.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {activeTab === 'Announcements' && (
                <div className="card p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-base font-bold text-navy dark:text-white">Broadcast to Club Members</h3>
                        <button className="btn-primary text-xs py-1.5 px-3 flex items-center gap-1.5">
                            <Plus size={14} /> Send Broadcast
                        </button>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
                        <span className="badge-violet text-xs">Sent to All Members</span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 mt-2 font-medium">
                            Reminder: CodeFest 2026 practice round opens this Friday on HackerRank. Top 10 will receive fast-track entries to the onsite finals!
                        </p>
                        <p className="text-[10px] text-slate-400 mt-2">Delivered to 120 member notifications • Oct 09</p>
                    </div>
                </div>
            )}

            {/* How it helps */}
            <div className="mt-8 card p-5 bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
                <h3 className="font-bold text-textDark dark:text-white mb-2 flex items-center gap-2">
                    <Award size={16} className="text-purple-600" /> How Club Portals Empower Campus Culture
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Student leaders gain modern tools to promote hackathons, cultural fests, and workshops, track ticket registrations with QR codes, and grow dynamic student societies across the campus.
                </p>
            </div>
        </div>
    );
}
