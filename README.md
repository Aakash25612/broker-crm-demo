# NepSE CRM — Nepali Stock Broker CRM (Frontend Demo)

Apple-minimal frontend prototype for a **custom CRM for Nepali stock brokers** — covering all five core operational modules from the project scope checklist.

## Demo Roles

| Role | Login | Focus |
|------|-------|-------|
| Compliance Officer | `compliance@demo.np` | KYC review & BOID verification |
| Back Office | `backoffice@demo.np` | Collateral approval workflow |
| Branch Manager | `branch@demo.np` | Pokhara-scoped branch view |
| Relationship Manager | `rm@demo.np` | Client segmentation |
| System Admin | `admin@demo.np` | Full access & audit logs |

Password for all: `demo123`

## Lead Management Module

| Screen | Route | Features |
|--------|-------|----------|
| **Pipeline** | `/leads` | Kanban board (New → Converted), hot/warm/cold scoring |
| **All leads** | `/leads/list` | Search, filters, bulk assign, export CSV |
| **Lead detail** | `/leads/detail` | Timeline, notes, tags, stage change, convert to KYC |
| **Follow-ups** | `/leads/tasks` | Task queue, overdue alerts, auto-reminder rules |
| **Analytics** | `/leads/analytics` | Conversion funnel, source ROI, RM performance, campaigns |
| **Add lead** | `/leads/capture` | Manual entry form, bulk CSV import |

## Five Core Modules

1. **Lead Management** — Pipeline, scoring, RM assignment, follow-ups, analytics
2. **KYC & Onboarding** — Digital intake, BOID, DMS, CRN, compliance tracker
2. **Collateral & Finance** — Approval queue, ConnectIPS ledger, T+2 settlement
3. **Notification Gateway** — Sparrow SMS, WhatsApp, margin calls, corporate actions
4. **Client Segmentation** — Retail/Trader/HNWI tags, RM mapping, dormancy alerts
5. **Branch & Controls** — Multi-branch RBAC, sub-broker commissions, audit log

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## License

Private — demo for Nepali stock broker CRM proposal.
