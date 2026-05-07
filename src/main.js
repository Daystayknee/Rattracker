const navItems = [
  'Dashboard', 'Colony Overview', 'Rat Profiles', 'Litters', 'Pairings', 'Genetics', 'Health', 'Weight Tracking',
  'Temperament', 'Cage Management', 'Feeding', 'Medical Records', 'Breeding Plans', 'Financials',
  'Marketplace / Sales', 'Tasks & Reminders', 'Pedigree Tree', 'Analytics', 'Mortality Reports', 'Inventory',
  'Notes & Documents', 'Settings'
];

const stats = [
  ['Total rats', '128', '+12 this month', 'healthy'],
  ['Active breeders', '34', '12 genetic lines', 'elite'],
  ['Pregnant females', '9', '3 due this week', 'pregnant'],
  ['Retired rats', '18', 'comfort colony', 'retired'],
  ['Litters this month', '7', 'avg 11.6 pups', 'newborn'],
  ['Survival rate', '94.8%', '+2.1% vs last qtr', 'healthy'],
  ['Genetic diversity', '82%', 'safe bottleneck index', 'elite'],
  ['Cage occupancy', '76%', '4 rooms optimized', 'warning'],
];

const alerts = [
  ['Medication', 'Juniper needs doxycycline at 8:00 PM', 'medical'],
  ['Pregnancy', 'Velvet reaches day 21 tomorrow', 'pregnant'],
  ['Cleaning', 'Nursery C deep-clean due today', 'warning'],
  ['Weight', 'Pup group L-042 needs milestone weigh-in', 'newborn'],
];

const rats = [
  ['Miso', 'RB-0419', '14 mo', '412g', 'Friendly', 'Ice blue line', 'Eligible', 'healthy'],
  ['Velvet', 'RB-0502', '8 mo', '365g', 'Social', 'Lavender rex', 'Pregnant', 'pregnant'],
  ['Juniper', 'RB-0331', '21 mo', '388g', 'Calm', 'Satin carrier', 'Medical', 'medical'],
  ['Orbit', 'RB-0607', '5 mo', '502g', 'Curious', 'Dumbo standard', 'Watch', 'warning'],
];

const activity = [
  'Logged 12 newborn weights for litter L-042',
  'Generated genetic risk report for Miso × Velvet',
  'Updated respiratory recovery note for Juniper',
  'Added Mazuri 6F stock delivery to inventory',
  'Exported three-generation pedigree certificate',
];

function app() {
  document.querySelector('#root').innerHTML = `
    <div class="app-shell">
      <aside class="sidebar glass-panel">
        <div class="brand"><span class="brand-mark">🐀</span><div><strong>Rattracker</strong><small>Breeder Intelligence OS</small></div></div>
        <button class="command">⌘K&nbsp;&nbsp;Search colony, rats, litters</button>
        <nav>${navItems.map((item, index) => `<a class="${index === 0 ? 'active' : ''}" href="#"><span>${icon(index)}</span>${item}</a>`).join('')}</nav>
      </aside>
      <main>
        <header class="topbar glass-panel">
          <div><p class="eyebrow">Luxury biological intelligence system</p><h1>Colony Command Center</h1></div>
          <div class="top-actions"><button>Quick log</button><button class="primary">+ Add rat</button></div>
        </header>

        <section class="hero-grid">
          <article class="hero-card glass-panel">
            <div><p class="eyebrow">Living ecosystem health</p><h2>Willow House Rattery</h2><p class="muted">Scientific lineage tracking, welfare operations, and breeder-grade analytics in one calm dashboard.</p></div>
            <div class="orbital-health"><span>94.8%</span><small>colony wellness</small></div>
          </article>
          <article class="glass-panel alert-card"><h3>Smart alerts</h3>${alerts.map(([type, text, tone]) => `<div class="alert"><span class="chip ${tone}">${type}</span><p>${text}</p></div>`).join('')}</article>
        </section>

        <section class="stats-grid">${stats.map(([label, value, hint, tone]) => `<article class="stat card"><span class="chip ${tone}">${label}</span><strong>${value}</strong><small>${hint}</small></article>`).join('')}</section>

        <section class="dashboard-grid">
          <article class="card wide"><div class="card-head"><h3>Colony Population Trend</h3><span>births vs deaths · yearly</span></div>${lineChart()}</article>
          <article class="card"><div class="card-head"><h3>Gender Distribution</h3><span>128 rats</span></div>${donutChart()}</article>
          <article class="card"><div class="card-head"><h3>Health Risk Overview</h3><span>radar index</span></div>${radarChart()}</article>
          <article class="card"><div class="card-head"><h3>Temperament Heatmap</h3><span>behavior matrix</span></div>${heatmap()}</article>
          <article class="card"><div class="card-head"><h3>Coat Types</h3><span>phenotype spread</span></div>${segments()}</article>
          <article class="card"><div class="card-head"><h3>Breeding Planner</h3><span>compatibility engine</span></div>${pairing()}</article>
        </section>

        <section class="profile-section">
          <div class="section-title"><div><p class="eyebrow">Elegant animal profiles</p><h2>Featured Rats</h2></div><button>View all profiles</button></div>
          <div class="rat-grid">${rats.map(ratCard).join('')}</div>
        </section>

        <section class="lower-grid">
          <article class="card timeline"><div class="card-head"><h3>Litter L-042 Timeline</h3><span>newborn development</span></div>${timeline()}</article>
          <article class="card"><div class="card-head"><h3>Inventory Intelligence</h3><span>monthly burn</span></div>${inventory()}</article>
          <article class="card activity"><div class="card-head"><h3>Recent Activity</h3><span>automated notes</span></div>${activity.map(item => `<p>${item}</p>`).join('')}</article>
        </section>
      </main>
    </div>`;
}

