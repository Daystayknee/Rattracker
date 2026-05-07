const navItems = ['Dashboard', 'Rats', 'Litters', 'Health', 'Tasks', 'Analytics', 'Settings'];

const rats = [
  {
    id: 'rat-001',
    name: 'Miso',
    sex: 'Doe',
    dob: '2025-03-14',
    color: 'Blue agouti',
    coatType: 'Rex',
    temperament: 'Friendly',
    lineage: 'Willow Ice F4',
    weight: 412,
    status: 'Active breeder',
    notes: 'Confident handler, excellent maternal relatives, prefers hammock hides.',
    imageUrl: '',
    tags: ['healthy', 'rex', 'lineage F4'],
  },
  {
    id: 'rat-002',
    name: 'Velvet',
    sex: 'Doe',
    dob: '2025-09-22',
    color: 'Lavender',
    coatType: 'Velveteen',
    temperament: 'Social',
    lineage: 'Moonfield Lavender F3',
    weight: 365,
    status: 'Pregnant',
    notes: 'Gentle, highly social, due for a routine weight check this week.',
    imageUrl: '',
    tags: ['pregnant', 'social', 'watch weight'],
  },
  {
    id: 'rat-003',
    name: 'Juniper',
    sex: 'Buck',
    dob: '2024-08-02',
    color: 'Black berkshire',
    coatType: 'Standard',
    temperament: 'Calm',
    lineage: 'North Star Health Line',
    weight: 508,
    status: 'Retired',
    notes: 'Retired from breeding; calm mentor buck with excellent longevity markers.',
    imageUrl: '',
    tags: ['retired', 'calm', 'mentor'],
  },
  {
    id: 'rat-004',
    name: 'Orbit',
    sex: 'Buck',
    dob: '2025-11-07',
    color: 'Champagne hooded',
    coatType: 'Satin',
    temperament: 'Curious',
    lineage: 'Riverglass Satin F2',
    weight: 462,
    status: 'Observation',
    notes: 'Bright and curious; monitor cage dynamics after recent group shuffle.',
    imageUrl: '',
    tags: ['new adult', 'curious', 'observe'],
  },
];

const litters = [
  { id: 'L-042', mother: 'Velvet', father: 'Miso', birthDate: '2026-04-21', litterSize: 12, notes: 'All pups active; sexing planned for day 12.' },
  { id: 'L-041', mother: 'Miso', father: 'Juniper', birthDate: '2026-03-18', litterSize: 9, notes: 'Strong weight gain; three adoption holds.' },
];

const tasks = [
  { id: 'task-001', title: 'Weigh Velvet', dueDate: 'Today', completed: false, ratId: 'rat-002', type: 'Weight' },
  { id: 'task-002', title: 'Clean Nursery C', dueDate: 'Today', completed: false, ratId: null, type: 'Cage' },
  { id: 'task-003', title: 'Medication note review', dueDate: 'Tomorrow', completed: false, ratId: 'rat-004', type: 'Health' },
  { id: 'task-004', title: 'Pairing cooldown check', dueDate: 'May 12', completed: true, ratId: 'rat-001', type: 'Breeding' },
];

const activity = [
  'Added 12 pups to litter L-042.',
  'Updated Velvet weight to 365g.',
  'Completed weekly cage reset for Main Rack A.',
  'Added note to Orbit temperament log.',
];

function app() {
  document.querySelector('#root').innerHTML = `
    <div class="app-shell">
      <aside class="sidebar glass-panel">
        <div class="brand"><span class="brand-mark">🐀</span><div><strong>Rattracker</strong><small>Phase 1 Foundation</small></div></div>
        <button class="command">⌘K&nbsp;&nbsp;Search rats, litters, tasks</button>
        <nav>${navItems.map((item, index) => `<a class="${index === 0 ? 'active' : ''}" href="#"><span>${['◌','🐀','🍼','♡','◷','⌁','⚙'][index]}</span>${item}</a>`).join('')}</nav>
      </aside>

      <main>
        <header class="topbar glass-panel">
          <div><p class="eyebrow">Luxury minimalist breeder foundation</p><h1>Colony Dashboard</h1></div>
          <div class="top-actions"><button>Dark mode</button><button class="primary">+ Add rat</button></div>
        </header>

        <section class="foundation-note card">
          <span class="phase-pill">Phase 1 only</span>
          <div><h2>Build the core first.</h2><p>Clean app shell, database-ready rat profiles, dashboard homepage, and practical reminders — no AI, no advanced genetics, no marketplace yet.</p></div>
        </section>

        <section class="stats-grid">
          ${statCard('Total rats', rats.length, 'Core records in Rats table', 'healthy')}
          ${statCard('Recent litters', litters.length, 'Basic litter tracking', 'newborn')}
          ${statCard('Open tasks', tasks.filter(task => !task.completed).length, 'Due reminders', 'warning')}
          ${statCard('Avg weight', `${Math.round(rats.reduce((sum, rat) => sum + rat.weight, 0) / rats.length)}g`, 'Simple weight baseline', 'elite')}
        </section>

        <section class="dashboard-grid">
          <article class="card wide"><div class="card-head"><h3>Weight Trends</h3><span>simple Phase 1 chart</span></div>${weightChart()}</article>
          <article class="card"><div class="card-head"><h3>Alerts</h3><span>today</span></div>${alertsPanel()}</article>
          <article class="card"><div class="card-head"><h3>Quick Actions</h3><span>fast logging</span></div>${quickActions()}</article>
        </section>

        <section class="section-title"><div><p class="eyebrow">Most important system</p><h2>Rat Profiles</h2></div><button>View all rats</button></section>
        <section class="rat-grid">${rats.map(ratCard).join('')}</section>

        <section class="profile-detail-grid">
          <article class="card profile-hero">${profileDetail(rats[1])}</article>
          <article class="card"><div class="card-head"><h3>Tasks & Reminders</h3><span>basic workflow</span></div>${taskList()}</article>
          <article class="card"><div class="card-head"><h3>Recent Litters</h3><span>simple records</span></div>${litterList()}</article>
        </section>

        <section class="database-grid">
          <article class="card"><div class="card-head"><h3>First Database</h3><span>Supabase-ready</span></div>${schemaPreview()}</article>
          <article class="card activity"><div class="card-head"><h3>Recent Activity</h3><span>stable foundation</span></div>${activity.map(item => `<p>${item}</p>`).join('')}</article>
        </section>
      </main>
    </div>`;
}

