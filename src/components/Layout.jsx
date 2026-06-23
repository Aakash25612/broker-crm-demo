import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  Bell, Building2, FileCheck, GitBranch, LayoutDashboard, LogOut, Shield, Target, Users, Wallet,
} from 'lucide-react'
import { useApp } from '../context/AppContext'

const nav = [
  { to: '/dashboard', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: '/leads', label: 'Lead Management', icon: Target },
  { to: '/kyc', label: 'KYC & Onboarding', icon: FileCheck },
  { to: '/collateral', label: 'Collateral', icon: Wallet },
  { to: '/finance', label: 'Finance & T+2', icon: Building2 },
  { to: '/notifications', label: 'Notifications', icon: Bell },
  { to: '/clients', label: 'Clients', icon: Users },
  { to: '/branch', label: 'Branch & Agents', icon: GitBranch },
  { to: '/audit', label: 'Audit Log', icon: Shield },
]

export default function Layout() {
  const { currentUser, logout } = useApp()
  const navigate = useNavigate()

  return (
    <div className="crm-layout">
      <aside className="sidebar">
        <Link to="/dashboard" className="sidebar-brand">NepSE CRM</Link>
        <nav className="sidebar-nav">
          {nav.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-footer">
          <div className="user-chip">
            <strong>{currentUser.name}</strong>
            <span>{currentUser.title}</span>
          </div>
          <button type="button" className="icon-btn" onClick={() => { logout(); navigate('/') }} aria-label="Sign out">
            <LogOut size={16} />
          </button>
        </div>
      </aside>
      <main className="crm-main"><Outlet /></main>
    </div>
  )
}
