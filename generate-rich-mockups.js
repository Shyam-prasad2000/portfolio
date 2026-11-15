const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'assets', 'images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

// 1. P2P Procurement Platform (Dark enterprise procurement theme with neon lime charts & RFQ workflow)
const p2pSvg = `<svg viewBox="0 0 640 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="p2pBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B0F19"/>
      <stop offset="100%" stop-color="#111827"/>
    </linearGradient>
    <linearGradient id="limeBar" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#D2F825"/>
      <stop offset="100%" stop-color="#84CC16"/>
    </linearGradient>
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E293B" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0.9"/>
    </linearGradient>
  </defs>

  <!-- Background Canvas -->
  <rect width="640" height="360" rx="14" fill="url(#p2pBg)"/>

  <!-- Window Header Bar -->
  <rect x="0" y="0" width="640" height="42" rx="14" fill="#1E293B" fill-opacity="0.7"/>
  <circle cx="24" cy="21" r="5" fill="#EF4444"/>
  <circle cx="40" cy="21" r="5" fill="#F59E0B"/>
  <circle cx="56" cy="21" r="5" fill="#10B981"/>
  <text x="84" y="25" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700">P2P Procurement Portal • Purchase Orders & RFQ Workflow</text>
  <rect x="520" y="11" width="100" height="20" rx="10" fill="#D2F825" fill-opacity="0.18"/>
  <text x="570" y="25" fill="#D2F825" font-family="sans-serif" font-size="10" font-weight="800" text-anchor="middle">LIVE WORKFLOW</text>

  <!-- Sidebar Navigation -->
  <rect x="16" y="56" width="116" height="288" rx="8" fill="url(#cardBg)" stroke="#334155" stroke-width="1"/>
  <rect x="26" y="70" width="96" height="24" rx="6" fill="#D2F825" fill-opacity="0.15"/>
  <text x="36" y="86" fill="#D2F825" font-family="sans-serif" font-size="11" font-weight="700">📊 Requisitions</text>
  <text x="36" y="116" fill="#94A3B8" font-family="sans-serif" font-size="11">📑 RFQ Bids</text>
  <text x="36" y="144" fill="#94A3B8" font-family="sans-serif" font-size="11">🏢 Suppliers</text>
  <text x="36" y="172" fill="#94A3B8" font-family="sans-serif" font-size="11">✍️ PO Approvals</text>
  <text x="36" y="200" fill="#94A3B8" font-family="sans-serif" font-size="11">📦 Goods Receipt</text>
  <text x="36" y="228" fill="#94A3B8" font-family="sans-serif" font-size="11">📈 Analytics</text>

  <!-- KPI Cards Row -->
  <rect x="144" y="56" width="150" height="64" rx="8" fill="url(#cardBg)" stroke="#334155" stroke-width="1"/>
  <text x="156" y="76" fill="#94A3B8" font-family="sans-serif" font-size="10" font-weight="600">TOTAL PROCURED</text>
  <text x="156" y="104" fill="#F8FAFC" font-family="sans-serif" font-size="20" font-weight="bold">$1,420,800</text>
  <text x="254" y="104" fill="#10B981" font-family="sans-serif" font-size="10" font-weight="bold">+14.2%</text>

  <rect x="306" y="56" width="150" height="64" rx="8" fill="url(#cardBg)" stroke="#334155" stroke-width="1"/>
  <text x="318" y="76" fill="#94A3B8" font-family="sans-serif" font-size="10" font-weight="600">ACTIVE RFQs</text>
  <text x="318" y="104" fill="#D2F825" font-family="sans-serif" font-size="20" font-weight="bold">128 Vendors</text>

  <rect x="468" y="56" width="156" height="64" rx="8" fill="url(#cardBg)" stroke="#334155" stroke-width="1"/>
  <text x="480" y="76" fill="#94A3B8" font-family="sans-serif" font-size="10" font-weight="600">PO APPROVAL SLA</text>
  <text x="480" y="104" fill="#38BDF8" font-family="sans-serif" font-size="20" font-weight="bold">99.4%</text>
  <text x="560" y="104" fill="#94A3B8" font-family="sans-serif" font-size="10">2.4h avg</text>

  <!-- Procurement Volume Chart Card -->
  <rect x="144" y="132" width="280" height="212" rx="8" fill="url(#cardBg)" stroke="#334155" stroke-width="1"/>
  <text x="158" y="154" fill="#F8FAFC" font-family="sans-serif" font-size="12" font-weight="700">Procurement Cycle & Spend Volume</text>
  <text x="158" y="170" fill="#94A3B8" font-family="sans-serif" font-size="9.5">Dynamic FormArrays Line-Item Analysis</text>

  <!-- Chart Grid Lines -->
  <line x1="158" y1="200" x2="410" y2="200" stroke="#334155" stroke-dasharray="3,3"/>
  <line x1="158" y1="240" x2="410" y2="240" stroke="#334155" stroke-dasharray="3,3"/>
  <line x1="158" y1="280" x2="410" y2="280" stroke="#334155" stroke-dasharray="3,3"/>

  <!-- Chart Bars -->
  <rect x="175" y="250" width="18" height="60" rx="3" fill="#334155"/>
  <text x="184" y="322" fill="#94A3B8" font-family="sans-serif" font-size="9" text-anchor="middle">Jan</text>

  <rect x="210" y="220" width="18" height="90" rx="3" fill="#334155"/>
  <text x="219" y="322" fill="#94A3B8" font-family="sans-serif" font-size="9" text-anchor="middle">Feb</text>

  <rect x="245" y="195" width="18" height="115" rx="3" fill="url(#limeBar)"/>
  <text x="254" y="322" fill="#D2F825" font-family="sans-serif" font-size="9" font-weight="bold" text-anchor="middle">Mar</text>

  <rect x="280" y="230" width="18" height="80" rx="3" fill="#334155"/>
  <text x="289" y="322" fill="#94A3B8" font-family="sans-serif" font-size="9" text-anchor="middle">Apr</text>

  <rect x="315" y="185" width="18" height="125" rx="3" fill="url(#limeBar)"/>
  <text x="324" y="322" fill="#D2F825" font-family="sans-serif" font-size="9" font-weight="bold" text-anchor="middle">May</text>

  <rect x="350" y="210" width="18" height="100" rx="3" fill="#334155"/>
  <text x="359" y="322" fill="#94A3B8" font-family="sans-serif" font-size="9" text-anchor="middle">Jun</text>

  <rect x="385" y="175" width="18" height="135" rx="3" fill="url(#limeBar)"/>
  <text x="394" y="322" fill="#D2F825" font-family="sans-serif" font-size="9" font-weight="bold" text-anchor="middle">Jul</text>

  <!-- Recent Approvals List Card -->
  <rect x="436" y="132" width="188" height="212" rx="8" fill="url(#cardBg)" stroke="#334155" stroke-width="1"/>
  <text x="448" y="154" fill="#F8FAFC" font-family="sans-serif" font-size="12" font-weight="700">Approval Queue</text>
  
  <rect x="448" y="166" width="164" height="40" rx="6" fill="#0B0F19" stroke="#334155"/>
  <text x="456" y="182" fill="#F8FAFC" font-family="sans-serif" font-size="10" font-weight="600">PO #8491 • $48,200</text>
  <rect x="456" y="188" width="55" height="14" rx="7" fill="#10B981" fill-opacity="0.2"/>
  <text x="483" y="198" fill="#10B981" font-family="sans-serif" font-size="8" font-weight="bold" text-anchor="middle">APPROVED</text>
  <text x="540" y="198" fill="#94A3B8" font-family="sans-serif" font-size="8.5">Global Corp</text>

  <rect x="448" y="212" width="164" height="40" rx="6" fill="#0B0F19" stroke="#334155"/>
  <text x="456" y="228" fill="#F8FAFC" font-family="sans-serif" font-size="10" font-weight="600">RFQ #402 • $112,500</text>
  <rect x="456" y="234" width="60" height="14" rx="7" fill="#D2F825" fill-opacity="0.2"/>
  <text x="486" y="244" fill="#D2F825" font-family="sans-serif" font-size="8" font-weight="bold" text-anchor="middle">EVALUATION</text>
  <text x="540" y="244" fill="#94A3B8" font-family="sans-serif" font-size="8.5">3 Quotes In</text>

  <rect x="448" y="258" width="164" height="40" rx="6" fill="#0B0F19" stroke="#334155"/>
  <text x="456" y="274" fill="#F8FAFC" font-family="sans-serif" font-size="10" font-weight="600">PR #1209 • $14,900</text>
  <rect x="456" y="280" width="55" height="14" rx="7" fill="#38BDF8" fill-opacity="0.2"/>
  <text x="483" y="290" fill="#38BDF8" font-family="sans-serif" font-size="8" font-weight="bold" text-anchor="middle">PENDING</text>
  <text x="540" y="290" fill="#94A3B8" font-family="sans-serif" font-size="8.5">Tech Equip</text>

  <rect x="448" y="304" width="164" height="28" rx="6" fill="#D2F825" fill-opacity="0.1"/>
  <text x="530" y="322" fill="#D2F825" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle">+ New Purchase Requisition</text>
</svg>`;

