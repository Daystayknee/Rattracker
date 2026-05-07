const navItems = [
  'Dashboard', 'Bio Intelligence', 'Life Simulation', 'Bond Mapping', 'AI Assistant', 'Pedigree Galaxy',
  'Colony Overview', 'Rat Profiles', 'Litters', 'Pairings', 'Genetics', 'Health', 'Weight Tracking',
  'Temperament', 'Cage Management', 'Feeding', 'Medical Records', 'Research Mode', 'Financials',
  'Marketplace / Sales', 'Tasks & Reminders', 'Memorial Garden', 'Inventory', 'Notes & Documents', 'Settings'
];

const stats = [
  ['Total rats', '128', '+12 this month', 'healthy'],
  ['Active breeders', '34', '12 genetic lines', 'elite'],
  ['Pregnant females', '9', '3 due this week', 'pregnant'],
  ['Retired rats', '18', 'comfort colony', 'retired'],
  ['Litters this month', '7', 'avg 11.6 pups', 'newborn'],
  ['Survival rate', '94.8%', '+2.1% vs last qtr', 'healthy'],
  ['Genetic diversity', '82%', 'safe bottleneck index', 'elite'],
  ['Colony health score', '91', 'wellness rating live', 'healthy'],
];

const alerts = [
  ['AI risk', 'Velvet × Miso projects 37% elevated mammary tumor risk after F4', 'medical'],
  ['Pregnancy', 'Velvet reaches day 21 tomorrow; nursery humidity is optimal', 'pregnant'],
  ['IoT sensor', 'Nursery C ammonia drift detected — ventilation pulse recommended', 'warning'],
  ['Mood shift', 'Orbit shows 3-day withdrawal pattern correlated with cage move', 'newborn'],
];

const rats = [
  ['Miso', 'RB-0419', '14 mo', '412g', 'Friendly', 'Ice blue line', 'Eligible', 'healthy'],
  ['Velvet', 'RB-0502', '8 mo', '365g', 'Social', 'Lavender rex', 'Pregnant', 'pregnant'],
  ['Juniper', 'RB-0331', '21 mo', '388g', 'Calm', 'Satin carrier', 'Medical', 'medical'],
  ['Orbit', 'RB-0607', '5 mo', '502g', 'Curious', 'Dumbo standard', 'Watch', 'warning'],
];

const activity = [
  'AI assistant drafted a three-generation longevity strategy for the Ice line',
  'Logged 12 newborn weights for litter L-042 and refreshed trait reveal confidence',
  'Mapped grooming bond between Miso and Orbit with high compatibility signal',
  'Veterinary portal synced Juniper respiratory imaging and prescription notes',
  'Memory Garden preserved legacy profile for Hazel with 42 descendants linked',
];

const intelligenceModules = [
  ['Genetic Stability Engine', 'Mutation concentration, fertility degradation, immune resilience, and hereditary weakness probability.', 'Integrity 87%', 'elite'],
  ['Predictive Disease Modeling', 'Tumor, respiratory, obesity, stress illness, and lifespan correlations projected across generations.', 'Risk -12%', 'medical'],
  ['AI Lineage Designer', 'Goal-based strategy maps for longevity, rex quality, lower aggression, and diversity recovery.', '4 plans', 'healthy'],
  ['Population Genetics', 'Allele drift, bottleneck pressure, coefficient trend, and lineage collapse detection.', '82% diverse', 'warning'],
];

const ecosystemTiles = [
  ['3D Pedigree Galaxy', 'Floating node constellation with inheritance-flow trails and inbreeding path glow.', '🌌'],
  ['Social Bond Web', 'Grooming, maternal attachment, aggression pairs, and emotional compatibility heatmaps.', '🫂'],
  ['Growth Replay', 'Baby → adult → senior cinematic slider using photos, weight, and aging markers.', '📸'],
  ['QR/NFC Cage OS', 'Scan cages for profiles, medications, cleaning history, feed schedule, and IoT vitals.', '🏷️'],
  ['Veterinary Portal', 'Shared records, imaging, prescriptions, symptom scanner, and urgency triage.', '🩻'],
  ['Memory Garden', 'Legacy profiles, candles, descendants, life statistics, and remembrance archive.', '🕯️'],
];

