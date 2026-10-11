import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react';

export default function Contact({ dark, setDark }) {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', college: '', role: 'Student', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-background dark:bg-slate-900">
            <Navbar dark={dark} setDark={setDark} />

            {/* Header */}
            <section className="pt-28 pb-16 gradient-hero text-white text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 relative">
                    <span className="badge bg-white/20 text-white mb-3">Institutional Inquiries & Demos</span>
                    <h1 className="text-4xl sm:text-5xl font-black mt-2">Get in Touch with CampusNova</h1>
                    <p className="text-blue-200 text-lg mt-4 max-w-2xl mx-auto">
                        Interested in piloting CampusNova at your university or campus society? We would love to connect.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-2xl font-black text-navy dark:text-white">Partner with Us</h2>
                        <p className="text-slate-600 dark:text-slate-300 text-sm mt-3 leading-relaxed">
                            Whether you are an institution leader looking to modernize student operations, a faculty head wanting to pilot attendance automation, or a student council leader eager to bring CampusNova to your campus, drop us a note!
                        </p>

                        <div className="mt-8 space-y-4">
                            {[
                                { icon: Mail, title: 'Email Us', desc: 'team@campusnova.edu / contact@campusnova.io' },
                                { icon: Phone, title: 'Direct Call / WhatsApp', desc: '+91 98765 01234' },
                                { icon: MapPin, title: 'Campus Innovation Center', desc: 'Student Incubation & Entrepreneurship Cell, Tech Campus' },
                            ].map((c, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                        <c.icon size={18} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xs text-slate-900 dark:text-white">{c.title}</h4>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{c.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-4 rounded-xl bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700">
                            <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                                💡 <strong>Pilot Program Offer:</strong> We provide full onboarding and zero-cost trials for university student clubs and academic departments during early pilot semesters.
                            </p>
                        </div>
                    </div>

                    <div className="card p-6 sm:p-8">
                        {submitted ? (
                            <div className="text-center py-10 space-y-3">
                                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-navy dark:text-white">Thank You for Reaching Out!</h3>
                                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                                    We've received your note and will get back to you within 24 hours to schedule an interactive demonstration walkthrough.
                                </p>
                                <button onClick={() => setSubmitted(false)} className="btn-secondary text-xs mt-4">
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <h3 className="text-lg font-bold text-navy dark:text-white mb-2">Request an Institutional Demo</h3>
                                <div>
                                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Your Name</label>
                                    <input
                                        required
                                        type="text"
                                        value={form.name}
                                        onChange={e => setForm({ ...form, name: e.target.value })}
                                        placeholder="e.g. Dr. Ramesh Kumar / Aarav Gupta"
                                        className="input-field text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Institutional Email</label>
                                    <input
                                        required
                                        type="email"
                                        value={form.email}
                                        onChange={e => setForm({ ...form, email: e.target.value })}
                                        placeholder="you@college.edu"
                                        className="input-field text-sm"
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">College / University</label>
                                        <input
                                            required
                                            type="text"
                                            value={form.college}
                                            onChange={e => setForm({ ...form, college: e.target.value })}
                                            placeholder="e.g. National Institute of Tech"
                                            className="input-field text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Your Role</label>
                                        <select
                                            value={form.role}
                                            onChange={e => setForm({ ...form, role: e.target.value })}
                                            className="input-field text-sm"
                                        >
                                            <option>Student Representative</option>
                                            <option>Faculty Member</option>
                                            <option>Dean / Department Head</option>
                                            <option>Placement Officer</option>
                                            <option>Club President</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Message</label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={form.message}
                                        onChange={e => setForm({ ...form, message: e.target.value })}
                                        placeholder="Tell us about your campus requirements, student size, or preferred pilot modules..."
                                        className="input-field text-sm resize-none"
                                    />
                                </div>
                                <button type="submit" className="btn-primary w-full justify-center text-sm py-2.5">
                                    <Send size={15} /> Submit Demo Request
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
