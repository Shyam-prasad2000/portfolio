const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'assets', 'images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

// 1. High-Res P2P Procurement Dashboard SVG
const p2pSvg = `<svg viewBox="0 0 480 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="p2pBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <linearGradient id="limeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#d2f825"/>
      <stop offset="100%" stop-color="#84cc16"/>
    </linearGradient>
  </defs>
  <!-- Window Container -->
  <rect width="480" height="260" rx="12" fill="url(#p2pBg)"/>
  <!-- Top Bar -->
  <rect x="0" y="0" width="480" height="34" rx="12" fill="#1e293b" fill-opacity="0.6"/>
  <circle cx="20" cy="17" r="4.5" fill="#ef4444"/>
  <circle cx="34" cy="17" r="4.5" fill="#f59e0b"/>
  <circle cx="48" cy="17" r="4.5" fill="#10b981"/>
  <text x="80" y="21" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="600">P2P Enterprise Procurement • RFQ & Purchase Orders</text>
  <rect x="390" y="9" width="75" height="16" rx="8" fill="#d2f825" fill-opacity="0.15"/>
  <text x="427" y="21" fill="#d2f825" font-family="sans-serif" font-size="9" font-weight="700" text-anchor="middle">LIVE WORKFLOW</text>

  <!-- Left Sidebar Mock -->
  <rect x="14" y="46" width="90" height="200" rx="8" fill="#1e293b" fill-opacity="0.4"/>
  <rect x="22" y="56" width="74" height="12" rx="4" fill="#334155"/>
  <rect x="22" y="76" width="74" height="10" rx="3" fill="#d2f825" fill-opacity="0.8"/>
  <rect x="22" y="94" width="60" height="10" rx="3" fill="#334155"/>
  <rect x="22" y="112" width="68" height="10" rx="3" fill="#334155"/>
  <rect x="22" y="130" width="55" height="10" rx="3" fill="#334155"/>
  <rect x="22" y="148" width="64" height="10" rx="3" fill="#334155"/>

  <!-- Main KPI Cards -->
  <rect x="114" y="46" width="110" height="52" rx="8" fill="#1e293b" fill-opacity="0.5"/>
  <text x="124" y="62" fill="#94a3b8" font-family="sans-serif" font-size="9">Total Requisitions</text>
  <text x="124" y="85" fill="#f8fafc" font-family="sans-serif" font-size="18" font-weight="bold">$1,420,800</text>

  <rect x="232" y="46" width="110" height="52" rx="8" fill="#1e293b" fill-opacity="0.5"/>
  <text x="242" y="62" fill="#94a3b8" font-family="sans-serif" font-size="9">Active RFQs</text>
  <text x="242" y="85" fill="#d2f825" font-family="sans-serif" font-size="18" font-weight="bold">128 Vendors</text>

  <rect x="350" y="46" width="116" height="52" rx="8" fill="#1e293b" fill-opacity="0.5"/>
  <text x="360" y="62" fill="#94a3b8" font-family="sans-serif" font-size="9">PO Approval Rate</text>
  <text x="360" y="85" fill="#38bdf8" font-family="sans-serif" font-size="18" font-weight="bold">99.2%</text>

  <!-- Bar Chart Widget -->
  <rect x="114" y="108" width="228" height="138" rx="8" fill="#1e293b" fill-opacity="0.4"/>
  <text x="126" y="126" fill="#cbd5e1" font-family="sans-serif" font-size="10" font-weight="600">Procurement Cycle Volume</text>
  <!-- Chart Bars -->
  <rect x="135" y="180" width="14" height="50" rx="3" fill="#334155"/>
  <rect x="160" y="160" width="14" height="70" rx="3" fill="#334155"/>
  <rect x="185" y="145" width="14" height="85" rx="3" fill="url(#limeGrad)"/>
  <rect x="210" y="165" width="14" height="65" rx="3" fill="#334155"/>
  <rect x="235" y="135" width="14" height="95" rx="3" fill="url(#limeGrad)"/>
  <rect x="260" y="150" width="14" height="80" rx="3" fill="#334155"/>
  <rect x="285" y="130" width="14" height="100" rx="3" fill="url(#limeGrad)"/>
  <rect x="310" y="155" width="14" height="75" rx="3" fill="#334155"/>

  <!-- Right Workflow Mini-List -->
  <rect x="350" y="108" width="116" height="138" rx="8" fill="#1e293b" fill-opacity="0.4"/>
  <text x="360" y="126" fill="#cbd5e1" font-family="sans-serif" font-size="10" font-weight="600">Recent Approvals</text>
  <rect x="360" y="136" width="96" height="24" rx="4" fill="#0f172a"/>
  <text x="366" y="152" fill="#e2e8f0" font-family="sans-serif" font-size="8">PO #8491 • Approved</text>
  <rect x="360" y="166" width="96" height="24" rx="4" fill="#0f172a"/>
  <text x="366" y="182" fill="#d2f825" font-family="sans-serif" font-size="8">RFQ #402 • Under Eval</text>
  <rect x="360" y="196" width="96" height="24" rx="4" fill="#0f172a"/>
  <text x="366" y="212" fill="#e2e8f0" font-family="sans-serif" font-size="8">PO #8490 • Signed</text>
</svg>`;

