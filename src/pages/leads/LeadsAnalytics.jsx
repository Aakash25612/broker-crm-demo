import { leadAnalytics, leadCampaigns } from '../../data/mockData'
import LeadsNav from '../../components/LeadsNav'

export default function LeadsAnalytics() {
  const a = leadAnalytics
  const maxLeads = Math.max(...a.monthly.map((m) => m.leads))

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1>Lead Analytics</h1>
          <p className="muted">Conversion funnel · source ROI · RM performance</p>
        </div>
        <select className="select-field"><option>Last 6 months</option><option>This quarter</option><option>This year</option></select>
      </header>

      <LeadsNav />

      <div className="card">
        <h2>Conversion funnel</h2>
        <div className="funnel">
          {a.funnel.map((f) => (
            <div key={f.stage} className="funnel-row">
              <span className="funnel-label">{f.stage}</span>
              <div className="funnel-bar-wrap">
                <div className="funnel-bar" style={{ width: `${f.pct}%` }} />
              </div>
              <span className="funnel-count">{f.count}</span>
              <span className="funnel-pct">{f.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="two-col">
        <div className="card">
          <h2>Leads by source</h2>
          <table>
            <thead><tr><th>Source</th><th>Leads</th><th>Conversion</th></tr></thead>
            <tbody>
              {a.bySource.map((s) => (
                <tr key={s.source}>
                  <td><strong>{s.source}</strong></td>
                  <td>{s.count}</td>
                  <td className="conv-cell">{s.conv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card">
          <h2>RM performance</h2>
          <table>
            <thead><tr><th>RM</th><th>Leads</th><th>Converted</th><th>Rate</th><th>Pipeline</th></tr></thead>
            <tbody>
              {a.rmPerformance.map((r) => (
                <tr key={r.rm}>
                  <td><strong>{r.rm}</strong></td>
                  <td>{r.leads}</td>
                  <td>{r.converted}</td>
                  <td className="conv-cell">{r.rate}</td>
                  <td>{r.pipeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h2>Monthly trend</h2>
        <div className="chart-bars">
          {a.monthly.map((m) => (
            <div key={m.month} className="chart-col">
              <div className="chart-bar-group">
                <div className="chart-bar leads" style={{ height: `${(m.leads / maxLeads) * 120}px` }} title={`${m.leads} leads`} />
                <div className="chart-bar conv" style={{ height: `${(m.converted / maxLeads) * 120}px` }} title={`${m.converted} converted`} />
              </div>
              <span>{m.month}</span>
            </div>
          ))}
        </div>
        <div className="chart-legend">
          <span><i className="legend leads" /> Leads</span>
          <span><i className="legend conv" /> Converted</span>
        </div>
      </div>

      <div className="card">
        <h2>Campaigns</h2>
        <table>
          <thead><tr><th>Campaign</th><th>Date</th><th>Leads</th><th>Converted</th><th>Status</th></tr></thead>
          <tbody>
            {leadCampaigns.map((c) => (
              <tr key={c.id}>
                <td><strong>{c.name}</strong></td>
                <td>{c.date}</td>
                <td>{c.leads}</td>
                <td>{c.converted}</td>
                <td><span className={`badge status-${c.status === 'active' ? 'pending' : 'approved'}`}>{c.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" className="btn btn-secondary btn-sm">+ New campaign</button>
      </div>
    </div>
  )
}
