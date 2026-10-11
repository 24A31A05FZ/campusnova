import { Link } from 'react-router-dom';
import { attendanceData } from '../data/demoData';
import { CalendarCheck, ArrowLeft, AlertTriangle, Award } from 'lucide-react';
import { RadialBarChart, RadialBar, ResponsiveContainer, Cell, PieChart, Pie, Tooltip } from 'recharts';

export default function Attendance() {
    const overall = Math.round(attendanceData.reduce((acc, s) => acc + s.percent, 0) / attendanceData.length);

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
            <Link to="/dashboard" className="btn-ghost text-sm mb-6 inline-flex"><ArrowLeft size={15} /> Back to Dashboard</Link>
            <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <CalendarCheck size={22} className="text-white" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-black text-navy dark:text-white">Attendance</h1>
                        <span className="badge-green">Preview</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Track your subject-wise attendance and stay above the required threshold.</p>
                </div>
            </div>

            {/* Overall */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="card p-6 md:col-span-1 flex flex-col items-center justify-center">
                    <div className="relative w-32 h-32">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                            <circle
                                cx="18" cy="18" r="15.9"
                                fill="none"
                                stroke={overall >= 75 ? '#22c55e' : overall >= 65 ? '#f59e0b' : '#ef4444'}
                                strokeWidth="3"
                                strokeDasharray={`${overall} ${100 - overall}`}
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-2xl font-black text-textDark dark:text-white">{overall}%</span>
                            <span className="text-xs text-slate-500">Overall</span>
                        </div>
                    </div>
                    <p className="font-bold text-lg text-textDark dark:text-white mt-3">Overall Attendance</p>
                    <span className={`mt-1 badge ${overall >= 75 ? 'badge-green' : 'badge-amber'}`}>{overall >= 75 ? 'Good Standing' : 'Needs Improvement'}</span>
                </div>

                <div className="md:col-span-2 grid grid-cols-2 gap-3">
                    {[
                        { label: 'Classes Attended', value: attendanceData.reduce((a, s) => a + s.attended, 0) },
                        { label: 'Total Classes', value: attendanceData.reduce((a, s) => a + s.total, 0) },
                        { label: 'Subjects Below 75%', value: attendanceData.filter(s => s.percent < 75).length, alert: true },
                        { label: 'Best Attendance', value: Math.max(...attendanceData.map(s => s.percent)) + '%' },
                    ].map((s, i) => (
                        <div key={i} className={`card p-4 ${s.alert && s.value > 0 ? 'border-red-200 bg-red-50 dark:bg-red-900/20' : ''}`}>
                            <p className="text-slate-500 text-xs">{s.label}</p>
                            <p className={`font-black text-2xl mt-1 ${s.alert && s.value > 0 ? 'text-red-500' : 'text-textDark dark:text-white'}`}>{s.value}</p>
                            {s.alert && s.value > 0 && <p className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertTriangle size={10} /> Action required</p>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Subject-wise */}
            <div className="card p-6">
                <h2 className="font-bold text-lg text-textDark dark:text-white mb-4">Subject-wise Attendance</h2>
                <div className="space-y-4">
                    {attendanceData.map(s => (
                        <div key={s.subject}>
                            <div className="flex items-center justify-between mb-1.5 text-sm">
                                <span className="font-medium text-textDark dark:text-white">{s.subject}</span>
                                <div className="flex items-center gap-3">
                                    <span className="text-slate-500 text-xs">{s.attended}/{s.total} classes</span>
                                    <span className={`font-bold text-sm ${s.percent >= 75 ? 'text-green-600' : 'text-red-500'}`}>{s.percent}%</span>
                                </div>
                            </div>
                            <div className="h-2.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                <div
                                    className={`h-full rounded-full transition-all ${s.percent >= 75 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : s.percent >= 65 ? 'bg-gradient-to-r from-amber-400 to-yellow-500' : 'bg-gradient-to-r from-red-400 to-rose-500'}`}
                                    style={{ width: `${s.percent}%` }}
                                />
                            </div>
                            {s.percent < 75 && (
                                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                                    <AlertTriangle size={11} /> Need {Math.ceil((75 * s.total - 100 * s.attended) / 25)} more classes to reach 75%
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 card p-5 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
                <h3 className="font-bold text-textDark dark:text-white mb-2 flex items-center gap-2"><Award size={16} className="text-green-600" /> How Attendance Helps You</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Stay on top of your attendance with real-time tracking. Get early warnings when you approach the minimum threshold and view historical attendance patterns per subject.
                </p>
            </div>
        </div>
    );
}