function icon(index) { return ['◌','◎','🐁','◒','↔','✣','♡','⌁','◇','▦','◍','✚','□','$','▱','◷','🌳','⌬','†','▣','✎','⚙'][index] ?? '•'; }
function lineChart() { return `<svg class="line-chart" viewBox="0 0 760 260" role="img" aria-label="Colony population trend"><defs><linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#b7d8ff" stop-opacity=".55"/><stop offset="1" stop-color="#b7d8ff" stop-opacity="0"/></linearGradient></defs><path class="gridline" d="M40 40H730M40 105H730M40 170H730M40 235H730"/><path class="area" d="M40 190 C120 155 150 160 220 130 S330 80 410 110 520 185 600 120 690 62 730 76 L730 235 L40 235Z"/><path class="births" d="M40 190 C120 155 150 160 220 130 S330 80 410 110 520 185 600 120 690 62 730 76"/><path class="deaths" d="M40 215 C125 210 170 205 230 198 S360 188 425 196 525 218 605 198 690 182 730 176"/><g class="chart-labels"><text x="40" y="252">Jan</text><text x="214" y="252">Apr</text><text x="398" y="252">Jul</text><text x="580" y="252">Oct</text><text x="705" y="252">Dec</text></g></svg>`; }
function donutChart() { return `<div class="donut-wrap"><div class="donut"><span>52%</span><small>female</small></div><div class="legend"><p><b style="--c:#b8d8ba"></b>Female 67</p><p><b style="--c:#a9c7f5"></b>Male 49</p><p><b style="--c:#d8d3cc"></b>Retired 18</p><p><b style="--c:#f1c7c2"></b>Neutered 4</p></div></div>`; }
function radarChart() { return `<div class="radar"><svg viewBox="0 0 220 220"><polygon class="ring" points="110,16 196,66 196,156 110,204 24,156 24,66"/><polygon class="ring" points="110,48 168,82 168,140 110,172 52,140 52,82"/><polygon class="risk" points="110,55 153,86 171,136 110,153 65,136 46,76"/><text x="92" y="14">Resp.</text><text x="174" y="62">Tumor</text><text x="170" y="178">Dental</text><text x="86" y="217">Skin</text><text x="2" y="176">Neuro</text><text x="0" y="62">Weight</text></svg></div>`; }
function heatmap() { const vals = [88,64,42,24,12,82,72,56,33,18,9,69,91,66,44,29,16,77]; return `<div class="heatmap">${['Friendly','Shy','Dominant','Anxious','Aggressive','Social'].map(h=>`<strong>${h}</strong>`).join('')}${vals.map(v=>`<span style="--v:${v}%">${v}</span>`).join('')}</div>`; }
function segments() { return `<div class="segments"><span style="--w:34%;--c:#d7e8d0">rex</span><span style="--w:18%;--c:#f2d7df">double rex</span><span style="--w:28%;--c:#d9e7ff">standard</span><span style="--w:8%;--c:#efd8c4">hairless</span><span style="--w:12%;--c:#ded8f4">satin</span></div>`; }
function pairing() { return `<div class="pairing"><div><span class="avatar">M</span><b>Miso</b><small>Ice blue · F4</small></div><span class="score">92</span><div><span class="avatar lavender">V</span><b>Velvet</b><small>Lavender rex · F3</small></div></div><p class="muted">Low inbreeding coefficient, high sociability inheritance, 18% rare coat probability.</p>`; }
function ratCard([name, id, age, weight, temp, line, status, tone]) { return `<article class="rat-card card"><div class="portrait ${tone}">${name.slice(0,1)}</div><div><h3>${name}</h3><p>${id} · ${age} · ${weight}</p><div class="badge-row"><span class="chip ${tone}">${status}</span><span>${temp}</span></div><small>${line}</small></div><div class="status-ring ${tone}"></div></article>`; }
function timeline() { return `<div class="steps"><span class="done">Birth</span><span class="done">Fur</span><span>Eyes</span><span>Social</span><span>Adoption</span></div><p class="muted">12 pups tracked with percentile overlays, daily weight curves, and readiness milestones.</p>`; }
function inventory() { return `<div class="inventory"><p><span>Food stock</span><b>24 days</b></p><p><span>Bedding</span><b>11 days</b></p><p><span>Medication</span><b>Stable</b></p><p><span>Monthly costs</span><b>$842</b></p></div>`; }

app();
