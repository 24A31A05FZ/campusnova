import { useState } from 'react';
import { Link } from 'react-router-dom';
import { notifications } from '../data/demoData';
import { Bell, ArrowLeft, Award } from 'lucide-react';
import * as Icons from 'lucide-react';

const typeColors = { Academic: 'bg-blue-50 text-blue-600', Assignment: 'bg-violet-50 text-violet-600', Placement: 'bg-green-50 text-green-600', Event: 'bg-orange-50 text-orange-600', Club: 'bg-pink-50 text-pink-600', General: 'bg-slate-50 text-slate-600' };

export default function Notifications() {
    const [read, setRead] = useState(notifications.filter(n => n.read).map(n => n.id));

    const markAllRead = () => setRead(notifications.map(n => n.id));

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto">
            <Link to="/dashboard" className="btn-ghost text-sm mb-6 inline-flex"><ArrowLeft size={15} /> Back to Dashboard</Link>
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-md flex-shrink-0">
                        <Bell size={22} className="text-white" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-black text-navy dark:text-white">Notifications</h1>
                            <span className="badge-red">{notifications.filter(n => !read.includes(n.id)).length} Unread</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Academic, event, placement, and club notifications in one place.</p>
                    </div>
                </div>
                <button onClick={markAllRead} className="btn-ghost text-sm">Mark all read</button>
            </div>

            <div className="space-y-2">
                {notifications.map(n => {
                    const Icon = Icons[n.icon] || Bell;
                    const isRead = read.includes(n.id);
                    return (
                        <div
                            key={n.id}
                            onClick={() => setRead(prev => [...new Set([...prev, n.id])])}
                            className={`card p-4 flex items-center gap-4 cursor-pointer transition-all hover:shadow-card-hover ${!isRead ? 'border-l-4 border-primary' : 'opacity-70'}`}
                        >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${typeColors[n.type] || 'bg-slate-50 text-slate-500'}`}>
                                <Icon size={17} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className={`text-sm leading-snug ${!isRead ? 'font-semibold text-textDark dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>{n.title}</p>
                                <p className="text-xs text-slate-400 mt-0.5">{n.type} · {n.time}</p>
                            </div>
                            {!isRead && <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />}
                        </div>
                    );
                })}
            </div>

            <div className="mt-8 card p-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-100">
                <h3 className="font-bold text-textDark dark:text-white mb-2 flex items-center gap-2"><Award size={16} className="text-blue-500" /> Smart Notifications</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">CampusNova consolidates all campus alerts — from assignment deadlines to placement drives — into one personalized notification center. Stay informed, never overwhelmed.</p>
            </div>
        </div>
    );
}
