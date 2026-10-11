// ===== CAMPUSNOVA PUBLIC VIEWS (Landing, Features, About, Contact) =====

(function () {
    const icon = window.renderIcon;

    // Render Public Navbar
    window.renderPublicNavbar = function () {
        const isDark = document.documentElement.classList.contains('dark');
        return `
      <nav class="app-header" style="position: sticky; top: 0; width: 100%; border-bottom: 1px solid var(--border); background-color: var(--header-bg); z-index: 50;">
        <div style="max-width: 1280px; margin: 0 auto; width: 100%; display: flex; align-items: center; justify-content: space-between;">
          <a href="#home" style="display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 1.2rem; color: var(--navy);" class="dark:text-white">
            <div class="brand-logo-icon">N</div>
            <span style="color: var(--text-dark);">CampusNova</span>
          </a>
          <div style="display: flex; align-items: center; gap: 24px;" class="desktop-nav">
            <a href="#home" class="btn-ghost" style="font-size: 0.88rem;">Home</a>
            <a href="#features" class="btn-ghost" style="font-size: 0.88rem;">Features</a>
            <a href="#about" class="btn-ghost" style="font-size: 0.88rem;">About</a>
            <a href="#contact" class="btn-ghost" style="font-size: 0.88rem;">Contact</a>
          </div>
          <div style="display: flex; align-items: center; gap: 12px;">
            <button onclick="window.toggleDarkMode()" class="header-icon-btn" title="Toggle Theme">
              ${isDark ? icon('sun', 18) : icon('moon', 18)}
            </button>
            <a href="#dashboard" class="btn-primary" style="padding: 8px 18px; font-size: 0.86rem;">
              Launch App ${icon('arrow-right', 14)}
            </a>
          </div>
        </div>
      </nav>
    `;
    };

    // Render Public Footer
    window.renderPublicFooter = function () {
        return `
      <footer style="background-color: var(--navy); color: #fff; padding: 48px 24px 32px 24px; border-top: 1px solid rgba(255,255,255,0.1);">
        <div style="max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 32px; margin-bottom: 40px;">
          <div>
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 14px;">
              <div class="brand-logo-icon">N</div>
              <span style="font-size: 1.25rem; font-weight: 800; color: #fff;">CampusNova</span>
            </div>
            <p style="color: #94a3b8; font-size: 0.85rem; line-height: 1.6;">The complete unified digital operating platform for modern colleges and higher education institutions.</p>
          </div>
          <div>
            <h4 style="font-size: 0.95rem; font-weight: 700; color: #fff; margin-bottom: 14px;">Product Modules</h4>
            <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.85rem; color: #cbd5e1;">
              <a href="#academics" style="color: #94a3b8;">Academics & Exams</a>
              <a href="#assignments" style="color: #94a3b8;">Assignment Tracker</a>
              <a href="#attendance" style="color: #94a3b8;">Real-time Attendance</a>
              <a href="#placements" style="color: #94a3b8;">Placement Portal</a>
            </div>
          </div>
          <div>
            <h4 style="font-size: 0.95rem; font-weight: 700; color: #fff; margin-bottom: 14px;">Campus Life</h4>
            <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.85rem; color: #cbd5e1;">
              <a href="#events" style="color: #94a3b8;">Events & Hackathons</a>
              <a href="#clubs" style="color: #94a3b8;">Clubs & Guilds</a>
              <a href="#marketplace" style="color: #94a3b8;">Student Marketplace</a>
              <a href="#community" style="color: #94a3b8;">Campus Forum</a>
            </div>
          </div>
          <div>
            <h4 style="font-size: 0.95rem; font-weight: 700; color: #fff; margin-bottom: 14px;">Quick Access</h4>
            <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.85rem; color: #cbd5e1;">
              <a href="#dashboard" style="color: #94a3b8;">Student Dashboard</a>
              <a href="#faculty-portal" style="color: #94a3b8;">Faculty Workspace</a>
              <a href="#admin" style="color: #94a3b8;">Superadmin Console</a>
              <a href="#ai-assistant" style="color: #94a3b8;">AI Campus Companion</a>
            </div>
          </div>
        </div>
        <div style="max-width: 1280px; margin: 0 auto; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; font-size: 0.8rem; color: #64748b;">
          <p>© 2026 CampusNova Inc. Built for Entrepreneurship Pitch & Campus Modernization.</p>
          <div style="display: flex; gap: 16px;">
            <a href="#home" style="color: #94a3b8;">Privacy Policy</a>
            <a href="#home" style="color: #94a3b8;">Terms of Service</a>
            <a href="#contact" style="color: #94a3b8;">Contact Support</a>
          </div>
        </div>
      </footer>
    `;
    };

    // 1. Home View
    window.renderHomeView = function () {
        const modules = window.CAMPUS_DATA.dashboardModules;
        const problems = [
            { text: 'Announcements scattered across informal WhatsApp groups', icon: '📱' },
            { text: 'Important placement & internship alerts lost in spam emails', icon: '📧' },
            { text: 'Exam timetables and marks stuck in legacy clunky portals', icon: '🗓️' },
            { text: 'No unified place to register for hackathons or college fests', icon: '🎪' },
            { text: 'Daily attendance calculation and 75% warnings require manual math', icon: '📊' },
            { text: 'Peer-to-peer textbook buying/selling happens on unverified channels', icon: '📚' },
        ];

        return `
      ${window.renderPublicNavbar()}
      <div class="animate-fade-in">
        <!-- Hero Section -->
        <section class="gradient-hero" style="color: #fff; padding: 70px 24px 80px 24px; position: relative; overflow: hidden;">
          <div style="max-width: 1240px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 48px; align-items: center;">
            <div>
              <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); border-radius: 9999px; padding: 6px 14px; font-size: 0.8rem; font-weight: 600; margin-bottom: 20px;">
                ${icon('zap', 14)} Next-Gen Higher Education Operating System
              </div>
              <h1 style="font-size: clamp(2.2rem, 5vw, 3.4rem); font-weight: 900; line-height: 1.15; letter-spacing: -0.02em; margin-bottom: 20px;">
                Your Entire Campus.<br>
                <span class="text-gradient" style="background: linear-gradient(135deg, #93c5fd 0%, #c4b5fd 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">One Connected Platform.</span>
              </h1>
              <p style="font-size: 1.1rem; line-height: 1.6; color: #bfdbfe; max-width: 520px; margin-bottom: 32px;">
                CampusNova unifies academics, attendance, timetable, clubs, hackathons, placements, and campus services into one lightning-fast, cohesive SaaS hub.
              </p>
              <div style="display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 36px;">
                <a href="#dashboard" class="btn-primary" style="background-color: #fff; color: var(--primary); padding: 12px 26px; font-size: 0.95rem; font-weight: 700; box-shadow: 0 10px 25px rgba(0,0,0,0.2);">
                  Explore Live Prototype ${icon('arrow-right', 16)}
                </a>
                <a href="#features" class="btn-secondary" style="border-color: rgba(255,255,255,0.4); color: #fff; background: transparent; padding: 12px 24px; font-size: 0.95rem;">
                  View All 16 Modules
                </a>
              </div>
              <div style="display: flex; flex-wrap: wrap; gap: 20px; font-size: 0.85rem; color: #93c5fd;">
                <span style="display: flex; align-items: center; gap: 6px;">${icon('check-circle', 15)} 16 Core Modules</span>
                <span style="display: flex; align-items: center; gap: 6px;">${icon('check-circle', 15)} 5 Role Portals</span>
                <span style="display: flex; align-items: center; gap: 6px;">${icon('check-circle', 15)} AI Companion</span>
                <span style="display: flex; align-items: center; gap: 6px;">${icon('check-circle', 15)} Offline file:// Ready</span>
              </div>
            </div>

            <!-- Mini Preview Mock Card -->
            <div class="glass" style="border-radius: 20px; padding: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.2);">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.15); padding-bottom: 12px;">
                <div style="width: 10px; height: 10px; border-radius: 50%; background: #ef4444;"></div>
                <div style="width: 10px; height: 10px; border-radius: 50%; background: #f59e0b;"></div>
                <div style="width: 10px; height: 10px; border-radius: 50%; background: #10b981;"></div>
                <span style="font-size: 0.75rem; color: rgba(255,255,255,0.7); font-family: monospace; margin-left: 8px;">campusnova.edu/dashboard</span>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 14px;">
                <div style="background: rgba(255,255,255,0.08); border-radius: 12px; padding: 12px;">
                  <p style="font-size: 0.72rem; color: #cbd5e1;">Current Standing</p>
                  <p style="font-size: 1.25rem; font-weight: 800; color: #4ade80;">82% Attendance</p>
                </div>
                <div style="background: rgba(255,255,255,0.08); border-radius: 12px; padding: 12px;">
                  <p style="font-size: 0.72rem; color: #cbd5e1;">Active Enrolled</p>
                  <p style="font-size: 1.25rem; font-weight: 800; color: #60a5fa;">6 Core Subjects</p>
                </div>
              </div>
              <div style="background: rgba(255,255,255,0.08); border-radius: 12px; padding: 14px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                  <span style="font-size: 0.8rem; font-weight: 700;">Upcoming Deadlines</span>
                  <span class="badge badge-amber" style="font-size: 0.65rem;">3 Pending</span>
                </div>
                <p style="font-size: 0.78rem; color: #e2e8f0;">• DSA: Implement AVL Tree (Oct 15)</p>
                <p style="font-size: 0.78rem; color: #e2e8f0; margin-top: 4px;">• DBMS: University Library Schema (Oct 18)</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Problem Section -->
        <section style="padding: 70px 24px; background-color: var(--card-bg);">
          <div style="max-width: 1240px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 40px;">
              <span class="badge badge-red" style="margin-bottom: 8px;">The Critical Problem</span>
              <h2 class="page-title" style="margin-top: 6px;">Colleges Suffer from Severe Digital Fragmentation</h2>
              <p class="page-subtitle">Students, teachers, and admins juggle half a dozen apps with zero unified tracking.</p>
            </div>
            <div class="grid-3">
              ${problems.map(p => `
                <div class="card" style="padding: 20px; display: flex; align-items: flex-start; gap: 14px;">
                  <span style="font-size: 1.6rem;">${p.icon}</span>
                  <p style="font-size: 0.9rem; font-weight: 500; color: var(--text-dark);">${p.text}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- 16 Modules Showcase Section -->
        <section style="padding: 80px 24px; background-color: var(--bg);">
          <div style="max-width: 1240px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 48px;">
              <span class="badge badge-blue" style="margin-bottom: 8px;">Unified Ecosystem</span>
              <h2 class="page-title" style="margin-top: 6px;">All 16 Specialized Platform Modules</h2>
              <p class="page-subtitle">Every domain of campus life, academics, and administration connected together.</p>
            </div>
            <div class="grid-4">
              ${modules.map(m => `
                <a href="${m.path}" class="card card-interactive" style="padding: 20px; display: flex; flex-direction: column; gap: 12px;">
                  <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="width: 42px; height: 42px; border-radius: 12px; background: ${m.gradient}; color: #fff; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                      ${icon(m.icon, 20)}
                    </div>
                    <span class="badge ${m.badgeClass}">${m.badge}</span>
                  </div>
                  <div>
                    <h3 style="font-size: 1rem; font-weight: 700; color: var(--text-dark); margin-bottom: 4px;">${m.title}</h3>
                    <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5;">${m.description}</p>
                  </div>
                  <div style="margin-top: auto; padding-top: 10px; border-top: 1px solid var(--border); display: flex; justify-content: space-between; font-size: 0.78rem; color: var(--text-muted); font-weight: 600;">
                    <span>${m.stats}</span>
                    <span style="color: var(--primary); display: flex; align-items: center; gap: 4px;">Open ${icon('arrow-right', 12)}</span>
                  </div>
                </a>
              `).join('')}
            </div>
            <div style="text-align: center; margin-top: 40px;">
              <a href="#dashboard" class="btn-primary" style="padding: 12px 28px; font-size: 0.95rem;">
                Open Full Student Dashboard ${icon('arrow-right', 16)}
              </a>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="gradient-hero" style="color: #fff; padding: 70px 24px; text-align: center;">
          <div style="max-width: 720px; margin: 0 auto;">
            <h2 style="font-size: 2.2rem; font-weight: 900; margin-bottom: 16px;">Ready to Experience CampusNova?</h2>
            <p style="font-size: 1.05rem; color: #bfdbfe; margin-bottom: 28px;">
              Interact with all 16 live modules, test out role permissions, try the AI campus companion, and verify complete offline functionality.
            </p>
            <a href="#dashboard" class="btn-primary" style="background-color: #fff; color: var(--primary); padding: 14px 32px; font-size: 1rem; font-weight: 800;">
              Launch Interactive Campus Dashboard ${icon('arrow-right', 16)}
            </a>
          </div>
        </section>
      </div>
      ${window.renderPublicFooter()}
    `;
    };

    // 2. Features View
    window.renderFeaturesView = function () {
        const modules = window.CAMPUS_DATA.dashboardModules;
        return `
      ${window.renderPublicNavbar()}
      <div class="content-container animate-fade-in" style="padding-top: 40px;">
        <div style="text-align: center; margin-bottom: 40px;">
          <span class="badge badge-blue">Complete Architecture</span>
          <h1 class="page-title" style="margin-top: 8px;">Explore All CampusNova Modules</h1>
          <p class="page-subtitle">A comprehensive breakdown of all 16 integrated modules and capabilities.</p>
        </div>
        <div class="grid-3">
          ${modules.map(m => `
            <div class="card" style="padding: 24px; display: flex; flex-direction: column; gap: 14px;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="width: 46px; height: 46px; border-radius: 12px; background: ${m.gradient}; color: #fff; display: flex; align-items: center; justify-content: center;">
                  ${icon(m.icon, 22)}
                </div>
                <span class="badge ${m.badgeClass}">${m.badge}</span>
              </div>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-dark);">${m.title}</h3>
              <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6;">${m.description}</p>
              <div style="margin-top: auto; padding-top: 14px; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted);">${m.stats}</span>
                <a href="${m.path}" class="btn-primary" style="padding: 6px 14px; font-size: 0.82rem;">Launch Module</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      ${window.renderPublicFooter()}
    `;
    };

    // 3. About View
    window.renderAboutView = function () {
        return `
      ${window.renderPublicNavbar()}
      <div class="content-container animate-fade-in" style="padding-top: 40px; max-width: 900px;">
        <div style="text-align: center; margin-bottom: 40px;">
          <span class="badge badge-violet">Our Vision</span>
          <h1 class="page-title" style="margin-top: 8px;">About CampusNova</h1>
          <p class="page-subtitle">Building the operating system for next-generation universities and colleges.</p>
        </div>
        <div class="card" style="padding: 32px; margin-bottom: 24px; line-height: 1.7; font-size: 0.95rem; color: var(--text-muted);">
          <h2 style="font-size: 1.3rem; font-weight: 800; color: var(--text-dark); margin-bottom: 12px;">The CampusNova Mission</h2>
          <p style="margin-bottom: 16px;">
            Higher education institutes have modernized classroom technology, but daily campus student communication is stuck across broken channels: WhatsApp group announcements, physical notice boards, scattered PDFs, and clunky legacy ERP software built decades ago.
          </p>
          <p style="margin-bottom: 16px;">
            CampusNova was founded to bridge this divide. By consolidating academics, attendance, club engagement, placement drives, grievances, and AI assistance into a single fast SaaS platform, CampusNova empowers students, educators, and university leadership to work in harmony.
          </p>
        </div>
        <div class="grid-2">
          <div class="card" style="padding: 24px;">
            <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-dark); margin-bottom: 8px;">For Students</h3>
            <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6;">Never miss an assignment deadline, track attendance percentages in real-time, register for hackathons with one click, and access placement opportunities.</p>
          </div>
          <div class="card" style="padding: 24px;">
            <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-dark); margin-bottom: 8px;">For Institutions</h3>
            <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6;">Drastically decrease communication friction, automate student attendance rolls, resolve student grievances with full auditability, and elevate placement conversion.</p>
          </div>
        </div>
      </div>
      ${window.renderPublicFooter()}
    `;
    };

    // 4. Contact View
    window.renderContactView = function () {
        return `
      ${window.renderPublicNavbar()}
      <div class="content-container animate-fade-in" style="padding-top: 40px; max-width: 800px;">
        <div style="text-align: center; margin-bottom: 36px;">
          <span class="badge badge-green">Inquiries & Pitch</span>
          <h1 class="page-title" style="margin-top: 8px;">Get in Touch</h1>
          <p class="page-subtitle">Interested in pilot testing CampusNova on your campus or discussing partnerships?</p>
        </div>
        <div class="card" style="padding: 32px;">
          <form onsubmit="event.preventDefault(); window.showToast('Thank you! Your inquiry has been received.'); this.reset();" style="display: flex; flex-direction: column; gap: 18px;">
            <div>
              <label style="font-size: 0.85rem; font-weight: 600; color: var(--text-dark); display: block; margin-bottom: 6px;">Your Name</label>
              <input type="text" required placeholder="Dr. / Prof. / Student Name" class="input-field">
            </div>
            <div>
              <label style="font-size: 0.85rem; font-weight: 600; color: var(--text-dark); display: block; margin-bottom: 6px;">Institution / College Email</label>
              <input type="email" required placeholder="name@college.edu" class="input-field">
            </div>
            <div>
              <label style="font-size: 0.85rem; font-weight: 600; color: var(--text-dark); display: block; margin-bottom: 6px;">Message or Pilot Interest</label>
              <textarea rows="4" required placeholder="Tell us about your campus requirements or feedback..." class="input-field" style="resize: vertical;"></textarea>
            </div>
            <button type="submit" class="btn-primary" style="align-self: flex-start; padding: 12px 28px;">
              Send Inquiry ${icon('send', 15)}
            </button>
          </form>
        </div>
      </div>
      ${window.renderPublicFooter()}
    `;
    };
})();
