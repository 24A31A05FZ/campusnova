import { useState } from 'react';
import { Link } from 'react-router-dom';
import { lostItems } from '../data/demoData';
import { Search, ArrowLeft, Award, MapPin, Calendar } from 'lucide-react';

export default function LostFound() {
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');

    const filtered = lostItems.filter(i =>
        (filter === 'All' || i.type === filter) &&
        i.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
            <Link to="/dashboard" className="btn-ghost text-sm mb-6 inline-flex"><ArrowLeft size={15} /> Back to Dashboard</Link>
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-500 to-slate-600 flex items-center justify-center shadow-md flex-shrink-0">
                        <Search size={22} className="text-white" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-black text-navy dark:text-white">Lost & Found</h1>
                            <span className="badge-violet">Preview</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Report lost items or notify others of items you've found on campus.</p>
                    </div>
                </div>
                <button className="btn-primary text-sm">+ Report Item</button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <div className="relative flex-1 max-w-sm">
                    <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search items..." className="input-field pl-9 py-2 text-sm" />
                </div>
                <div className="flex gap-2">
                    {['All', 'Lost', 'Found'].map(f => (
                        <button key={f} onClick={() => setFilter(f)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${filter === f ? (f === 'Lost' ? 'bg-red-500 text-white border-red-500' : f === 'Found' ? 'bg-green-500 text-white border-green-500' : 'bg-primary text-white border-primary') : 'border-slate-200 text-slate-600 hover:border-slate-400'}`}>
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filtered.map(item => (
                    <div key={item.id} className={`card p-5 border-l-4 ${item.type === 'Lost' ? 'border-red-400' : 'border-green-400'}`}>
                        <div className="flex items-start justify-between mb-3">
                            <h3 className="font-bold text-textDark dark:text-white">{item.title}</h3>
                            <span className={item.type === 'Lost' ? 'badge-red' : 'badge-green'}>{item.type}</span>
                        </div>
                        <div className="space-y-1.5 text-xs text-slate-500">
                            <div className="flex items-center gap-2"><MapPin size={12} className="text-primary" /> {item.location}</div>
                            <div className="flex items-center gap-2"><Calendar size={12} className="text-primary" /> {item.date}</div>
                            <div className="flex items-center gap-2">👤 {item.contact}</div>
                        </div>
                        <button className="btn-primary text-xs mt-4 py-1.5 px-3 w-full justify-center">
                            {item.type === 'Lost' ? 'I Found This!' : 'Claim Item'}
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-8 card p-5 bg-slate-50 dark:bg-slate-800 border border-slate-200">
                <h3 className="font-bold text-textDark dark:text-white mb-2 flex items-center gap-2"><Award size={16} className="text-slate-500" /> How Lost & Found Helps You</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">A campus-wide digital lost and found board. Report and search items quickly, connect with finders, and help your campus community.</p>
            </div>
        </div>
    );
}
