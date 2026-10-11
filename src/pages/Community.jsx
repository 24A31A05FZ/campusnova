import { useState } from 'react';
import { Link } from 'react-router-dom';
import { communityPosts } from '../data/demoData';
import { MessageSquare, ArrowLeft, Award, Heart, MessageCircle, Search, ThumbsUp } from 'lucide-react';

const categories = ['All', 'Study Group', 'Collaboration', 'Questions', 'General'];

export default function Community() {
    const [filter, setFilter] = useState('All');
    const [liked, setLiked] = useState([]);

    const filtered = filter === 'All' ? communityPosts : communityPosts.filter(p => p.category === filter);

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
            <Link to="/dashboard" className="btn-ghost text-sm mb-6 inline-flex"><ArrowLeft size={15} /> Back to Dashboard</Link>
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-md flex-shrink-0">
                        <MessageSquare size={22} className="text-white" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-black text-navy dark:text-white">Community</h1>
                            <span className="badge-violet">Preview</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Connect with peers, ask questions, and form study groups.</p>
                    </div>
                </div>
                <button className="btn-primary text-sm">+ New Post</button>
            </div>

            <div className="flex gap-2 mb-5 flex-wrap">
                {categories.map(c => (
                    <button key={c} onClick={() => setFilter(c)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${filter === c ? 'bg-primary text-white border-primary' : 'border-slate-200 text-slate-600 hover:border-primary hover:text-primary'}`}>
                        {c}
                    </button>
                ))}
            </div>

            <div className="space-y-4">
                {filtered.map(post => {
                    const isLiked = liked.includes(post.id);
                    return (
                        <div key={post.id} className="card p-5 hover:shadow-card-hover transition-all">
                            <div className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-full gradient-card flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                    {post.avatar}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="font-semibold text-sm text-textDark dark:text-white">{post.author}</span>
                                        <span className="text-xs text-slate-400">{post.time}</span>
                                        <span className="badge-blue text-xs">{post.category}</span>
                                    </div>
                                    <h3 className="font-bold text-textDark dark:text-white mt-1.5">{post.title}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{post.content}</p>
                                    <div className="flex items-center gap-4 mt-3">
                                        <button
                                            onClick={() => setLiked(prev => prev.includes(post.id) ? prev.filter(l => l !== post.id) : [...prev, post.id])}
                                            className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${isLiked ? 'text-primary' : 'text-slate-400 hover:text-primary'}`}
                                        >
                                            <ThumbsUp size={13} /> {post.likes + (isLiked ? 1 : 0)} Likes
                                        </button>
                                        <button className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-primary transition-colors">
                                            <MessageCircle size={13} /> {post.replies} Replies
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-8 card p-5 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100">
                <h3 className="font-bold text-textDark dark:text-white mb-2 flex items-center gap-2"><Award size={16} className="text-yellow-500" /> How Community Helps You</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Campus-wide discussion forum to ask questions, find collaborators, share resources, and build a connected student community.</p>
            </div>
        </div>
    );
}
