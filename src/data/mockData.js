export const platform = { name: 'NepSE CRM', company: 'Himalayan Securities' }

export const roles = {
  compliance: { id: '1', role: 'compliance', name: 'Sunita Gurung', email: 'compliance@demo.np', password: 'demo123', title: 'Compliance Officer' },
  backoffice: { id: '2', role: 'backoffice', name: 'Rajesh Karki', email: 'backoffice@demo.np', password: 'demo123', title: 'Back Office Admin' },
  branch: { id: '3', role: 'branch', name: 'Anil Thapa', email: 'branch@demo.np', password: 'demo123', title: 'Branch Manager · Pokhara', branch: 'Pokhara' },
  rm: { id: '4', role: 'rm', name: 'Priya Shrestha', email: 'rm@demo.np', password: 'demo123', title: 'Relationship Manager' },
  admin: { id: '5', role: 'admin', name: 'Admin User', email: 'admin@demo.np', password: 'demo123', title: 'System Admin' },
}

export const stats = {
  pendingKyc: 24,
  collateralQueue: 8,
  t2Due: 15,
  dormancyAlerts: 42,
  marginCalls: 6,
  activeClients: 3840,
}

export const kycApplications = [
  { id: 'KYC-1042', name: 'Bikash Adhikari', type: 'Individual', boid: '1301230000123456', branch: 'Kathmandu', status: 'pending', submitted: 'Jun 21, 2026', docs: 4 },
  { id: 'KYC-1041', name: 'Shree Trading Pvt. Ltd.', type: 'Institution', boid: '1301230000987654', branch: 'Pokhara', status: 'pending', submitted: 'Jun 20, 2026', docs: 6 },
  { id: 'KYC-1039', name: 'Sita Tamang', type: 'Individual', boid: '1301230000456789', branch: 'Butwal', status: 'approved', submitted: 'Jun 18, 2026', docs: 4 },
  { id: 'KYC-1038', name: 'Ramesh KC', type: 'Individual', boid: '—', branch: 'Kathmandu', status: 'rejected', submitted: 'Jun 17, 2026', docs: 3, remarks: 'BOID mismatch with CDSC record' },
]

export const kycDetail = {
  name: 'Bikash Adhikari', citizenship: '12-34-56-78901', dob: '1990-05-14',
  tempAddress: 'Baneshwor, Kathmandu', permAddress: 'Bharatpur-10, Chitwan',
  father: 'Krishna Adhikari', spouse: '—', occupation: 'Business',
  boid: '1301230000123456', bank: 'Nabil Bank', account: '0123456789012345', crn: 'CRN-8847291',
  docs: ['Citizenship (front/back)', 'Passport photo', 'Thumbprint', 'Signature specimen'],
}

export const collateralRequests = [
  { id: 'COL-882', client: 'Bikash Adhikari', boid: '1301230000123456', amount: 'Rs. 5,00,000', type: 'Bank deposit slip', status: 'pending', submitted: '2 hr ago' },
  { id: 'COL-881', client: 'Himalayan Traders', boid: '1301230000111222', amount: 'Rs. 25,00,000', type: 'ConnectIPS receipt', status: 'pending', submitted: '4 hr ago' },
  { id: 'COL-879', client: 'Sita Tamang', boid: '1301230000456789', amount: 'Rs. 2,00,000', type: 'Cheque deposit', status: 'approved', submitted: 'Yesterday' },
]

export const connectIpsLedger = [
  { id: 'IPS-4421', client: 'Bikash Adhikari', amount: 'Rs. 1,50,000', ref: 'CIPS-20260621-8821', date: 'Jun 21', status: 'reconciled' },
  { id: 'IPS-4420', client: 'Anil Thapa', amount: 'Rs. 75,000', ref: 'CIPS-20260620-4410', date: 'Jun 20', status: 'pending' },
]

