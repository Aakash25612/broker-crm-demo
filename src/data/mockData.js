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
  totalLeads: 186,
  hotLeads: 34,
  leadsThisMonth: 52,
  conversionRate: '28%',
  overdueFollowups: 11,
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
  new: 'New', contacted: 'Contacted', qualified: 'Qualified', kyc_started: 'KYC started',
  converted: 'Converted', lost: 'Lost', hot: 'Hot', warm: 'Warm', cold: 'Cold',
  open: 'Open', done: 'Done',
}

export const leadStages = [
  { id: 'new', label: 'New', color: 'blue' },
  { id: 'contacted', label: 'Contacted', color: 'purple' },
  { id: 'qualified', label: 'Qualified', color: 'orange' },
  { id: 'kyc_started', label: 'KYC Started', color: 'teal' },
  { id: 'converted', label: 'Converted', color: 'green' },
  { id: 'lost', label: 'Lost', color: 'gray' },
]

export const leadSources = ['Website', 'Referral', 'Walk-in', 'IPO Seminar', 'Social Media', 'Sub-broker', 'Cold call']

export const leads = [
  { id: 'LD-501', name: 'Niraj Bhattarai', phone: '+977 9841112233', email: 'niraj.b@email.com', source: 'IPO Seminar', stage: 'qualified', score: 82, temp: 'hot', rm: 'Priya Shrestha', branch: 'Kathmandu', interest: 'Trading account', estValue: 'Rs. 5L+', created: 'Jun 20', nextFollowUp: 'Today 3 PM' },
  { id: 'LD-500', name: 'Kamala Sharma', phone: '+977 9812233445', email: 'kamala.s@email.com', source: 'Referral', stage: 'contacted', score: 65, temp: 'warm', rm: 'Priya Shrestha', branch: 'Kathmandu', interest: 'Demat only', estValue: 'Rs. 1L', created: 'Jun 19', nextFollowUp: 'Tomorrow' },
  { id: 'LD-499', name: 'Deepak Oli', phone: '+977 9803344556', email: '—', source: 'Walk-in', stage: 'new', score: 45, temp: 'warm', rm: '—', branch: 'Pokhara', interest: 'IPO application', estValue: 'Rs. 50K', created: 'Jun 21', nextFollowUp: 'Overdue' },
  { id: 'LD-498', name: 'Ritu Gurung', phone: '+977 9856677889', email: 'ritu.g@email.com', source: 'Website', stage: 'kyc_started', score: 91, temp: 'hot', rm: 'Anil Thapa', branch: 'Pokhara', interest: 'Full brokerage', estValue: 'Rs. 10L+', created: 'Jun 15', nextFollowUp: 'Jun 22' },
  { id: 'LD-497', name: 'Sanjay Maharjan', phone: '+977 9867788990', email: 'san@email.com', source: 'Social Media', stage: 'new', score: 38, temp: 'cold', rm: '—', branch: 'Kathmandu', interest: 'Mutual inquiry', estValue: '—', created: 'Jun 21', nextFollowUp: 'Jun 23' },
  { id: 'LD-496', name: 'Pooja Thapa', phone: '+977 9848899001', email: 'pooja@email.com', source: 'Sub-broker', stage: 'contacted', score: 58, temp: 'warm', rm: 'Anil Thapa', branch: 'Butwal', interest: 'Trading', estValue: 'Rs. 2L', created: 'Jun 18', nextFollowUp: 'Jun 21' },
  { id: 'LD-495', name: 'Binod Adhikari', phone: '+977 9819900112', email: 'binod@email.com', source: 'Referral', stage: 'converted', score: 95, temp: 'hot', rm: 'Priya Shrestha', branch: 'Kathmandu', interest: 'HNWI onboarding', estValue: 'Rs. 25L+', created: 'Jun 10', nextFollowUp: '—' },
  { id: 'LD-494', name: 'Mina KC', phone: '+977 9821011223', email: '—', source: 'Cold call', stage: 'lost', score: 22, temp: 'cold', rm: 'Priya Shrestha', branch: 'Kathmandu', interest: '—', estValue: '—', created: 'Jun 8', nextFollowUp: '—' },
  { id: 'LD-493', name: 'Hari Prasad', phone: '+977 9832122334', email: 'hari@email.com', source: 'IPO Seminar', stage: 'qualified', score: 74, temp: 'hot', rm: '—', branch: 'Butwal', interest: 'Demat + trading', estValue: 'Rs. 3L', created: 'Jun 17', nextFollowUp: 'Today' },
  { id: 'LD-492', name: 'Sunita Rai', phone: '+977 9843233445', email: 'sunita@email.com', source: 'Website', stage: 'contacted', score: 52, temp: 'warm', rm: 'Anil Thapa', branch: 'Pokhara', interest: 'Portfolio review', estValue: 'Rs. 80K', created: 'Jun 16', nextFollowUp: 'Jun 24' },
]

