import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';

export default function Footer() {
    const cols = [
        {
            title: 'Product',
            links: [
                { label: 'Features', to: '/features' },
                { label: 'Dashboard', to: '/dashboard' },
                { label: 'About', to: '/about' },
                { label: 'Contact', to: '/contact' },
            ],
        },
        {
            title: 'Modules',
            links: [
                { label: 'Academics', to: '/dashboard/academics' },
                { label: 'Events', to: '/dashboard/events' },
                { label: 'Placements', to: '/dashboard/placements' },
                { label: 'Community', to: '/dashboard/community' },
            ],
        },
        {
            title: 'Management',
            links: [
                { label: 'Faculty Portal', to: '/dashboard/faculty-portal' },
                { label: 'Admin Dashboard', to: '/dashboard/admin' },
                { label: 'Club Leader', to: '/dashboard/club-leader' },
                { label: 'Placement Officer', to: '/dashboard/placement-officer' },
            ],
        },
    ];

    return (
        <footer className="bg-navy text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="w-9 h-9 rounded-xl gradient-card flex items-center justify-center">
                                <span className="text-white font-black text-lg">N</span>
                            </div>
                            <div>
                                <div className="font-black text-xl tracking-tight">CampusNova</div>
                                <div className="text-xs text-blue-200 font-medium tracking-widest uppercase">One Campus Platform</div>
                            </div>
                        </div>
                        <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
                            One Platform. Every Campus Need. Bringing academics, events, communities, and career opportunities into one connected digital ecosystem.
                        </p>
                        <div className="flex items-center gap-3 mt-5">
                            {[
                                { name: 'GitHub', svg: <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /> },
                                { name: 'Twitter', svg: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
                                { name: 'LinkedIn', svg: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /> },
                            ].map((s, i) => (
                                <a key={i} href="#" aria-label={s.name} className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white fill-current">
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">{s.svg}</svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav Cols */}
                    {cols.map(col => (
                        <div key={col.title}>
                            <h3 className="font-bold text-sm text-white mb-4 uppercase tracking-widest">{col.title}</h3>
                            <ul className="space-y-2">
                                {col.links.map(l => (
                                    <li key={l.to}>
                                        <Link to={l.to} className="text-blue-200 text-sm hover:text-white transition-colors">
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact */}
                <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-6 text-blue-200 text-sm">
                        <span className="flex items-center gap-1.5"><Mail size={14} /> contact@campusnova.in</span>
                        <span className="flex items-center gap-1.5"><MapPin size={14} /> India</span>
                    </div>
                    <p className="text-blue-300 text-xs">
                        © 2026 CampusNova. This is a prototype for demonstration purposes.
                    </p>
                </div>
            </div>
        </footer>
    );
}
