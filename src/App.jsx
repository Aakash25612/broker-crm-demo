import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppProvider, useApp } from './context/AppContext'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import KYC from './pages/KYC'
import Collateral from './pages/Collateral'
import Finance from './pages/Finance'
import Notifications from './pages/Notifications'
import Clients from './pages/Clients'
import Branch from './pages/Branch'
import Audit from './pages/Audit'

function Guard({ children }) {
  const { currentUser } = useApp()
  if (!currentUser) return <Navigate to="/login" replace />
  return children
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Guard><Layout /></Guard>}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="kyc" element={<KYC />} />
            <Route path="collateral" element={<Collateral />} />
            <Route path="finance" element={<Finance />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="clients" element={<Clients />} />
            <Route path="branch" element={<Branch />} />
            <Route path="audit" element={<Audit />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}