// 2. High-Res Aurex Auditing Dashboard SVG
const aurexSvg = `<svg viewBox="0 0 480 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="aurexBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#edf2f7"/>
    </linearGradient>
  </defs>
  <!-- Window Container -->
  <rect width="480" height="260" rx="12" fill="url(#aurexBg)" stroke="#e2e8f0" stroke-width="1.5"/>
  <!-- Top Bar -->
  <rect x="0" y="0" width="480" height="34" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
  <circle cx="20" cy="17" r="4.5" fill="#ef4444"/>
  <circle cx="34" cy="17" r="4.5" fill="#f59e0b"/>
  <circle cx="48" cy="17" r="4.5" fill="#10b981"/>
  <text x="80" y="21" fill="#1e293b" font-family="sans-serif" font-size="11" font-weight="700">Aurex Audit Suite • Risk Analysis & Governance Platform</text>
  <rect x="382" y="9" width="85" height="16" rx="8" fill="#0284c7" fill-opacity="0.12"/>
  <text x="424" y="21" fill="#0284c7" font-family="sans-serif" font-size="9" font-weight="700" text-anchor="middle">ENTERPRISE AUDIT</text>

  <!-- Audit Table Filter Row -->
  <rect x="16" y="46" width="448" height="28" rx="6" fill="#ffffff" stroke="#e2e8f0"/>
  <rect x="26" y="54" width="90" height="12" rx="3" fill="#f1f5f9"/>
  <rect x="126" y="54" width="70" height="12" rx="3" fill="#f1f5f9"/>
  <rect x="360" y="52" width="94" height="16" rx="4" fill="#0f172a"/>
  <text x="407" y="63" fill="#ffffff" font-family="sans-serif" font-size="8.5" font-weight="600" text-anchor="middle">+ New Risk Audit</text>

  <!-- Audit Table -->
  <rect x="16" y="82" width="448" height="162" rx="8" fill="#ffffff" stroke="#e2e8f0"/>
  <!-- Table Header -->
  <rect x="16" y="82" width="448" height="26" fill="#f8fafc"/>
  <text x="30" y="99" fill="#64748b" font-family="sans-serif" font-size="9" font-weight="600">AUDIT ID</text>
  <text x="100" y="99" fill="#64748b" font-family="sans-serif" font-size="9" font-weight="600">MODULE / SCOPE</text>
  <text x="230" y="99" fill="#64748b" font-family="sans-serif" font-size="9" font-weight="600">RISK SEVERITY</text>
  <text x="330" y="99" fill="#64748b" font-family="sans-serif" font-size="9" font-weight="600">COMPLIANCE</text>
  <text x="420" y="99" fill="#64748b" font-family="sans-serif" font-size="9" font-weight="600">STATUS</text>

  <!-- Row 1 -->
  <line x1="16" y1="108" x2="464" y2="108" stroke="#f1f5f9"/>
  <text x="30" y="125" fill="#0f172a" font-family="sans-serif" font-size="9.5" font-weight="600">#ARX-902</text>
  <text x="100" y="125" fill="#334155" font-family="sans-serif" font-size="9">Financial Risk & Controls</text>
  <rect x="230" y="115" width="56" height="14" rx="7" fill="#fee2e2"/>
  <text x="258" y="125" fill="#dc2626" font-family="sans-serif" font-size="8" font-weight="bold" text-anchor="middle">HIGH RISK</text>
  <rect x="330" y="119" width="60" height="6" rx="3" fill="#e2e8f0"/>
  <rect x="330" y="119" width="52" height="6" rx="3" fill="#10b981"/>
  <rect x="415" y="115" width="42" height="14" rx="4" fill="#ecfdf5"/>
  <text x="436" y="125" fill="#059669" font-family="sans-serif" font-size="8" font-weight="bold" text-anchor="middle">PASSED</text>

  <!-- Row 2 -->
  <line x1="16" y1="138" x2="464" y2="138" stroke="#f1f5f9"/>
  <text x="30" y="155" fill="#0f172a" font-family="sans-serif" font-size="9.5" font-weight="600">#ARX-898</text>
  <text x="100" y="155" fill="#334155" font-family="sans-serif" font-size="9">IT Infrastructure Audit</text>
  <rect x="230" y="145" width="65" height="14" rx="7" fill="#fef3c7"/>
  <text x="262" y="155" fill="#d97706" font-family="sans-serif" font-size="8" font-weight="bold" text-anchor="middle">MODERATE</text>
  <rect x="330" y="149" width="60" height="6" rx="3" fill="#e2e8f0"/>
  <rect x="330" y="149" width="45" height="6" rx="3" fill="#10b981"/>
  <rect x="415" y="145" width="42" height="14" rx="4" fill="#f8fafc"/>
  <text x="436" y="155" fill="#0284c7" font-family="sans-serif" font-size="8" font-weight="bold" text-anchor="middle">ACTIVE</text>

  <!-- Row 3 -->
  <line x1="16" y1="168" x2="464" y2="168" stroke="#f1f5f9"/>
  <text x="30" y="185" fill="#0f172a" font-family="sans-serif" font-size="9.5" font-weight="600">#ARX-875</text>
  <text x="100" y="185" fill="#334155" font-family="sans-serif" font-size="9">Vendor Compliance Review</text>
  <rect x="230" y="175" width="50" height="14" rx="7" fill="#f1f5f9"/>
  <text x="255" y="185" fill="#64748b" font-family="sans-serif" font-size="8" font-weight="bold" text-anchor="middle">LOW</text>
  <rect x="330" y="179" width="60" height="6" rx="3" fill="#e2e8f0"/>
  <rect x="330" y="179" width="58" height="6" rx="3" fill="#10b981"/>
  <rect x="415" y="175" width="42" height="14" rx="4" fill="#ecfdf5"/>
  <text x="436" y="185" fill="#059669" font-family="sans-serif" font-size="8" font-weight="bold" text-anchor="middle">PASSED</text>

  <!-- Row 4 -->
  <line x1="16" y1="198" x2="464" y2="198" stroke="#f1f5f9"/>
  <text x="30" y="215" fill="#0f172a" font-family="sans-serif" font-size="9.5" font-weight="600">#ARX-864</text>
  <text x="100" y="215" fill="#334155" font-family="sans-serif" font-size="9">Operations & Safety Standards</text>
  <rect x="230" y="205" width="65" height="14" rx="7" fill="#fef3c7"/>
  <text x="262" y="215" fill="#d97706" font-family="sans-serif" font-size="8" font-weight="bold" text-anchor="middle">MODERATE</text>
  <rect x="330" y="209" width="60" height="6" rx="3" fill="#e2e8f0"/>
  <rect x="330" y="209" width="38" height="6" rx="3" fill="#10b981"/>
  <rect x="415" y="205" width="42" height="14" rx="4" fill="#f8fafc"/>
  <text x="436" y="215" fill="#0284c7" font-family="sans-serif" font-size="8" font-weight="bold" text-anchor="middle">ACTIVE</text>
</svg>`;

