import { Link } from 'react-router-dom'
import { Mail, MessageSquare, Phone, UserPlus } from 'lucide-react'
import { leadActivities, leadDetail } from '../../data/mockData'
import LeadsNav from '../../components/LeadsNav'

const activityIcon = { call: Phone, email: Mail, meeting: UserPlus, stage: MessageSquare, create: UserPlus }

export default function LeadDetail() {
  const l = leadDetail

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <Link to="/leads" className="back-link">← Pipeline</Link>
          <h1>{l.name}</h1>
          <p className="muted">{l.id} · {l.phone} · {l.email}</p>
        </div>
        <div className="header-actions">
          <button type="button" className="btn btn-secondary btn-sm"><Phone size={14} /> Log call</button>
          <button type="button" className="btn btn-secondary btn-sm">Schedule task</button>
          <button type="button" className="btn btn-primary btn-sm">Convert to KYC</button>
        </div>
      </header>

      <LeadsNav />

      <div className="detail-layout">
        <div className="detail-main">
          <div className="score-banner">
            <div className="score-circle"><strong>{l.score}</strong><span>Lead score</span></div>
            <div className="score-meta">
              <span className={`temp-badge ${l.temp}`}>{l.temp} lead</span>
              <span className={`badge status-${l.stage}`}>{l.stage.replace('_', ' ')}</span>
              <p>{l.interest}</p>
            </div>
            <div className="score-actions">
              <button type="button" className="btn btn-ghost btn-sm">Recalculate</button>
            </div>
          </div>

          <div className="card">
            <h2>Activity timeline</h2>
            <div className="timeline">
              {leadActivities.map((a, i) => {
                const Icon = activityIcon[a.type] || MessageSquare
                return (
                  <div key={i} className="timeline-item">
                    <div className="timeline-icon"><Icon size={14} /></div>
                    <div>
                      <div className="timeline-head">
                        <strong>{a.user}</strong>
                        <span>{a.time}</span>
                      </div>
                      <p>{a.note}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="note-compose">
              <textarea placeholder="Add a note or log activity..." rows={3} />
              <button type="button" className="btn btn-primary btn-sm">Save note</button>
            </div>
          </div>
        </div>

        <div className="detail-side">
          <div className="card">
            <h2>Lead info</h2>
            <div className="info-rows">
              <div><span>Source</span><strong>{l.source}</strong></div>
              <div><span>RM</span><strong>{l.rm}</strong></div>
              <div><span>Branch</span><strong>{l.branch}</strong></div>
              <div><span>Occupation</span><strong>{l.occupation}</strong></div>
              <div><span>District</span><strong>{l.district}</strong></div>
              <div><span>Est. value</span><strong>{l.estValue}</strong></div>
            </div>
          </div>

          <div className="card">
            <h2>Tags</h2>
            <div className="tag-row">
              {l.tags.map((t) => <span key={t} className="tag-chip">{t}</span>)}
              <button type="button" className="tag-add">+ Add</button>
            </div>
          </div>

          <div className="card">
            <h2>Stage</h2>
            <select className="select-field full" defaultValue="qualified">
              <option value="new">New</option><option value="contacted">Contacted</option><option value="qualified">Qualified</option>
              <option value="kyc_started">KYC Started</option><option value="converted">Converted</option><option value="lost">Lost</option>
            </select>
            <button type="button" className="btn btn-secondary btn-sm btn-full">Update stage</button>
          </div>

          <div className="card">
            <h2>Assign RM</h2>
            <select className="select-field full">
              <option>Priya Shrestha</option><option>Anil Thapa</option><option>Suman Rai</option>
            </select>
            <button type="button" className="btn btn-secondary btn-sm btn-full">Reassign</button>
          </div>

          <div className="card danger-zone">
            <h2>Mark as lost</h2>
            <select className="select-field full">
              <option>Not interested</option><option>Chose competitor</option><option>No response</option><option>Invalid contact</option>
            </select>
            <button type="button" className="btn btn-secondary btn-sm btn-full">Mark lost</button>
          </div>
        </div>
      </div>
    </div>
  )
}