// 2. Aurex Auditing Software (Clean enterprise audit suite with risk ratings, audit trails & validation progress)
const aurexSvg = `<svg viewBox="0 0 640 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="aurexBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#EDF2F7"/>
    </linearGradient>
  </defs>

  <!-- Background Canvas -->
  <rect width="640" height="360" rx="14" fill="url(#aurexBg)" stroke="#CBD5E1" stroke-width="1.5"/>

  <!-- Window Header Bar -->
  <rect x="0" y="0" width="640" height="42" rx="14" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
  <circle cx="24" cy="21" r="5" fill="#EF4444"/>
  <circle cx="40" cy="21" r="5" fill="#F59E0B"/>
  <circle cx="56" cy="21" r="5" fill="#10B981"/>
  <text x="84" y="25" fill="#0F172A" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700">Aurex Audit Suite • Enterprise Risk Analysis & Governance Platform</text>
  <rect x="510" y="11" width="114" height="20" rx="10" fill="#0284C7" fill-opacity="0.12"/>
  <text x="567" y="25" fill="#0284C7" font-family="sans-serif" font-size="10" font-weight="800" text-anchor="middle">COMPLIANCE 96%</text>

  <!-- Filter & Action Row -->
  <rect x="16" y="54" width="608" height="36" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
  <text x="30" y="76" fill="#64748B" font-family="sans-serif" font-size="11">🔍 Filter Audit Records...</text>
  <rect x="220" y="60" width="90" height="24" rx="4" fill="#F1F5F9"/>
  <text x="265" y="76" fill="#334155" font-family="sans-serif" font-size="10" font-weight="600" text-anchor="middle">FY 2024-25 ▾</text>
  <rect x="320" y="60" width="100" height="24" rx="4" fill="#F1F5F9"/>
  <text x="370" y="76" fill="#334155" font-family="sans-serif" font-size="10" font-weight="600" text-anchor="middle">All Entities ▾</text>
  <rect x="494" y="58" width="118" height="26" rx="6" fill="#0F172A"/>
  <text x="553" y="75" fill="#FFFFFF" font-family="sans-serif" font-size="10.5" font-weight="700" text-anchor="middle">+ Plan New Audit</text>

  <!-- Audit Table Container -->
  <rect x="16" y="100" width="450" height="244" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
  
  <!-- Table Header -->
  <rect x="16" y="100" width="450" height="32" rx="8" fill="#F8FAFC"/>
  <text x="32" y="120" fill="#64748B" font-family="sans-serif" font-size="10" font-weight="700">AUDIT ID</text>
  <text x="110" y="120" fill="#64748B" font-family="sans-serif" font-size="10" font-weight="700">AUDIT SCOPE & DOMAIN</text>
  <text x="260" y="120" fill="#64748B" font-family="sans-serif" font-size="10" font-weight="700">RISK LEVEL</text>
  <text x="360" y="120" fill="#64748B" font-family="sans-serif" font-size="10" font-weight="700">STATUS</text>

  <!-- Row 1 -->
  <line x1="16" y1="132" x2="466" y2="132" stroke="#F1F5F9"/>
  <text x="32" y="152" fill="#0F172A" font-family="sans-serif" font-size="11" font-weight="700">#ARX-902</text>
  <text x="110" y="152" fill="#1E293B" font-family="sans-serif" font-size="11">Financial Controls & Hedging</text>
  <rect x="260" y="140" width="68" height="18" rx="9" fill="#FEE2E2"/>
  <text x="294" y="153" fill="#DC2626" font-family="sans-serif" font-size="9" font-weight="800" text-anchor="middle">HIGH RISK</text>
  <rect x="360" y="140" width="56" height="18" rx="4" fill="#ECFDF5"/>
  <text x="388" y="153" fill="#059669" font-family="sans-serif" font-size="9" font-weight="800" text-anchor="middle">PASSED ✓</text>

  <!-- Row 2 -->
  <line x1="16" y1="168" x2="466" y2="168" stroke="#F1F5F9"/>
  <text x="32" y="188" fill="#0F172A" font-family="sans-serif" font-size="11" font-weight="700">#ARX-898</text>
  <text x="110" y="188" fill="#1E293B" font-family="sans-serif" font-size="11">Cloud Infrastructure & SOC2</text>
  <rect x="260" y="176" width="76" height="18" rx="9" fill="#FEF3C7"/>
  <text x="298" y="189" fill="#D97706" font-family="sans-serif" font-size="9" font-weight="800" text-anchor="middle">MODERATE</text>
  <rect x="360" y="176" width="56" height="18" rx="4" fill="#EFF6FF"/>
  <text x="388" y="189" fill="#2563EB" font-family="sans-serif" font-size="9" font-weight="800" text-anchor="middle">ACTIVE</text>

  <!-- Row 3 -->
  <line x1="16" y1="204" x2="466" y2="204" stroke="#F1F5F9"/>
  <text x="32" y="224" fill="#0F172A" font-family="sans-serif" font-size="11" font-weight="700">#ARX-875</text>
  <text x="110" y="224" fill="#1E293B" font-family="sans-serif" font-size="11">Third-Party Vendor Privacy</text>
  <rect x="260" y="212" width="54" height="18" rx="9" fill="#F1F5F9"/>
  <text x="287" y="225" fill="#475569" font-family="sans-serif" font-size="9" font-weight="800" text-anchor="middle">LOW</text>
  <rect x="360" y="212" width="56" height="18" rx="4" fill="#ECFDF5"/>
  <text x="388" y="225" fill="#059669" font-family="sans-serif" font-size="9" font-weight="800" text-anchor="middle">PASSED ✓</text>

  <!-- Row 4 -->
  <line x1="16" y1="240" x2="466" y2="240" stroke="#F1F5F9"/>
  <text x="32" y="260" fill="#0F172A" font-family="sans-serif" font-size="11" font-weight="700">#ARX-864</text>
  <text x="110" y="260" fill="#1E293B" font-family="sans-serif" font-size="11">Operational Safety & OHS</text>
  <rect x="260" y="248" width="76" height="18" rx="9" fill="#FEF3C7"/>
  <text x="298" y="261" fill="#D97706" font-family="sans-serif" font-size="9" font-weight="800" text-anchor="middle">MODERATE</text>
  <rect x="360" y="248" width="56" height="18" rx="4" fill="#EFF6FF"/>
  <text x="388" y="261" fill="#2563EB" font-family="sans-serif" font-size="9" font-weight="800" text-anchor="middle">ACTIVE</text>

  <!-- Row 5 -->
  <line x1="16" y1="276" x2="466" y2="276" stroke="#F1F5F9"/>
  <text x="32" y="296" fill="#0F172A" font-family="sans-serif" font-size="11" font-weight="700">#ARX-840</text>
  <text x="110" y="296" fill="#1E293B" font-family="sans-serif" font-size="11">Data Integrity & Retention</text>
  <rect x="260" y="284" width="54" height="18" rx="9" fill="#F1F5F9"/>
  <text x="287" y="297" fill="#475569" font-family="sans-serif" font-size="9" font-weight="800" text-anchor="middle">LOW</text>
  <rect x="360" y="284" width="56" height="18" rx="4" fill="#ECFDF5"/>
  <text x="388" y="297" fill="#059669" font-family="sans-serif" font-size="9" font-weight="800" text-anchor="middle">PASSED ✓</text>

  <!-- Right Risk Breakdown Panel -->
  <rect x="478" y="100" width="146" height="244" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
  <text x="492" y="122" fill="#0F172A" font-family="sans-serif" font-size="11.5" font-weight="700">Risk Severity Score</text>
  
  <!-- Donut Chart Illustration -->
  <circle cx="551" cy="170" r="34" fill="none" stroke="#E2E8F0" stroke-width="9"/>
  <circle cx="551" cy="170" r="34" fill="none" stroke="#10B981" stroke-width="9" stroke-dasharray="140, 220" stroke-linecap="round"/>
  <circle cx="551" cy="170" r="34" fill="none" stroke="#F59E0B" stroke-width="9" stroke-dasharray="50, 220" stroke-dashoffset="-140" stroke-linecap="round"/>
  <circle cx="551" cy="170" r="34" fill="none" stroke="#EF4444" stroke-width="9" stroke-dasharray="24, 220" stroke-dashoffset="-190" stroke-linecap="round"/>
  <text x="551" y="174" fill="#0F172A" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">94.8%</text>

  <rect x="492" y="222" width="118" height="22" rx="4" fill="#F8FAFC"/>
  <circle cx="502" cy="233" r="4" fill="#10B981"/>
  <text x="514" y="236" fill="#334155" font-family="sans-serif" font-size="9.5">Compliant (82)</text>

  <rect x="492" y="250" width="118" height="22" rx="4" fill="#F8FAFC"/>
  <circle cx="502" cy="261" r="4" fill="#F59E0B"/>
  <text x="514" y="264" fill="#334155" font-family="sans-serif" font-size="9.5">Under Review (12)</text>

  <rect x="492" y="278" width="118" height="22" rx="4" fill="#F8FAFC"/>
  <circle cx="502" cy="289" r="4" fill="#EF4444"/>
  <text x="514" y="292" fill="#334155" font-family="sans-serif" font-size="9.5">Action Needed (4)</text>

  <rect x="492" y="308" width="118" height="24" rx="4" fill="#0F172A"/>
  <text x="551" y="324" fill="#FFFFFF" font-family="sans-serif" font-size="9.5" font-weight="700" text-anchor="middle">Generate PDF Audit</text>
</svg>`;