// 3. High-Res Lulu Icon (HRMS) Dashboard SVG
const luluSvg = `<svg viewBox="0 0 480 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="luluBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
  </defs>
  <!-- Window Container -->
  <rect width="480" height="260" rx="12" fill="url(#luluBg)" stroke="#e2e8f0" stroke-width="1.5"/>
  <!-- Top Bar -->
  <rect x="0" y="0" width="480" height="34" rx="12" fill="#0f172a"/>
  <circle cx="20" cy="17" r="4.5" fill="#ef4444"/>
  <circle cx="34" cy="17" r="4.5" fill="#f59e0b"/>
  <circle cx="48" cy="17" r="4.5" fill="#10b981"/>
  <text x="80" y="21" fill="#f8fafc" font-family="sans-serif" font-size="11" font-weight="700">Lulu Icon HRMS • Enterprise Employee & Payroll Suite</text>
  <rect x="382" y="9" width="85" height="16" rx="8" fill="#10b981" fill-opacity="0.2"/>
  <text x="424" y="21" fill="#34d399" font-family="sans-serif" font-size="9" font-weight="700" text-anchor="middle">ENTERPRISE HR</text>

  <!-- Left Stats & Navigation -->
  <rect x="14" y="44" width="100" height="202" rx="8" fill="#f1f5f9"/>
  <circle cx="64" cy="74" r="18" fill="#cbd5e1"/>
  <rect x="30" y="100" width="68" height="10" rx="3" fill="#94a3b8"/>
  <rect x="38" y="114" width="52" height="7" rx="2" fill="#cbd5e1"/>

  <rect x="22" y="134" width="84" height="24" rx="4" fill="#0f172a"/>
  <text x="64" y="149" fill="#ffffff" font-family="sans-serif" font-size="8.5" font-weight="600" text-anchor="middle">Employees</text>

  <rect x="22" y="164" width="84" height="20" rx="4" fill="#ffffff"/>
  <text x="64" y="177" fill="#475569" font-family="sans-serif" font-size="8" font-weight="600" text-anchor="middle">Leave Approvals</text>

  <rect x="22" y="190" width="84" height="20" rx="4" fill="#ffffff"/>
  <text x="64" y="203" fill="#475569" font-family="sans-serif" font-size="8" font-weight="600" text-anchor="middle">Payroll & Tax</text>

  <rect x="22" y="216" width="84" height="20" rx="4" fill="#ffffff"/>
  <text x="64" y="229" fill="#475569" font-family="sans-serif" font-size="8" font-weight="600" text-anchor="middle">Performance</text>

  <!-- Main HR Content -->
  <!-- Stats Row -->
  <rect x="124" y="44" width="104" height="48" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
  <text x="134" y="60" fill="#64748b" font-family="sans-serif" font-size="8.5">Total Employees</text>
  <text x="134" y="80" fill="#0f172a" font-family="sans-serif" font-size="16" font-weight="bold">14,250+</text>

  <rect x="236" y="44" width="112" height="48" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
  <text x="246" y="60" fill="#64748b" font-family="sans-serif" font-size="8.5">Pending Approvals</text>
  <text x="246" y="80" fill="#f59e0b" font-family="sans-serif" font-size="16" font-weight="bold">34 Requests</text>

  <rect x="356" y="44" width="110" height="48" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
  <text x="366" y="60" fill="#64748b" font-family="sans-serif" font-size="8.5">Attendance Today</text>
  <text x="366" y="80" fill="#10b981" font-family="sans-serif" font-size="16" font-weight="bold">97.8%</text>

  <!-- Approval Pipeline Card -->
  <rect x="124" y="100" width="342" height="146" rx="8" fill="#ffffff" stroke="#e2e8f0"/>
  <text x="136" y="120" fill="#1e293b" font-family="sans-serif" font-size="10" font-weight="700">Multi-Step Approval Workflow • Leave & Claims</text>
  
  <rect x="136" y="132" width="318" height="32" rx="6" fill="#f8fafc" stroke="#f1f5f9"/>
  <text x="146" y="151" fill="#0f172a" font-family="sans-serif" font-size="9" font-weight="600">Annual Leave #LV-4902</text>
  <rect x="280" y="140" width="80" height="16" rx="4" fill="#dbeafe"/>
  <text x="320" y="151" fill="#1d4ed8" font-family="sans-serif" font-size="8" font-weight="600" text-anchor="middle">HR Review</text>
  <rect x="370" y="140" width="76" height="16" rx="4" fill="#10b981"/>
  <text x="408" y="151" fill="#ffffff" font-family="sans-serif" font-size="8" font-weight="600" text-anchor="middle">Approve ✓</text>

  <rect x="136" y="170" width="318" height="32" rx="6" fill="#f8fafc" stroke="#f1f5f9"/>
  <text x="146" y="189" fill="#0f172a" font-family="sans-serif" font-size="9" font-weight="600">Travel Expense #CL-104</text>
  <rect x="280" y="178" width="80" height="16" rx="4" fill="#fef3c7"/>
  <text x="320" y="189" fill="#b45309" font-family="sans-serif" font-size="8" font-weight="600" text-anchor="middle">Finance Check</text>
  <rect x="370" y="178" width="76" height="16" rx="4" fill="#0f172a"/>
  <text x="408" y="189" fill="#ffffff" font-family="sans-serif" font-size="8" font-weight="600" text-anchor="middle">View Details</text>

  <rect x="136" y="208" width="318" height="30" rx="6" fill="#f8fafc" stroke="#f1f5f9"/>
  <text x="146" y="226" fill="#0f172a" font-family="sans-serif" font-size="9" font-weight="600">Maternity Allowance #HR-812</text>
  <rect x="280" y="214" width="80" height="16" rx="4" fill="#dcfce7"/>
  <text x="320" y="225" fill="#15803d" font-family="sans-serif" font-size="8" font-weight="600" text-anchor="middle">Approved</text>
  <text x="408" y="226" fill="#64748b" font-family="sans-serif" font-size="8" font-weight="600" text-anchor="middle">Completed</text>
</svg>`;

fs.writeFileSync(path.join(dir, 'project-p2p.svg'), p2pSvg.trim());
fs.writeFileSync(path.join(dir, 'project-aurex.svg'), aurexSvg.trim());
fs.writeFileSync(path.join(dir, 'project-lulu.svg'), luluSvg.trim());

console.log('Saved vector dashboard mockups: p2p, aurex, lulu');