function app() {
  document.querySelector('#root').innerHTML = `
    <div class="ambient-layer"><span></span><span></span><span></span></div>
    <div class="app-shell">
      <aside class="sidebar glass-panel">
        <div class="brand"><span class="brand-mark">🐀</span><div><strong>Rattracker</strong><small>Biological Operating System</small></div></div>
        <button class="command">⌘K&nbsp;&nbsp;Ask AI, scan rat, open cage</button>
        <nav>${navItems.map((item, index) => `<a class="${index === 0 ? 'active' : ''}" href="#"><span>${icon(index)}</span>${item}</a>`).join('')}</nav>
      </aside>
      <main>
        <header class="topbar glass-panel">
          <div><p class="eyebrow">Living biological intelligence platform</p><h1>Colony Ecosystem OS</h1></div>
          <div class="top-actions"><button>Scan NFC</button><button>Ask AI</button><button class="primary">+ Quick log</button></div>
        </header>

        <section class="hero-grid cinematic">
          <article class="hero-card glass-panel">
            <div><p class="eyebrow">Luxury science command center</p><h2>Willow House Rattery</h2><p class="muted">A living genetic ecosystem combining breeder operations, emotional intelligence, veterinary-grade analytics, AI planning, and immersive lineage simulation.</p></div>
            <div class="orbital-health integrity"><span>87%</span><small>genetic integrity</small></div>
          </article>
          <article class="glass-panel assistant-card">
            <div class="assistant-head"><span>🤖</span><div><h3>AI Colony Assistant</h3><p>Ask breeding, health, lineage, and business questions.</p></div></div>
            <div class="prompt-bubble">Which male best improves Luna's longevity without increasing rex bottleneck pressure?</div>
            <div class="ai-answer"><b>Recommendation:</b> Miso improves diversity by 11%, lowers aggression forecast, and preserves ice-blue rarity. Avoid Orbit for F4 tumor-risk clustering.</div>
          </article>
        </section>

        <section class="stats-grid">${stats.map(([label, value, hint, tone]) => `<article class="stat card"><span class="chip ${tone}">${label}</span><strong>${value}</strong><small>${hint}</small></article>`).join('')}</section>

        <section class="intelligence-grid">
          <article class="card integrity-panel"><div class="card-head"><h3>Genetic Stability Engine</h3><span>hidden biological scoring</span></div>${integrityScore()}<div class="forecast-bars"><p><span>Immune resilience</span><b style="--w:91%"></b></p><p><span>Fertility stability</span><b style="--w:78%"></b></p><p><span>Mutation load safety</span><b style="--w:84%"></b></p></div></article>
          <article class="card wide"><div class="card-head"><h3>Predictive Disease Modeling</h3><span>generation forecast · mammary tumor warning</span></div>${predictiveChart()}<p class="warning-copy">This pairing has a <b>37% elevated mammary tumor risk after generation 4</b>, driven by two overlapping maternal branches.</p></article>
          ${intelligenceModules.map(([title, copy, metric, tone]) => `<article class="card module-card"><span class="chip ${tone}">${metric}</span><h3>${title}</h3><p>${copy}</p></article>`).join('')}
        </section>

        <section class="dashboard-grid">
          <article class="card wide"><div class="card-head"><h3>Colony Population Trend</h3><span>births vs deaths · yearly</span></div>${lineChart()}</article>
          <article class="card"><div class="card-head"><h3>Gender Distribution</h3><span>128 rats</span></div>${donutChart()}</article>
          <article class="card"><div class="card-head"><h3>Health Risk Overview</h3><span>radar index</span></div>${radarChart()}</article>
          <article class="card"><div class="card-head"><h3>Temperament Heatmap</h3><span>behavior matrix</span></div>${heatmap()}</article>
          <article class="card"><div class="card-head"><h3>Coat Types</h3><span>phenotype spread</span></div>${segments()}</article>
          <article class="card"><div class="card-head"><h3>AI Pairing Planner</h3><span>compatibility engine</span></div>${pairing()}</article>
        </section>

        <section class="simulation-grid">
          <article class="card galaxy-card"><div class="card-head"><h3>3D Pedigree Galaxy</h3><span>lineage constellations</span></div>${pedigreeGalaxy()}</article>
          <article class="card"><div class="card-head"><h3>Social Bond Mapping</h3><span>emotional intelligence</span></div>${bondMap()}</article>
          <article class="card"><div class="card-head"><h3>Full Life Timeline</h3><span>documentary archive</span></div>${lifeTimeline()}</article>
          <article class="card"><div class="card-head"><h3>Growth Replay</h3><span>baby → senior</span></div>${growthReplay()}</article>
        </section>

        <section class="profile-section">
          <div class="section-title"><div><p class="eyebrow">Elegant animal profiles</p><h2>Featured Rats</h2></div><button>View all profiles</button></div>
          <div class="rat-grid">${rats.map(ratCard).join('')}</div>
        </section>

        <section class="ecosystem-grid">${ecosystemTiles.map(([title, copy, emoji]) => `<article class="card ecosystem-card"><span>${emoji}</span><h3>${title}</h3><p>${copy}</p></article>`).join('')}</section>

        <section class="lower-grid">
          <article class="card timeline"><div class="card-head"><h3>Nursery L-042 Experience</h3><span>trait reveal animations</span></div>${timeline()}</article>
          <article class="card"><div class="card-head"><h3>Business Intelligence</h3><span>profitability AI</span></div>${businessIntelligence()}</article>
          <article class="card activity"><div class="card-head"><h3>Recent Ecosystem Activity</h3><span>automated notes</span></div>${activity.map(item => `<p>${item}</p>`).join('')}</article>
        </section>
      </main>
    </div>`;
}

