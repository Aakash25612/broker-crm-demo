import { leadTasks } from '../../data/mockData'
import { Link } from 'react-router-dom'
import LeadsNav from '../../components/LeadsNav'

export default function LeadsTasks() {
  const open = leadTasks.filter((t) => t.status === 'open')
  const done = leadTasks.filter((t) => t.status === 'done')

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1>Follow-up Tasks</h1>
          <p className="muted">Scheduled calls, meetings & reminders for lead nurturing</p>
        </div>
        <button type="button" className="btn btn-primary btn-sm">+ New task</button>
      </header>

      <LeadsNav />

      <div className="filter-bar">
        {['All', 'Overdue', 'Today', 'This week', 'My tasks'].map((f, i) => (
          <button key={f} type="button" className={`filter-chip ${i === 0 ? 'active' : ''}`}>{f}</button>
        ))}
      </div>

      <div className="card">
        <h2>Open tasks ({open.length})</h2>
        {open.map((t) => (
          <div key={t.id} className={`task-row ${t.due === 'Overdue' ? 'overdue-row' : ''}`}>
            <input type="checkbox" aria-label={`Complete ${t.task}`} />
            <div className="task-body">
              <strong>{t.task}</strong>
              <span>
                <Link to="/leads/detail">{t.lead}</Link> · {t.rm} ·
                <span className={t.due === 'Overdue' ? 'overdue' : ''}> Due {t.due}</span>
              </span>
            </div>
            <span className={`priority-badge ${t.priority}`}>{t.priority}</span>
            <button type="button" className="btn btn-ghost btn-sm">Done</button>
          </div>
        ))}
      </div>

      <div className="card">
        <h2>Completed</h2>
        {done.map((t) => (
          <div key={t.id} className="task-row done-row">
            <input type="checkbox" checked readOnly aria-label="Completed" />
            <div className="task-body">
              <strong>{t.task}</strong>
              <span>{t.lead} · {t.rm}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <h2>Auto-reminder rules</h2>
        <ul className="scope-list">
          <li>New lead — first contact within 24 hours</li>
          <li>Contacted — follow up every 3 days if no response</li>
          <li>Qualified — KYC link sent within 48 hours</li>
          <li>KYC started — compliance nudge after 5 days idle</li>
        </ul>
        <button type="button" className="btn btn-secondary btn-sm">Configure rules</button>
      </div>
    </div>
  )
}