// 3. Lulu Icon (HRMS) (Enterprise human resources with multi-tier approvals, employee directory & attendance)
const luluSvg = `<svg viewBox="0 0 640 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="luluBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F8FAFC"/>
    </linearGradient>
  </defs>

  <!-- Background Canvas -->
  <rect width="640" height="360" rx="14" fill="url(#luluBg)" stroke="#CBD5E1" stroke-width="1.5"/>

  <!-- Window Header Bar -->
  <rect x="0" y="0" width="640" height="42" rx="14" fill="#0F172A"/>
  <circle cx="24" cy="21" r="5" fill="#EF4444"/>
  <circle cx="40" cy="21" r="5" fill="#F59E0B"/>
  <circle cx="56" cy="21" r="5" fill="#10B981"/>
  <text x="84" y="25" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700">Lulu Icon HRMS • Enterprise Workforce, Leave & Payroll Suite</text>
  <rect x="520" y="11" width="100" height="20" rx="10" fill="#10B981" fill-opacity="0.2"/>
  <text x="570" y="25" fill="#34D399" font-family="sans-serif" font-size="10" font-weight="800" text-anchor="middle">14,250 STAFF</text>

  <!-- Left HR Navigation -->
  <rect x="16" y="54" width="120" height="290" rx="8" fill="#F1F5F9" stroke="#E2E8F0"/>
  <rect x="24" y="66" width="104" height="26" rx="5" fill="#0F172A"/>
  <text x="76" y="83" fill="#FFFFFF" font-family="sans-serif" font-size="10.5" font-weight="700" text-anchor="middle">👥 Employees</text>
  
  <rect x="24" y="98" width="104" height="24" rx="4" fill="#FFFFFF"/>
  <text x="76" y="114" fill="#475569" font-family="sans-serif" font-size="10" font-weight="600" text-anchor="middle">✈️ Leave Requests</text>

  <rect x="24" y="128" width="104" height="24" rx="4" fill="#FFFFFF"/>
  <text x="76" y="144" fill="#475569" font-family="sans-serif" font-size="10" font-weight="600" text-anchor="middle">⏱️ Attendance</text>

  <rect x="24" y="158" width="104" height="24" rx="4" fill="#FFFFFF"/>
  <text x="76" y="174" fill="#475569" font-family="sans-serif" font-size="10" font-weight="600" text-anchor="middle">💰 Payroll & Tax</text>

  <rect x="24" y="188" width="104" height="24" rx="4" fill="#FFFFFF"/>
  <text x="76" y="204" fill="#475569" font-family="sans-serif" font-size="10" font-weight="600" text-anchor="middle">📑 PDF Reports</text>

  <!-- Stats Row -->
  <rect x="148" y="54" width="148" height="54" rx="8" fill="#F8FAFC" stroke="#E2E8F0"/>
  <text x="160" y="72" fill="#64748B" font-family="sans-serif" font-size="9.5" font-weight="600">TOTAL WORKFORCE</text>
  <text x="160" y="96" fill="#0F172A" font-family="sans-serif" font-size="19" font-weight="bold">14,250</text>

  <rect x="306" y="54" width="148" height="54" rx="8" fill="#F8FAFC" stroke="#E2E8F0"/>
  <text x="318" y="72" fill="#64748B" font-family="sans-serif" font-size="9.5" font-weight="600">PENDING LEAVE APPROVALS</text>
  <text x="318" y="96" fill="#D97706" font-family="sans-serif" font-size="19" font-weight="bold">34 Requests</text>

  <rect x="464" y="54" width="160" height="54" rx="8" fill="#F8FAFC" stroke="#E2E8F0"/>
  <text x="476" y="72" fill="#64748B" font-family="sans-serif" font-size="9.5" font-weight="600">ON-SITE ATTENDANCE</text>
  <text x="476" y="96" fill="#10B981" font-family="sans-serif" font-size="19" font-weight="bold">97.8%</text>

  <!-- Approval Pipeline Card -->
  <rect x="148" y="118" width="476" height="226" rx="8" fill="#FFFFFF" stroke="#E2E8F0"/>
  <text x="164" y="140" fill="#0F172A" font-family="sans-serif" font-size="12" font-weight="700">Multi-Tier Approval Pipeline • Leave & Workflow Management</text>

  <!-- Approval Row 1 -->
  <rect x="164" y="152" width="444" height="42" rx="6" fill="#F8FAFC" stroke="#E2E8F0"/>
  <circle cx="184" cy="173" r="12" fill="#DBEAFE"/>
  <text x="184" y="177" fill="#1D4ED8" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">AS</text>
  <text x="206" y="168" fill="#0F172A" font-family="sans-serif" font-size="11" font-weight="700">Annual Vacation #LV-4902</text>
  <text x="206" y="184" fill="#64748B" font-family="sans-serif" font-size="9.5">Anand S. • Logistics Dept (14 Days)</text>
  <rect x="400" y="163" width="80" height="20" rx="4" fill="#DBEAFE"/>
  <text x="440" y="177" fill="#1D4ED8" font-family="sans-serif" font-size="9" font-weight="700" text-anchor="middle">HR Review</text>
  <rect x="490" y="163" width="70" height="20" rx="4" fill="#10B981"/>
  <text x="525" y="177" fill="#FFFFFF" font-family="sans-serif" font-size="9" font-weight="700" text-anchor="middle">Approve ✓</text>

  <!-- Approval Row 2 -->
  <rect x="164" y="202" width="444" height="42" rx="6" fill="#F8FAFC" stroke="#E2E8F0"/>
  <circle cx="184" cy="223" r="12" fill="#FEF3C7"/>
  <text x="184" y="227" fill="#B45309" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">RK</text>
  <text x="206" y="218" fill="#0F172A" font-family="sans-serif" font-size="11" font-weight="700">Business Travel Reimbursement #CL-104</text>
  <text x="206" y="234" fill="#64748B" font-family="sans-serif" font-size="9.5">Rahul K. • Operations Head ($1,240)</text>
  <rect x="400" y="213" width="80" height="20" rx="4" fill="#FEF3C7"/>
  <text x="440" y="227" fill="#B45309" font-family="sans-serif" font-size="9" font-weight="700" text-anchor="middle">Finance Clearance</text>
  <rect x="490" y="213" width="70" height="20" rx="4" fill="#0F172A"/>
  <text x="525" y="227" fill="#FFFFFF" font-family="sans-serif" font-size="9" font-weight="700" text-anchor="middle">Details</text>

  <!-- Approval Row 3 -->
  <rect x="164" y="252" width="444" height="42" rx="6" fill="#F8FAFC" stroke="#E2E8F0"/>
  <circle cx="184" cy="273" r="12" fill="#DCFCE7"/>
  <text x="184" y="277" fill="#15803D" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">MN</text>
  <text x="206" y="268" fill="#0F172A" font-family="sans-serif" font-size="11" font-weight="700">Maternity Leave & Benefit Allowance #HR-812</text>
  <text x="206" y="284" fill="#64748B" font-family="sans-serif" font-size="9.5">Meera N. • Retail Management (84 Days)</text>
  <rect x="400" y="263" width="80" height="20" rx="4" fill="#DCFCE7"/>
  <text x="440" y="277" fill="#15803D" font-family="sans-serif" font-size="9" font-weight="700" text-anchor="middle">Approved ✓</text>
  <rect x="490" y="263" width="70" height="20" rx="4" fill="#F1F5F9"/>
  <text x="525" y="277" fill="#64748B" font-family="sans-serif" font-size="9" font-weight="700" text-anchor="middle">Completed</text>

  <rect x="164" y="302" width="444" height="28" rx="5" fill="#0F172A"/>
  <text x="386" y="320" fill="#FFFFFF" font-family="sans-serif" font-size="10.5" font-weight="700" text-anchor="middle">Export Monthly PDF Salary & Leave Audit Report</text>
</svg>`;

