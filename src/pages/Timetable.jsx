import { useState } from 'react';
import { Link } from 'react-router-dom';
import { timetable } from '../data/demoData';
import { Clock, ArrowLeft, Award, MapPin } from 'lucide-react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default function Timetable() {
    const [activeDay, setActiveDay] = useState('Monday');

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
            <Link to="/dashboard" className="btn-ghost text-sm mb-6 inline-flex"><ArrowLeft size={15} /> Back to Dashboard</Link>
            <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-md flex-shrink-0">
                    <Clock size={22} className="text-white" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-black text-navy dark:text-white">Timetable</h1>
                        <span className="badge-blue">Preview</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Daily and weekly class schedule with room and faculty details.</p>
                </div>
            </div>

            {/* Day selector */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
                {days.map(day => (
                    <button
                        key={day}
                        onClick={() => setActiveDay(day)}
                        className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${activeDay === day ? 'bg-primary text-white shadow-md' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary'}`}
                    >
                        {day}
                    </button>
                ))}
            </div>

            {/* Daily timetable */}
            <div className="space-y-3 mb-8">
                {(timetable[activeDay] || []).length === 0 ? (
                    <div className="card p-10 text-center text-slate-400">No classes scheduled for {activeDay}.</div>
                ) : (
                    (timetable[activeDay] || []).map((cls, i) => (
                        <div key={i} className="card p-5 flex items-center gap-5 hover:-translate-y-0.5 transition-all">
                            <div className="flex-shrink-0 text-center w-16">
                                <p className="font-bold text-primary text-sm">{cls.time}</p>
                                <span className={`badge text-xs mt-1 ${cls.type === 'Lab' ? 'badge-green' : cls.type === 'Tutorial' ? 'badge-amber' : 'badge-blue'}`}>{cls.type}</span>
                            </div>
                            <div className="w-0.5 h-12 bg-slate-100 dark:bg-slate-700 flex-shrink-0" />
                            <div className="flex-1">
                                <h3 className="font-bold text-textDark dark:text-white">{cls.subject}</h3>
                                <p className="text-xs text-slate-500 mt-1">{cls.faculty}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1"><MapPin size={12} /> {cls.room}</p>
                                <p className="text-xs text-slate-400 mt-0.5">1 hr session</p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Weekly overview grid */}
            <div className="card p-6">
                <h2 className="font-bold text-lg text-textDark dark:text-white mb-4">Weekly Overview</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-xs min-w-[500px]">
                        <thead>
                            <tr>
                                <th className="text-left pb-3 text-slate-500 font-semibold w-20">Time</th>
                                {days.map(d => <th key={d} className="text-left pb-3 text-slate-500 font-semibold">{d.slice(0, 3)}</th>)}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 dark:divide-slate-700">
                            {['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'].map(time => (
                                <tr key={time}>
                                    <td className="py-2 text-slate-400 font-medium">{time}</td>
                                    {days.map(d => {
                                        const cls = (timetable[d] || []).find(c => c.time === time);
                                        return (
                                            <td key={d} className="py-2 pr-2">
                                                {cls ? (
                                                    <div className={`p-1.5 rounded-lg text-white text-[9px] font-medium leading-tight ${cls.type === 'Lab' ? 'bg-emerald-500' : cls.type === 'Tutorial' ? 'bg-amber-500' : 'bg-primary'}`}>
                                                        <p className="font-bold truncate max-w-[60px]">{cls.subject.split(' ')[0]}</p>
                                                        <p className="opacity-80">{cls.room}</p>
                                                    </div>
                                                ) : <div className="h-8" />}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex gap-3 mt-4 text-xs">
                    {[['bg-primary', 'Lecture'], ['bg-emerald-500', 'Lab'], ['bg-amber-500', 'Tutorial']].map(([c, l]) => (
                        <span key={l} className="flex items-center gap-1"><span className={`w-3 h-3 rounded ${c} inline-block`} />{l}</span>
                    ))}
                </div>
            </div>

            <div className="mt-6 card p-5 bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800">
                <h3 className="font-bold text-textDark dark:text-white mb-2 flex items-center gap-2"><Award size={16} className="text-orange-500" /> How Timetable Helps You</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Get your full daily and weekly schedule in one view. Know your classroom, faculty, and session type at a glance — no need to check multiple apps.
                </p>
            </div>
        </div>
    );
}
