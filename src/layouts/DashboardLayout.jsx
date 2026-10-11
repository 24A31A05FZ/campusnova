import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Bell, Search, Sun, Moon, Menu, ChevronLeft } from 'lucide-react';

export default function DashboardLayout({ dark, setDark }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [notify, setNotify] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-background dark:bg-slate-900">
            <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

            {/* Main area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Top bar */}
                <header className="h-16 flex items-center gap-3 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="lg:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                        <Menu size={20} />
                    </button>

                    {/* Search */}
                    <div className="flex-1 max-w-sm hidden sm:block">
                        <div className="relative">
                            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search Campus..."
                                className="input-field pl-9 py-2 text-sm h-9"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 ml-auto">
                        <Link to="/" className="text-xs text-primary font-medium flex items-center gap-1 hover:underline hidden sm:flex">
                            <ChevronLeft size={13} />
                            Home
                        </Link>

                        {/* Dark mode */}
                        <button
                            onClick={() => setDark(!dark)}
                            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                            {dark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        {/* Notification bell */}
                        <button
                            onClick={() => setNotify(!notify)}
                            className="relative p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                            <Bell size={18} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
                        </button>

                        {/* Profile */}
                        <Link to="/dashboard/profile" className="w-9 h-9 rounded-full gradient-card flex items-center justify-center text-white text-sm font-bold hover:scale-105 transition-transform">
                            JS
                        </Link>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 overflow-y-auto scrollbar-thin">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
