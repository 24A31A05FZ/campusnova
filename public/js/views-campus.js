// ===== CAMPUSNOVA CAMPUS LIFE & SERVICES VIEWS =====
// Events, Clubs, Placements, Marketplace, Community, Lost & Found, Complaints, AI Assistant, Notifications

(function () {
    const icon = window.renderIcon;

    // 1. Events View
    window.renderEventsView = function (category = 'All') {
        const list = window.CAMPUS_DATA.events;
        const cats = ['All', 'Technical', 'Entrepreneurship', 'Cultural', 'Workshop', 'Sports', 'Seminar'];
        const filtered = category === 'All' ? list : list.filter(e => e.category === category);

        return `
      <div class="content-container animate-fade-in">
        <a href="#dashboard" class="btn-ghost" style="margin-bottom: 16px;">${icon('arrow-left', 14)} Back to Dashboard</a>
        <div class="page-header-row">
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #f97316, #ef4444); color: #fff; display: flex; align-items: center; justify-content: center;">
              ${icon('calendar', 24)}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h1 class="page-title">Events & Hackathons</h1>
                <span class="badge badge-amber">6 Scheduled</span>
              </div>
              <p class="page-subtitle">Tech competitions, cultural fests, workshops, and sports meets.</p>
            </div>
          </div>
        </div>

        <div class="tabs-container">
          ${cats.map(c => `
            <button onclick="window.renderEventsCategory('${c}')" class="tab-btn ${c === category ? 'active' : ''}">
              ${c}
            </button>
          `).join('')}
        </div>

        <div class="grid-2">
          ${filtered.map(e => `
            <div class="card" style="padding: 24px; display: flex; flex-direction: column; gap: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="badge badge-blue">${e.category}</span>
                <span style="font-size: 0.8rem; font-weight: 700; color: var(--primary);">${e.date}</span>
              </div>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-dark);">${e.title}</h3>
              <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">${e.desc}</p>
              <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 4px; margin-top: 4px;">
                <span>📍 Venue: <strong>${e.venue}</strong></span>
                <span>🎟️ Seats: <strong>${e.seats}</strong></span>
              </div>
              <div style="margin-top: auto; padding-top: 14px; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
                <button id="event-btn-${e.id}" onclick="window.toggleEventRSVP(${e.id})" class="${e.registered ? 'btn-secondary' : 'btn-primary'}" style="padding: 8px 18px; font-size: 0.84rem;">
                  ${e.registered ? `${icon('check', 14)} Registered` : `RSVP Now ${icon('arrow-right', 14)}`}
                </button>
                <button onclick="window.showToast('Added ${e.title} to your campus calendar!')" class="btn-ghost" style="font-size: 0.8rem;">
                  + Add to Calendar
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    };

    window.renderEventsCategory = function (category) {
        const root = document.getElementById('app-viewport');
        if (root) root.innerHTML = window.renderEventsView(category);
    };

    window.toggleEventRSVP = function (id) {
        const item = window.CAMPUS_DATA.events.find(e => e.id === id);
        if (item) {
            item.registered = !item.registered;
            window.showToast(item.registered ? `RSVP Confirmed for ${item.title}!` : `Cancelled RSVP for ${item.title}`);
            window.navigate('#events');
        }
    };

    // 2. Clubs View
    window.renderClubsView = function () {
        const list = window.CAMPUS_DATA.clubs;
        return `
      <div class="content-container animate-fade-in">
        <a href="#dashboard" class="btn-ghost" style="margin-bottom: 16px;">${icon('arrow-left', 14)} Back to Dashboard</a>
        <div class="page-header-row">
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #ec4899, #e11d48); color: #fff; display: flex; align-items: center; justify-content: center;">
              ${icon('users', 24)}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h1 class="page-title">Campus Clubs & Societies</h1>
                <span class="badge badge-violet">24 Active</span>
              </div>
              <p class="page-subtitle">Join student chapters, participate in hackathons, and attend meetups.</p>
            </div>
          </div>
        </div>

        <div class="grid-3">
          ${list.map(c => `
            <div class="card" style="padding: 24px; display: flex; flex-direction: column; gap: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="badge badge-violet">${c.category}</span>
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted);">${c.members} Members</span>
              </div>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-dark);">${c.name}</h3>
              <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">${c.desc}</p>
              <div style="display: flex; flex-wrap: gap; gap: 6px; margin: 4px 0;">
                ${c.activities.map(a => `<span class="badge badge-blue" style="font-size: 0.68rem;">${a}</span>`).join('')}
              </div>
              <div style="margin-top: auto; padding-top: 14px; border-top: 1px solid var(--border);">
                <button onclick="window.toggleClubMembership(${c.id})" class="${c.joined ? 'btn-secondary' : 'btn-primary'}" style="width: 100%; padding: 8px 16px; font-size: 0.85rem; justify-content: center;">
                  ${c.joined ? `${icon('check', 14)} Member (Joined)` : `Join Club ${icon('arrow-right', 14)}`}
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    };

    window.toggleClubMembership = function (id) {
        const club = window.CAMPUS_DATA.clubs.find(c => c.id === id);
        if (club) {
            club.joined = !club.joined;
            club.members += club.joined ? 1 : -1;
            window.showToast(club.joined ? `You joined ${club.name}!` : `Left ${club.name}`);
            window.navigate('#clubs');
        }
    };

    // 3. Placements View
    window.renderPlacementsView = function (filter = 'All') {
        const list = window.CAMPUS_DATA.placements;
        const filters = ['All', 'Internship', 'Full-time', 'Hackathon'];
        const filtered = filter === 'All' ? list : list.filter(p => p.type === filter);

        return `
      <div class="content-container animate-fade-in">
        <a href="#dashboard" class="btn-ghost" style="margin-bottom: 16px;">${icon('arrow-left', 14)} Back to Dashboard</a>
        <div class="page-header-row">
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #6366f1, #2563eb); color: #fff; display: flex; align-items: center; justify-content: center;">
              ${icon('briefcase', 24)}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h1 class="page-title">Placements & Careers</h1>
                <span class="badge badge-green">8 Active Drives</span>
              </div>
              <p class="page-subtitle">Full-time opportunities, high-stipend internships, and hiring challenges.</p>
            </div>
          </div>
        </div>

        <div class="tabs-container">
          ${filters.map(f => `
            <button onclick="window.renderPlacementsFilter('${f}')" class="tab-btn ${f === filter ? 'active' : ''}">
              ${f}
            </button>
          `).join('')}
        </div>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${filtered.map(p => `
            <div class="card" style="padding: 24px; display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 20px;">
              <div style="flex: 1; min-width: 280px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                  <span class="badge badge-blue">${p.type}</span>
                  <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted);">${p.location}</span>
                </div>
                <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--text-dark);">${p.role}</h3>
                <p style="font-size: 0.95rem; font-weight: 700; color: var(--primary); margin-top: 2px;">${p.company}</p>
                <div style="display: flex; flex-wrap: wrap; gap: 16px; font-size: 0.82rem; color: var(--text-muted); margin: 10px 0;">
                  <span>💰 Compensation: <strong style="color: var(--green);">${p.stipend}</strong></span>
                  <span>🎓 Eligibility: <strong>${p.eligibility}</strong></span>
                  <span>⏳ Deadline: <strong>${p.deadline}</strong></span>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                  ${p.skills.map(s => `<span class="badge badge-violet" style="font-size: 0.7rem;">${s}</span>`).join('')}
                </div>
              </div>
              <div>
                <button onclick="window.showToast('Application sent for ${p.role} at ${p.company}!')" class="btn-primary" style="padding: 10px 22px; font-size: 0.9rem;">
                  Apply Now ${icon('arrow-right', 14)}
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    };

    window.renderPlacementsFilter = function (filter) {
        const root = document.getElementById('app-viewport');
        if (root) root.innerHTML = window.renderPlacementsView(filter);
    };

    // 4. Marketplace View
    window.renderMarketplaceView = function () {
        const list = window.CAMPUS_DATA.marketplaceItems;
        return `
      <div class="content-container animate-fade-in">
        <a href="#dashboard" class="btn-ghost" style="margin-bottom: 16px;">${icon('arrow-left', 14)} Back to Dashboard</a>
        <div class="page-header-row">
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #14b8a6, #0891b2); color: #fff; display: flex; align-items: center; justify-content: center;">
              ${icon('shopping-bag', 24)}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h1 class="page-title">Campus Marketplace</h1>
                <span class="badge badge-blue">Student-to-Student</span>
              </div>
              <p class="page-subtitle">Buy and sell textbooks, scientific calculators, stationery, and hostel goods.</p>
            </div>
          </div>
          <button onclick="window.showToast('Listing dialog opened. Add item details.')" class="btn-primary" style="padding: 8px 18px; font-size: 0.85rem;">
            ${icon('plus', 14)} Sell an Item
          </button>
        </div>

        <div class="grid-3">
          ${list.map(item => `
            <div class="card" style="padding: 20px; display: flex; flex-direction: column; gap: 10px;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 2rem;">${item.icon}</span>
                <span class="badge badge-green">${item.condition}</span>
              </div>
              <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-dark);">${item.title}</h3>
              <p style="font-size: 0.78rem; color: var(--text-muted);">Seller: <strong>${item.seller}</strong></p>
              <div style="margin-top: auto; padding-top: 14px; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 1.25rem; font-weight: 900; color: var(--primary);">₹${item.price}</span>
                <button onclick="window.showToast('Contacted ${item.seller} for ${item.title}')" class="btn-primary" style="padding: 6px 14px; font-size: 0.8rem;">
                  Buy Item
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    };

    // 5. Community View
    window.renderCommunityView = function () {
        const posts = window.CAMPUS_DATA.communityPosts;
        return `
      <div class="content-container animate-fade-in">
        <a href="#dashboard" class="btn-ghost" style="margin-bottom: 16px;">${icon('arrow-left', 14)} Back to Dashboard</a>
        <div class="page-header-row">
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #eab308, #f97316); color: #fff; display: flex; align-items: center; justify-content: center;">
              ${icon('message', 24)}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h1 class="page-title">Campus Community</h1>
                <span class="badge badge-amber">Student Forum</span>
              </div>
              <p class="page-subtitle">Discussions, peer recommendations, study groups, and hackathon teams.</p>
            </div>
          </div>
          <button onclick="window.showToast('Compose new post dialog')" class="btn-primary" style="padding: 8px 18px; font-size: 0.85rem;">
            ${icon('plus', 14)} New Thread
          </button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${posts.map(p => `
            <div class="card" style="padding: 24px;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="user-avatar" style="width: 32px; height: 32px; font-size: 0.75rem;">${p.avatar}</div>
                  <div>
                    <span style="font-size: 0.88rem; font-weight: 700; color: var(--text-dark);">${p.author}</span>
                    <span style="font-size: 0.75rem; color: var(--text-muted); margin-left: 6px;">• ${p.time}</span>
                  </div>
                </div>
                <span class="badge badge-blue">${p.category}</span>
              </div>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-dark); margin-bottom: 8px;">${p.title}</h3>
              <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">${p.content}</p>
              <div style="margin-top: 16px; padding-top: 12px; border-top: 1px solid var(--border); display: flex; gap: 18px; font-size: 0.82rem; color: var(--text-muted);">
                <button onclick="window.likeCommunityPost(${p.id})" style="display: flex; align-items: center; gap: 6px; font-weight: 600; color: var(--text-muted);" onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='var(--text-muted)'">
                  ${icon('heart', 16)} <span id="likes-${p.id}">${p.likes}</span> Likes
                </button>
                <button onclick="window.showToast('Showing ${p.replies} replies for this discussion')" style="display: flex; align-items: center; gap: 6px; font-weight: 600; color: var(--text-muted);">
                  ${icon('message', 16)} ${p.replies} Replies
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    };

    window.likeCommunityPost = function (id) {
        const post = window.CAMPUS_DATA.communityPosts.find(p => p.id === id);
        if (post) {
            post.likes += 1;
            const el = document.getElementById(`likes-${id}`);
            if (el) el.innerText = post.likes;
            window.showToast('Liked post!');
        }
    };

    // 6. Lost & Found View
    window.renderLostFoundView = function () {
        const list = window.CAMPUS_DATA.lostItems;
        return `
      <div class="content-container animate-fade-in">
        <a href="#dashboard" class="btn-ghost" style="margin-bottom: 16px;">${icon('arrow-left', 14)} Back to Dashboard</a>
        <div class="page-header-row">
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #64748b, #475569); color: #fff; display: flex; align-items: center; justify-content: center;">
              ${icon('search', 24)}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h1 class="page-title">Lost & Found</h1>
                <span class="badge badge-violet">Campus Security</span>
              </div>
              <p class="page-subtitle">Report missing belongings or claim items found on campus.</p>
            </div>
          </div>
          <button onclick="window.showToast('Report lost or found item modal')" class="btn-primary" style="padding: 8px 18px; font-size: 0.85rem;">
            ${icon('plus', 14)} Report Item
          </button>
        </div>

        <div class="grid-2">
          ${list.map(item => `
            <div class="card" style="padding: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span class="badge ${item.type === 'Lost' ? 'badge-red' : 'badge-green'}">${item.type}</span>
                <span style="font-size: 0.78rem; color: var(--text-muted);">${item.date}</span>
              </div>
              <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-dark);">${item.title}</h3>
              <p style="font-size: 0.82rem; color: var(--text-muted); margin: 6px 0;">📍 Location: <strong>${item.location}</strong></p>
              <p style="font-size: 0.8rem; color: var(--text-muted);">Contact: <strong>${item.contact}</strong></p>
              <div style="margin-top: 14px; padding-top: 10px; border-top: 1px solid var(--border);">
                <button onclick="window.showToast('Claim ticket created. Visit Security Desk.')" class="btn-ghost" style="font-size: 0.8rem; width: 100%; justify-content: center; border: 1px solid var(--border);">
                  Claim / Contact Finder
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    };

    // 7. Complaints View
    window.renderComplaintsView = function () {
        const list = window.CAMPUS_DATA.complaints;
        return `
      <div class="content-container animate-fade-in">
        <a href="#dashboard" class="btn-ghost" style="margin-bottom: 16px;">${icon('arrow-left', 14)} Back to Dashboard</a>
        <div class="page-header-row">
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #ef4444, #e11d48); color: #fff; display: flex; align-items: center; justify-content: center;">
              ${icon('alert-circle', 24)}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h1 class="page-title">Grievances & Complaints</h1>
                <span class="badge badge-red">Admin Triage</span>
              </div>
              <p class="page-subtitle">Log infrastructure, classroom, or hostel issues with transparent resolution tracking.</p>
            </div>
          </div>
        </div>

        <div class="grid-2">
          <!-- Submission Form -->
          <div class="card" style="padding: 24px;">
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-dark); margin-bottom: 14px;">Log New Complaint</h3>
            <form onsubmit="event.preventDefault(); window.addNewComplaint(this);" style="display: flex; flex-direction: column; gap: 14px;">
              <div>
                <label style="font-size: 0.8rem; font-weight: 600; color: var(--text-dark); display: block; margin-bottom: 4px;">Category</label>
                <select id="comp-category" class="input-field" style="height: 42px;">
                  <option>Wi-Fi & IT Infrastructure</option>
                  <option>Classroom & AV Facilities</option>
                  <option>Hostel & Maintenance</option>
                  <option>Campus Transit & Bus Route</option>
                  <option>Cafeteria & Hygiene</option>
                </select>
              </div>
              <div>
                <label style="font-size: 0.8rem; font-weight: 600; color: var(--text-dark); display: block; margin-bottom: 4px;">Description of Issue</label>
                <textarea id="comp-desc" rows="3" required placeholder="Describe the maintenance or service issue..." class="input-field"></textarea>
              </div>
              <button type="submit" class="btn-primary" style="padding: 10px 20px; font-size: 0.86rem; align-self: flex-start;">
                Submit Ticket ${icon('arrow-right', 14)}
              </button>
            </form>
          </div>

          <!-- Active Tickets -->
          <div class="card" style="padding: 24px;">
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-dark); margin-bottom: 14px;">Logged Grievances (${list.length})</h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              ${list.map(c => `
                <div style="padding: 14px; border-radius: 12px; background: var(--bg-subtle); border: 1px solid var(--border);">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                    <span style="font-family: monospace; font-size: 0.75rem; font-weight: 700; color: var(--primary);">${c.id}</span>
                    <span class="badge ${c.status === 'Resolved' ? 'badge-green' : c.status === 'In Progress' ? 'badge-blue' : 'badge-amber'}">${c.status}</span>
                  </div>
                  <p style="font-size: 0.85rem; font-weight: 600; color: var(--text-dark);">${c.desc}</p>
                  <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">Category: ${c.category} • Date: ${c.date}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
    };

    window.addNewComplaint = function (form) {
        const cat = document.getElementById('comp-category').value;
        const desc = document.getElementById('comp-desc').value;
        const newId = `CMP-00${window.CAMPUS_DATA.complaints.length + 1}`;
        window.CAMPUS_DATA.complaints.unshift({
            id: newId,
            category: cat,
            desc: desc,
            status: 'Pending',
            date: 'Today',
            urgency: 'Medium',
        });
        window.showToast(`Complaint logged as ${newId}!`);
        window.navigate('#complaints');
    };

    // 8. AI Assistant View
    window.renderAIAssistantView = function () {
        const data = window.CAMPUS_DATA;
        return `
      <div class="content-container animate-fade-in" style="max-width: 860px;">
        <a href="#dashboard" class="btn-ghost" style="margin-bottom: 16px;">${icon('arrow-left', 14)} Back to Dashboard</a>
        <div class="page-header-row">
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #8b5cf6, #6d28d9); color: #fff; display: flex; align-items: center; justify-content: center;">
              ${icon('bot', 24)}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h1 class="page-title">AI Campus Companion</h1>
                <span class="badge badge-violet">Interactive AI Bot</span>
              </div>
              <p class="page-subtitle">Instant conversational answers on timetable, clubs, assignments, and campus life.</p>
            </div>
          </div>
        </div>

        <!-- Chat Container -->
        <div class="card" style="display: flex; flex-direction: column; height: 520px; overflow: hidden;">
          <div id="ai-chat-history" style="flex: 1; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 16px;">
            ${data.aiMessages.map(m => `
              <div style="display: flex; gap: 12px; align-items: flex-start; ${m.role === 'user' ? 'justify-content: flex-end;' : ''}">
                ${m.role === 'assistant' ? `
                  <div style="width: 32px; height: 32px; border-radius: 8px; background: linear-gradient(135deg, #8b5cf6, #6d28d9); color: #fff; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    ${icon('bot', 16)}
                  </div>
                ` : ''}
                <div style="max-width: 80%; padding: 12px 16px; border-radius: 16px; font-size: 0.88rem; line-height: 1.5; ${m.role === 'assistant' ? 'background: var(--bg-subtle); color: var(--text-dark); border-top-left-radius: 4px;' : 'background: var(--primary); color: #fff; border-top-right-radius: 4px;'}">
                  ${m.text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Suggested Chips -->
          <div style="padding: 10px 16px; background: var(--card-bg); border-top: 1px solid var(--border); display: flex; gap: 8px; overflow-x: auto; white-space: nowrap;">
            ${data.aiSuggestions.map(s => `
              <button onclick="window.sendAIMessage('${s.replace(/'/g, "\\'")}')" class="btn-ghost" style="padding: 4px 12px; font-size: 0.75rem; border: 1px solid var(--border); border-radius: 9999px;">
                ${icon('sparkles', 12)} ${s}
              </button>
            `).join('')}
          </div>

          <!-- Input Bar -->
          <div style="padding: 14px 16px; border-top: 1px solid var(--border); display: flex; gap: 10px;">
            <input id="ai-input" type="text" placeholder="Ask anything about campus, assignments, or clubs..." class="input-field" onkeydown="if(event.key === 'Enter') window.submitAIInput()">
            <button onclick="window.submitAIInput()" class="btn-primary" style="padding: 0 18px;">
              ${icon('send', 16)}
            </button>
          </div>
        </div>
      </div>
    `;
    };

    window.sendAIMessage = function (query) {
        const data = window.CAMPUS_DATA;
        data.aiMessages.push({ role: 'user', text: query });
        const reply = data.aiResponses[query] || `I looked across campus data for "${query}". In the full deployment, I will give you a real-time summary directly from your college database!`;
        data.aiMessages.push({ role: 'assistant', text: reply });
        const root = document.getElementById('app-viewport');
        if (root) root.innerHTML = window.renderAIAssistantView();
        setTimeout(() => {
            const box = document.getElementById('ai-chat-history');
            if (box) box.scrollTop = box.scrollHeight;
        }, 50);
    };

    window.submitAIInput = function () {
        const input = document.getElementById('ai-input');
        if (input && input.value.trim()) {
            window.sendAIMessage(input.value.trim());
            input.value = '';
        }
    };

    // 9. Notifications View
    window.renderNotificationsView = function () {
        const list = window.CAMPUS_DATA.notifications;
        return `
      <div class="content-container animate-fade-in" style="max-width: 860px;">
        <a href="#dashboard" class="btn-ghost" style="margin-bottom: 16px;">${icon('arrow-left', 14)} Back to Dashboard</a>
        <div class="page-header-row">
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #60a5fa, #3b82f6); color: #fff; display: flex; align-items: center; justify-content: center;">
              ${icon('bell', 24)}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h1 class="page-title">Notification Center</h1>
                <span class="badge badge-red">Smart Alerts</span>
              </div>
              <p class="page-subtitle">Real-time alerts for classes, exam deadlines, and placement drives.</p>
            </div>
          </div>
          <button onclick="window.markAllNotificationsRead()" class="btn-ghost" style="border: 1px solid var(--border); font-size: 0.82rem;">
            ${icon('check', 14)} Mark All as Read
          </button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${list.map(n => `
            <div class="card" style="padding: 18px 22px; display: flex; align-items: center; justify-content: space-between; gap: 16px; ${n.read ? 'opacity: 0.75;' : 'border-left: 4px solid var(--primary);'}">
              <div style="display: flex; align-items: center; gap: 14px;">
                <div style="color: var(--primary);">${icon(n.icon, 20)}</div>
                <div>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span class="badge badge-blue" style="font-size: 0.68rem;">${n.type}</span>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">${n.time}</span>
                  </div>
                  <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-dark); margin-top: 3px;">${n.title}</h4>
                </div>
              </div>
              ${!n.read ? `<span class="badge badge-amber">Unread</span>` : `<span class="badge badge-green">Read</span>`}
            </div>
          `).join('')}
        </div>
      </div>
    `;
    };

    window.markAllNotificationsRead = function () {
        window.CAMPUS_DATA.notifications.forEach(n => n.read = true);
        window.showToast('All notifications marked as read.');
        window.navigate('#notifications');
    };
})();
