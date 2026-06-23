import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { roles } from '../data/mockData'

const presets = [
  { key: 'compliance', label: 'Compliance Officer', desc: 'KYC review & approval' },
  { key: 'backoffice', label: 'Back Office', desc: 'Collateral & finance workflows' },
  { key: 'branch', label: 'Branch Manager', desc: 'Pokhara branch — scoped access' },
  { key: 'rm', label: 'Relationship Manager', desc: 'Client segmentation & RM mapping' },
  { key: 'admin', label: 'System Admin', desc: 'Full access & audit logs' },
]

export default function Login() {
  const { login } = useApp()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const quick = (key) => {
    const u = roles[key]
    const r = login(u.email, u.password)
    if (r.ok) navigate('/dashboard')
  }

  const submit = (e) => {
    e.preventDefault()
    const r = login(email, password)
    if (!r.ok) { setError(r.error); return }
    navigate('/dashboard')
  }

  return (
    <div className="login-page">
      <Link to="/" className="login-logo logo">NepSE CRM</Link>
      <div className="login-card">
        <h1>Sign in</h1>
        <p className="login-sub">Select a demo role or enter credentials</p>
        <div className="role-presets">
          {presets.map(({ key, label, desc }) => (
            <button key={key} type="button" className="preset-btn" onClick={() => quick(key)}>
              <strong>{label}</strong><span>{desc}</span>
            </button>
          ))}
        </div>
        <form className="login-form" onSubmit={submit}>
          {error && <div className="form-error">{error}</div>}
          <label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="compliance@demo.np" /></label>
          <label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="demo123" /></label>
          <button type="submit" className="btn btn-primary btn-full">Sign in</button>
        </form>
        <p className="login-hint">Password <code>demo123</code> for all roles · <Link to="/">Back</Link></p>
      </div>
    </div>
  )
}
