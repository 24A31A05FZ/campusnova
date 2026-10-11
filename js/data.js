// ===== CAMPUSNOVA STANDALONE DEMO DATA =====
// Attached to window.CAMPUS_DATA for zero-fetch, 100% offline & file:// compatibility

window.CAMPUS_DATA = {
    navLinks: [
        { label: 'Home', path: '#home' },
        { label: 'Features', path: '#features' },
        { label: 'Solutions', path: '#about' },
        { label: 'About', path: '#about' },
        { label: 'Contact', path: '#contact' },
    ],

    sidebarSections: [
        {
            title: 'Overview',
            items: [
                { label: 'Dashboard', path: '#dashboard', icon: 'dashboard' },
            ],
        },
        {
            title: 'Academics',
            items: [
                { label: 'Subjects', path: '#academics', icon: 'book' },
                { label: 'Assignments', path: '#assignments', icon: 'clipboard' },
                { label: 'Attendance', path: '#attendance', icon: 'calendar-check' },
                { label: 'Timetable', path: '#timetable', icon: 'clock' },
            ],
        },
        {
            title: 'Campus Life',
            items: [
                { label: 'Events', path: '#events', icon: 'calendar' },
                { label: 'Clubs', path: '#clubs', icon: 'users' },
                { label: 'Community', path: '#community', icon: 'message' },
                { label: 'Marketplace', path: '#marketplace', icon: 'shopping-bag' },
                { label: 'Lost & Found', path: '#lost-found', icon: 'search' },
            ],
        },
        {
            title: 'Career',
            items: [
                { label: 'Placements', path: '#placements', icon: 'briefcase' },
                { label: 'Resume Builder', path: '#placements', icon: 'file-text' },
            ],
        },
        {
            title: 'Services',
            items: [
                { label: 'Complaints', path: '#complaints', icon: 'alert-circle' },
                { label: 'Notifications', path: '#notifications', icon: 'bell' },
                { label: 'AI Assistant', path: '#ai-assistant', icon: 'bot' },
            ],
        },
        {
            title: 'Management',
            items: [
                { label: 'Faculty Portal', path: '#faculty-portal', icon: 'graduation' },
                { label: 'Club Leader', path: '#club-leader', icon: 'star' },
                { label: 'Placement Officer', path: '#placement-officer', icon: 'target' },
                { label: 'Admin Dashboard', path: '#admin', icon: 'shield' },
            ],
        },
        {
            title: 'Account',
            items: [
                { label: 'Profile', path: '#profile', icon: 'user' },
                { label: 'Settings', path: '#settings', icon: 'settings' },
            ],
        },
    ],

    dashboardModules: [
        {
            title: 'Academics',
            icon: 'book',
            description: 'Subjects, study materials, faculty info, and academic calendar.',
            path: '#academics',
            gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
            badge: 'Active',
            badgeClass: 'badge-green',
            stats: '6 Subjects',
        },
        {
            title: 'Assignments',
            icon: 'clipboard',
            description: 'Pending deadlines, submission history, and grade tracking.',
            path: '#assignments',
            gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
            badge: '3 Due',
            badgeClass: 'badge-amber',
            stats: '12 Total',
        },
        {
            title: 'Attendance',
            icon: 'calendar-check',
            description: 'Overall and subject-wise attendance with alerts.',
            path: '#attendance',
            gradient: 'linear-gradient(135deg, #10b981, #059669)',
            badge: '82%',
            badgeClass: 'badge-green',
            stats: 'This Semester',
        },
        {
            title: 'Timetable',
            icon: 'clock',
            description: 'Daily and weekly lecture scheduler, current ongoing class indicator.',
            path: '#timetable',
            gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
            badge: 'Live',
            badgeClass: 'badge-blue',
            stats: 'Mon - Fri',
        },
        {
            title: 'Events',
            icon: 'calendar',
            description: 'Tech, cultural, sports, and entrepreneurship events.',
            path: '#events',
            gradient: 'linear-gradient(135deg, #f97316, #ef4444)',
            badge: '5 Upcoming',
            badgeClass: 'badge-blue',
            stats: 'This Month',
        },
        {
            title: 'Clubs',
            icon: 'users',
            description: 'Join technical, cultural, and sports clubs. Explore activities.',
            path: '#clubs',
            gradient: 'linear-gradient(135deg, #ec4899, #e11d48)',
            badge: 'Explore',
            badgeClass: 'badge-blue',
            stats: '24 Clubs',
        },
        {
            title: 'Placements',
            icon: 'briefcase',
            description: 'Internships, full-time jobs, hackathons, and career prep.',
            path: '#placements',
            gradient: 'linear-gradient(135deg, #6366f1, #2563eb)',
            badge: '8 New',
            badgeClass: 'badge-green',
            stats: 'Opportunities',
        },
        {
            title: 'Marketplace',
            icon: 'shopping-bag',
            description: 'Buy and sell books, electronics, lab equipment peer-to-peer.',
            path: '#marketplace',
            gradient: 'linear-gradient(135deg, #14b8a6, #0891b2)',
            badge: 'Preview',
            badgeClass: 'badge-blue',
            stats: 'Campus Store',
        },
        {
            title: 'Community',
            icon: 'message',
            description: 'Discussion feeds, study groups, Q&A, and peer learning.',
            path: '#community',
            gradient: 'linear-gradient(135deg, #eab308, #f97316)',
            badge: 'Active',
            badgeClass: 'badge-blue',
            stats: 'Connect',
        },
        {
            title: 'Lost & Found',
            icon: 'search',
            description: 'Report or discover lost and found items across campus.',
            path: '#lost-found',
            gradient: 'linear-gradient(135deg, #64748b, #475569)',
            badge: '12 Items',
            badgeClass: 'badge-violet',
            stats: 'Campus Directory',
        },
        {
            title: 'Complaints',
            icon: 'alert-circle',
            description: 'Submit and track campus maintenance and service complaints.',
            path: '#complaints',
            gradient: 'linear-gradient(135deg, #ef4444, #e11d48)',
            badge: 'Track',
            badgeClass: 'badge-violet',
            stats: '4 Logged',
        },
        {
            title: 'AI Assistant',
            icon: 'bot',
            description: 'Ask questions about campus, events, and academics using AI.',
            path: '#ai-assistant',
            gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
            badge: 'Campus Bot',
            badgeClass: 'badge-violet',
            stats: 'Interactive',
        },
        {
            title: 'Notifications',
            icon: 'bell',
            description: 'Smart alerts for academics, events, placements, and clubs.',
            path: '#notifications',
            gradient: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
            badge: '3 Unread',
            badgeClass: 'badge-red',
            stats: 'All Categories',
        },
        {
            title: 'Faculty Portal',
            icon: 'graduation',
            description: 'Class teaching schedules, assignment grading, attendance rolls.',
            path: '#faculty-portal',
            gradient: 'linear-gradient(135deg, #2563eb, #4338ca)',
            badge: 'Role View',
            badgeClass: 'badge-green',
            stats: 'Prof. View',
        },
        {
            title: 'Club Leader Portal',
            icon: 'star',
            description: 'Event creator, membership approval queue, live attendee QR tracker.',
            path: '#club-leader',
            gradient: 'linear-gradient(135deg, #a855f7, #7c3aed)',
            badge: 'Role View',
            badgeClass: 'badge-violet',
            stats: 'President View',
        },
        {
            title: 'Placement Officer',
            icon: 'target',
            description: 'Placement drive coordinator, shortlist review table, hiring stats.',
            path: '#placement-officer',
            gradient: 'linear-gradient(135deg, #0284c7, #0369a1)',
            badge: 'Role View',
            badgeClass: 'badge-blue',
            stats: 'Coordinator',
        },
        {
            title: 'Admin Dashboard',
            icon: 'shield',
            description: 'Active user metrics, audit logs, system health, triage.',
            path: '#admin',
            gradient: 'linear-gradient(135deg, #334155, #1e293b)',
            badge: 'Superadmin',
            badgeClass: 'badge-amber',
            stats: 'Full Access',
        },
    ],

    subjects: [
        { code: 'CS301', name: 'Data Structures & Algorithms', faculty: 'Dr. Ananya Reddy', credits: 4, progress: 72 },
        { code: 'CS302', name: 'Database Management Systems', faculty: 'Prof. Ravi Kumar', credits: 3, progress: 58 },
        { code: 'CS303', name: 'Operating Systems', faculty: 'Dr. Sneha Patel', credits: 4, progress: 85 },
        { code: 'CS304', name: 'Computer Networks', faculty: 'Prof. Kiran Mehta', credits: 3, progress: 45 },
        { code: 'CS305', name: 'Software Engineering', faculty: 'Dr. Priya Sharma', credits: 3, progress: 90 },
        { code: 'CS306', name: 'Machine Learning', faculty: 'Dr. Arjun Nair', credits: 4, progress: 30 },
    ],

    assignments: [
        {
            id: 1, subject: 'Data Structures', title: 'Implement AVL Tree Self-Balancing', deadline: '2026-10-15',
            status: 'pending', priority: 'high', marks: 20,
        },
        {
            id: 2, subject: 'DBMS', title: 'Design ER Diagram for University Library', deadline: '2026-10-18',
            status: 'pending', priority: 'medium', marks: 15,
        },
        {
            id: 3, subject: 'OS', title: 'Process Scheduling Simulation in C/C++', deadline: '2026-10-20',
            status: 'submitted', priority: 'low', marks: 25,
        },
        {
            id: 4, subject: 'CN', title: 'TCP/IP Socket Programming Chat Server', deadline: '2026-10-12',
            status: 'graded', grade: 'A (28/30)', marks: 30,
        },
        {
            id: 5, subject: 'ML', title: 'Linear Regression Implementation from Scratch', deadline: '2026-10-25',
            status: 'pending', priority: 'medium', marks: 20,
        },
    ],

    attendanceData: [
        { subject: 'Data Structures', attended: 38, total: 45, percent: 84 },
        { subject: 'DBMS', attended: 30, total: 40, percent: 75 },
        { subject: 'Operating Systems', attended: 42, total: 48, percent: 88 },
        { subject: 'Computer Networks', attended: 28, total: 42, percent: 67 },
        { subject: 'Software Engineering', attended: 35, total: 36, percent: 97 },
        { subject: 'Machine Learning', attended: 20, total: 30, percent: 67 },
    ],

    timetable: {
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
    },

    events: [
        {
            id: 1, title: 'CodeFest 2026', category: 'Technical', date: 'Oct 20, 2026', venue: 'CS Auditorium',
            desc: 'Annual flagship competitive programming sprint open to all CSE and IT students.', registered: false, seats: '142 / 200 filled',
        },
        {
            id: 2, title: 'Startup Pitch Day', category: 'Entrepreneurship', date: 'Oct 22, 2026', venue: 'Innovation Hub',
            desc: 'Present your collegiate venture idea to seed stage venture capitalists and angels.', registered: true, seats: '48 / 50 filled',
        },
        {
            id: 3, title: 'Rhythm & Dance Showdown', category: 'Cultural', date: 'Oct 28, 2026', venue: 'Open Amphitheater',
            desc: 'Inter-branch music, classical choreography, and live band showcase.', registered: false, seats: '380 / 500 filled',
        },
        {
            id: 4, title: 'ML Hands-on: Neural Networks', category: 'Workshop', date: 'Nov 3, 2026', venue: 'AI Center Lab',
            desc: 'Deep learning masterclass covering backpropagation, PyTorch tensors, and vision models.', registered: true, seats: '35 / 40 filled',
        },
        {
            id: 5, title: 'Inter-College Cricket League', category: 'Sports', date: 'Nov 8, 2026', venue: 'Campus Main Ground',
            desc: 'Championship knockout cup featuring 12 regional university teams.', registered: false, seats: 'Open Entry',
        },
        {
            id: 6, title: 'Web3 & Decentralized Systems', category: 'Seminar', date: 'Nov 12, 2026', venue: 'Seminar Hall A',
            desc: 'Guest session by Ethereum Foundation core contributor on zero knowledge proofs.', registered: false, seats: '95 / 150 filled',
        },
    ],

    clubs: [
        {
            id: 1, name: 'ACM Student Chapter', category: 'Technical', members: 120, desc: 'Algorithms, competitive code drills, and CS research seminars.',
            activities: ['Weekly contests', 'Algorithm workshops', 'Research tracks'], joined: true,
        },
        {
            id: 2, name: 'Google Developer Student Club', category: 'Technical', members: 145, desc: 'Build modern solutions with Google Cloud, Flutter, and TensorFlow.',
            activities: ['Solution Challenge', 'Cloud Jam', 'App sprints'], joined: false,
        },
        {
            id: 3, name: 'Entrepreneurship Cell', category: 'Entrepreneurship', members: 80, desc: 'Incubating student ventures, pitch clinics, and founder sessions.',
            activities: ['Startup weekend', 'Pitch nights', 'Investor mixers'], joined: true,
        },
        {
            id: 4, name: 'Rhythms - Cultural Guild', category: 'Cultural', members: 95, desc: 'Acoustic jams, choreography troupes, and dramatic productions.',
            activities: ['Band practices', 'Stage plays', 'Fest coordination'], joined: false,
        },
        {
            id: 5, name: 'Robocraft Society', category: 'Technical', members: 65, desc: 'Robotics, microcontrollers, IoT devices, and autonomous combat bots.',
            activities: ['Robo wars', 'Hardware hacks', 'CAD modeling'], joined: false,
        },
        {
            id: 6, name: 'Sports & Athletics Council', category: 'Sports', members: 210, desc: 'Organizing and representing the campus across state level athletics.',
            activities: ['Cricket cup', 'Football league', 'Badminton ladder'], joined: true,
        },
    ],

    placements: [
        {
            id: 1, company: 'Infosys', role: 'Software Engineer Intern', type: 'Internship',
            stipend: '₹25,000/month', skills: ['Java', 'Spring Boot', 'SQL'], eligibility: 'CGPA 7.0+',
            deadline: 'Oct 20, 2026', location: 'Bengaluru', status: 'open',
        },
        {
            id: 2, company: 'Google', role: 'Software Engineer (Full-Time)', type: 'Full-time',
            stipend: '₹45 LPA', skills: ['DSA', 'System Design', 'Python'], eligibility: 'CGPA 8.0+',
            deadline: 'Oct 25, 2026', location: 'Hyderabad', status: 'open',
        },
        {
            id: 3, company: 'TCS Digital', role: 'Data Analyst & BI Specialist', type: 'Full-time',
            stipend: '₹7.5 LPA', skills: ['Python', 'SQL', 'Power BI'], eligibility: 'CGPA 6.5+',
            deadline: 'Nov 1, 2026', location: 'Chennai', status: 'open',
        },
        {
            id: 4, company: 'Flipkart', role: 'Machine Learning Engineer Intern', type: 'Internship',
            stipend: '₹35,000/month', skills: ['Machine Learning', 'Python', 'TensorFlow'], eligibility: 'CGPA 7.5+',
            deadline: 'Oct 28, 2026', location: 'Bengaluru', status: 'open',
        },
        {
            id: 5, company: 'Smart India Hackathon', role: 'National Team Participation', type: 'Hackathon',
            stipend: 'Prize: ₹1,00,000', skills: ['Problem Solving', 'Full Stack', 'Cloud'], eligibility: 'All CSE/IT Students',
            deadline: 'Nov 5, 2026', location: 'Pan India', status: 'open',
        },
    ],

    marketplaceItems: [
        { id: 1, title: 'DSA Made Easy (Narasimha Karumanchi)', category: 'Books', price: 250, condition: 'Good', seller: 'Arjun K. (CSE 4th Yr)', icon: '📚' },
        { id: 2, title: 'Casio FX-991EX ClassWiz Calculator', category: 'Electronics', price: 800, condition: 'Like New', seller: 'Priya M. (ECE 3rd Yr)', icon: '🔢' },
        { id: 3, title: 'Engineering Drawing Drafter + Sheet Holder', category: 'Stationery', price: 350, condition: 'Excellent', seller: 'Rahul S. (ME 2nd Yr)', icon: '📐' },
        { id: 4, title: 'Raspberry Pi 4 Model B (4GB RAM) + Case', category: 'Electronics', price: 3200, condition: 'Good', seller: 'Sneha T. (CSE 4th Yr)', icon: '💻' },
        { id: 5, title: 'Hostel Room Mini Table & Study Lamp', category: 'Hostel', price: 950, condition: 'Fair', seller: 'Kiran B. (Civil 3rd Yr)', icon: '💡' },
        { id: 6, title: 'CLRS Introduction to Algorithms (4th Ed)', category: 'Books', price: 600, condition: 'Like New', seller: 'David J. (IT 3rd Yr)', icon: '📖' },
    ],

    communityPosts: [
        {
            id: 1, author: 'Priya Sharma', avatar: 'PS', time: '2h ago',
            title: 'Best roadmap and resources for GATE CS 2027?',
            content: 'Looking for recommended textbooks, test series, and strategy from seniors who recently cleared GATE CSE with top percentiles.',
            category: 'Study Group', likes: 24, replies: 8,
        },
        {
            id: 2, author: 'Rahul Mehta', avatar: 'RM', time: '5h ago',
            title: 'Looking for a UI/UX designer & ML person for Hackathon',
            content: 'Forming a 4-person team for Smart India Hackathon. We already have 2 backend devs. Looking for passionate collaborators!',
            category: 'Collaboration', likes: 15, replies: 12,
        },
        {
            id: 3, author: 'Ananya Kulkarni', avatar: 'AK', time: '1d ago',
            title: 'Hostel Block C Wi-Fi speed and signal drops',
            content: 'Has anyone reported the router issue on 3rd floor Block C? Connectivity drops every evening after 9 PM.',
            category: 'Campus Life', likes: 45, replies: 20,
        },
        {
            id: 4, author: 'Devendra Thakur', avatar: 'DT', time: '2d ago',
            title: 'How to claim AWS & GitHub Student Developer Packs?',
            content: 'Here is a quick walkthrough on getting free domain names, JetBrains licenses, and cloud credits with your college ID email!',
            category: 'Tips & Guides', likes: 31, replies: 14,
        },
    ],

    lostItems: [
        { id: 1, title: 'Blue JBL Live 200BT Earphones', location: 'Central Library 2nd Floor', date: 'Oct 8, 2026', type: 'Lost', contact: 'John Student (CSE Sem 5)' },
        { id: 2, title: 'Student ID Card - Rohit Shah (22EC045)', location: 'Cafeteria billing counter', date: 'Oct 9, 2026', type: 'Found', contact: 'Campus Security Desk' },
        { id: 3, title: 'Black Laptop Bag (Dell Inspiron Inside)', location: 'Seminar Hall A, Row 4', date: 'Oct 7, 2026', type: 'Lost', contact: '2nd Year ECE Rep' },
        { id: 4, title: 'Casio Scientific Calculator FX-82MS', location: 'Electronics Lab 204', date: 'Oct 10, 2026', type: 'Found', contact: 'Lab Assistant Mr. Suresh' },
        { id: 5, title: 'Stainless Steel Water Bottle (Milton)', location: 'Sports Complex Pavillion', date: 'Oct 8, 2026', type: 'Lost', contact: '3rd Year ME' },
    ],

    complaints: [
        { id: 'CMP-001', category: 'Wi-Fi & IT', desc: 'Block B WiFi keeps disconnecting every 30 minutes during lab hours.', status: 'Resolved', date: 'Oct 5, 2026', urgency: 'Medium' },
        { id: 'CMP-002', category: 'Classroom', desc: 'Ceiling projector in CS-301 has color distortion and power flicker.', status: 'In Progress', date: 'Oct 7, 2026', urgency: 'High' },
        { id: 'CMP-003', category: 'Hostel Maintenance', desc: 'Hot water geyser tripping fuse box on 2nd floor Hostel Block D.', status: 'Pending', date: 'Oct 9, 2026', urgency: 'High' },
        { id: 'CMP-004', category: 'Campus Transit', desc: 'College Bus Route 4 arriving 15 minutes before scheduled stop time.', status: 'Pending', date: 'Oct 10, 2026', urgency: 'Low' },
    ],

    notifications: [
        { id: 1, type: 'Academic', title: 'Mid-Semester Exam Timetable Officially Published', time: '2h ago', read: false, icon: 'book' },
        { id: 2, type: 'Assignment', title: 'DSA AVL Tree Assignment deadline in 3 days', time: '4h ago', read: false, icon: 'clipboard' },
        { id: 3, type: 'Placement', title: 'Infosys Software Engineer Internship registration closing soon', time: '6h ago', read: false, icon: 'briefcase' },
        { id: 4, type: 'Event', title: 'CodeFest 2026 early bird registrations are now open', time: '1d ago', read: true, icon: 'calendar' },
        { id: 5, type: 'Club', title: 'ACM Student Chapter weekly algorithmic drill starts today at 6 PM', time: '1d ago', read: true, icon: 'users' },
        { id: 6, type: 'System', title: 'Campus central authentication portal routine maintenance scheduled Sunday', time: '2d ago', read: true, icon: 'bell' },
    ],

    aiSuggestions: [
        'What events are happening this week?',
        'Show me pending assignments',
        'Find internship opportunities in ML',
        'How is my attendance this semester?',
        'What clubs can I join?',
        'Summarize today\'s announcements',
    ],

    aiMessages: [
        { role: 'assistant', text: "Hello! I am your CampusNova AI Companion. I can assist you with your academic schedule, upcoming hackathons, club drives, and attendance standing. What would you like to explore today?" },
    ],

    aiResponses: {
        'What events are happening this week?': "This week's campus highlights:\n• **CodeFest 2026** (Oct 20, CS Auditorium)\n• **Startup Pitch Day** (Oct 22, Innovation Hub)\nYou can RSVP directly on the Events module!",
        'Show me pending assignments': "You have **3 active assignments** pending:\n• **DSA:** Implement AVL Tree (Due Oct 15)\n• **DBMS:** ER Diagram for Library (Due Oct 18)\n• **ML:** Linear Regression from Scratch (Due Oct 25)\nHead to the Assignments tab to submit!",
        'Find internship opportunities in ML': "Found **1 highlighted ML opening**:\n🚀 **Flipkart — ML Engineer Intern**\n• Stipend: ₹35,000/month\n• Location: Bengaluru\n• Eligibility: CGPA 7.5+\n• Deadline: Oct 28. Apply from the Placements page!",
        'How is my attendance this semester?': "Your overall attendance is **82%** (Good Standing). Warning: **Computer Networks is at 67%** (below 75% threshold). Attend the next 3 lectures to maintain exam eligibility!",
        'What clubs can I join?': "Top active campus organizations:\n• **ACM Student Chapter** (Algorithms & Tech)\n• **Google Developer Student Club** (Cloud & Flutter)\n• **E-Cell** (Ventures & Startups)\n• **Robocraft** (IoT & Hardware)\nCheck the Clubs portal to toggle your membership!",
        'Summarize today\'s announcements': "Today's Key Highlights:\n1. Mid-Semester Exam Schedule is now live.\n2. Infosys Campus Internship drive deadline: Oct 20.\n3. ACM Weekly Coding Challenge at 6 PM today.\n4. Campus Wi-Fi maintenance this Sunday 2 AM - 4 AM.",
    },

    facultySchedule: [
        { time: '09:00 AM - 10:00 AM', subject: 'CS302: Database Management Systems', room: 'Hall 201', type: 'Lecture', count: '64 Students' },
        { time: '11:30 AM - 01:00 PM', subject: 'CS302: DBMS Practical Lab - Batch B', room: 'Database Lab 2', type: 'Lab', count: '32 Students' },
        { time: '03:00 PM - 04:00 PM', subject: 'CS302: Tutorial & Doubt Clearing', room: 'Hall 201', type: 'Tutorial', count: '28 Students' },
    ],

    facultyStudents: [
        { roll: '23CS001', name: 'Aarav Sharma', perc: '92%', status: 'Present' },
        { roll: '23CS002', name: 'Ananya Deshmukh', perc: '84%', status: 'Present' },
        { roll: '23CS003', name: 'Farhan Akhtar', perc: '68%', status: 'Absent' },
        { roll: '23CS004', name: 'Isha Patel', perc: '88%', status: 'Present' },
        { roll: '23CS005', name: 'John Student', perc: '82%', status: 'Present' },
        { roll: '23CS006', name: 'Kavya Nair', perc: '76%', status: 'Present' },
    ],

    userProfile: {
        name: 'John Student',
        initials: 'JS',
        roll: '23CS005',
        dept: 'Computer Science & Engineering',
        semester: 'Semester 5',
        cgpa: '8.82',
        attendance: '82%',
        email: 'john.student@campusnova.edu',
        phone: '+91 98765 43210',
        joinedClubs: ['ACM Student Chapter', 'Entrepreneurship Cell', 'Sports Council'],
        skills: ['Data Structures', 'React.js', 'Python', 'SQL', 'Git', 'System Design'],
    }
};