function statCard(label, value, hint, tone) { return `<article class="stat card"><span class="tag ${tone}">${label}</span><strong>${value}</strong><small>${hint}</small></article>`; }
function tagList(tags) { return tags.map(tag => `<span class="tag">${tag}</span>`).join(''); }
function ratInitial(name) { return name.split(' ').map(part => part[0]).join('').slice(0, 2); }
function ratCard(rat) { return `<article class="rat-card card"><div class="portrait ${rat.status.toLowerCase().replaceAll(' ', '-')}">${ratInitial(rat.name)}</div><div><div class="rat-card-head"><h3>${rat.name}</h3><span>${rat.weight}g</span></div><p>${rat.sex} · ${rat.color} · ${rat.coatType}</p><div class="tag-row">${tagList([rat.status, rat.temperament, rat.lineage])}</div><small>${rat.notes}</small></div></article>`; }
function profileDetail(rat) { return `<div class="profile-layout"><div class="profile-portrait">${ratInitial(rat.name)}</div><div><span class="tag pregnant">Featured profile</span><h2>${rat.name}</h2><p>${rat.notes}</p><div class="profile-fields"><p><span>DOB</span><b>${rat.dob}</b></p><p><span>Sex</span><b>${rat.sex}</b></p><p><span>Lineage</span><b>${rat.lineage}</b></p><p><span>Temperament</span><b>${rat.temperament}</b></p><p><span>Coat</span><b>${rat.coatType}</b></p><p><span>Weight</span><b>${rat.weight}g</b></p></div><div class="tag-row">${tagList(rat.tags)}</div></div></div>`; }
function alertsPanel() { return `<div class="alert-list"><p><span class="tag warning">Weight</span>Velvet is due for a pregnancy weight log.</p><p><span class="tag medical">Health</span>Review Orbit observation notes tomorrow.</p><p><span class="tag newborn">Litter</span>L-042 sexing milestone is approaching.</p></div>`; }
function quickActions() { return `<div class="quick-actions"><button>+ Rat</button><button>+ Weight</button><button>+ Litter</button><button>+ Task</button></div>`; }
function taskList() { return `<div class="task-list">${tasks.map(task => `<label class="task ${task.completed ? 'done' : ''}"><input type="checkbox" ${task.completed ? 'checked' : ''}/><span><b>${task.title}</b><small>${task.type} · ${task.dueDate}</small></span></label>`).join('')}</div>`; }
function litterList() { return `<div class="litter-list">${litters.map(litter => `<article><span class="tag newborn">${litter.id}</span><h4>${litter.mother} × ${litter.father}</h4><p>${litter.birthDate} · ${litter.litterSize} pups</p><small>${litter.notes}</small></article>`).join('')}</div>`; }
function schemaPreview() { return `<div class="schema-list"><p><b>rats</b><span>id, name, sex, dob, color, coat_type, weight, status, notes, image_url</span></p><p><b>litters</b><span>id, mother_id, father_id, birth_date, litter_size, notes</span></p><p><b>tasks</b><span>id, title, due_date, completed, rat_id</span></p></div>`; }
function weightChart() { return `<svg class="line-chart" viewBox="0 0 760 250" role="img" aria-label="Simple colony weight trends"><defs><linearGradient id="weightFill" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#cde6ff" stop-opacity=".55"/><stop offset="1" stop-color="#cde6ff" stop-opacity="0"/></linearGradient></defs><path class="gridline" d="M40 42H725M40 102H725M40 162H725M40 222H725"/><path class="area" d="M42 188 C130 172 176 152 250 160 S360 186 438 130 566 92 724 112 L724 222 L42 222Z"/><path class="trend-line" d="M42 188 C130 172 176 152 250 160 S360 186 438 130 566 92 724 112"/><g><text x="40" y="242">Week 1</text><text x="230" y="242">Week 2</text><text x="420" y="242">Week 3</text><text x="622" y="242">Week 4</text></g></svg>`; }

app();
