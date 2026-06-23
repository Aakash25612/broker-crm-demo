import { kycApplications, kycDetail, statusLabels } from '../data/mockData'

export default function KYC() {
  return (
    <div className="page">
      <header className="page-header">
        <div><h1>KYC & Onboarding</h1><p className="muted">Compliance status tracker · CDSC BOID verification</p></div>
        <button type="button" className="btn btn-primary btn-sm">+ New application</button>
      </header>

      <div className="two-col wide-left">
        <div className="card table-card">
          <table>
            <thead><tr><th>ID</th><th>Client</th><th>Type</th><th>BOID</th><th>Branch</th><th>Status</th><th></th></tr></thead>
            <tbody>
              {kycApplications.map((k) => (
                <tr key={k.id}>
                  <td>{k.id}</td>
                  <td><strong>{k.name}</strong></td>
                  <td>{k.type}</td>
                  <td className="mono">{k.boid}</td>
                  <td>{k.branch}</td>
                  <td><span className={`badge status-${k.status}`}>{statusLabels[k.status]}</span></td>
                  <td><button type="button" className="btn btn-ghost btn-sm">Review</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <h2>Application detail</h2>
          <p className="detail-name">{kycDetail.name}</p>
          <div className="detail-grid">
            <div><span>Citizenship</span><strong>{kycDetail.citizenship}</strong></div>
            <div><span>DOB</span><strong>{kycDetail.dob}</strong></div>
            <div><span>Temp address</span><strong>{kycDetail.tempAddress}</strong></div>
            <div><span>Permanent</span><strong>{kycDetail.permAddress}</strong></div>
            <div><span>Father</span><strong>{kycDetail.father}</strong></div>
            <div><span>Occupation</span><strong>{kycDetail.occupation}</strong></div>
            <div className="full"><span>BOID (16-digit)</span><strong className="mono">{kycDetail.boid}</strong></div>
            <div><span>Bank</span><strong>{kycDetail.bank}</strong></div>
            <div><span>Account</span><strong className="mono">{kycDetail.account}</strong></div>
            <div className="full"><span>CRN (C-ASBA)</span><strong>{kycDetail.crn}</strong></div>
          </div>
          <h3 className="subhead">Documents (DMS)</h3>
          <ul className="doc-list">{kycDetail.docs.map((d) => <li key={d}>{d} ✓</li>)}</ul>
          <div className="action-row">
            <button type="button" className="btn btn-secondary btn-sm">Reject with remarks</button>
            <button type="button" className="btn btn-primary btn-sm">Approve KYC</button>
          </div>
        </div>
      </div>
    </div>
  )
}
