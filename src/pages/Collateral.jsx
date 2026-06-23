import { collateralRequests, statusLabels } from '../data/mockData'

export default function Collateral() {
  return (
    <div className="page">
      <header className="page-header">
        <div><h1>Collateral Management</h1><p className="muted">Approval workflow before NEPSE TMS limit adjustment</p></div>
      </header>

      <div className="card highlight">
        <div>
          <p className="card-label">Pending queue</p>
          <strong className="big-num">8 requests</strong>
          <p className="muted">Verify receipts before updating trading limits in TMS</p>
        </div>
      </div>

      {collateralRequests.map((c) => (
        <div key={c.id} className="card request-card">
          <div className="request-top">
            <div>
              <strong>{c.client}</strong>
              <span className="mono muted">{c.boid}</span>
            </div>
            <span className={`badge status-${c.status}`}>{statusLabels[c.status]}</span>
          </div>
          <div className="request-meta">
            <span><strong>{c.amount}</strong> · {c.type}</span>
            <span>{c.submitted}</span>
          </div>
          {c.status === 'pending' && (
            <div className="action-row">
              <button type="button" className="btn btn-secondary btn-sm">View receipt</button>
              <button type="button" className="btn btn-ghost btn-sm">Reject</button>
              <button type="button" className="btn btn-primary btn-sm">Approve & note TMS</button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
