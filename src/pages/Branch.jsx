import { branches, subBrokers } from '../data/mockData'
import { useApp } from '../context/AppContext'

export default function Branch() {
  const { currentUser } = useApp()

  return (
    <div className="page">
      <header className="page-header">
        <div><h1>Branch & Internal Controls</h1><p className="muted">Multi-branch RBAC · Sub-broker commissions</p></div>
        {currentUser.branch && <span className="branch-scope">Scoped: {currentUser.branch} branch only</span>}
      </header>

      <div className="card">
        <h2>Branch hierarchy</h2>
        <div className="branch-grid">
          {branches.map((b) => (
            <div key={b.name} className="branch-card">
              <strong>{b.name}</strong>
              <span>{b.clients} clients · {b.aum}</span>
              <small>Manager: {b.manager}</small>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2>Sub-broker / agent commission tracker</h2>
        <table>
          <thead><tr><th>Agent</th><th>Branch</th><th>Trades</th><th>Volume</th><th>Commission (month)</th></tr></thead>
          <tbody>
            {subBrokers.map((s) => (
              <tr key={s.name}>
                <td><strong>{s.name}</strong></td>
                <td>{s.branch}</td>
                <td>{s.trades}</td>
                <td>{s.volume}</td>
                <td><strong>{s.commission}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
