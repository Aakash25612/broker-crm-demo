import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/leads', label: 'Pipeline', end: true },
  { to: '/leads/list', label: 'All leads' },
  { to: '/leads/tasks', label: 'Follow-ups' },
  { to: '/leads/analytics', label: 'Analytics' },
  { to: '/leads/capture', label: '+ Add lead' },
]

export default function LeadsNav() {
  return (
    <nav className="subnav">
      {tabs.map(({ to, label, end }) => (
        <NavLink key={to} to={to} end={end} className={({ isActive }) => (isActive ? 'subnav-link active' : 'subnav-link')}>
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