export const leadDetail = {
  id: 'LD-501',
  name: 'Niraj Bhattarai',
  phone: '+977 9841112233',
  email: 'niraj.b@email.com',
  source: 'IPO Seminar — Kathmandu',
  stage: 'qualified',
  score: 82,
  temp: 'hot',
  rm: 'Priya Shrestha',
  branch: 'Kathmandu',
  interest: 'Trading account with margin facility',
  estValue: 'Rs. 5L+ collateral',
  occupation: 'Business owner',
  district: 'Kathmandu',
  notes: 'Attended NICA IPO seminar. Interested in active trading. Has existing demat at another broker.',
  tags: ['IPO prospect', 'High value', 'Margin interest'],
}

export const leadActivities = [
  { time: 'Jun 21, 11:00', type: 'call', user: 'Priya Shrestha', note: 'Called — discussed brokerage charges and margin requirements. Sent fee schedule via WhatsApp.' },
  { time: 'Jun 20, 4:30 PM', type: 'meeting', user: 'Priya Shrestha', note: 'Met at head office. Collected preliminary documents.' },
  { time: 'Jun 20, 10:00 AM', type: 'email', user: 'System', note: 'Welcome email sent after seminar registration.' },
  { time: 'Jun 19, 2:15 PM', type: 'stage', user: 'Priya Shrestha', note: 'Stage changed: Contacted → Qualified' },
  { time: 'Jun 19, 9:00 AM', type: 'create', user: 'System', note: 'Lead created from IPO seminar import.' },
]

export const leadTasks = [
  { id: 'T-88', lead: 'Niraj Bhattarai', leadId: 'LD-501', task: 'Send KYC form link', due: 'Today 3 PM', rm: 'Priya Shrestha', priority: 'high', status: 'open' },
  { id: 'T-87', lead: 'Deepak Oli', leadId: 'LD-499', task: 'First contact call', due: 'Overdue', rm: 'Unassigned', priority: 'high', status: 'open' },
  { id: 'T-86', lead: 'Hari Prasad', leadId: 'LD-493', task: 'Schedule branch visit', due: 'Today', rm: 'Unassigned', priority: 'medium', status: 'open' },
  { id: 'T-85', lead: 'Kamala Sharma', leadId: 'LD-500', task: 'Follow up on demat docs', due: 'Tomorrow', rm: 'Priya Shrestha', priority: 'medium', status: 'open' },
  { id: 'T-84', lead: 'Ritu Gurung', leadId: 'LD-498', task: 'BOID verification check', due: 'Jun 22', rm: 'Anil Thapa', priority: 'high', status: 'open' },
  { id: 'T-83', lead: 'Pooja Thapa', leadId: 'LD-496', task: 'Send trading platform demo', due: 'Jun 24', rm: 'Anil Thapa', priority: 'low', status: 'open' },
  { id: 'T-82', lead: 'Binod Adhikari', leadId: 'LD-495', task: 'Post-conversion welcome call', due: 'Jun 18', rm: 'Priya Shrestha', priority: 'low', status: 'done' },
]

export const leadAnalytics = {
  funnel: [
    { stage: 'New', count: 48, pct: 100 },
    { stage: 'Contacted', count: 36, pct: 75 },
    { stage: 'Qualified', count: 22, pct: 46 },
    { stage: 'KYC Started', count: 14, pct: 29 },
    { stage: 'Converted', count: 11, pct: 23 },
  ],
  bySource: [
    { source: 'IPO Seminar', count: 42, conv: '32%' },
    { source: 'Referral', count: 38, conv: '35%' },
    { source: 'Website', count: 28, conv: '18%' },
    { source: 'Walk-in', count: 24, conv: '25%' },
    { source: 'Sub-broker', count: 22, conv: '22%' },
    { source: 'Social Media', count: 18, conv: '11%' },
    { source: 'Cold call', count: 14, conv: '7%' },
  ],
  rmPerformance: [
    { rm: 'Priya Shrestha', leads: 64, converted: 18, rate: '28%', pipeline: 'Rs. 42L' },
    { rm: 'Anil Thapa', leads: 48, converted: 12, rate: '25%', pipeline: 'Rs. 28L' },
    { rm: 'Unassigned', leads: 74, converted: 8, rate: '11%', pipeline: 'Rs. 18L' },
  ],
  monthly: [
    { month: 'Jan', leads: 28, converted: 6 },
    { month: 'Feb', leads: 32, converted: 8 },
    { month: 'Mar', leads: 38, converted: 10 },
    { month: 'Apr', leads: 45, converted: 11 },
    { month: 'May', leads: 41, converted: 12 },
    { month: 'Jun', leads: 52, converted: 11 },
  ],
}

export const leadCampaigns = [
  { id: 'CMP-12', name: 'NICA IPO Seminar — Kathmandu', date: 'Jun 15, 2026', leads: 28, converted: 6, status: 'active' },
  { id: 'CMP-11', name: 'Pokhara Investor Meetup', date: 'Jun 8, 2026', leads: 15, converted: 3, status: 'completed' },
  { id: 'CMP-10', name: 'Facebook Lead Ads — Trading', date: 'Ongoing', leads: 42, converted: 4, status: 'active' },
]
