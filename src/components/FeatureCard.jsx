import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

const colorMap = {
    blue: 'from-blue-500 to-blue-600',
    violet: 'from-violet-500 to-purple-600',
    green: 'from-green-500 to-emerald-600',
    orange: 'from-orange-500 to-amber-500',
    red: 'from-red-500 to-rose-600',
    pink: 'from-pink-500 to-rose-500',
    indigo: 'from-indigo-500 to-blue-600',
    teal: 'from-teal-500 to-cyan-600',
    yellow: 'from-yellow-500 to-orange-500',
    slate: 'from-slate-500 to-slate-600',
    rose: 'from-rose-500 to-red-600',
    navy: 'from-navy to-blue-900',
    purple: 'from-purple-500 to-violet-700',
    amber: 'from-amber-500 to-yellow-500',
};

export default function FeatureCard({ icon, title, description, path, color = 'blue', badge, badgeType = 'blue', stats }) {
    const Icon = Icons[icon] || Icons.Layers;
    const gradient = colorMap[color] || colorMap.blue;

    return (
        <Link to={path} className="card p-5 flex flex-col gap-3 group hover:-translate-y-1 transition-all duration-200 cursor-pointer block">
            <div className="flex items-start justify-between">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon size={20} className="text-white" />
                </div>
                {badge && (
                    <span className={`badge-${badgeType === 'green' ? 'green' : badgeType === 'amber' ? 'amber' : badgeType === 'red' ? 'red' : badgeType === 'violet' ? 'violet' : 'blue'} text-xs`}>
                        {badge}
                    </span>
                )}
            </div>
            <div>
                <h3 className="font-bold text-textDark dark:text-white text-base group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 leading-relaxed">{description}</p>
            </div>
            {stats && (
                <div className="text-xs text-slate-400 font-medium border-t border-slate-100 dark:border-slate-700 pt-2 mt-auto">
                    {stats}
                </div>
            )}
            <div className="text-primary text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <Icons.ArrowRight size={12} />
            </div>
        </Link>
    );
}
