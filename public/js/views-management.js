// ===== CAMPUSNOVA MANAGEMENT & ACCOUNT VIEWS =====
// Faculty Portal, Club Leader, Placement Officer, Admin Dashboard, Profile, Settings

(function () {
    const icon = window.renderIcon;

    // 1. Faculty Portal
    window.renderFacultyPortalView = function () {
        const data = window.CAMPUS_DATA;
        return `
      <div class="content-container animate-fade-in">
        <a href="#dashboard" class="btn-ghost" style="margin-bottom: 16px;">${icon('arrow-left', 14)} Back to Dashboard</a>
        <div class="page-header-row">
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #2563eb, #4338ca); color: #fff; display: flex; align-items: center; justify-content: center;">
              ${icon('graduation', 24)}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h1 class="page-title">Faculty Workspace</h1>
                <span class="badge badge-green">Dr. Ananya Reddy (Prof.)</span>
              </div>
              <p class="page-subtitle">Class lecture schedule, attendance marking, and assignment evaluation.</p>
            </div>
          </div>
        </div>

        <div class="grid-2" style="margin-bottom: 24px;">
          <!-- Schedule -->
          <div class="card" style="padding: 24px;">
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-dark); margin-bottom: 14px;">Today's Teaching Schedule</h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              ${data.facultySchedule.map(s => `
                <div style="padding: 14px; border-radius: 12px; background: var(--bg-subtle); border-left: 4px solid var(--primary);">
                  <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 0.78rem; font-weight: 700; color: var(--primary);">${s.time}</span>
                    <span class="badge badge-blue">${s.type}</span>
                  </div>
                  <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-dark); margin-top: 4px;">${s.subject}</h4>
                  <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 2px;">📍 ${s.room} • 👥 ${s.count}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="card" style="padding: 24px;">
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-dark); margin-bottom: 14px;">Broadcast Announcement</h3>
            <form onsubmit="event.preventDefault(); window.showToast('Announcement posted to CSE Sem 5!'); this.reset();" style="display: flex; flex-direction: column; gap: 12px;">
              <div>
                <label style="font-size: 0.8rem; font-weight: 600; color: var(--text-dark); display: block; margin-bottom: 4px;">Target Class</label>
                <select class="input-field" style="height: 40px;">
                  <option>CS301: Data Structures - Batch A</option>
                  <option>CS302: DBMS - All Batches</option>
                  <option>CS305: Software Engineering</option>
                </select>
              </div>
              <div>
                <label style="font-size: 0.8rem; font-weight: 600; color: var(--text-dark); display: block; margin-bottom: 4px;">Notice Text</label>
                <textarea rows="3" required placeholder="Important update regarding upcoming lab session or quiz..." class="input-field"></textarea>
              </div>
              <button type="submit" class="btn-primary" style="padding: 8px 18px; font-size: 0.84rem; align-self: flex-start;">
                Post Announcement ${icon('send', 14)}
              </button>
            </form>
          </div>
        </div>

        <!-- Student Attendance Roll Call -->
        <div class="card" style="padding: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
            <div>
              <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-dark);">Mark Attendance — CS302 Database Systems</h3>
              <p style="font-size: 0.8rem; color: var(--text-muted);">Batch B • Total 32 Enrolled</p>
            </div>
            <button onclick="window.showToast('Attendance recorded and synced to student records!')" class="btn-primary" style="padding: 8px 18px; font-size: 0.84rem;">
              Save & Submit Roll ${icon('check', 14)}
            </button>
          </div>
          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.86rem;">
              <thead>
                <tr style="border-bottom: 1px solid var(--border); text-align: left; color: var(--text-muted);">
                  <th style="padding: 10px;">Roll No.</th>
                  <th style="padding: 10px;">Student Name</th>
                  <th style="padding: 10px;">Semester Standing</th>
                  <th style="padding: 10px; text-align: right;">Status</th>
                </tr>
              </thead>
              <tbody>
                ${data.facultyStudents.map((st, idx) => `
                  <tr style="border-bottom: 1px solid var(--border);">
                    <td style="padding: 12px 10px; font-family: monospace; font-weight: 700;">${st.roll}</td>
                    <td style="padding: 12px 10px; font-weight: 600; color: var(--text-dark);">${st.name}</td>
                    <td style="padding: 12px 10px; font-weight: 700; color: ${parseInt(st.perc) >= 75 ? 'var(--green)' : 'var(--red)'};">${st.perc}</td>
                    <td style="padding: 12px 10px; text-align: right;">
                      <button id="roll-${idx}" onclick="window.toggleRollStatus(${idx})" class="btn-ghost" style="padding: 4px 12px; font-size: 0.8rem; border: 1px solid var(--border); font-weight: 700; color: ${st.status === 'Present' ? 'var(--green)' : 'var(--red)'};">
                        ${st.status}
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
    };

    window.toggleRollStatus = function (idx) {
        const st = window.CAMPUS_DATA.facultyStudents[idx];
        if (st) {
            st.status = st.status === 'Present' ? 'Absent' : 'Present';
            const btn = document.getElementById(`roll-${idx}`);
            if (btn) {
                btn.innerText = st.status;
                btn.style.color = st.status === 'Present' ? 'var(--green)' : 'var(--red)';
            }
        }
    };

    // 2. Club Leader Portal
    window.renderClubLeaderView = function () {
        return `
      <div class="content-container animate-fade-in">
        <a href="#dashboard" class="btn-ghost" style="margin-bottom: 16px;">${icon('arrow-left', 14)} Back to Dashboard</a>
        <div class="page-header-row">
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #a855f7, #7c3aed); color: #fff; display: flex; align-items: center; justify-content: center;">
              ${icon('star', 24)}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h1 class="page-title">Club Leader Dashboard</h1>
                <span class="badge badge-violet">ACM Chapter President</span>
              </div>
              <p class="page-subtitle">Manage memberships, publish campus hackathons, and scan attendee QR codes.</p>
            </div>
          </div>
        </div>

        <div class="grid-3" style="margin-bottom: 24px;">
          <div class="card" style="padding: 20px;">
            <p style="font-size: 0.8rem; color: var(--text-muted);">Total Active Members</p>
            <p style="font-size: 1.8rem; font-weight: 800; color: var(--primary);">120</p>
            <span class="badge badge-green" style="margin-top: 4px;">+18 This Month</span>
          </div>
          <div class="card" style="padding: 20px;">
            <p style="font-size: 0.8rem; color: var(--text-muted);">Upcoming Registered Attendees</p>
            <p style="font-size: 1.8rem; font-weight: 800; color: var(--violet);">142 / 200</p>
            <span class="badge badge-blue" style="margin-top: 4px;">CodeFest 2026</span>
          </div>
          <div class="card" style="padding: 20px;">
            <p style="font-size: 0.8rem; color: var(--text-muted);">Pending Member Requests</p>
            <p style="font-size: 1.8rem; font-weight: 800; color: var(--amber);">4</p>
            <span class="badge badge-amber" style="margin-top: 4px;">Needs Approval</span>
          </div>
        </div>

        <div class="card" style="padding: 24px;">
          <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-dark); margin-bottom: 14px;">Pending Membership Applications</h3>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${[
                { name: 'Kunal Verma', branch: 'CSE 2nd Year', interest: 'Competitive Programming' },
                { name: 'Megha Sen', branch: 'IT 3rd Year', interest: 'Web Development & UI' },
                { name: 'Aditya Joshi', branch: 'ECE 2nd Year', interest: 'Algorithms & Math' },
            ].map((app, i) => `
              <div id="club-app-${i}" style="padding: 14px; border-radius: 12px; background: var(--bg-subtle); display: flex; justify-content: space-between; align-items: center; flex-wrap: gap: 10px;">
                <div>
                  <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-dark);">${app.name}</h4>
                  <p style="font-size: 0.78rem; color: var(--text-muted);">${app.branch} • Interest: <strong>${app.interest}</strong></p>
                </div>
                <div style="display: flex; gap: 8px;">
                  <button onclick="document.getElementById('club-app-${i}').style.display='none'; window.showToast('Approved application for ${app.name}!');" class="btn-primary" style="padding: 6px 14px; font-size: 0.78rem;">
                    Approve
                  </button>
                  <button onclick="document.getElementById('club-app-${i}').style.display='none'; window.showToast('Declined request.');" class="btn-ghost" style="padding: 6px 12px; font-size: 0.78rem; border: 1px solid var(--border);">
                    Decline
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    };

    // 3. Placement Officer Portal
    window.renderPlacementOfficerView = function () {
        return `
      <div class="content-container animate-fade-in">
        <a href="#dashboard" class="btn-ghost" style="margin-bottom: 16px;">${icon('arrow-left', 14)} Back to Dashboard</a>
        <div class="page-header-row">
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #0284c7, #0369a1); color: #fff; display: flex; align-items: center; justify-content: center;">
              ${icon('target', 24)}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h1 class="page-title">Placement Officer Console</h1>
                <span class="badge badge-blue">Training & Placement Cell</span>
              </div>
              <p class="page-subtitle">Track corporate recruiter visits, applicant shortlists, and CTC analytics.</p>
            </div>
          </div>
          <button onclick="window.showToast('Initiating corporate invite wizard')" class="btn-primary" style="padding: 8px 18px; font-size: 0.85rem;">
            ${icon('plus', 14)} Schedule Drive
          </button>
        </div>

        <div class="grid-4" style="margin-bottom: 24px;">
          <div class="card" style="padding: 20px;">
            <p style="font-size: 0.8rem; color: var(--text-muted);">Active Companies</p>
            <p style="font-size: 1.8rem; font-weight: 800; color: var(--primary);">28</p>
            <span class="badge badge-green" style="margin-top: 4px;">Top Tech</span>
          </div>
          <div class="card" style="padding: 20px;">
            <p style="font-size: 0.8rem; color: var(--text-muted);">Highest CTC</p>
            <p style="font-size: 1.8rem; font-weight: 800; color: var(--green);">₹45.0 LPA</p>
            <span class="badge badge-green" style="margin-top: 4px;">Google Offer</span>
          </div>
          <div class="card" style="padding: 20px;">
            <p style="font-size: 0.8rem; color: var(--text-muted);">Average CTC</p>
            <p style="font-size: 1.8rem; font-weight: 800; color: var(--blue);">₹12.4 LPA</p>
            <span class="badge badge-blue" style="margin-top: 4px;">CSE/IT Batch</span>
          </div>
          <div class="card" style="padding: 20px;">
            <p style="font-size: 0.8rem; color: var(--text-muted);">Students Placed</p>
            <p style="font-size: 1.8rem; font-weight: 800; color: var(--violet);">78%</p>
            <span class="badge badge-violet" style="margin-top: 4px;">312 Offers</span>
          </div>
        </div>

        <div class="card" style="padding: 24px;">
          <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-dark); margin-bottom: 14px;">Upcoming On-Campus Drives</h3>
          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
              <thead>
                <tr style="border-bottom: 1px solid var(--border); text-align: left; color: var(--text-muted);">
                  <th style="padding: 10px;">Company</th>
                  <th style="padding: 10px;">Role</th>
                  <th style="padding: 10px;">Drive Date</th>
                  <th style="padding: 10px;">Eligible Applicants</th>
                  <th style="padding: 10px; text-align: right;">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border);">
                  <td style="padding: 12px 10px; font-weight: 700; color: var(--text-dark);">Google India</td>
                  <td style="padding: 12px 10px;">SWE Full-Time</td>
                  <td style="padding: 12px 10px;">Oct 25, 2026</td>
                  <td style="padding: 12px 10px; font-weight: 600;">84 Candidates</td>
                  <td style="padding: 12px 10px; text-align: right;"><span class="badge badge-blue">Round 1 OA</span></td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border);">
                  <td style="padding: 12px 10px; font-weight: 700; color: var(--text-dark);">Flipkart</td>
                  <td style="padding: 12px 10px;">ML Intern</td>
                  <td style="padding: 12px 10px;">Oct 28, 2026</td>
                  <td style="padding: 12px 10px; font-weight: 600;">62 Candidates</td>
                  <td style="padding: 12px 10px; text-align: right;"><span class="badge badge-amber">Resume Shortlist</span></td>
                </tr>
                <tr>
                  <td style="padding: 12px 10px; font-weight: 700; color: var(--text-dark);">Infosys BPM</td>
                  <td style="padding: 12px 10px;">Software Associate</td>
                  <td style="padding: 12px 10px;">Nov 02, 2026</td>
                  <td style="padding: 12px 10px; font-weight: 600;">145 Candidates</td>
                  <td style="padding: 12px 10px; text-align: right;"><span class="badge badge-green">Scheduled</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
    };

    // 4. Admin Dashboard
    window.renderAdminDashboardView = function () {
        return `
      <div class="content-container animate-fade-in">
        <a href="#dashboard" class="btn-ghost" style="margin-bottom: 16px;">${icon('arrow-left', 14)} Back to Dashboard</a>
        <div class="page-header-row">
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #334155, #1e293b); color: #fff; display: flex; align-items: center; justify-content: center;">
              ${icon('shield', 24)}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h1 class="page-title">Campus Superadmin Console</h1>
                <span class="badge badge-amber">Full Root Access</span>
              </div>
              <p class="page-subtitle">Campus audit logs, user permissions, IT system health, and database backups.</p>
            </div>
          </div>
        </div>

        <div class="grid-4" style="margin-bottom: 24px;">
          <div class="card" style="padding: 20px;">
            <p style="font-size: 0.8rem; color: var(--text-muted);">Registered Students</p>
            <p style="font-size: 1.8rem; font-weight: 800; color: var(--primary);">4,280</p>
            <span class="badge badge-green" style="margin-top: 4px;">99.4% Active</span>
          </div>
          <div class="card" style="padding: 20px;">
            <p style="font-size: 0.8rem; color: var(--text-muted);">Faculty & Staff</p>
            <p style="font-size: 1.8rem; font-weight: 800; color: var(--blue);">194</p>
            <span class="badge badge-blue" style="margin-top: 4px;">Verified</span>
          </div>
          <div class="card" style="padding: 20px;">
            <p style="font-size: 0.8rem; color: var(--text-muted);">System Uptime</p>
            <p style="font-size: 1.8rem; font-weight: 800; color: var(--green);">99.98%</p>
            <span class="badge badge-green" style="margin-top: 4px;">Healthy</span>
          </div>
          <div class="card" style="padding: 20px;">
            <p style="font-size: 0.8rem; color: var(--text-muted);">Open Grievances</p>
            <p style="font-size: 1.8rem; font-weight: 800; color: var(--amber);">4</p>
            <span class="badge badge-amber" style="margin-top: 4px;">In Triage</span>
          </div>
        </div>

        <div class="card" style="padding: 24px;">
          <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-dark); margin-bottom: 14px;">Recent System Audit Events</h3>
          <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.85rem;">
            <div style="padding: 10px 14px; border-radius: 8px; background: var(--bg-subtle); display: flex; justify-content: space-between;">
              <span>Database snapshot completed successfully (Cloud Storage sync)</span>
              <span style="color: var(--text-muted);">10 mins ago</span>
            </div>
            <div style="padding: 10px 14px; border-radius: 8px; background: var(--bg-subtle); display: flex; justify-content: space-between;">
              <span>Faculty role granted to Prof. Kiran Mehta (Networks dept)</span>
              <span style="color: var(--text-muted);">1 hour ago</span>
            </div>
            <div style="padding: 10px 14px; border-radius: 8px; background: var(--bg-subtle); display: flex; justify-content: space-between;">
              <span>Mid-semester exam schedule broadcast published to 1,200 students</span>
              <span style="color: var(--text-muted);">3 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    `;
    };

    // 5. Profile View
    window.renderProfileView = function () {
        const p = window.CAMPUS_DATA.userProfile;
        return `
      <div class="content-container animate-fade-in" style="max-width: 860px;">
        <a href="#dashboard" class="btn-ghost" style="margin-bottom: 16px;">${icon('arrow-left', 14)} Back to Dashboard</a>
        <div class="card" style="padding: 32px; margin-bottom: 24px;">
          <div style="display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
            <div class="user-avatar" style="width: 72px; height: 72px; font-size: 1.6rem; font-weight: 800;">${p.initials}</div>
            <div>
              <div style="display: flex; align-items: center; gap: 10px;">
                <h1 style="font-size: 1.6rem; font-weight: 800; color: var(--text-dark);">${p.name}</h1>
                <span class="badge badge-green">Enrolled</span>
              </div>
              <p style="font-size: 0.9rem; color: var(--text-muted);">${p.roll} • ${p.dept}</p>
              <p style="font-size: 0.85rem; color: var(--primary); font-weight: 600; margin-top: 4px;">${p.semester} • Cumulative GPA: ${p.cgpa} / 10.0</p>
            </div>
          </div>
        </div>

        <div class="grid-2">
          <div class="card" style="padding: 24px;">
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-dark); margin-bottom: 14px;">Enrolled Student Clubs</h3>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${p.joinedClubs.map(c => `
                <div style="padding: 8px 12px; border-radius: 8px; background: var(--bg-subtle); font-size: 0.85rem; font-weight: 600;">
                  ⭐ ${c}
                </div>
              `).join('')}
            </div>
          </div>
          <div class="card" style="padding: 24px;">
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-dark); margin-bottom: 14px;">Skills & Competencies</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${p.skills.map(s => `
                <span class="badge badge-blue" style="font-size: 0.78rem; padding: 6px 12px;">${s}</span>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
    };

    // 6. Settings View
    window.renderSettingsView = function () {
        const isDark = document.documentElement.classList.contains('dark');
        return `
      <div class="content-container animate-fade-in" style="max-width: 760px;">
        <a href="#dashboard" class="btn-ghost" style="margin-bottom: 16px;">${icon('arrow-left', 14)} Back to Dashboard</a>
        <div class="page-header-row">
          <div>
            <h1 class="page-title">Platform Settings</h1>
            <p class="page-subtitle">Configure theme appearance, notification preferences, and privacy.</p>
          </div>
        </div>

        <div class="card" style="padding: 28px; display: flex; flex-direction: column; gap: 24px;">
          <!-- Theme Setting -->
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <h3 style="font-size: 1rem; font-weight: 700; color: var(--text-dark);">Appearance Theme</h3>
              <p style="font-size: 0.8rem; color: var(--text-muted);">Switch between daylight mode and sleek midnight dark mode.</p>
            </div>
            <button onclick="window.toggleDarkMode(); window.navigate('#settings');" class="btn-primary" style="padding: 8px 18px; font-size: 0.84rem;">
              ${isDark ? `${icon('sun', 16)} Switch to Light` : `${icon('moon', 16)} Switch to Dark`}
            </button>
          </div>

          <hr style="border: 0; border-top: 1px solid var(--border);">

          <!-- Notifications Setting -->
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <h3 style="font-size: 1rem; font-weight: 700; color: var(--text-dark);">Email & Push Alerts</h3>
              <p style="font-size: 0.8rem; color: var(--text-muted);">Get instant notifications for exam schedules & assignment deadlines.</p>
            </div>
            <input type="checkbox" checked onchange="window.showToast('Updated notification preferences.')" style="width: 20px; height: 20px; cursor: pointer;">
          </div>

          <hr style="border: 0; border-top: 1px solid var(--border);">

          <!-- Offline & Standalone Status -->
          <div style="padding: 16px; border-radius: 12px; background: var(--bg-subtle); display: flex; align-items: center; gap: 12px;">
            <div style="color: var(--green);">${icon('check-circle', 24)}</div>
            <div>
              <h4 style="font-size: 0.92rem; font-weight: 700; color: var(--text-dark);">Zero-Server Standalone Mode Active</h4>
              <p style="font-size: 0.78rem; color: var(--text-muted);">Running natively under Chrome via <code>file://</code> protocol. No background Node server required.</p>
            </div>
          </div>
        </div>
      </div>
    `;
    };
})();
