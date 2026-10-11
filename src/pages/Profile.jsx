import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ArrowLeft, Mail, Phone, BookOpen, Calendar, MapPin, Award, CheckCircle, Edit3 } from 'lucide-react';

export default function Profile() {
    const [activeTab, setActiveTab] = useState('Overview');
    const tabs = ['Overview', 'Personal Information', 'Academic Details', 'Activity History'];

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
            <Link to="/dashboard" className="btn-ghost text-sm mb-6 inline-flex"><ArrowLeft size={15} /> Back to Dashboard</Link>

            {/* Profile Header Card */}
            <div className="card p-6 mb-6">
                <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-2xl gradient-card flex items-center justify-center text-white text-2xl font-black shadow-lg">
                            JS
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-black text-navy dark:text-white">John Student</h1>
                                <span className="badge-green">Undergraduate</span>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">B.Tech in Computer Science & Engineering</p>
                            <div className="flex items-center gap-4 text-xs text-slate-400 mt-2 flex-wrap">
                                <span className="flex items-center gap-1"><Mail size={12} /> john.student@campus.edu</span>
                                <span className="flex items-center gap-1"><MapPin size={12} /> Hostel Block C, Room 312</span>
                                <span className="font-mono text-primary font-bold">Roll: 23CS005</span>
                            </div>
                        </div>
                    </div>
                    <button className="btn-secondary text-xs py-1.5 px-3 flex items-center gap-1.5">
                        <Edit3 size={14} /> Edit Profile
                    </button>
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

            {/* Tab content */}
            {activeTab === 'Overview' && (
                <div className="space-y-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {[
                            { label: 'Current CGPA', val: '8.72 / 10' },
                            { label: 'Total Credits', val: '98 / 160' },
                            { label: 'Attendance Rate', val: '82%' },
                            { label: 'Club Memberships', val: '2 Clubs' },
                        ].map((s, i) => (
                            <div key={i} className="card p-4">
                                <p className="text-xs text-slate-400">{s.label}</p>
                                <p className="text-lg font-black text-navy dark:text-white mt-1">{s.val}</p>
                            </div>
                        ))}
                    </div>

                    <div className="card p-6">
                        <h3 className="text-base font-bold text-navy dark:text-white mb-3">Enrolled Clubs & Positions</h3>
                        <div className="space-y-3">
                            {[
                                { name: 'ACM Student Chapter', role: 'Technical Member', date: 'Joined Aug 2024' },
                                { name: 'Sports & Athletics Council', role: 'Cricket Team Squad', date: 'Joined Sep 2024' },
                            ].map((c, i) => (
                                <div key={i} className="p-3 rounded-xl border border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs">
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white">{c.name}</h4>
                                        <p className="text-slate-400 mt-0.5">{c.date}</p>
                                    </div>
                                    <span className="badge-violet">{c.role}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'Personal Information' && (
                <div className="card p-6">
                    <h3 className="text-base font-bold text-navy dark:text-white mb-4">Contact & Personal Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        {[
                            { label: 'Full Legal Name', val: 'John Alexander Student' },
                            { label: 'Date of Birth', val: 'March 14, 2004' },
                            { label: 'Primary Email', val: 'john.student@campus.edu' },
                            { label: 'Secondary Email', val: 'john.personal@gmail.com' },
                            { label: 'Phone Number', val: '+91 98765 43210' },
                            { label: 'Blood Group', val: 'O+ Positive' },
                            { label: 'Permanent City', val: 'Bangalore, Karnataka' },
                            { label: 'Emergency Contact', val: '+91 94444 11223 (Parent)' },
                        ].map((item, i) => (
                            <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                                <p className="text-slate-400 font-medium">{item.label}</p>
                                <p className="text-slate-900 dark:text-white font-semibold text-sm mt-0.5">{item.val}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'Academic Details' && (
                <div className="card p-6">
                    <h3 className="text-base font-bold text-navy dark:text-white mb-4">Academic Record</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        {[
                            { label: 'Program', val: 'Bachelor of Technology (B.Tech)' },
                            { label: 'Major Department', val: 'Computer Science & Engineering' },
                            { label: 'Current Semester', val: 'Semester 5 (Fall 2026)' },
                            { label: 'Admission Batch', val: '2023 - 2027' },
                            { label: 'Faculty Mentor', val: 'Dr. Ananya Reddy' },
                            { label: 'Active Backlogs', val: '0 (Clean Record)' },
                        ].map((item, i) => (
                            <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                                <p className="text-slate-400 font-medium">{item.label}</p>
                                <p className="text-slate-900 dark:text-white font-semibold text-sm mt-0.5">{item.val}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'Activity History' && (
                <div className="card p-6">
                    <h3 className="text-base font-bold text-navy dark:text-white mb-4">Recent Campus Actions</h3>
                    <div className="space-y-3">
                        {[
                            { action: 'Registered for CodeFest 2026', time: 'Yesterday at 3:15 PM' },
                            { action: 'Applied to Google SWE Full Time Opportunity', time: '2 days ago' },
                            { action: 'Submitted Assignment: OS Process Scheduling Simulation', time: '4 days ago' },
                            { action: 'Joined ACM Student Chapter discussion forum', time: '1 week ago' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-xs p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                                <CheckCircle size={15} className="text-green-500 flex-shrink-0" />
                                <span className="text-slate-800 dark:text-slate-200 font-medium">{item.action}</span>
                                <span className="text-slate-400 ml-auto">{item.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* How it helps */}
            <div className="mt-8 card p-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                <h3 className="font-bold text-textDark dark:text-white mb-2 flex items-center gap-2">
                    <Award size={16} className="text-primary" /> Centralized Identity & Verification
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    The Profile module provides each campus citizen with a unified record of their academic standing, club participations, and verified credentials across their collegiate journey.
                </p>
            </div>
        </div>
    );
}
