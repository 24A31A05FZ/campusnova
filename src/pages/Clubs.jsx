import { useState } from 'react';
import { Link } from 'react-router-dom';
import { clubs } from '../data/demoData';
import { Users, ArrowLeft, Award, CheckCircle, Star } from 'lucide-react';

const categories = ['All', 'Technical', 'Cultural', 'Sports', 'Entrepreneurship'];

const categoryColors = { Technical: 'from-blue-500 to-blue-600', Cultural: 'from-pink-500 to-rose-500', Sports: 'from-orange-500 to-amber-500', Entrepreneurship: 'from-emerald-500 to-teal-600' };

export default function Clubs() {
    const [filter, setFilter] = useState('All');
    const [joined, setJoined] = useState(clubs.filter(c => c.joined).map(c => c.id));

    const filtered = filter === 'All' ? clubs : clubs.filter(c => c.category === filter);

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
            <Link to="/dashboard" className="btn-ghost text-sm mb-6 inline-flex"><ArrowLeft size={15} /> Back to Dashboard</Link>
            <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-md flex-shrink-0">
                    <Users size={22} className="text-white" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-black text-navy dark:text-white">Campus Clubs</h1>
                        <span className="badge-blue">Preview</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Discover and join technical, cultural, sports, and entrepreneurship clubs.</p>
                </div>
            </div>

            <div className="flex gap-2 flex-wrap mb-6">
                {categories.map(c => (
                    <button key={c} onClick={() => setFilter(c)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${filter === c ? 'bg-primary text-white border-primary shadow-sm' : 'border-slate-200 text-slate-600 hover:border-primary hover:text-primary'}`}>
                        {c}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map(club => {
                    const isJoined = joined.includes(club.id);
                    return (
                        <div key={club.id} className="card overflow-hidden hover:-translate-y-1 transition-all duration-200 flex flex-col">
                            <div className={`h-16 bg-gradient-to-r ${categoryColors[club.category] || 'from-blue-500 to-blue-600'} p-4 flex items-center justify-between`}>
                                <span className="badge bg-white/20 text-white text-xs">{club.category}</span>
                                <span className="text-white text-xs flex items-center gap-1"><Users size={11} /> {club.members} members</span>
                            </div>
                            <div className="p-5 flex flex-col gap-3 flex-1">
                                <h3 className="font-bold text-textDark dark:text-white">{club.name}</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{club.desc}</p>
                                <div>
                                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">Activities:</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {club.activities.map(a => <span key={a} className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-full">{a}</span>)}
                                    </div>
                                </div>
                                <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                                    {isJoined && <span className="badge-green flex items-center gap-1"><CheckCircle size={11} /> Member</span>}
                                    {!isJoined && <span className="text-xs text-slate-400">Open membership</span>}
                                    <button
                                        onClick={() => setJoined(prev => prev.includes(club.id) ? prev.filter(j => j !== club.id) : [...prev, club.id])}
                                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${isJoined ? 'bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-500' : 'bg-primary text-white hover:bg-blue-700'}`}
                                    >
                                        {isJoined ? 'Leave Club' : 'Join Club'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-8 card p-5 bg-pink-50 dark:bg-pink-900/20 border border-pink-100">
                <h3 className="font-bold text-textDark dark:text-white mb-2 flex items-center gap-2"><Award size={16} className="text-pink-500" /> How Clubs Helps You</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Discover all campus clubs in one place. Filter by category, join with a single click, and stay updated on club activities, events, and announcements through your personalized feed.
                </p>
            </div>
        </div>
    );
}
