import { Link } from 'react-router-dom'
import { leadStages, leads, stats } from '../../data/mockData'
import LeadsNav from '../../components/LeadsNav'

export default function LeadsPipeline() {
  const byStage = (stage) => leads.filter((l) => l.stage === stage)

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1>Lead Pipeline</h1>
          <p className="muted">Kanban view · drag-and-drop ready · {stats.totalLeads} total leads</p>
        </div>
        <div className="header-actions">
          <Link to="/leads/list" className="btn btn-secondary btn-sm">List view</Link>
          <Link to="/leads/capture" className="btn btn-primary btn-sm">+ Add lead</Link>
        </div>
      </header>

      <LeadsNav />

      <div className="lead-stat-row">
        <Link to="/leads/list" className="mini-stat"><strong>{stats.leadsThisMonth}</strong><span>New this month</span></Link>
        <Link to="/leads/list" className="mini-stat hot"><strong>{stats.hotLeads}</strong><span>Hot leads</span></Link>
        <Link to="/leads/analytics" className="mini-stat"><strong>{stats.conversionRate}</strong><span>Conversion rate</span></Link>
        <Link to="/leads/tasks" className="mini-stat warn"><strong>{stats.overdueFollowups}</strong><span>Overdue follow-ups</span></Link>
      </div>

      <div className="kanban">
        {leadStages.map((stage) => (
          <div key={stage.id} className="kanban-col">
            <div className="kanban-head">
              <span className={`stage-dot ${stage.color}`} />
              <strong>{stage.label}</strong>
              <span className="col-count">{byStage(stage.id).length}</span>
            </div>
            <div className="kanban-cards">
              {byStage(stage.id).map((lead) => (
                <Link key={lead.id} to="/leads/detail" className="lead-card">
                  <div className="lead-card-top">
                    <strong>{lead.name}</strong>
                    <span className={`temp-badge ${lead.temp}`}>{lead.temp}</span>
                  </div>
                  <p className="lead-interest">{lead.interest}</p>
                  <div className="lead-card-meta">
                    <span>{lead.source}</span>
                    <span className="score">★ {lead.score}</span>
                  </div>
                  <div className="lead-card-foot">
                    <span>{lead.rm || 'Unassigned'}</span>
                    <span className={lead.nextFollowUp === 'Overdue' ? 'overdue' : ''}>{lead.nextFollowUp}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