// 4. CAFM - Multi-Tenant Facility Management System
const cafmSvg = `<svg viewBox="0 0 640 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cafmBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
  </defs>

  <rect width="640" height="360" rx="14" fill="url(#cafmBg)"/>
  <rect x="0" y="0" width="640" height="42" rx="14" fill="#1E293B" fill-opacity="0.8"/>
  <circle cx="24" cy="21" r="5" fill="#EF4444"/>
  <circle cx="40" cy="21" r="5" fill="#F59E0B"/>
  <circle cx="56" cy="21" r="5" fill="#10B981"/>
  <text x="84" y="25" fill="#E2E8F0" font-family="sans-serif" font-size="12" font-weight="700">CAFM Multi-Tenant Facility Management • Asset Operations & Work Orders</text>

  <!-- Left Stats -->
  <rect x="16" y="56" width="180" height="288" rx="8" fill="#0F172A" stroke="#334155"/>
  <text x="30" y="80" fill="#38BDF8" font-family="sans-serif" font-size="11" font-weight="700">BUILDING TELEMETRY</text>
  
  <rect x="26" y="92" width="160" height="46" rx="6" fill="#1E293B"/>
  <text x="36" y="110" fill="#94A3B8" font-family="sans-serif" font-size="9">Total Managed Assets</text>
  <text x="36" y="128" fill="#F8FAFC" font-family="sans-serif" font-size="16" font-weight="bold">3,840 Units</text>

  <rect x="26" y="146" width="160" height="46" rx="6" fill="#1E293B"/>
  <text x="36" y="164" fill="#94A3B8" font-family="sans-serif" font-size="9">Active Tenant Tickets</text>
  <text x="36" y="182" fill="#F59E0B" font-family="sans-serif" font-size="16" font-weight="bold">18 In Dispatch</text>

  <rect x="26" y="200" width="160" height="46" rx="6" fill="#1E293B"/>
  <text x="36" y="218" fill="#94A3B8" font-family="sans-serif" font-size="9">Preventative SLA Met</text>
  <text x="36" y="236" fill="#10B981" font-family="sans-serif" font-size="16" font-weight="bold">99.1%</text>

  <rect x="26" y="254" width="160" height="74" rx="6" fill="#1E293B"/>
  <text x="36" y="274" fill="#38BDF8" font-family="sans-serif" font-size="9.5" font-weight="bold">Facility Zones</text>
  <text x="36" y="292" fill="#94A3B8" font-family="sans-serif" font-size="9">• Commercial Tower A</text>
  <text x="36" y="306" fill="#94A3B8" font-family="sans-serif" font-size="9">• Retail Concourse & Mall</text>
  <text x="36" y="320" fill="#94A3B8" font-family="sans-serif" font-size="9">• Underground Parking B1-B3</text>

  <!-- Right Dispatch Grid -->
  <rect x="208" y="56" width="416" height="288" rx="8" fill="#0F172A" stroke="#334155"/>
  <text x="224" y="80" fill="#F8FAFC" font-family="sans-serif" font-size="12" font-weight="700">Maintenance Work Orders & Dispatch Schedule</text>

  <!-- Ticket 1 -->
  <rect x="224" y="96" width="384" height="48" rx="6" fill="#1E293B" stroke="#334155"/>
  <text x="238" y="116" fill="#F8FAFC" font-family="sans-serif" font-size="11" font-weight="700">#WO-492 • Central HVAC Chiller Pressure Drop</text>
  <text x="238" y="132" fill="#94A3B8" font-family="sans-serif" font-size="9.5">Tower A, 14th Floor • Assigned to MEP Team Alpha</text>
  <rect x="520" y="110" width="76" height="20" rx="4" fill="#EF4444" fill-opacity="0.2"/>
  <text x="558" y="124" fill="#F87171" font-family="sans-serif" font-size="9" font-weight="bold" text-anchor="middle">URGENT</text>

  <!-- Ticket 2 -->
  <rect x="224" y="152" width="384" height="48" rx="6" fill="#1E293B" stroke="#334155"/>
  <text x="238" y="172" fill="#F8FAFC" font-family="sans-serif" font-size="11" font-weight="700">#WO-488 • Scheduled Elevator Cable Safety Calibration</text>
  <text x="238" y="188" fill="#94A3B8" font-family="sans-serif" font-size="9.5">Shaft 3 (Service Lift) • Routine Monthly PM</text>
  <rect x="520" y="166" width="76" height="20" rx="4" fill="#F59E0B" fill-opacity="0.2"/>
  <text x="558" y="180" fill="#FBBF24" font-family="sans-serif" font-size="9" font-weight="bold" text-anchor="middle">IN PROGRESS</text>

  <!-- Ticket 3 -->
  <rect x="224" y="208" width="384" height="48" rx="6" fill="#1E293B" stroke="#334155"/>
  <text x="238" y="228" fill="#F8FAFC" font-family="sans-serif" font-size="11" font-weight="700">#WO-476 • Fire Suppression Valve Diagnostic</text>
  <text x="238" y="244" fill="#94A3B8" font-family="sans-serif" font-size="9.5">Basement B2 Pump Room • Compliance Verification</text>
  <rect x="520" y="222" width="76" height="20" rx="4" fill="#10B981" fill-opacity="0.2"/>
  <text x="558" y="236" fill="#34D399" font-family="sans-serif" font-size="9" font-weight="bold" text-anchor="middle">RESOLVED</text>

  <!-- Ticket 4 -->
  <rect x="224" y="264" width="384" height="48" rx="6" fill="#1E293B" stroke="#334155"/>
  <text x="238" y="284" fill="#F8FAFC" font-family="sans-serif" font-size="11" font-weight="700">#WO-470 • Digital Access Control Card Reader Sync</text>
  <text x="238" y="300" fill="#94A3B8" font-family="sans-serif" font-size="9.5">Lobby Turnstiles • Security Firmware Upgrade</text>
  <rect x="520" y="278" width="76" height="20" rx="4" fill="#10B981" fill-opacity="0.2"/>
  <text x="558" y="292" fill="#34D399" font-family="sans-serif" font-size="9" font-weight="bold" text-anchor="middle">RESOLVED</text>
</svg>`;