function icon(index) { return ['◌','🧠','◷','🫂','🤖','🌌','◎','🐁','◒','↔','✣','♡','⌁','◇','▦','◍','✚','🧪','$','▱','◷','🕯️','▣','✎','⚙'][index] ?? '•'; }
function lineChart() { return `<svg class="line-chart" viewBox="0 0 760 260" role="img" aria-label="Colony population trend"><defs><linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#b7d8ff" stop-opacity=".55"/><stop offset="1" stop-color="#b7d8ff" stop-opacity="0"/></linearGradient></defs><path class="gridline" d="M40 40H730M40 105H730M40 170H730M40 235H730"/><path class="area" d="M40 190 C120 155 150 160 220 130 S330 80 410 110 520 185 600 120 690 62 730 76 L730 235 L40 235Z"/><path class="births" d="M40 190 C120 155 150 160 220 130 S330 80 410 110 520 185 600 120 690 62 730 76"/><path class="deaths" d="M40 215 C125 210 170 205 230 198 S360 188 425 196 525 218 605 198 690 182 730 176"/><g class="chart-labels"><text x="40" y="252">Jan</text><text x="214" y="252">Apr</text><text x="398" y="252">Jul</text><text x="580" y="252">Oct</text><text x="705" y="252">Dec</text></g></svg>`; }
function donutChart() { return `<div class="donut-wrap"><div class="donut"><span>52%</span><small>female</small></div><div class="legend"><p><b style="--c:#b8d8ba"></b>Female 67</p><p><b style="--c:#a9c7f5"></b>Male 49</p><p><b style="--c:#d8d3cc"></b>Retired 18</p><p><b style="--c:#f1c7c2"></b>Neutered 4</p></div></div>`; }
function radarChart() { return `<div class="radar"><svg viewBox="0 0 220 220"><polygon class="ring" points="110,16 196,66 196,156 110,204 24,156 24,66"/><polygon class="ring" points="110,48 168,82 168,140 110,172 52,140 52,82"/><polygon class="risk" points="110,55 153,86 171,136 110,153 65,136 46,76"/><text x="92" y="14">Resp.</text><text x="174" y="62">Tumor</text><text x="170" y="178">Dental</text><text x="86" y="217">Skin</text><text x="2" y="176">Neuro</text><text x="0" y="62">Weight</text></svg></div>`; }
function heatmap() { const vals = [88,64,42,24,12,82,72,56,33,18,9,69,91,66,44,29,16,77]; return `<div class="heatmap">${['Friendly','Shy','Dominant','Anxious','Aggressive','Social'].map(h=>`<strong>${h}</strong>`).join('')}${vals.map(v=>`<span style="--v:${v}%">${v}</span>`).join('')}</div>`; }
function segments() { return `<div class="segments"><span style="--w:34%;--c:#d7e8d0">rex</span><span style="--w:18%;--c:#f2d7df">double rex</span><span style="--w:28%;--c:#d9e7ff">standard</span><span style="--w:8%;--c:#efd8c4">hairless</span><span style="--w:12%;--c:#ded8f4">satin</span></div>`; }
function pairing() { return `<div class="pairing"><div><span class="avatar">M</span><b>Miso</b><small>Ice blue · F4</small></div><span class="score">92</span><div><span class="avatar lavender">V</span><b>Velvet</b><small>Lavender rex · F3</small></div></div><p class="muted">Low inbreeding coefficient, high sociability inheritance, 18% rare coat probability.</p>`; }
function ratCard([name, id, age, weight, temp, line, status, tone]) { return `<article class="rat-card card"><div class="portrait ${tone}">${name.slice(0,1)}</div><div><h3>${name}</h3><p>${id} · ${age} · ${weight}</p><div class="badge-row"><span class="chip ${tone}">${status}</span><span>${temp}</span></div><small>${line}</small></div><div class="status-ring ${tone}"></div></article>`; }
function timeline() { return `<div class="steps"><span class="done">Birth</span><span class="done">Milk</span><span class="done">Fur</span><span>Eyes</span><span>Trait reveal</span></div><p class="muted">12 pups tracked with milk bands, survival indicators, weight percentiles, and animated coat-confidence updates.</p>`; }
function businessIntelligence() { return `<div class="inventory"><p><span>Breeding ROI</span><b>+18%</b></p><p><span>Upkeep efficiency</span><b>91</b></p><p><span>Waitlist deposits</span><b>$1,240</b></p><p><span>Best line</span><b>Ice F4</b></p></div>`; }
function integrityScore() { return `<div class="integrity-score"><div><span>87%</span><small>purity forecast</small></div></div>`; }
function predictiveChart() { return `<svg class="predictive-chart" viewBox="0 0 760 220" role="img" aria-label="Predictive disease modeling"><defs><linearGradient id="warnFill" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#b8d8ba"/><stop offset=".55" stop-color="#f2cd7e"/><stop offset="1" stop-color="#f1b9ae"/></linearGradient></defs><path class="gridline" d="M42 34H724M42 88H724M42 142H724M42 196H724"/><path class="forecast-fill" d="M42 176 C155 164 205 122 305 130 S455 115 526 76 643 43 724 31 L724 196 L42 196Z"/><path class="forecast-line" d="M42 176 C155 164 205 122 305 130 S455 115 526 76 643 43 724 31"/><path class="safe-line" d="M42 158 C160 154 218 148 306 151 S480 144 545 138 650 128 724 119"/><text x="42" y="214">F1</text><text x="232" y="214">F2</text><text x="421" y="214">F3</text><text x="614" y="214">F4</text></svg>`; }
function pedigreeGalaxy() { return `<div class="galaxy"><span class="node core">V</span><span class="node n1">M</span><span class="node n2">J</span><span class="node n3">O</span><span class="node n4">L</span><span class="node n5">H</span><svg viewBox="0 0 420 270"><path d="M210 134 C130 62 92 55 54 78"/><path d="M210 134 C288 48 350 56 376 86"/><path d="M210 134 C115 174 74 206 48 230"/><path d="M210 134 C285 184 338 206 382 224"/><path d="M210 134 C202 72 200 42 208 20"/></svg></div>`; }
function bondMap() { return `<div class="bond-map"><svg viewBox="0 0 320 240"><path class="bond good" d="M74 74 C126 24 205 25 250 72"/><path class="bond warn" d="M74 74 C80 150 135 188 202 183"/><path class="bond good" d="M250 72 C278 126 260 170 202 183"/><circle cx="74" cy="74" r="28"/><circle cx="250" cy="72" r="28"/><circle cx="202" cy="183" r="28"/><text x="58" y="80">Miso</text><text x="229" y="78">Orbit</text><text x="177" y="189">Velvet</text></svg><p class="muted">Grooming +92, maternal attachment +88, aggression watch -18.</p></div>`; }
function lifeTimeline() { return `<div class="life-rail"><span><b>Birth</b><small>May 2025</small></span><span><b>Pairing</b><small>Jan 2026</small></span><span><b>Litter</b><small>Feb 2026</small></span><span><b>Health</b><small>Mar 2026</small></span><span><b>Legacy</b><small>future</small></span></div>`; }
function growthReplay() { return `<div class="growth-replay"><div class="age-card baby">Baby</div><input type="range" value="58" aria-label="Growth replay position"/><div class="age-card senior">Senior</div></div><p class="muted">Photo memories align with grams, coat changes, and behavior markers.</p>`; }

app();
