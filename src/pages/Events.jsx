import { useState } from 'react';
import { Link } from 'react-router-dom';
import { events } from '../data/demoData';
import { CalendarDays, ArrowLeft, MapPin, Users, Award, CheckCircle } from 'lucide-react';

const categories = ['All', 'Technical', 'Cultural', 'Workshop', 'Sports', 'Seminar', 'Entrepreneurship'];

const categoryColors = {
    Technical: 'badge-blue', Cultural: 'badge-violet', Workshop: 'badge-green',
    Sports: 'badge-amber', Seminar: 'badge-blue', Entrepreneurship: 'badge-green',
};

const categoryGradients = {
    Technical: 'from-blue-500 to-blue-600', Cultural: 'from-pink-500 to-rose-500',
    Workshop: 'from-green-500 to-emerald-600', Sports: 'from-orange-500 to-amber-500',
    Seminar: 'from-indigo-500 to-blue-600', Entrepreneurship: 'from-teal-500 to-cyan-600',
};

export default function Events() {
    const [filter, setFilter] = useState('All');
    const [registered, setRegistered] = useState(events.filter(e => e.registered).map(e => e.id));

    const filtered = filter === 'All' ? events : events.filter(e => e.category === filter);

    const toggleRegister = (id) => {
        setRegistered(prev => prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]);
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
            <Link to="/dashboard" className="btn-ghost text-sm mb-6 inline-flex"><ArrowLeft size={15} /> Back to Dashboard</Link>
            <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-md flex-shrink-0">
                    <CalendarDays size={22} className="text-white" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-black text-navy dark:text-white">Campus Events</h1>
                        <span className="badge-blue">Preview</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Discover and register for technical, cultural, sports, and entrepreneurship events.</p>
                </div>
            </div>

            {/* Category filter */}
            <div className="flex gap-2 flex-wrap mb-6">
                {categories.map(c => (
                    <button
                        key={c}
                        onClick={() => setFilter(c)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${filter === c ? 'bg-primary text-white border-primary shadow-sm' : 'border-slate-200 text-slate-600 hover:border-primary hover:text-primary'}`}
                    >
                        {c}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filtered.map(event => {
                    const isReg = registered.includes(event.id);
                    return (
                        <div key={event.id} className="card overflow-hidden hover:-translate-y-1 transition-all duration-200 flex flex-col">
                            {/* Event header */}
                            <div className={`h-20 bg-gradient-to-r ${categoryGradients[event.category] || 'from-blue-500 to-blue-600'} p-5 flex items-end`}>
                                <div>
                                    <span className="badge bg-white/20 text-white text-xs">{event.category}</span>
                                    <h3 className="font-bold text-white mt-1 text-sm leading-tight">{event.title}</h3>
                                </div>
                            </div>
                            <div className="p-5 flex flex-col gap-3 flex-1">
                                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{event.desc}</p>
                                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                                    <div className="flex items-center gap-2"><CalendarDays size={12} className="text-primary" /> {event.date}</div>
                                    <div className="flex items-center gap-2"><MapPin size={12} className="text-primary" /> {event.venue}</div>
                                    <div className="flex items-center gap-2"><Users size={12} className="text-primary" /> {event.seats} seats</div>
                                </div>
                                <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                                    {isReg ? (
                                        <span className="badge-green flex items-center gap-1"><CheckCircle size={11} /> Registered</span>
                                    ) : (
                                        <span className="text-xs text-slate-400">Open for registration</span>
                                    )}
                                    <button
                                        onClick={() => toggleRegister(event.id)}
                                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${isReg ? 'bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-500' : 'bg-primary text-white hover:bg-blue-700'}`}
                                    >
                                        {isReg ? 'Unregister' : 'Register'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-8 card p-5 bg-orange-50 dark:bg-orange-900/20 border border-orange-100">
                <h3 className="font-bold text-textDark dark:text-white mb-2 flex items-center gap-2"><Award size={16} className="text-orange-500" /> How Events Helps You</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Discover all campus events in one place — from hackathons to cultural fests. Filter by category, register with one click, and never miss an event again.
                </p>
            </div>
        </div>
    );
}