// 5. AlShareef CRM & Employee Module
const alshareefSvg = `<svg viewBox="0 0 640 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="crmBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F1F5F9"/>
      <stop offset="100%" stop-color="#E2E8F0"/>
    </linearGradient>
  </defs>

  <rect width="640" height="360" rx="14" fill="url(#crmBg)" stroke="#CBD5E1"/>
  <rect x="0" y="0" width="640" height="42" rx="14" fill="#0F172A"/>
  <circle cx="24" cy="21" r="5" fill="#EF4444"/>
  <circle cx="40" cy="21" r="5" fill="#F59E0B"/>
  <circle cx="56" cy="21" r="5" fill="#10B981"/>
  <text x="84" y="25" fill="#F8FAFC" font-family="sans-serif" font-size="12" font-weight="700">AlShareef CRM • Employee Lifecycle, Hierarchy & Customer Pipeline</text>

  <!-- Left Employee Hierarchy -->
  <rect x="16" y="56" width="180" height="288" rx="8" fill="#FFFFFF" stroke="#CBD5E1"/>
  <text x="30" y="80" fill="#0F172A" font-family="sans-serif" font-size="11.5" font-weight="700">Organizational Tree</text>
  
  <rect x="26" y="92" width="160" height="40" rx="6" fill="#F8FAFC" stroke="#E2E8F0"/>
  <text x="36" y="108" fill="#0F172A" font-family="sans-serif" font-size="10" font-weight="bold">CEO / Executive Board</text>
  <text x="36" y="122" fill="#64748B" font-family="sans-serif" font-size="8.5">4 Direct Reports</text>

  <rect x="36" y="140" width="150" height="40" rx="6" fill="#EFF6FF" stroke="#BFDBFE"/>
  <text x="46" y="156" fill="#1D4ED8" font-family="sans-serif" font-size="10" font-weight="bold">Sales & Operations</text>
  <text x="46" y="170" fill="#64748B" font-family="sans-serif" font-size="8.5">18 Account Managers</text>

  <rect x="36" y="188" width="150" height="40" rx="6" fill="#F8FAFC" stroke="#E2E8F0"/>
  <text x="46" y="204" fill="#0F172A" font-family="sans-serif" font-size="10" font-weight="bold">Engineering & IT</text>
  <text x="46" y="218" fill="#64748B" font-family="sans-serif" font-size="8.5">12 Developers</text>

  <rect x="36" y="236" width="150" height="40" rx="6" fill="#F8FAFC" stroke="#E2E8F0"/>
  <text x="46" y="252" fill="#0F172A" font-family="sans-serif" font-size="10" font-weight="bold">Client Relations & Support</text>
  <text x="46" y="266" fill="#64748B" font-family="sans-serif" font-size="8.5">24 Representatives</text>

  <rect x="26" y="290" width="160" height="40" rx="6" fill="#D2F825" fill-opacity="0.2"/>
  <text x="106" y="314" fill="#0F172A" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">+ Add Department</text>

  <!-- Right Employee Records Table -->
  <rect x="208" y="56" width="416" height="288" rx="8" fill="#FFFFFF" stroke="#CBD5E1"/>
  <text x="224" y="80" fill="#0F172A" font-family="sans-serif" font-size="12" font-weight="700">Staff Records & Role Permissions</text>

  <rect x="224" y="94" width="384" height="28" rx="4" fill="#F8FAFC"/>
  <text x="238" y="112" fill="#64748B" font-family="sans-serif" font-size="9.5" font-weight="700">MEMBER</text>
  <text x="340" y="112" fill="#64748B" font-family="sans-serif" font-size="9.5" font-weight="700">DEPARTMENT</text>
  <text x="450" y="112" fill="#64748B" font-family="sans-serif" font-size="9.5" font-weight="700">RBAC ROLE</text>
  <text x="540" y="112" fill="#64748B" font-family="sans-serif" font-size="9.5" font-weight="700">STATUS</text>

  <line x1="224" y1="126" x2="608" y2="126" stroke="#F1F5F9"/>
  <text x="238" y="146" fill="#0F172A" font-family="sans-serif" font-size="10.5" font-weight="700">Tariq Al-Mansoor</text>
  <text x="340" y="146" fill="#475569" font-family="sans-serif" font-size="10">Corporate Sales</text>
  <rect x="450" y="134" width="60" height="18" rx="4" fill="#DBEAFE"/>
  <text x="480" y="147" fill="#1D4ED8" font-family="sans-serif" font-size="8.5" font-weight="bold" text-anchor="middle">MANAGER</text>
  <text x="540" y="146" fill="#10B981" font-family="sans-serif" font-size="10" font-weight="bold">ACTIVE</text>

  <line x1="224" y1="162" x2="608" y2="162" stroke="#F1F5F9"/>
  <text x="238" y="182" fill="#0F172A" font-family="sans-serif" font-size="10.5" font-weight="700">Fatima Zahra</text>
  <text x="340" y="182" fill="#475569" font-family="sans-serif" font-size="10">Client Support</text>
  <rect x="450" y="170" width="50" height="18" rx="4" fill="#F1F5F9"/>
  <text x="475" y="183" fill="#475569" font-family="sans-serif" font-size="8.5" font-weight="bold" text-anchor="middle">AGENT</text>
  <text x="540" y="182" fill="#10B981" font-family="sans-serif" font-size="10" font-weight="bold">ACTIVE</text>

  <line x1="224" y1="198" x2="608" y2="198" stroke="#F1F5F9"/>
  <text x="238" y="218" fill="#0F172A" font-family="sans-serif" font-size="10.5" font-weight="700">Omar Al-Hashimi</text>
  <text x="340" y="218" fill="#475569" font-family="sans-serif" font-size="10">Procurement</text>
  <rect x="450" y="206" width="60" height="18" rx="4" fill="#DBEAFE"/>
  <text x="480" y="219" fill="#1D4ED8" font-family="sans-serif" font-size="8.5" font-weight="bold" text-anchor="middle">BUYER</text>
  <text x="540" y="218" fill="#10B981" font-family="sans-serif" font-size="10" font-weight="bold">ACTIVE</text>

  <line x1="224" y1="234" x2="608" y2="234" stroke="#F1F5F9"/>
  <text x="238" y="254" fill="#0F172A" font-family="sans-serif" font-size="10.5" font-weight="700">Layla Al-Khatib</text>
  <text x="340" y="254" fill="#475569" font-family="sans-serif" font-size="10">Legal & Contracts</text>
  <rect x="450" y="242" width="60" height="18" rx="4" fill="#FEF3C7"/>
  <text x="480" y="255" fill="#B45309" font-family="sans-serif" font-size="8.5" font-weight="bold" text-anchor="middle">LEGAL</text>
  <text x="540" y="254" fill="#10B981" font-family="sans-serif" font-size="10" font-weight="bold">ACTIVE</text>

  <rect x="224" y="280" width="384" height="48" rx="6" fill="#F8FAFC" stroke="#E2E8F0"/>
  <text x="238" y="300" fill="#0F172A" font-family="sans-serif" font-size="10" font-weight="bold">CRM API Integration</text>
  <text x="238" y="316" fill="#64748B" font-family="sans-serif" font-size="9">Reactive Form Arrays • Real-time profile state sync via RxJS Subject streams</text>
</svg>`;

