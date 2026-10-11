// ===== CAMPUSNOVA ACADEMIC VIEWS =====
// Dashboard Overview, Academics, Assignments, Attendance, Timetable

(function () {
    const icon = window.renderIcon;

    // 1. Dashboard Overview View
    window.renderDashboardView = function () {
        const data = window.CAMPUS_DATA;
        const stats = [
            { label: 'Active Subjects', val: '6', icon: 'book', color: 'var(--blue)', bg: 'var(--blue-bg)' },
            { label: 'Pending Assignments', val: '3', icon: 'clipboard', color: 'var(--amber)', bg: 'var(--amber-bg)' },
            { label: 'Semester Attendance', val: '82%', icon: 'calendar-check', color: 'var(--green)', bg: 'var(--green-bg)' },
            { label: 'Upcoming Events', val: '5', icon: 'calendar', color: 'var(--violet)', bg: 'var(--violet-bg)' },
        ];

        return `
      <div class="content-container animate-fade-in">
        <div class="page-header-row">
          <div>
            <h1 class="page-title">Welcome to CampusNova</h1>
            <p class="page-subtitle">Your entire collegiate day at a glance. Select any module to interact.</p>
          </div>
          <div style="display: flex; gap: 10px; align-items: center;">
            <span class="badge badge-blue">Live Prototype</span>
            <button onclick="window.navigate('#notifications')" class="btn-ghost" style="position: relative;">
              ${icon('bell', 18)}
              <span class="notif-badge"></span>
            </button>
          </div>
        </div>

        <!-- Quick Stats Grid -->
        <div class="grid-4" style="margin-bottom: 28px;">
          ${stats.map(s => `
            <div class="card" style="padding: 18px; display: flex; align-items: center; gap: 14px;">
              <div style="width: 44px; height: 44px; border-radius: 12px; background: ${s.bg}; color: ${s.color}; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                ${icon(s.icon, 22)}
              </div>
              <div>
                <p style="font-size: 0.78rem; color: var(--text-muted);">${s.label}</p>
                <p style="font-size: 1.4rem; font-weight: 800; color: var(--text-dark); line-height: 1.2;">${s.val}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- 16 Modules Grid -->
        <div style="margin-bottom: 28px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <h2 style="font-size: 1.2rem; font-weight: 800; color: var(--text-dark);">Campus Modules (${data.dashboardModules.length})</h2>
            <span style="font-size: 0.8rem; color: var(--text-muted);">Click to open interactive preview</span>
          </div>
          <div class="grid-4">
            ${data.dashboardModules.map(m => `
              <a href="${m.path}" class="card card-interactive" style="padding: 18px; display: flex; flex-direction: column; gap: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <div style="width: 38px; height: 38px; border-radius: 10px; background: ${m.gradient}; color: #fff; display: flex; align-items: center; justify-content: center;">
                    ${icon(m.icon, 18)}
                  </div>
                  <span class="badge ${m.badgeClass}">${m.badge}</span>
                </div>
                <div>
                  <h3 style="font-size: 0.95rem; font-weight: 700; color: var(--text-dark);">${m.title}</h3>
                  <p style="font-size: 0.76rem; color: var(--text-muted); line-height: 1.4; margin-top: 2px;">${m.description}</p>
                </div>
                <div style="margin-top: auto; padding-top: 8px; border-top: 1px solid var(--border); display: flex; justify-content: space-between; font-size: 0.74rem; color: var(--text-muted); font-weight: 600;">
                  <span>${m.stats}</span>
                  <span style="color: var(--primary); display: flex; align-items: center; gap: 4px;">Explore ${icon('arrow-right', 12)}</span>
                </div>
              </a>
            `).join('')}
          </div>
        </div>

        <!-- Notification Banner -->
        <div class="card" style="padding: 18px 24px; border-left: 4px solid var(--primary); display: flex; align-items: center; justify-content: space-between; flex-wrap: gap: 14px;">
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="color: var(--primary);">${icon('bell', 24)}</div>
            <div>
              <h4 style="font-size: 0.92rem; font-weight: 700; color: var(--text-dark);">Mid-Semester Exam Schedule Released</h4>
              <p style="font-size: 0.8rem; color: var(--text-muted);">Check your timetable and exam schedule under the Academics module.</p>
            </div>
          </div>
          <a href="#academics" class="btn-primary" style="padding: 6px 16px; font-size: 0.82rem;">View Schedule</a>
        </div>
      </div>
    `;
    };

    // 2. Academics View
    window.renderAcademicsView = function () {
        const subjects = window.CAMPUS_DATA.subjects;
        return `
      <div class="content-container animate-fade-in">
        <a href="#dashboard" class="btn-ghost" style="margin-bottom: 16px;">${icon('arrow-left', 14)} Back to Dashboard</a>
        <div class="page-header-row">
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #3b82f6, #2563eb); color: #fff; display: flex; align-items: center; justify-content: center;">
              ${icon('book', 24)}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h1 class="page-title">Academics</h1>
                <span class="badge badge-blue">Semester 5</span>
              </div>
              <p class="page-subtitle">Subjects, syllabus completion, lecture materials, and exam schedule.</p>
            </div>
          </div>
        </div>

        <!-- Subjects Grid -->
        <h2 style="font-size: 1.15rem; font-weight: 800; color: var(--text-dark); margin-bottom: 16px;">Registered Coursework</h2>
        <div class="grid-2" style="margin-bottom: 32px;">
          ${subjects.map(s => `
            <div class="card" style="padding: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                <div>
                  <span class="badge badge-blue" style="margin-bottom: 4px;">${s.code}</span>
                  <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-dark); margin-top: 4px;">${s.name}</h3>
                  <p style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 6px; margin-top: 4px;">
                    ${icon('users', 14)} ${s.faculty}
                  </p>
                </div>
                <span style="font-size: 0.82rem; font-weight: 700; color: var(--text-muted);">${s.credits} Credits</span>
              </div>
              <div style="margin: 14px 0 16px 0;">
                <div style="display: flex; justify-content: space-between; font-size: 0.78rem; margin-bottom: 4px;">
                  <span style="color: var(--text-muted);">Syllabus Progress</span>
                  <span style="font-weight: 700; color: var(--primary);">${s.progress}%</span>
                </div>
                <div style="height: 8px; background: var(--bg-subtle); border-radius: 9999px; overflow: hidden;">
                  <div style="height: 100%; width: ${s.progress}%; background: linear-gradient(90deg, var(--primary), var(--purple-accent)); border-radius: 9999px;"></div>
                </div>
              </div>
              <div style="display: flex; gap: 8px;">
                <button onclick="window.showToast('Downloaded materials for ${s.code}')" class="btn-ghost" style="font-size: 0.78rem; padding: 6px 12px; border: 1px solid var(--border);">
                  ${icon('file-text', 14)} Notes & Lab PDF
                </button>
                <button onclick="window.navigate('#timetable')" class="btn-ghost" style="font-size: 0.78rem; padding: 6px 12px; border: 1px solid var(--border);">
                  ${icon('clock', 14)} Class Schedule
                </button>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Exam Schedule Table -->
        <div class="card" style="padding: 24px;">
          <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-dark); margin-bottom: 14px;">Mid-Semester Examination Schedule</h3>
          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
              <thead>
                <tr style="border-bottom: 1px solid var(--border); text-align: left; color: var(--text-muted);">
                  <th style="padding: 10px;">Date</th>
                  <th style="padding: 10px;">Time</th>
                  <th style="padding: 10px;">Subject</th>
                  <th style="padding: 10px;">Room</th>
                  <th style="padding: 10px; text-align: right;">Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border);">
                  <td style="padding: 12px 10px; font-weight: 700; color: var(--primary);">Oct 20, 2026</td>
                  <td style="padding: 12px 10px;">09:00 AM</td>
                  <td style="padding: 12px 10px; font-weight: 600;">Data Structures & Algorithms</td>
                  <td style="padding: 12px 10px;">Exam Hall A</td>
                  <td style="padding: 12px 10px; text-align: right;">50</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border);">
                  <td style="padding: 12px 10px; font-weight: 700; color: var(--primary);">Oct 22, 2026</td>
                  <td style="padding: 12px 10px;">11:00 AM</td>
                  <td style="padding: 12px 10px; font-weight: 600;">Database Management Systems</td>
                  <td style="padding: 12px 10px;">Exam Hall B</td>
                  <td style="padding: 12px 10px; text-align: right;">50</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border);">
                  <td style="padding: 12px 10px; font-weight: 700; color: var(--primary);">Oct 24, 2026</td>
                  <td style="padding: 12px 10px;">09:00 AM</td>
                  <td style="padding: 12px 10px; font-weight: 600;">Operating Systems</td>
                  <td style="padding: 12px 10px;">Exam Hall A</td>
                  <td style="padding: 12px 10px; text-align: right;">50</td>
                </tr>
                <tr>
                  <td style="padding: 12px 10px; font-weight: 700; color: var(--primary);">Oct 26, 2026</td>
                  <td style="padding: 12px 10px;">02:00 PM</td>
                  <td style="padding: 12px 10px; font-weight: 600;">Computer Networks</td>
                  <td style="padding: 12px 10px;">Exam Hall C</td>
                  <td style="padding: 12px 10px; text-align: right;">50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
    };

    // 3. Assignments View
    window.renderAssignmentsView = function () {
        const list = window.CAMPUS_DATA.assignments;
        return `
      <div class="content-container animate-fade-in">
        <a href="#dashboard" class="btn-ghost" style="margin-bottom: 16px;">${icon('arrow-left', 14)} Back to Dashboard</a>
        <div class="page-header-row">
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: #fff; display: flex; align-items: center; justify-content: center;">
              ${icon('clipboard', 24)}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h1 class="page-title">Assignments & Submissions</h1>
                <span class="badge badge-amber">3 Pending</span>
              </div>
              <p class="page-subtitle">Track deadlines, submit deliverables, and view instructor grading.</p>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 14px;">
          ${list.map(a => {
            const badgeClass = a.status === 'graded' ? 'badge-green' : a.status === 'submitted' ? 'badge-blue' : 'badge-amber';
            return `
              <div class="card" style="padding: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
                <div style="flex: 1; min-width: 260px;">
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <span class="badge ${badgeClass}">${a.status}</span>
                    <span style="font-size: 0.8rem; font-weight: 700; color: var(--primary);">${a.subject}</span>
                  </div>
                  <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-dark);">${a.title}</h3>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">
                    Deadline: <strong>${a.deadline}</strong> • Marks: <strong>${a.marks} pts</strong>
                  </p>
                </div>
                <div>
                  ${a.status === 'pending' ? `
                    <button onclick="window.showToast('Uploaded solution for ${a.title}')" class="btn-primary" style="padding: 8px 18px; font-size: 0.84rem;">
                      Submit Work ${icon('arrow-right', 14)}
                    </button>
                  ` : `
                    <button class="btn-secondary" style="padding: 8px 18px; font-size: 0.84rem;">
                      ${icon('check', 14)} ${a.grade ? a.grade : 'Submitted'}
                    </button>
                  `}
                </div>
              </div>
            `;
        }).join('')}
        </div>
      </div>
    `;
    };

    // 4. Attendance View
    window.renderAttendanceView = function () {
        const list = window.CAMPUS_DATA.attendanceData;
        const overall = Math.round(list.reduce((acc, s) => acc + s.percent, 0) / list.length);
        return `
      <div class="content-container animate-fade-in">
        <a href="#dashboard" class="btn-ghost" style="margin-bottom: 16px;">${icon('arrow-left', 14)} Back to Dashboard</a>
        <div class="page-header-row">
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #10b981, #059669); color: #fff; display: flex; align-items: center; justify-content: center;">
              ${icon('calendar-check', 24)}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h1 class="page-title">Attendance Tracker</h1>
                <span class="badge badge-green">${overall}% Overall</span>
              </div>
              <p class="page-subtitle">Real-time attendance calculator and 75% examination eligibility monitor.</p>
            </div>
          </div>
        </div>

        <!-- Overall Card -->
        <div class="grid-3" style="margin-bottom: 28px;">
          <div class="card" style="padding: 24px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <div style="width: 90px; height: 90px; border-radius: 50%; border: 6px solid var(--green); display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 12px;">
              <span style="font-size: 1.6rem; font-weight: 900; color: var(--text-dark);">${overall}%</span>
            </div>
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-dark);">Overall Eligibility</h3>
            <span class="badge badge-green" style="margin-top: 6px;">Safe Standing (>75%)</span>
          </div>

          <div class="card" style="padding: 24px; display: flex; flex-direction: column; justify-content: center;">
            <p style="font-size: 0.85rem; color: var(--text-muted);">Attended Classes</p>
            <p style="font-size: 2rem; font-weight: 900; color: var(--primary);">193 / 241</p>
            <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 4px;">Total cumulative lectures & labs</p>
          </div>

          <div class="card" style="padding: 24px; display: flex; flex-direction: column; justify-content: center; border-left: 4px solid var(--amber);">
            <p style="font-size: 0.85rem; color: var(--text-muted);">Attention Required</p>
            <p style="font-size: 2rem; font-weight: 900; color: var(--amber);">2 Subjects</p>
            <p style="font-size: 0.78rem; color: var(--amber);">Computer Networks & DBMS need attendance</p>
          </div>
        </div>

        <!-- Subject List -->
        <div class="card" style="padding: 24px;">
          <h2 style="font-size: 1.15rem; font-weight: 800; color: var(--text-dark); margin-bottom: 20px;">Subject-wise Attendance</h2>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            ${list.map(s => `
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.88rem; margin-bottom: 6px;">
                  <span style="font-weight: 700; color: var(--text-dark);">${s.subject}</span>
                  <div style="display: flex; gap: 12px; align-items: center;">
                    <span style="font-size: 0.78rem; color: var(--text-muted);">${s.attended} / ${s.total} classes</span>
                    <span style="font-weight: 800; color: ${s.percent >= 75 ? 'var(--green)' : 'var(--red)'};">${s.percent}%</span>
                  </div>
                </div>
                <div style="height: 10px; background: var(--bg-subtle); border-radius: 9999px; overflow: hidden;">
                  <div style="height: 100%; width: ${s.percent}%; background: ${s.percent >= 75 ? 'linear-gradient(90deg, #10b981, #059669)' : 'linear-gradient(90deg, #ef4444, #dc2626)'}; border-radius: 9999px;"></div>
                </div>
                ${s.percent < 75 ? `
                  <p style="font-size: 0.76rem; color: var(--red); margin-top: 4px; display: flex; align-items: center; gap: 4px;">
                    ${icon('alert-circle', 13)} Need to attend next 3 consecutive lectures to reach 75%.
                  </p>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    };

    // 5. Timetable View
    window.renderTimetableView = function (day = 'Wednesday') {
        const timetable = window.CAMPUS_DATA.timetable;
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        const currentDay = timetable[day] || timetable['Wednesday'];

        return `
      <div class="content-container animate-fade-in">
        <a href="#dashboard" class="btn-ghost" style="margin-bottom: 16px;">${icon('arrow-left', 14)} Back to Dashboard</a>
        <div class="page-header-row">
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #f59e0b, #d97706); color: #fff; display: flex; align-items: center; justify-content: center;">
              ${icon('clock', 24)}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h1 class="page-title">Weekly Timetable</h1>
                <span class="badge badge-amber">${day}</span>
              </div>
              <p class="page-subtitle">Live daily class schedule, ongoing session, lab allocations, and instructors.</p>
            </div>
          </div>
        </div>

        <!-- Day Selector Tabs -->
        <div class="tabs-container">
          ${days.map(d => `
            <button onclick="window.renderDayTimetable('${d}')" class="tab-btn ${d === day ? 'active' : ''}">
              ${d}
            </button>
          `).join('')}
        </div>

        <div id="timetable-content" style="display: flex; flex-direction: column; gap: 14px;">
          ${currentDay.map(c => `
            <div class="card" style="padding: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; border-left: 4px solid var(--primary);">
              <div>
                <span style="font-size: 0.8rem; font-weight: 700; color: var(--primary);">${c.time}</span>
                <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-dark); margin-top: 2px;">${c.subject}</h3>
                <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 4px;">
                  Room: <strong>${c.room}</strong> • Instructor: <strong>${c.faculty}</strong>
                </p>
              </div>
              <span class="badge badge-blue">${c.type}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    };

    window.renderDayTimetable = function (day) {
        const root = document.getElementById('app-viewport');
        if (root) root.innerHTML = window.renderTimetableView(day);
    };
})();
