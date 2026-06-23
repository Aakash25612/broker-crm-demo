import { Link } from 'react-router-dom'
import { useState } from 'react'
import { leadSources, leads, statusLabels } from '../../data/mockData'
import LeadsNav from '../../components/LeadsNav'

export default function LeadsList() {
  const [search, setSearch] = useState('')

  const filtered = leads.filter((l) =>
    !search || l.name.toLowerCase().includes(search.toLowerCase()) || l.id.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1>All Leads</h1>
          <p className="muted">Search, filter, bulk assign & export</p>
        </div>
        <div className="header-actions">
          <Link to="/leads" className="btn btn-secondary btn-sm">Pipeline</Link>
          <Link to="/leads/capture" className="btn btn-primary btn-sm">+ Add lead</Link>
        </div>
      </header>

      <LeadsNav />

      <div className="toolbar">
        <input
          type="search"
          className="search-input"
          placeholder="Search by name, phone, or lead ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="select-field"><option>All stages</option><option>New</option><option>Contacted</option><option>Qualified</option></select>
        <select className="select-field"><option>All sources</option>{leadSources.map((s) => <option key={s}>{s}</option>)}</select>
        <select className="select-field"><option>All branches</option><option>Kathmandu</option><option>Pokhara</option><option>Butwal</option></select>
        <button type="button" className="btn btn-secondary btn-sm">Export CSV</button>
        <button type="button" className="btn btn-secondary btn-sm">Bulk assign RM</button>
      </div>

      <div className="card table-card">
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" aria-label="Select all" /></th>
              <th>Lead</th>
              <th>Source</th>
              <th>Stage</th>
              <th>Score</th>
              <th>RM</th>
              <th>Branch</th>
              <th>Est. value</th>
              <th>Next follow-up</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((l) => (
              <tr key={l.id}>
                <td><input type="checkbox" aria-label={`Select ${l.name}`} /></td>
                <td>
                  <strong>{l.name}</strong>
                  <span className="id-muted">{l.id} · {l.phone}</span>
                </td>
                <td>{l.source}</td>
                <td><span className={`badge status-${l.stage}`}>{statusLabels[l.stage]}</span></td>
                <td>
                  <span className={`temp-badge ${l.temp}`}>{l.temp}</span>
                  <span className="score-inline">{l.score}</span>
                </td>
                <td>{l.rm || '—'}</td>
                <td>{l.branch}</td>
                <td>{l.estValue}</td>
                <td className={l.nextFollowUp === 'Overdue' ? 'overdue' : ''}>{l.nextFollowUp}</td>
                <td><Link to="/leads/detail" className="btn btn-ghost btn-sm">Open</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
