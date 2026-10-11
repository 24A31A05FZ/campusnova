import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Settings as SettingsIcon, ArrowLeft, Bell, Moon, Shield, Key, Eye, Award } from 'lucide-react';

export default function Settings() {
    const [emailAlerts, setEmailAlerts] = useState(true);
    const [smsAlerts, setSmsAlerts] = useState(false);
    const [placementAlerts, setPlacementAlerts] = useState(true);
    const [eventAlerts, setEventAlerts] = useState(true);
    const [attendanceWarnings, setAttendanceWarnings] = useState(true);

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
            <Link to="/dashboard" className="btn-ghost text-sm mb-6 inline-flex"><ArrowLeft size={15} /> Back to Dashboard</Link>

            <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center shadow-md flex-shrink-0">
                    <SettingsIcon size={24} className="text-white" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-black text-navy dark:text-white">Settings & Preferences</h1>
                        <span className="badge-blue">System Settings</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Notification preferences, appearance controls, and security configurations.</p>
                </div>
            </div>

            <div className="space-y-6">
                {/* Notification Preferences */}
                <div className="card p-6">
                    <div className="flex items-center gap-2.5 mb-4">
                        <Bell size={18} className="text-primary" />
                        <h3 className="text-base font-bold text-navy dark:text-white">Notification Channels</h3>
                    </div>
                    <div className="space-y-4">
                        {[
                            { label: 'Instant Placement & Job Alerts', desc: 'Notify immediately when eligible companies post new roles', state: placementAlerts, set: setPlacementAlerts },
                            { label: 'Attendance Risk Threshold Alerts', desc: 'Warn when any subject falls below 75% attendance', state: attendanceWarnings, set: setAttendanceWarnings },
                            { label: 'Club & Campus Event Invitations', desc: 'Updates on newly published events, hackathons, and fests', state: eventAlerts, set: setEventAlerts },
                            { label: 'Digest Email Summaries', desc: 'Weekly roundup of assignments due and grades received', state: emailAlerts, set: setEmailAlerts },
                            { label: 'SMS / WhatsApp Critical Broadcasts', desc: 'Emergency campus weather or administrative notices', state: smsAlerts, set: setSmsAlerts },
                        ].map((pref, i) => (
                            <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                                <div className="pr-4">
                                    <h4 className="font-semibold text-slate-900 dark:text-white text-xs">{pref.label}</h4>
                                    <p className="text-[11px] text-slate-500 mt-0.5">{pref.desc}</p>
                                </div>
                                <button
                                    onClick={() => pref.set(!pref.state)}
                                    className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 ${pref.state ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'
                                        }`}
                                >
                                    <div
                                        className={`w-5 h-5 rounded-full bg-white transition-transform ${pref.state ? 'translate-x-5' : 'translate-x-0'
                                            }`}
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Security & Access */}
                <div className="card p-6">
                    <div className="flex items-center gap-2.5 mb-4">
                        <Shield size={18} className="text-primary" />
                        <h3 className="text-base font-bold text-navy dark:text-white">Account Security</h3>
                    </div>
                    <div className="space-y-3 text-xs">
                        <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                            <div>
                                <p className="font-semibold text-slate-900 dark:text-white">Institutional SSO Sign-In</p>
                                <p className="text-slate-500 mt-0.5">Connected to Google Workspace (campus.edu domain)</p>
                            </div>
                            <span className="badge-green">Verified</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                            <div>
                                <p className="font-semibold text-slate-900 dark:text-white">Two-Factor Authentication (2FA)</p>
                                <p className="text-slate-500 mt-0.5">Required for Placement portal and Grade verifications</p>
                            </div>
                            <span className="badge-green">Enabled</span>
                        </div>
                    </div>
                </div>

                {/* How it helps */}
                <div className="card p-5 bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <h3 className="font-bold text-textDark dark:text-white mb-2 flex items-center gap-2">
                        <Award size={16} className="text-slate-600" /> User Controlled Privacy & Noise Filtering
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        CampusNova empowers every student and faculty member to customize exactly what information reaches their feed and inbox, preventing campus fatigue while guaranteeing urgent announcements are never lost.
                    </p>
                </div>
            </div>
        </div>
    );
}
