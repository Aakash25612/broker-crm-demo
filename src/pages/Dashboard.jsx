import { Link } from 'react-router-dom'
import { stats } from '../data/mockData'

export default function Dashboard() {
  const s = stats
  return (
    <div className="page">
      <header className="page-header"><div><h1>Overview</h1><p className="muted">Himalayan Securities · Operations dashboard</p></div></header>
      <div className="stat-grid">
        <Link to="/leads" className="stat-card"><strong>{s.totalLeads}</strong><span>Active leads</span></Link>
        <Link to="/leads" className="stat-card hot-stat"><strong>{s.hotLeads}</strong><span>Hot leads</span></Link>
        <Link to="/leads/tasks" className="stat-card warn"><strong>{s.overdueFollowups}</strong><span>Overdue follow-ups</span></Link>
        <Link to="/kyc" className="stat-card"><strong>{s.pendingKyc}</strong><span>Pending KYC</span></Link>
        <Link to="/collateral" className="stat-card warn"><strong>{s.collateralQueue}</strong><span>Collateral queue</span></Link>
        <Link to="/finance" className="stat-card warn"><strong>{s.t2Due}</strong><span>T+2 due</span></Link>
      </div>
      <div className="two-col">
        <div className="card">
          <h2>Today's priorities</h2>
          <div className="priority-row"><span>{s.overdueFollowups} overdue lead follow-ups</span><Link to="/leads/tasks" className="link-sm">Open →</Link></div>
          <div className="priority-row"><span>{s.hotLeads} hot leads need attention</span><Link to="/leads" className="link-sm">Pipeline →</Link></div>
          <div className="priority-row"><span>Review 24 pending KYC applications</span><Link to="/kyc" className="link-sm">Open →</Link></div>
          <div className="priority-row"><span>8 collateral requests awaiting approval</span><Link to="/collateral" className="link-sm">Open →</Link></div>
          <div className="priority-row"><span>15 T+2 settlements due within 48 hrs</span><Link to="/finance" className="link-sm">Open →</Link></div>
        </div>
        <div className="card">
          <h2>Module scope</h2>
          <ul className="scope-list">
            <li>Lead pipeline, scoring & RM assignment</li>
            <li>Localized KYC with BOID, CRN & DMS</li>
            <li>Collateral bridge to NEPSE TMS</li>
            <li>Sparrow SMS / WhatsApp notifications</li>
            <li>Multi-branch RBAC & audit trail</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
