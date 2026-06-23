import { Link } from 'react-router-dom'

const modules = [
  { n: '01', title: 'KYC & Onboarding', items: ['Digital KYC intake', 'BOID mapping', 'Document management', 'CRN logging', 'Compliance tracker'] },
  { n: '02', title: 'Collateral & Finance', items: ['Collateral upload portal', 'Approval workflow', 'ConnectIPS ledger', 'T+2 settlement tracker'] },
  { n: '03', title: 'Notification Gateway', items: ['Sparrow SMS / WhatsApp API', 'Margin call alerts', 'EOD summaries', 'Corporate action broadcasts'] },
  { n: '04', title: 'Client Segmentation', items: ['Volume-based tagging', 'RM mapping', 'Dormancy alerts (30/60/90 days)'] },
  { n: '05', title: 'Branch & Controls', items: ['Multi-branch RBAC', 'Sub-broker commissions', 'Immutable audit logs'] },
]

export default function Landing() {
  return (
    <div className="landing">
      <nav className="landing-nav">
        <span className="logo">NepSE CRM</span>
        <Link to="/login" className="btn btn-primary btn-sm">Sign in</Link>
      </nav>

      <section className="hero">
        <p className="hero-label">Nepali Stock Broker CRM</p>
        <h1>Custom CRM built for NEPSE brokers</h1>
        <p className="hero-sub">
          KYC onboarding, collateral workflows, T+2 settlement, SMS notifications, client segmentation, and branch-level controls — localized for Nepal.
        </p>
        <Link to="/login" className="btn btn-primary">View demo</Link>
      </section>

      <section className="modules">
        <h2>Five core modules</h2>
        <div className="module-grid">
          {modules.map((m) => (
            <div key={m.n} className="module-card">
              <span className="module-num">{m.n}</span>
              <h3>{m.title}</h3>
              <ul>{m.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <footer className="landing-footer">NepSE CRM · Demo for Himalayan Securities</footer>
    </div>
  )
}