// 6. Lulu Business Suite (MarketConnect & Leasing)
const lulubizSvg = `<svg viewBox="0 0 640 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bizBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#111827"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
  </defs>

  <rect width="640" height="360" rx="14" fill="url(#bizBg)"/>
  <rect x="0" y="0" width="640" height="42" rx="14" fill="#0F172A"/>
  <circle cx="24" cy="21" r="5" fill="#EF4444"/>
  <circle cx="40" cy="21" r="5" fill="#F59E0B"/>
  <circle cx="56" cy="21" r="5" fill="#10B981"/>
  <text x="84" y="25" fill="#F8FAFC" font-family="sans-serif" font-size="12" font-weight="700">Lulu Business Applications • MarketConnect & Commercial Leasing Hub</text>

  <!-- Left Panel: MarketConnect Vendor Stats -->
  <rect x="16" y="56" width="190" height="288" rx="8" fill="#1E293B" stroke="#334155"/>
  <text x="30" y="80" fill="#F59E0B" font-family="sans-serif" font-size="11" font-weight="700">MARKETCONNECT VENDORS</text>
  
  <rect x="26" y="92" width="170" height="46" rx="6" fill="#0F172A"/>
  <text x="36" y="110" fill="#94A3B8" font-family="sans-serif" font-size="9">Active Retail Suppliers</text>
  <text x="36" y="128" fill="#F8FAFC" font-family="sans-serif" font-size="16" font-weight="bold">2,420 Vendors</text>

  <rect x="26" y="146" width="170" height="46" rx="6" fill="#0F172A"/>
  <text x="36" y="164" fill="#94A3B8" font-family="sans-serif" font-size="9">Products Synchronized</text>
  <text x="36" y="182" fill="#D2F825" font-family="sans-serif" font-size="16" font-weight="bold">184,000 SKUs</text>

  <rect x="26" y="200" width="170" height="46" rx="6" fill="#0F172A"/>
  <text x="36" y="218" fill="#94A3B8" font-family="sans-serif" font-size="9">Leasing Revenue Collected</text>
  <text x="36" y="236" fill="#38BDF8" font-family="sans-serif" font-size="16" font-weight="bold">$8.4M / Qtr</text>

  <rect x="26" y="256" width="170" height="74" rx="6" fill="#0F172A"/>
  <text x="36" y="276" fill="#F59E0B" font-family="sans-serif" font-size="9.5" font-weight="bold">Database Associations</text>
  <text x="36" y="294" fill="#94A3B8" font-family="sans-serif" font-size="9">• Sequelize ORM with MSSQL</text>
  <text x="36" y="308" fill="#94A3B8" font-family="sans-serif" font-size="9">• MySQL Transactions for billing</text>
  <text x="36" y="322" fill="#94A3B8" font-family="sans-serif" font-size="9">• MongoDB for catalog storage</text>

  <!-- Right Panel: Leasing Contracts Table -->
  <rect x="218" y="56" width="406" height="288" rx="8" fill="#1E293B" stroke="#334155"/>
  <text x="234" y="80" fill="#F8FAFC" font-family="sans-serif" font-size="12" font-weight="700">Commercial Mall Leasing Contracts</text>

  <rect x="234" y="94" width="374" height="28" rx="4" fill="#0F172A"/>
  <text x="246" y="112" fill="#94A3B8" font-family="sans-serif" font-size="9" font-weight="bold">UNIT / TENANT</text>
  <text x="360" y="112" fill="#94A3B8" font-family="sans-serif" font-size="9" font-weight="bold">EXPIRY</text>
  <text x="440" y="112" fill="#94A3B8" font-family="sans-serif" font-size="9" font-weight="bold">ANNUAL RENT</text>
  <text x="540" y="112" fill="#94A3B8" font-family="sans-serif" font-size="9" font-weight="bold">ESCROW</text>

  <line x1="234" y1="126" x2="608" y2="126" stroke="#334155"/>
  <text x="246" y="146" fill="#F8FAFC" font-family="sans-serif" font-size="10.5" font-weight="700">Unit 102 • Zara Retail Flagship</text>
  <text x="360" y="146" fill="#CBD5E1" font-family="sans-serif" font-size="10">Dec 2028</text>
  <text x="440" y="146" fill="#D2F825" font-family="sans-serif" font-size="10" font-weight="bold">$420,000</text>
  <text x="540" y="146" fill="#10B981" font-family="sans-serif" font-size="9.5" font-weight="bold">LOCKED</text>

  <line x1="234" y1="162" x2="608" y2="162" stroke="#334155"/>
  <text x="246" y="182" fill="#F8FAFC" font-family="sans-serif" font-size="10.5" font-weight="700">Unit 204 • Starbucks Coffee Hub</text>
  <text x="360" y="182" fill="#CBD5E1" font-family="sans-serif" font-size="10">Aug 2027</text>
  <text x="440" y="182" fill="#D2F825" font-family="sans-serif" font-size="10" font-weight="bold">$180,000</text>
  <text x="540" y="182" fill="#10B981" font-family="sans-serif" font-size="9.5" font-weight="bold">LOCKED</text>

  <line x1="234" y1="198" x2="608" y2="198" stroke="#334155"/>
  <text x="246" y="218" fill="#F8FAFC" font-family="sans-serif" font-size="10.5" font-weight="700">Unit 308 • Apple Authorized Store</text>
  <text x="360" y="218" fill="#CBD5E1" font-family="sans-serif" font-size="10">Jan 2030</text>
  <text x="440" y="218" fill="#D2F825" font-family="sans-serif" font-size="10" font-weight="bold">$540,000</text>
  <text x="540" y="218" fill="#10B981" font-family="sans-serif" font-size="9.5" font-weight="bold">LOCKED</text>

  <line x1="234" y1="234" x2="608" y2="234" stroke="#334155"/>
  <text x="246" y="254" fill="#F8FAFC" font-family="sans-serif" font-size="10.5" font-weight="700">Unit 412 • Cinepolis Multiplex</text>
  <text x="360" y="254" fill="#CBD5E1" font-family="sans-serif" font-size="10">May 2032</text>
  <text x="440" y="254" fill="#D2F825" font-family="sans-serif" font-size="10" font-weight="bold">$820,000</text>
  <text x="540" y="254" fill="#10B981" font-family="sans-serif" font-size="9.5" font-weight="bold">LOCKED</text>

  <rect x="234" y="280" width="374" height="48" rx="6" fill="#0F172A" stroke="#334155"/>
  <text x="246" y="300" fill="#38BDF8" font-family="sans-serif" font-size="10" font-weight="bold">Automated Lease Billing & Excel Import Pipeline</text>
  <text x="246" y="316" fill="#94A3B8" font-family="sans-serif" font-size="9">SSRS Report Generation • Third-party SOAP payment gateway synchronization</text>
</svg>`;

fs.writeFileSync(path.join(dir, 'project-p2p.svg'), p2pSvg.trim());
fs.writeFileSync(path.join(dir, 'project-aurex.svg'), aurexSvg.trim());
fs.writeFileSync(path.join(dir, 'project-lulu.svg'), luluSvg.trim());
fs.writeFileSync(path.join(dir, 'project-cafm.svg'), cafmSvg.trim());
fs.writeFileSync(path.join(dir, 'project-alshareef.svg'), alshareefSvg.trim());
fs.writeFileSync(path.join(dir, 'project-lulubiz.svg'), lulubizSvg.trim());

console.log('Saved all 6 rich vector mockups: p2p, aurex, lulu, cafm, alshareef, lulubiz');
