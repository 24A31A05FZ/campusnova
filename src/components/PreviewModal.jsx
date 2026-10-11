import { X } from 'lucide-react';

export default function PreviewModal({ title, children, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto animate-fade-in">
                <div className="sticky top-0 flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-t-2xl">
                    <h2 className="font-bold text-lg text-textDark dark:text-white">{title}</h2>
                    <button
                        onClick={onClose}
                        className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                        <X size={18} />
                    </button>
                </div>
                <div className="p-5">{children}</div>
            </div>
        </div>
    );
}
