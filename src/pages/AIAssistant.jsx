import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { aiSuggestions, aiMessages } from '../data/demoData';
import { Bot, ArrowLeft, Send, User, Sparkles } from 'lucide-react';

const aiResponses = {
    'What events are happening this week?': 'This week on campus: 🎉 **CodeFest 2026** (Oct 20, CS Auditorium) • **Startup Pitch Day** (Oct 22, Innovation Hub). You can register directly from the Events page!',
    'Show me pending assignments': 'You have **3 pending assignments**: 📋 DSA — AVL Tree (due Oct 15) • DBMS — ER Diagram (due Oct 18) • ML — Linear Regression (due Oct 25). Go to Assignments to submit.',
    'Find internship opportunities in ML': 'Found **1 ML internship**: 🚀 **Flipkart — ML Engineer Intern** | ₹35,000/month | Bengaluru | Eligibility: CGPA 7.5+ | Deadline: Oct 28. Apply from the Placements page!',
    'How is my attendance this semester?': 'Your overall attendance is **82%** — you are in good standing! ⚠️ Computer Networks (67%) and DBMS (75%) need attention. Check the Attendance page for detailed info.',
    'What clubs can I join?': 'There are **24 clubs** available! Some highlights: 🤖 Robocraft Society • 💻 GDSC • 🎵 Rhythms Cultural Club • 🏃 Sports Council. Visit the Clubs page to explore and join.',
    'Summarize today\'s announcements': "Today's announcements: 📣 Mid-semester exam schedule released • Infosys campus drive registration by Oct 20 • ACM weekly contest at 7 PM • Campus wifi maintenance Sunday 2–4 AM.",
};

const defaultReply = (q) => `I found some information about "${q}". This is a demo response — in the actual CampusNova app, I would search across all campus modules to give you a precise, personalized answer!`;

export default function AIAssistant() {
    const [messages, setMessages] = useState(aiMessages);
    const [input, setInput] = useState('');
    const bottomRef = useRef(null);

    const sendMessage = (text) => {
        if (!text.trim()) return;
        const userMsg = { role: 'user', text: text.trim() };
        const aiReply = { role: 'assistant', text: aiResponses[text.trim()] || defaultReply(text.trim()) };
        setMessages(prev => [...prev, userMsg, aiReply]);
        setInput('');
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto">
            <Link to="/dashboard" className="btn-ghost text-sm mb-6 inline-flex"><ArrowLeft size={15} /> Back to Dashboard</Link>
            <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-md flex-shrink-0">
                    <Bot size={22} className="text-white" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-black text-navy dark:text-white">AI Assistant</h1>
                        <span className="badge-violet">Concept Demo</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Ask anything about campus — events, academics, placements, clubs, and more.</p>
                </div>
            </div>

            <div className="card flex flex-col" style={{ height: '500px' }}>
                {/* Chat area */}
                <div className="flex-1 overflow-y-auto scrollbar-thin p-5 space-y-4">
                    {messages.map((msg, i) => (
                        <div key={i} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'assistant' ? 'bg-gradient-to-br from-violet-500 to-purple-700' : 'gradient-card'}`}>
                                {msg.role === 'assistant' ? <Bot size={14} className="text-white" /> : <User size={14} className="text-white" />}
                            </div>
                            <div className={`max-w-[80%] rounded-2xl p-3.5 text-sm leading-relaxed ${msg.role === 'assistant' ? 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-tl-none' : 'bg-primary text-white rounded-tr-none'}`}>
                                {msg.text.split(/\*\*(.*?)\*\*/g).map((part, j) =>
                                    j % 2 === 1 ? <strong key={j}>{part}</strong> : <span key={j}>{part}</span>
                                )}
                            </div>
                        </div>
                    ))}
                    <div ref={bottomRef} />
                </div>

                {/* Suggestions */}
                {messages.length <= 1 && (
                    <div className="px-5 pb-3">
                        <p className="text-xs text-slate-400 mb-2 flex items-center gap-1"><Sparkles size={11} /> Suggested questions</p>
                        <div className="flex flex-wrap gap-2">
                            {aiSuggestions.slice(0, 4).map(s => (
                                <button key={s} onClick={() => sendMessage(s)}
                                    className="text-xs bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-300 px-3 py-1.5 rounded-full hover:bg-violet-100 transition-colors">
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Input */}
                <div className="border-t border-slate-100 dark:border-slate-700 p-4 flex items-center gap-3">
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
                        placeholder="Ask about campus events, assignments, placements..."
                        className="input-field text-sm flex-1"
                    />
                    <button
                        onClick={() => sendMessage(input)}
                        disabled={!input.trim()}
                        className="btn-primary text-sm py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send size={15} />
                    </button>
                </div>
            </div>

            <p className="text-xs text-center text-slate-400 mt-3 flex items-center justify-center gap-1">
                <Bot size={11} /> This is a concept demo. Responses are pre-scripted for presentation purposes.
            </p>
        </div>
    );
}
