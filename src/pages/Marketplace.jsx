import { useState } from 'react';
import { Link } from 'react-router-dom';
import { marketplaceItems } from '../data/demoData';
import { ShoppingBag, ArrowLeft, Award, Search } from 'lucide-react';

const categories = ['All', 'Books', 'Electronics', 'Stationery', 'Hostel', 'Lab Equipment'];

export default function Marketplace() {
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');

    const filtered = marketplaceItems.filter(i =>
        (filter === 'All' || i.category === filter) &&
        i.title.toLowerCase().includes(search.toLowerCase())
    );

    const conditionColor = { 'New': 'badge-green', 'Like New': 'badge-blue', 'Good': 'badge-amber', 'Fair': 'badge-red' };

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
            <Link to="/dashboard" className="btn-ghost text-sm mb-6 inline-flex"><ArrowLeft size={15} /> Back to Dashboard</Link>
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-md flex-shrink-0">
                        <ShoppingBag size={22} className="text-white" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-black text-navy dark:text-white">Campus Marketplace</h1>
                            <span className="badge-violet">Preview</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Buy and sell books, electronics, lab equipment, and more with campus peers.</p>
                    </div>
                </div>
                <button className="btn-primary text-sm">+ List an Item</button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <div className="relative flex-1 max-w-sm">
                    <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search items..." className="input-field pl-9 py-2 text-sm" />
                </div>
                <div className="flex gap-2 flex-wrap">
                    {categories.map(c => (
                        <button key={c} onClick={() => setFilter(c)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${filter === c ? 'bg-teal-500 text-white border-teal-500' : 'border-slate-200 text-slate-600 hover:border-teal-500 hover:text-teal-600'}`}>
                            {c}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map(item => (
                    <div key={item.id} className="card overflow-hidden hover:-translate-y-1 transition-all duration-200">
                        <div className="h-24 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center text-5xl">
                            {item.img}
                        </div>
                        <div className="p-4">
                            <div className="flex items-start justify-between gap-2 mb-2">
                                <h3 className="font-bold text-sm text-textDark dark:text-white leading-tight">{item.title}</h3>
                                <span className={`${conditionColor[item.condition]} flex-shrink-0 text-xs`}>{item.condition}</span>
                            </div>
                            <p className="text-xs text-slate-500 mb-3">Seller: {item.seller} · {item.category}</p>
                            <div className="flex items-center justify-between">
                                <span className="font-black text-lg text-primary">₹{item.price}</span>
                                <div className="flex gap-2">
                                    <button className="btn-ghost text-xs py-1.5">Save</button>
                                    <button className="btn-primary text-xs py-1.5 px-3">Contact</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 card p-5 bg-teal-50 dark:bg-teal-900/20 border border-teal-100">
                <h3 className="font-bold text-textDark dark:text-white mb-2 flex items-center gap-2"><Award size={16} className="text-teal-500" /> How Marketplace Helps You</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">A trusted campus-only platform to buy and sell textbooks, gadgets, and essentials. Save money and help fellow students with what they need.</p>
            </div>
        </div>
    );
}
