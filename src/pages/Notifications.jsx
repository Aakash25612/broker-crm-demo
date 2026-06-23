import { notificationTemplates, recentNotifications, statusLabels } from '../data/mockData'

export default function Notifications() {
  return (
    <div className="page">
      <header className="page-header">
        <div><h1>Notification Gateway</h1><p className="muted">Sparrow SMS · WhatsApp Business API · Bulk broadcasts</p></div>
        <button type="button" className="btn btn-primary btn-sm">Send notification</button>
      </header>

      <div className="template-grid">
        {notificationTemplates.map((t) => (
          <div key={t.id} className="card template-card">
            <span className="channel-tag">{t.channel}</span>
            <h3>{t.name}</h3>
            <p>{t.desc}</p>
            <button type="button" className="btn btn-secondary btn-sm">Configure</button>
          </div>
        ))}
      </div>

      <div className="card">
        <h2>Recent broadcasts</h2>
        <table>
          <thead><tr><th>Time</th><th>Type</th><th>Recipient</th><th>Channel</th><th>Status</th></tr></thead>
          <tbody>
            {recentNotifications.map((n, i) => (
              <tr key={i}>
                <td>{n.time}</td>
                <td>{n.type}</td>
                <td>{n.client}</td>
                <td>{n.channel}</td>
                <td><span className={`badge status-${n.status}`}>{statusLabels[n.status]}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card">
        <h2>Corporate action broadcast</h2>
        <p className="muted card-intro">Notify client segments about IPO, FPO, right shares, or dividends</p>
        <div className="form-inline">
          <select className="select-field"><option>IPO announcement</option><option>Right share — NICA</option><option>Dividend credit</option></select>
          <select className="select-field"><option>All clients</option><option>HNWI / VIP</option><option>Trader segment</option></select>
          <button type="button" className="btn btn-primary btn-sm">Send bulk SMS</button>
        </div>
      </div>
    </div>
  )
}