export const t2Settlements = [
  { client: 'Bikash Adhikari', type: 'Fund due', amount: 'Rs. 42,500', due: 'Jun 23', status: 'due' },
  { client: 'Shree Trading', type: 'Share delivery', amount: '500 units NBL', due: 'Jun 23', status: 'due' },
  { client: 'Sita Tamang', type: 'Fund due', amount: 'Rs. 8,200', due: 'Jun 22', status: 'overdue' },
]

export const notificationTemplates = [
  { id: 'margin', name: 'Margin call alert', channel: 'SMS', desc: 'Collateral below safe threshold' },
  { id: 'eod', name: 'EOD transaction summary', channel: 'SMS / WhatsApp', desc: 'End-of-day ledger broadcast' },
  { id: 'ipo', name: 'Corporate action — IPO', channel: 'Bulk SMS', desc: 'Segment-based IPO announcement' },
]

export const recentNotifications = [
  { time: '10:32 AM', type: 'Margin call', client: 'Ramesh KC', channel: 'Sparrow SMS', status: 'sent' },
  { time: '09:15 AM', type: 'EOD summary', client: '142 clients', channel: 'WhatsApp API', status: 'sent' },
  { time: 'Yesterday', type: 'Right share — NICA', client: 'HNWI segment', channel: 'Bulk SMS', status: 'sent' },
]

export const clients = [
  { id: 'C-2847', name: 'Bikash Adhikari', segment: 'Trader', rm: 'Priya Shrestha', branch: 'Kathmandu', volume: 'Rs. 12.4L/mo', lastTrade: 'Today', dormant: false },
  { id: 'C-2102', name: 'Himalayan Traders', segment: 'HNWI / VIP', rm: 'Priya Shrestha', branch: 'Kathmandu', volume: 'Rs. 85L/mo', lastTrade: 'Today', dormant: false },
  { id: 'C-1893', name: 'Ganesh Poudel', segment: 'Retail', rm: '—', branch: 'Pokhara', volume: 'Rs. 45K/mo', lastTrade: '62 days ago', dormant: true, dormantDays: 62 },
  { id: 'C-1654', name: 'Sita Tamang', segment: 'Trader', rm: 'Anil Thapa', branch: 'Butwal', volume: 'Rs. 8.2L/mo', lastTrade: 'Yesterday', dormant: false },
]

export const branches = [
  { name: 'Kathmandu (Head Office)', clients: 2140, manager: 'Admin', aum: 'Rs. 142 Cr' },
  { name: 'Pokhara', clients: 890, manager: 'Anil Thapa', aum: 'Rs. 38 Cr' },
  { name: 'Butwal', clients: 520, manager: 'Suman Rai', aum: 'Rs. 22 Cr' },
]

export const subBrokers = [
  { name: 'Kiran Sub-Agent', branch: 'Pokhara', trades: 48, volume: 'Rs. 18.4L', commission: 'Rs. 9,200' },
  { name: 'Maya Agent', branch: 'Kathmandu', trades: 112, volume: 'Rs. 42.1L', commission: 'Rs. 21,050' },
]

export const auditLogs = [
  { time: 'Jun 21, 10:45', user: 'Rajesh Karki', action: 'Approved collateral COL-879', ip: '103.212.45.88' },
  { time: 'Jun 21, 10:12', user: 'Sunita Gurung', action: 'Rejected KYC-1038 — BOID mismatch', ip: '103.212.45.91' },
  { time: 'Jun 21, 09:30', user: 'Rajesh Karki', action: 'Adjusted trading limit for C-2847 in TMS notes', ip: '103.212.45.88' },
  { time: 'Jun 20, 16:22', user: 'Admin User', action: 'Downloaded branch report — Pokhara', ip: '103.212.45.100' },
  { time: 'Jun 20, 14:05', user: 'Priya Shrestha', action: 'Changed phone number for C-2102', ip: '103.212.45.95' },
]

export const statusLabels = {
  pending: 'Pending', approved: 'Approved', rejected: 'Rejected',
  due: 'Due', overdue: 'Overdue', reconciled: 'Reconciled', sent: 'Sent',
}
