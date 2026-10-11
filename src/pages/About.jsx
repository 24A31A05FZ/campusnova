import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Target, Users, Zap, Shield, Award, ArrowRight, Heart } from 'lucide-react';

export default function About({ dark, setDark }) {
    return (
        <div className="min-h-screen bg-background dark:bg-slate-900">
            <Navbar dark={dark} setDark={setDark} />

            {/* Hero */}
            <section className="pt-28 pb-16 gradient-hero text-white text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 relative">
                    <span className="badge bg-white/20 text-white mb-3">Our Mission & Vision</span>
                    <h1 className="text-4xl sm:text-5xl font-black mt-2">Reimagining the Campus Experience</h1>
                    <p className="text-blue-200 text-lg mt-4 max-w-2xl mx-auto">
                        Born out of first-hand student frustration with fragmented college portals, lost notices, and clunky legacy software.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <span className="badge-blue mb-2">The Genesis</span>
                        <h2 className="text-2xl sm:text-3xl font-black text-navy dark:text-white mt-1">Why CampusNova?</h2>
                        <p className="text-slate-600 dark:text-slate-300 text-sm mt-4 leading-relaxed">
                            Every day across universities, students navigate between 6 to 10 disconnected platforms: one legacy ERP for attendance, WhatsApp groups for assignments, messy bulletin boards for club events, separate portals for placements, and informal groups for buying textbooks.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 text-sm mt-3 leading-relaxed">
                            <strong>CampusNova is the unified digital operating system for higher education.</strong> By connecting students, faculty, club organizers, and placement officers into a singular, responsive ecosystem, we eliminate administrative drag and foster an active, vibrant campus culture.
                        </p>
                    </div>
                    <div className="card p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800/80 border border-blue-100 dark:border-slate-700">
                        <h3 className="font-bold text-navy dark:text-white text-base mb-4">Core Architectural Tenets</h3>
                        <div className="space-y-4">
                            {[
                                { icon: Zap, title: 'Speed & Mobile-First', desc: 'Instant page transitions and touch-optimized flows for busy students on the go.' },
                                { icon: Shield, title: 'Role-Based Privacy', desc: 'Granular permissions safeguarding personal grades while opening public discussions.' },
                                { icon: Heart, title: 'Community Centric', desc: 'Built not just to manage records, but to make collegiate life connected and fun.' },
                            ].map((t, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <t.icon size={16} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">{t.title}</h4>
                                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{t.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Audiences */}
            <section className="py-16 bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-black text-navy dark:text-white">Designed For All Stakeholders</h2>
                        <p className="text-slate-500 text-sm mt-2">Every member of the university community gains immense value from day one.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { role: 'Students', desc: 'Single sign-on for attendance, grades, hackathon signups, placements, and club forums.', highlight: '100% Mobile Access' },
                            { role: 'Faculty', desc: 'Instant attendance roll call, streamlined assignment grading, and noise-free announcements.', highlight: 'Saves 5+ Hrs/Week' },
                            { role: 'Club Leaders', desc: 'QR code ticketing, RSVP tracking, member recruitment queues, and event analytics.', highlight: '3x Event Reach' },
                            { role: 'University Admins', desc: 'Campus-wide visibility, fast grievance resolution, verified recruitment metrics.', highlight: 'Audit Compliant' },
                        ].map((p, i) => (
                            <div key={i} className="card p-5">
                                <span className="badge-violet text-xs mb-2">{p.highlight}</span>
                                <h3 className="font-bold text-base text-navy dark:text-white">{p.role}</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-black text-navy dark:text-white">See the Future of Campus Tech</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-3 mb-6">
                        Explore our interactive prototype prepared for the entrepreneurship demonstration.
                    </p>
                    <Link to="/dashboard" className="btn-primary text-base py-3 px-8 shadow-xl">
                        Launch Showcase <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
