// ===== CAMPUS NOVA DEMO DATA =====

export const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Features', path: '/features' },
    { label: 'Solutions', path: '/about' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
];

export const sidebarSections = [
    {
        title: 'Overview',
        items: [
            { label: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard' },
        ],
    },
    {
        title: 'Academics',
        items: [
            { label: 'Subjects', path: '/dashboard/academics', icon: 'BookOpen' },
            { label: 'Assignments', path: '/dashboard/assignments', icon: 'ClipboardList' },
            { label: 'Attendance', path: '/dashboard/attendance', icon: 'CalendarCheck' },
            { label: 'Timetable', path: '/dashboard/timetable', icon: 'Clock' },
        ],
    },
    {
        title: 'Campus Life',
        items: [
            { label: 'Events', path: '/dashboard/events', icon: 'CalendarDays' },
            { label: 'Clubs', path: '/dashboard/clubs', icon: 'Users' },
            { label: 'Community', path: '/dashboard/community', icon: 'MessageSquare' },
            { label: 'Marketplace', path: '/dashboard/marketplace', icon: 'ShoppingBag' },
            { label: 'Lost & Found', path: '/dashboard/lost-found', icon: 'Search' },
        ],
    },
    {
        title: 'Career',
        items: [
            { label: 'Placements', path: '/dashboard/placements', icon: 'Briefcase' },
            { label: 'Resume Builder', path: '/dashboard/placements', icon: 'FileText' },
        ],
    },
    {
        title: 'Services',
        items: [
            { label: 'Complaints', path: '/dashboard/complaints', icon: 'AlertCircle' },
            { label: 'Notifications', path: '/dashboard/notifications', icon: 'Bell' },
            { label: 'AI Assistant', path: '/dashboard/ai-assistant', icon: 'Bot' },
        ],
    },
    {
        title: 'Management',
        items: [
            { label: 'Faculty Portal', path: '/dashboard/faculty-portal', icon: 'GraduationCap' },
            { label: 'Club Leader Portal', path: '/dashboard/club-leader', icon: 'Star' },
            { label: 'Placement Officer', path: '/dashboard/placement-officer', icon: 'Target' },
            { label: 'Admin Dashboard', path: '/dashboard/admin', icon: 'Shield' },
        ],
    },
    {
        title: 'Account',
        items: [
            { label: 'Profile', path: '/dashboard/profile', icon: 'User' },
            { label: 'Settings', path: '/dashboard/settings', icon: 'Settings' },
        ],
    },
];

export const dashboardModules = [
    {
        title: 'Academics',
        icon: 'BookOpen',
        description: 'Subjects, study materials, faculty info, and academic calendar.',
        path: '/dashboard/academics',
        color: 'from-blue-500 to-blue-600',
        badge: 'Active',
        badgeType: 'green',
        stats: '6 Subjects',
    },
    {
        title: 'Assignments',
        icon: 'ClipboardList',
        description: 'Pending deadlines, submission history, and grade tracking.',
        path: '/dashboard/assignments',
        color: 'from-violet-500 to-purple-600',
        badge: '3 Due',
        badgeType: 'amber',
        stats: '12 Total',
    },
    {
        title: 'Attendance',
        icon: 'CalendarCheck',
        description: 'Overall and subject-wise attendance with alerts.',
        path: '/dashboard/attendance',
        color: 'from-green-500 to-emerald-600',
        badge: '82%',
        badgeType: 'green',
        stats: 'This Semester',
    },
    {
        title: 'Events',
        icon: 'CalendarDays',
        description: 'Tech, cultural, sports, and entrepreneurship events.',
        path: '/dashboard/events',
        color: 'from-orange-500 to-red-500',
        badge: '5 Upcoming',
        badgeType: 'blue',
        stats: 'This Month',
    },
    {
        title: 'Clubs',
        icon: 'Users',
        description: 'Join technical, cultural, and sports clubs. Explore activities.',
        path: '/dashboard/clubs',
        color: 'from-pink-500 to-rose-500',
        badge: 'Explore',
        badgeType: 'blue',
        stats: '24 Clubs',
    },
    {
        title: 'Placements',
        icon: 'Briefcase',
        description: 'Internships, full-time jobs, hackathons, and career prep.',
        path: '/dashboard/placements',
        color: 'from-indigo-500 to-blue-600',
        badge: '8 New',
        badgeType: 'green',
        stats: 'Opportunities',
    },
    {
        title: 'Marketplace',
        icon: 'ShoppingBag',
        description: 'Buy and sell books, electronics, lab equipment.',
        path: '/dashboard/marketplace',
        color: 'from-teal-500 to-cyan-600',
        badge: 'Preview',
        badgeType: 'blue',
        stats: 'Campus Store',
    },
    {
        title: 'Community',
        icon: 'MessageSquare',
        description: 'Discussion feeds, study groups, Q&A, and peer learning.',
        path: '/dashboard/community',
        color: 'from-yellow-500 to-orange-500',
        badge: 'Preview',
        badgeType: 'blue',
        stats: 'Connect',
    },
    {
        title: 'Lost & Found',
        icon: 'Search',
        description: 'Report or discover lost and found items across campus.',
        path: '/dashboard/lost-found',
        color: 'from-slate-500 to-slate-600',
        badge: 'Preview',
        badgeType: 'violet',
        stats: '12 Items',
    },
    {
        title: 'Complaints',
        icon: 'AlertCircle',
        description: 'Submit and track campus maintenance and service complaints.',
        path: '/dashboard/complaints',
        color: 'from-red-500 to-rose-600',
        badge: 'Preview',
        badgeType: 'violet',
        stats: 'Submit',
    },
    {
        title: 'AI Assistant',
        icon: 'Bot',
        description: 'Ask questions about campus, events, and academics using AI.',
        path: '/dashboard/ai-assistant',
        color: 'from-violet-500 to-purple-700',
        badge: 'Concept',
        badgeType: 'violet',
        stats: 'Powered by AI',
    },
    {
        title: 'Notifications',
        icon: 'Bell',
        description: 'Smart alerts for academics, events, placements, and clubs.',
        path: '/dashboard/notifications',
        color: 'from-blue-400 to-blue-500',
        badge: '6 Unread',
        badgeType: 'red',
        stats: 'All Categories',
    },
];

export const subjects = [
    { code: 'CS301', name: 'Data Structures & Algorithms', faculty: 'Dr. Ananya Reddy', credits: 4, progress: 72 },
    { code: 'CS302', name: 'Database Management Systems', faculty: 'Prof. Ravi Kumar', credits: 3, progress: 58 },
    { code: 'CS303', name: 'Operating Systems', faculty: 'Dr. Sneha Patel', credits: 4, progress: 85 },
    { code: 'CS304', name: 'Computer Networks', faculty: 'Prof. Kiran Mehta', credits: 3, progress: 45 },
    { code: 'CS305', name: 'Software Engineering', faculty: 'Dr. Priya Sharma', credits: 3, progress: 90 },
    { code: 'CS306', name: 'Machine Learning', faculty: 'Dr. Arjun Nair', credits: 4, progress: 30 },
];

export const assignments = [
    {
        id: 1, subject: 'Data Structures', title: 'Implement AVL Tree', deadline: '2026-10-15',
        status: 'pending', priority: 'high', marks: 20,
    },
    {
        id: 2, subject: 'DBMS', title: 'Design ER Diagram for Library', deadline: '2026-10-18',
        status: 'pending', priority: 'medium', marks: 15,
    },
    {
        id: 3, subject: 'OS', title: 'Process Scheduling Simulation', deadline: '2026-10-20',
        status: 'submitted', priority: 'low', marks: 25,
    },
    {
        id: 4, subject: 'CN', title: 'TCP/IP Socket Programming', deadline: '2026-10-12',
        status: 'graded', grade: 'A', marks: 30,
    },
    {
        id: 5, subject: 'ML', title: 'Linear Regression from Scratch', deadline: '2026-10-25',
        status: 'pending', priority: 'medium', marks: 20,
    },
];

export const attendanceData = [
    { subject: 'Data Structures', attended: 38, total: 45, percent: 84 },
    { subject: 'DBMS', attended: 30, total: 40, percent: 75 },
    { subject: 'Operating Systems', attended: 42, total: 48, percent: 88 },
    { subject: 'Computer Networks', attended: 28, total: 42, percent: 67 },
    { subject: 'Software Engineering', attended: 35, total: 36, percent: 97 },
    { subject: 'Machine Learning', attended: 20, total: 30, percent: 67 },
];

export const timetable = {
    Monday: [
        { time: '9:00 AM', subject: 'Data Structures', room: 'CSE-201', faculty: 'Dr. Ananya Reddy', type: 'Lecture' },
        { time: '11:00 AM', subject: 'DBMS', room: 'CSE-102', faculty: 'Prof. Ravi Kumar', type: 'Lab' },
        { time: '2:00 PM', subject: 'Operating Systems', room: 'CSE-301', faculty: 'Dr. Sneha Patel', type: 'Lecture' },
    ],
    Tuesday: [
        { time: '10:00 AM', subject: 'Machine Learning', room: 'AI-Lab', faculty: 'Dr. Arjun Nair', type: 'Lab' },
        { time: '1:00 PM', subject: 'Computer Networks', room: 'NET-101', faculty: 'Prof. Kiran Mehta', type: 'Lecture' },
    ],
    Wednesday: [
        { time: '9:00 AM', subject: 'Software Engineering', room: 'SE-201', faculty: 'Dr. Priya Sharma', type: 'Lecture' },
        { time: '11:00 AM', subject: 'Data Structures', room: 'DSA-Lab', faculty: 'Dr. Ananya Reddy', type: 'Lab' },
        { time: '3:00 PM', subject: 'DBMS', room: 'CSE-102', faculty: 'Prof. Ravi Kumar', type: 'Tutorial' },
    ],
    Thursday: [
        { time: '10:00 AM', subject: 'Operating Systems', room: 'OS-Lab', faculty: 'Dr. Sneha Patel', type: 'Lab' },
        { time: '2:00 PM', subject: 'Machine Learning', room: 'AI-201', faculty: 'Dr. Arjun Nair', type: 'Lecture' },
    ],
    Friday: [
        { time: '9:00 AM', subject: 'Computer Networks', room: 'NET-Lab', faculty: 'Prof. Kiran Mehta', type: 'Lab' },
        { time: '11:00 AM', subject: 'Software Engineering', room: 'SE-201', faculty: 'Dr. Priya Sharma', type: 'Tutorial' },
    ],
};

export const events = [
    {
        id: 1, title: 'CodeFest 2026', category: 'Technical', date: 'Oct 20, 2026', venue: 'CS Auditorium',
        desc: 'Annual programming competition open to all CSE students.', registered: false, seats: 200, image: 'tech',
    },
    {
        id: 2, title: 'Startup Pitch Day', category: 'Entrepreneurship', date: 'Oct 22, 2026', venue: 'Innovation Hub',
        desc: 'Present your startup idea to industry mentors and investors.', registered: true, seats: 50, image: 'startup',
    },
    {
        id: 3, title: 'Rhythm & Dance Showdown', category: 'Cultural', date: 'Oct 28, 2026', venue: 'Open Amphitheater',
        desc: 'Annual cultural fiesta with dance, music, and drama performances.', registered: false, seats: 500, image: 'cultural',
    },
    {
        id: 4, title: 'ML Workshop: Neural Networks', category: 'Workshop', date: 'Nov 3, 2026', venue: 'AI Lab',
        desc: 'Hands-on workshop on building neural networks with PyTorch.', registered: true, seats: 40, image: 'workshop',
    },
    {
        id: 5, title: 'Inter-College Cricket League', category: 'Sports', date: 'Nov 8, 2026', venue: 'Sports Ground',
        desc: 'Compete with teams from 10 colleges. Register your team now.', registered: false, seats: 120, image: 'sports',
    },
    {
        id: 6, title: 'Web3 & Blockchain Seminar', category: 'Seminar', date: 'Nov 12, 2026', venue: 'Seminar Hall A',
        desc: 'Deep dive into blockchain technology and decentralized applications.', registered: false, seats: 150, image: 'seminar',
    },
];

export const clubs = [
    {
        id: 1, name: 'ACM Student Chapter', category: 'Technical', members: 120, desc: 'Algorithms, competitive programming and CS research.',
        activities: ['Weekly contests', 'Guest lectures', 'Research papers'], joined: true,
    },
    {
        id: 2, name: 'Google Developer Student Club', category: 'Technical', members: 145, desc: 'Build with Google technologies, Android, Firebase, Flutter.',
        activities: ['Hackathons', 'Build sessions', 'Info sessions'], joined: false,
    },
    {
        id: 3, name: 'Entrepreneurship Cell', category: 'Entrepreneurship', members: 80, desc: 'Fostering startup culture and entrepreneurial mindset.',
        activities: ['Pitch nights', 'Mentorship', 'Startup visits'], joined: true,
    },
    {
        id: 4, name: 'Rhythms - Cultural Club', category: 'Cultural', members: 95, desc: 'Dance, music, drama and creative arts club.',
        activities: ['Rehearsals', 'Competitions', 'Annual fest'], joined: false,
    },
    {
        id: 5, name: 'Robocraft Society', category: 'Technical', members: 65, desc: 'Robotics, IoT and embedded systems enthusiasts.',
        activities: ['Robo wars', 'IoT projects', 'Circuit design'], joined: false,
    },
    {
        id: 6, name: 'Sports & Athletics Council', category: 'Sports', members: 210, desc: 'Organize and participate in all campus sports events.',
        activities: ['Cricket', 'Football', 'Athletics'], joined: true,
    },
];

export const placements = [
    {
        id: 1, company: 'Infosys', role: 'Software Engineer Intern', type: 'Internship',
        stipend: '₹25,000/month', skills: ['Java', 'Spring Boot', 'SQL'], eligibility: 'CGPA 7.0+',
        deadline: 'Oct 20, 2026', location: 'Bengaluru', status: 'open',
    },
    {
        id: 2, company: 'Google', role: 'SWE (Full Time)', type: 'Full-time',
        stipend: '₹45 LPA', skills: ['DSA', 'System Design', 'Python'], eligibility: 'CGPA 8.0+',
        deadline: 'Oct 25, 2026', location: 'Hyderabad', status: 'open',
    },
    {
        id: 3, company: 'TCS', role: 'Data Analyst', type: 'Full-time',
        stipend: '₹7 LPA', skills: ['Python', 'SQL', 'Power BI'], eligibility: 'CGPA 6.5+',
        deadline: 'Nov 1, 2026', location: 'Chennai', status: 'open',
    },
    {
        id: 4, company: 'Flipkart', role: 'ML Engineer Intern', type: 'Internship',
        stipend: '₹35,000/month', skills: ['Machine Learning', 'Python', 'TensorFlow'], eligibility: 'CGPA 7.5+',
        deadline: 'Oct 28, 2026', location: 'Bengaluru', status: 'open',
    },
    {
        id: 5, company: 'Smart India Hackathon', role: 'Team Participation', type: 'Hackathon',
        stipend: 'Prize: ₹1,00,000', skills: ['Problem Solving', 'Innovation'], eligibility: 'All Students',
        deadline: 'Nov 5, 2026', location: 'Pan India', status: 'open',
    },
];

export const marketplaceItems = [
    { id: 1, title: 'DSA Made Easy (Karumanchi)', category: 'Books', price: 250, condition: 'Good', seller: 'Arjun K.', img: '📚' },
    { id: 2, title: 'Casio FX-991EX Calculator', category: 'Electronics', price: 800, condition: 'Like New', seller: 'Priya M.', img: '🔢' },
    { id: 3, title: 'Lab Record Book (Set of 5)', category: 'Stationery', price: 120, condition: 'New', seller: 'Rahul S.', img: '📓' },
    { id: 4, title: 'Raspberry Pi 4 (4GB)', category: 'Electronics', price: 3500, condition: 'Good', seller: 'Sneha T.', img: '💻' },
    { id: 5, title: 'Mini Fridge (Hostel)', category: 'Hostel', price: 4500, condition: 'Fair', seller: 'Kiran B.', img: '🧊' },
    { id: 6, title: 'CLRS Algorithms Book', category: 'Books', price: 400, condition: 'Like New', seller: 'David J.', img: '📖' },
];

export const communityPosts = [
    {
        id: 1, author: 'Priya S.', avatar: 'P', time: '2h ago',
        title: 'Resources for GATE CS 2027?', content: 'Looking for the best study plan for GATE CSE. Any seniors who cleared it recently?',
        category: 'Study Group', likes: 24, replies: 8,
    },
    {
        id: 2, author: 'Rahul M.', avatar: 'R', time: '5h ago',
        title: 'Need partner for Hackathon team', content: 'Looking for a UI/UX designer + ML person for Smart India Hackathon. DM me!',
        category: 'Collaboration', likes: 15, replies: 12,
    },
    {
        id: 3, author: 'Ananya K.', avatar: 'A', time: '1d ago',
        title: 'Campus Wifi in Block C is down again', content: 'This has been happening every Monday morning. Anyone else facing this?',
        category: 'General', likes: 45, replies: 20,
    },
    {
        id: 4, author: 'Dev T.', avatar: 'D', time: '2d ago',
        title: 'How to get AWS student credits?', content: 'I heard AWS offers free credits for students. How do we apply for it?',
        category: 'Questions', likes: 31, replies: 14,
    },
];

export const lostItems = [
    { id: 1, title: 'Blue JBL Earphones', location: 'Library', date: 'Oct 8', type: 'Lost', contact: '4th year CSE' },
    { id: 2, title: 'ID Card - Rohit Shah', location: 'Canteen', date: 'Oct 9', type: 'Found', contact: 'Security Desk' },
    { id: 3, title: 'Black Backpack (Dell logo)', location: 'Seminar Hall A', date: 'Oct 7', type: 'Lost', contact: '2nd year ECE' },
    { id: 4, title: 'Scientific Calculator', location: 'Lab 204', date: 'Oct 10', type: 'Found', contact: 'Lab Assistant' },
    { id: 5, title: 'Water Bottle (Milton)', location: 'Sports Ground', date: 'Oct 8', type: 'Lost', contact: '3rd year ME' },
];

export const complaints = [
    { id: 'CMP-001', category: 'Wi-Fi', desc: 'Block B WiFi keeps disconnecting every hour.', status: 'Resolved', date: 'Oct 5' },
    { id: 'CMP-002', category: 'Classroom', desc: 'Projector in CS-301 is not working.', status: 'In Progress', date: 'Oct 7' },
    { id: 'CMP-003', category: 'Hostel', desc: 'Water supply issue in Hostel Block D.', status: 'Pending', date: 'Oct 9' },
    { id: 'CMP-004', category: 'Transport', desc: 'Bus Route 4 timing incorrect.', status: 'Pending', date: 'Oct 10' },
];

export const notifications = [
    { id: 1, type: 'Academic', title: 'Mid-Semester Exam Schedule Released', time: '2h ago', read: false, icon: 'BookOpen' },
    { id: 2, type: 'Assignment', title: 'DSA Assignment due in 3 days', time: '4h ago', read: false, icon: 'ClipboardList' },
    { id: 3, type: 'Placement', title: 'Infosys internship drive: Register by Oct 20', time: '6h ago', read: false, icon: 'Briefcase' },
    { id: 4, type: 'Event', title: 'CodeFest 2026 registrations open!', time: '1d ago', read: true, icon: 'CalendarDays' },
    { id: 5, type: 'Club', title: 'ACM club weekly contest starts at 7 PM', time: '1d ago', read: true, icon: 'Users' },
    { id: 6, type: 'General', title: 'Campus wifi maintenance on Sunday 2 AM-4 AM', time: '2d ago', read: true, icon: 'Bell' },
];

export const aiSuggestions = [
    'What events are happening this week?',
    'Show me pending assignments',
    'Find internship opportunities in ML',
    'How is my attendance this semester?',
    'What clubs can I join?',
    'Summarize today\'s announcements',
    'Which placements am I eligible for?',
    'Show my timetable for tomorrow',
];

export const aiMessages = [
    { role: 'assistant', text: 'Hi there! I\'m CampusNova AI. I can help you discover events, check your academics, explore placements, and more. What would you like to know today?' },
];

export const featureHighlights = [
    { icon: 'BookOpen', title: 'Academics', desc: 'Subjects, materials, calendar, exam schedules, faculty info.', color: 'blue' },
    { icon: 'ClipboardList', title: 'Assignments', desc: 'Track deadlines, submit work, view grades.', color: 'violet' },
    { icon: 'CalendarCheck', title: 'Attendance', desc: 'Real-time subject-wise attendance and alerts.', color: 'green' },
    { icon: 'Clock', title: 'Timetable', desc: 'Daily and weekly class schedules with room info.', color: 'orange' },
    { icon: 'CalendarDays', title: 'Events', desc: 'Campus events across all categories with registration.', color: 'red' },
    { icon: 'Users', title: 'Clubs', desc: 'Discover, join, and engage with campus clubs.', color: 'pink' },
    { icon: 'Briefcase', title: 'Placements', desc: 'Internships, jobs, hackathons, and career prep.', color: 'indigo' },
    { icon: 'ShoppingBag', title: 'Marketplace', desc: 'Buy and sell campus essentials with peers.', color: 'teal' },
    { icon: 'MessageSquare', title: 'Community', desc: 'Discussion feeds, Q&A, study groups.', color: 'yellow' },
    { icon: 'Search', title: 'Lost & Found', desc: 'Campus-wide lost and found reporting system.', color: 'slate' },
    { icon: 'AlertCircle', title: 'Complaints', desc: 'Submit and track campus service complaints.', color: 'rose' },
    { icon: 'GraduationCap', title: 'Faculty Portal', desc: 'Teaching schedule, assignments, and announcements.', color: 'blue' },
    { icon: 'Shield', title: 'Admin Dashboard', desc: 'User, event, club, and campus analytics.', color: 'navy' },
    { icon: 'Bot', title: 'AI Assistant', desc: 'AI-powered campus companion. Coming soon.', color: 'violet' },
    { icon: 'Bell', title: 'Smart Alerts', desc: 'Personalized campus notification system.', color: 'amber' },
    { icon: 'Star', title: 'Club Portals', desc: 'Dedicated portals for club leaders and officers.', color: 'purple' },
];
