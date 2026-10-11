import * as Icons from 'lucide-react';

export default function StatCard({ icon, label, value, sub, color = 'blue', trend }) {
    const Icon = Icons[icon] || Icons.TrendingUp;
    const colorClasses = {
        blue: 'bg-blue-50 text-blue-600',
        green: 'bg-green-50 text-green-600',
        violet: 'bg-violet-50 text-violet-600',
        amber: 'bg-amber-50 text-amber-600',
        red: 'bg-red-50 text-red-600',
        orange: 'bg-orange-50 text-orange-600',
        indigo: 'bg-indigo-50 text-indigo-600',
        teal: 'bg-teal-50 text-teal-600',
    };

    return (
        <div className="card p-4 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${colorClasses[color] || colorClasses.blue}`}>
                <Icon size={22} />
            </div>
            <div className="min-w-0">
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium truncate">{label}</p>
                <p className="font-bold text-xl text-textDark dark:text-white leading-none mt-0.5">{value}</p>
                {sub && <p className="text-xs text-slate-400 mt-0.5">{sub}</p>}
            </div>
            {trend && (
                <div className={`ml-auto text-xs font-semibold flex items-center gap-0.5 ${trend > 0 ? 'text-green-500' : 'text-red-400'}`}>
                    {trend > 0 ? <Icons.TrendingUp size={14} /> : <Icons.TrendingDown size={14} />}
                    {Math.abs(trend)}%
                </div>
            )}
        </div>
    );
}
