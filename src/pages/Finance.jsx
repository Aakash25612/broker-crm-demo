import { connectIpsLedger, t2Settlements, statusLabels } from '../data/mockData'

export default function Finance() {
  return (
    <div className="page">
      <header className="page-header">
        <div><h1>Finance & Settlement</h1><p className="muted">ConnectIPS ledger · T+2 regulatory window</p></div>
      </header>

      <div className="two-col">
        <div className="card">
          <h2>ConnectIPS & digital wallet ledger</h2>
          <table>
            <thead><tr><th>Client</th><th>Amount</th><th>Reference</th><th>Status</th></tr></thead>
            <tbody>
              {connectIpsLedger.map((r) => (
                <tr key={r.id}>
                  <td>{r.client}</td>
                  <td><strong>{r.amount}</strong></td>
                  <td className="mono">{r.ref}</td>
                  <td><span className={`badge status-${r.status}`}>{statusLabels[r.status]}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card">
          <h2>T+2 settlement tracker</h2>
          <p className="muted card-intro">Automated alerts for funds or shares due within regulatory window</p>
          {t2Settlements.map((t) => (
            <div key={t.client + t.type} className="settlement-row">
              <div>
                <strong>{t.client}</strong>
                <span>{t.type} · Due {t.due}</span>
              </div>
              <div className="settlement-right">
                <strong>{t.amount}</strong>
                <span className={`badge status-${t.status}`}>{statusLabels[t.status]}</span>
              </div>
            </div>
          ))}
          <button type="button" className="btn btn-primary btn-sm btn-full">Send T+2 reminders</button>
        </div>
      </div>
    </div>
  )
}
