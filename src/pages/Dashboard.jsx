import { Link } from 'react-router-dom'
import { stats } from '../data/mockData'

export default function Dashboard() {
  const s = stats
  return (
    <div className="page">
      <header className="page-header"><div><h1>Overview</h1><p className="muted">Himalayan Securities · Operations dashboard</p></div></header>
      <div className="stat-grid">
        <Link to="/kyc" className="stat-card"><strong>{s.pendingKyc}</strong><span>Pending KYC</span></Link>
        <Link to="/collateral" className="stat-card warn"><strong>{s.collateralQueue}</strong><span>Collateral queue</span></Link>
        <Link to="/finance" className="stat-card warn"><strong>{s.t2Due}</strong><span>T+2 due</span></Link>
        <Link to="/notifications" className="stat-card"><strong>{s.marginCalls}</strong><span>Margin calls</span></Link>
        <Link to="/clients" className="stat-card"><strong>{s.dormancyAlerts}</strong><span>Dormant clients</span></Link>
        <div className="stat-card"><strong>{s.activeClients.toLocaleString()}</strong><span>Active clients</span></div>
      </div>
      <div className="two-col">
        <div className="card">
          <h2>Today's priorities</h2>
          <div className="priority-row"><span>Review 24 pending KYC applications</span><Link to="/kyc" className="link-sm">Open →</Link></div>
          <div className="priority-row"><span>8 collateral requests awaiting approval</span><Link to="/collateral" className="link-sm">Open →</Link></div>
          <div className="priority-row"><span>15 T+2 settlements due within 48 hrs</span><Link to="/finance" className="link-sm">Open →</Link></div>
          <div className="priority-row"><span>6 margin call alerts to send</span><Link to="/notifications" className="link-sm">Open →</Link></div>
        </div>
        <div className="card">
          <h2>Module scope</h2>
          <ul className="scope-list">
            <li>Localized KYC with BOID, CRN & DMS</li>
            <li>Collateral bridge to NEPSE TMS</li>
            <li>Sparrow SMS / WhatsApp notifications</li>
            <li>Retail · Trader · HNWI segmentation</li>
            <li>Multi-branch RBAC & audit trail</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
