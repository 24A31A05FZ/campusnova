import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bell, Sun, Moon, ChevronDown } from 'lucide-react';

export default function Navbar({ dark, setDark }) {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const links = [
        { label: 'Home', to: '/' },
        { label: 'Features', to: '/features' },
        { label: 'About', to: '/about' },
        { label: 'Contact', to: '/contact' },
    ];

    return (
        <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-700/60 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2.5 group">
                        <div className="w-9 h-9 rounded-xl gradient-card flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                            <span className="text-white font-black text-lg leading-none">N</span>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="font-black text-lg text-navy dark:text-white tracking-tight">CampusNova</span>
                            <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">One Campus Platform</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {links.map(l => (
                            <Link
                                key={l.to}
                                to={l.to}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === l.to
                                        ? 'text-primary bg-primary/8'
                                        : 'text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-primary/5'
                                    }`}
                            >
                                {l.label}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-2">
                        <button
                            onClick={() => setDark(!dark)}
                            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {dark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <Link to="/dashboard" className="btn-primary text-sm py-2 px-4">
                            Explore Dashboard
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 animate-fade-in">
                    <div className="px-4 py-3 space-y-1">
                        {links.map(l => (
                            <Link
                                key={l.to}
                                to={l.to}
                                onClick={() => setOpen(false)}
                                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                            >
                                {l.label}
                            </Link>
                        ))}
                        <Link
                            to="/dashboard"
                            onClick={() => setOpen(false)}
                            className="btn-primary w-full justify-center mt-2 text-sm"
                        >
                            Explore Dashboard
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
