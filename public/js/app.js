// ===== CAMPUSNOVA CORE APPLICATION ROUTER & LAYOUT ENGINE =====

(function () {
    const icon = window.renderIcon;

    // Global Toast Alert
    window.showToast = function (msg) {
        let toast = document.getElementById('campus-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'campus-toast';
            toast.className = 'toast-notice';
            document.body.appendChild(toast);
        }
        toast.innerHTML = `${icon('check-circle', 18)} <span>${msg}</span>`;
        toast.classList.add('show');
        clearTimeout(window._toastTimer);
        window._toastTimer = setTimeout(() => {
            toast.classList.remove('show');
        }, 2800);
    };

    // Dark Mode Toggle
    window.toggleDarkMode = function () {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('campusnova_theme', isDark ? 'dark' : 'light');
        // Re-render current route to update theme-dependent UI
        window.handleRoute();
    };

    // Initialize Theme from localStorage
    const savedTheme = localStorage.getItem('campusnova_theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Sidebar State
    let sidebarCollapsed = localStorage.getItem('campusnova_sidebar_collapsed') === 'true';

    window.toggleSidebar = function () {
        sidebarCollapsed = !sidebarCollapsed;
        localStorage.setItem('campusnova_sidebar_collapsed', sidebarCollapsed ? 'true' : 'false');
        const sidebar = document.getElementById('app-sidebar');
        if (sidebar) {
            sidebar.classList.toggle('collapsed', sidebarCollapsed);
        }
    };

    window.toggleMobileSidebar = function (open) {
        const sidebar = document.getElementById('app-sidebar');
        const overlay = document.getElementById('mobile-sidebar-overlay');
        if (sidebar && overlay) {
            if (typeof open === 'boolean') {
                sidebar.classList.toggle('mobile-open', open);
                overlay.classList.toggle('active', open);
            } else {
                sidebar.classList.toggle('mobile-open');
                overlay.classList.toggle('active');
            }
        }
    };

    // Navigation Helper
    window.navigate = function (hash) {
        window.location.hash = hash;
    };

    // Render Dashboard Sidebar
    function renderSidebarHtml(activeHash) {
        const data = window.CAMPUS_DATA;
        return `
      <aside id="app-sidebar" class="app-sidebar ${sidebarCollapsed ? 'collapsed' : ''}">
        <div class="sidebar-header">
          <a href="#dashboard" class="sidebar-brand">
            <div class="brand-logo-icon">N</div>
            <span>CampusNova</span>
          </a>
          <button onclick="window.toggleSidebar()" class="sidebar-toggle-btn" title="Toggle Sidebar">
            ${icon('chevron-left', 16)}
          </button>
        </div>

        <nav class="sidebar-nav">
          ${data.sidebarSections.map(section => `
            <div>
              <div class="sidebar-section-title">${section.title}</div>
              <div class="sidebar-items-group">
                ${section.items.map(item => `
                  <a href="${item.path}" class="sidebar-link ${activeHash === item.path ? 'active' : ''}">
                    ${icon(item.icon, 18)}
                    <span>${item.label}</span>
                  </a>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </nav>

        <div class="sidebar-footer">
          <div class="user-avatar">${data.userProfile.initials}</div>
          <div class="sidebar-user-info" style="overflow: hidden;">
            <p style="white-space: nowrap; text-overflow: ellipsis; overflow: hidden;">${data.userProfile.name}</p>
            <p>${data.userProfile.roll}</p>
          </div>
        </div>
      </aside>
    `;
    }

    // Render Dashboard Header
    function renderHeaderHtml() {
        const isDark = document.documentElement.classList.contains('dark');
        return `
      <header class="app-header">
        <div class="header-left">
          <button onclick="window.toggleMobileSidebar(true)" class="mobile-menu-btn" title="Open Menu">
            ${icon('menu', 20)}
          </button>
          <div class="search-box">
            ${icon('search', 16)}
            <input type="text" id="global-search" placeholder="Search courses, clubs, events, placements..." oninput="window.handleGlobalSearch(this.value)">
          </div>
        </div>
        <div class="header-right">
          <a href="#home" class="home-nav-chip" title="Go to Public Landing Page">
            ${icon('arrow-left', 14)} Landing
          </a>
          <button onclick="window.toggleDarkMode()" class="header-icon-btn" title="Toggle Theme">
            ${isDark ? icon('sun', 18) : icon('moon', 18)}
          </button>
          <a href="#notifications" class="header-icon-btn" title="Notifications">
            ${icon('bell', 18)}
            <span class="notif-badge"></span>
          </a>
          <a href="#profile" class="user-avatar" style="width: 34px; height: 34px; font-size: 0.8rem; margin-left: 6px;">
            ${window.CAMPUS_DATA.userProfile.initials}
          </a>
        </div>
      </header>
    `;
    }

    // Global Search
    window.handleGlobalSearch = function (query) {
        if (!query.trim()) return;
        const q = query.toLowerCase();
        const match = window.CAMPUS_DATA.dashboardModules.find(m =>
            m.title.toLowerCase().includes(q) || m.description.toLowerCase().includes(q)
        );
        if (match && window.location.hash !== match.path) {
            window.navigate(match.path);
        }
    };

    // Route Dispatcher
    window.handleRoute = function () {
        const root = document.getElementById('app-root');
        if (!root) return;

        let hash = window.location.hash || '#home';
        if (!hash.startsWith('#')) hash = '#' + hash;

        // Public Pages (Full-width, custom navbar & footer)
        if (hash === '#home') {
            root.innerHTML = window.renderHomeView();
            window.scrollTo(0, 0);
            return;
        }
        if (hash === '#features') {
            root.innerHTML = window.renderFeaturesView();
            window.scrollTo(0, 0);
            return;
        }
        if (hash === '#about') {
            root.innerHTML = window.renderAboutView();
            window.scrollTo(0, 0);
            return;
        }
        if (hash === '#contact') {
            root.innerHTML = window.renderContactView();
            window.scrollTo(0, 0);
            return;
        }

        // Dashboard Shell Pages
        let viewContent = '';
        switch (hash) {
            case '#dashboard':
                viewContent = window.renderDashboardView();
                break;
            case '#academics':
                viewContent = window.renderAcademicsView();
                break;
            case '#assignments':
                viewContent = window.renderAssignmentsView();
                break;
            case '#attendance':
                viewContent = window.renderAttendanceView();
                break;
            case '#timetable':
                viewContent = window.renderTimetableView();
                break;
            case '#events':
                viewContent = window.renderEventsView();
                break;
            case '#clubs':
                viewContent = window.renderClubsView();
                break;
            case '#placements':
                viewContent = window.renderPlacementsView();
                break;
            case '#marketplace':
                viewContent = window.renderMarketplaceView();
                break;
            case '#community':
                viewContent = window.renderCommunityView();
                break;
            case '#lost-found':
                viewContent = window.renderLostFoundView();
                break;
            case '#complaints':
                viewContent = window.renderComplaintsView();
                break;
            case '#ai-assistant':
                viewContent = window.renderAIAssistantView();
                break;
            case '#notifications':
                viewContent = window.renderNotificationsView();
                break;
            case '#faculty-portal':
                viewContent = window.renderFacultyPortalView();
                break;
            case '#club-leader':
                viewContent = window.renderClubLeaderView();
                break;
            case '#placement-officer':
                viewContent = window.renderPlacementOfficerView();
                break;
            case '#admin':
                viewContent = window.renderAdminDashboardView();
                break;
            case '#profile':
                viewContent = window.renderProfileView();
                break;
            case '#settings':
                viewContent = window.renderSettingsView();
                break;
            default:
                viewContent = window.renderDashboardView();
                break;
        }

        root.innerHTML = `
      <div class="app-container">
        <div id="mobile-sidebar-overlay" class="mobile-overlay" onclick="window.toggleMobileSidebar(false)"></div>
        ${renderSidebarHtml(hash)}
        <div class="app-main">
          ${renderHeaderHtml()}
          <main id="app-viewport" class="app-viewport">
            ${viewContent}
          </main>
        </div>
      </div>
    `;

        window.toggleMobileSidebar(false);
    };

    // Initialize Router
    window.addEventListener('hashchange', window.handleRoute);
    window.addEventListener('DOMContentLoaded', window.handleRoute);
})();
