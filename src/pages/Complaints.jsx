import { useState } from 'react';
import { Link } from 'react-router-dom';
import { complaints } from '../data/demoData';
import { AlertCircle, ArrowLeft, Award, CheckCircle, Clock, XCircle } from 'lucide-react';

const categories = ['Wi-Fi Issues', 'Classroom Maintenance', 'Hostel Issues', 'Transport Issues', 'Other'];
const statusIcon = { Resolved: CheckCircle, 'In Progress': Clock, Pending: AlertCircle };
const statusColors = { Resolved: 'badge-green', 'In Progress': 'badge-amber', Pending: 'badge-red' };

export default function Complaints() {
    const [showForm, setShowForm] = useState(false);
    const [selectedCat, setSelectedCat] = useState('');

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
            <Link to="/dashboard" className="btn-ghost text-sm mb-6 inline-flex"><ArrowLeft size={15} /> Back to Dashboard</Link>
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-md flex-shrink-0">
                        <AlertCircle size={22} className="text-white" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-black text-navy dark:text-white">Complaints</h1>
                            <span className="badge-violet">Preview</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Submit and track campus service complaints and maintenance issues.</p>
                    </div>
                </div>
                <button onClick={() => setShowForm(!showForm)} className="btn-primary text-sm">
                    {showForm ? 'Cancel' : '+ New Complaint'}
                </button>
            </div>

            {showForm && (
                <div className="card p-6 mb-6 border-2 border-primary/20">
                    <h2 className="font-bold text-lg text-textDark dark:text-white mb-4">Submit a New Complaint</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">Category</label>
                            <div className="flex flex-wrap gap-2">
                                {categories.map(c => (
                                    <button key={c} onClick={() => setSelectedCat(c)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${selectedCat === c ? 'bg-primary text-white border-primary' : 'border-slate-200 text-slate-600 hover:border-primary'}`}>
                                        {c}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">Description</label>
                            <textarea rows={3} placeholder="Describe your complaint in detail..." className="input-field text-sm resize-none" />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">Location (optional)</label>
                            <input type="text" placeholder="e.g. CSE Block, Room 204" className="input-field text-sm" />
                        </div>
                        <button className="btn-primary text-sm" onClick={() => setShowForm(false)}>Submit Complaint (Demo)</button>
                    </div>
                </div>
            )}

            <div>
                <h2 className="font-bold text-lg text-textDark dark:text-white mb-4">Your Complaints</h2>
                <div className="space-y-3">
                    {complaints.map(c => {
                        const Icon = statusIcon[c.status] || AlertCircle;
                        return (
                            <div key={c.id} className="card p-5 flex items-center gap-4 hover:-translate-y-0.5 transition-all">
                                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
                                    <Icon size={18} className={c.status === 'Resolved' ? 'text-green-500' : c.status === 'In Progress' ? 'text-amber-500' : 'text-red-500'} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                                        <span className="font-mono text-xs text-slate-400">{c.id}</span>
                                        <span className="badge-blue text-xs">{c.category}</span>
                                    </div>
                                    <p className="text-sm text-textDark dark:text-white font-medium">{c.desc}</p>
                                    <p className="text-xs text-slate-400 mt-0.5">Submitted: {c.date}</p>
                                </div>
                                <span className={`${statusColors[c.status]} flex-shrink-0`}>{c.status}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-8 card p-5 bg-red-50 dark:bg-red-900/20 border border-red-100">
                <h3 className="font-bold text-textDark dark:text-white mb-2 flex items-center gap-2"><Award size={16} className="text-red-500" /> How Complaints Helps You</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Submit campus issues directly to the administration with a unique ticket ID. Track resolution status in real time — no more chasing emails or notice boards.</p>
            </div>
        </div>
    );
}
