import { auditLogs } from '../data/mockData'

export default function Audit() {
  return (
    <div className="page">
      <header className="page-header">
        <div><h1>Audit Log</h1><p className="muted">Immutable ledger · User actions with timestamps & IP addresses</p></div>
        <button type="button" className="btn btn-secondary btn-sm">Export log</button>
      </header>

      <div className="card table-card">
        <table>
          <thead><tr><th>Timestamp</th><th>User</th><th>Action</th><th>IP address</th></tr></thead>
          <tbody>
            {auditLogs.map((a, i) => (
              <tr key={i}>
                <td className="mono">{a.time}</td>
                <td><strong>{a.user}</strong></td>
                <td>{a.action}</td>
                <td className="mono muted">{a.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="hint-text">Every collateral change, KYC decision, phone update, and report download is recorded and cannot be modified.</p>
    </div>
  )
}
