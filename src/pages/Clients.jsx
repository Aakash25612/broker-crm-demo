import { clients } from '../data/mockData'

const segmentClass = { Retail: 'retail', Trader: 'trader', 'HNWI / VIP': 'hnwi' }

export default function Clients() {
  return (
    <div className="page">
      <header className="page-header">
        <div><h1>Client Segmentation</h1><p className="muted">Volume tagging · RM mapping · Dormancy alerts</p></div>
      </header>

      <div className="filter-bar">
        {['All', 'Retail', 'Trader', 'HNWI / VIP', 'Dormant 30+'].map((f, i) => (
          <button key={f} type="button" className={`filter-chip ${i === 0 ? 'active' : ''}`}>{f}</button>
        ))}
      </div>

      <div className="card table-card">
        <table>
          <thead><tr><th>Client</th><th>Segment</th><th>RM</th><th>Branch</th><th>Volume</th><th>Last trade</th><th></th></tr></thead>
          <tbody>
            {clients.map((c) => (
              <tr key={c.id} className={c.dormant ? 'dormant-row' : ''}>
                <td><strong>{c.name}</strong><span className="id-muted">{c.id}</span></td>
                <td><span className={`seg-badge ${segmentClass[c.segment]}`}>{c.segment}</span></td>
                <td>{c.rm}</td>
                <td>{c.branch}</td>
                <td>{c.volume}</td>
                <td>
                  {c.lastTrade}
                  {c.dormant && <span className="dormant-tag">{c.dormantDays}d dormant</span>}
                </td>
                <td><button type="button" className="btn btn-ghost btn-sm">{c.dormant ? 'Call client' : 'Assign RM'}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
