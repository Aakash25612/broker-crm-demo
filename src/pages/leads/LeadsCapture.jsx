import { Link } from 'react-router-dom'
import { leadSources } from '../../data/mockData'
import LeadsNav from '../../components/LeadsNav'

export default function LeadsCapture() {
  return (
    <div className="page">
      <header className="page-header">
        <div>
          <Link to="/leads" className="back-link">← Pipeline</Link>
          <h1>Add New Lead</h1>
          <p className="muted">Manual entry · walk-in · phone inquiry</p>
        </div>
      </header>

      <LeadsNav />

      <div className="form-layout">
        <div className="card form-card">
          <h2>Contact details</h2>
          <div className="form-grid">
            <label>Full name<input type="text" placeholder="As per citizenship" /></label>
            <label>Phone<input type="tel" placeholder="+977 98XXXXXXXX" /></label>
            <label>Email<input type="email" placeholder="optional" /></label>
            <label>District<input type="text" placeholder="e.g. Kathmandu" /></label>
            <label>Occupation<input type="text" placeholder="Business, service, etc." /></label>
            <label>Lead source
              <select>{leadSources.map((s) => <option key={s}>{s}</option>)}</select>
            </label>
          </div>
        </div>

        <div className="card form-card">
          <h2>Interest & assignment</h2>
          <div className="form-grid">
            <label>Interest type
              <select>
                <option>Trading account</option>
                <option>Demat only</option>
                <option>IPO application</option>
                <option>Margin facility</option>
                <option>Portfolio transfer</option>
              </select>
            </label>
            <label>Est. collateral / value<input type="text" placeholder="Rs. 1L, 5L+, etc." /></label>
            <label>Branch
              <select><option>Kathmandu</option><option>Pokhara</option><option>Butwal</option></select>
            </label>
            <label>Assign RM
              <select><option>— Auto assign —</option><option>Priya Shrestha</option><option>Anil Thapa</option></select>
            </label>
            <label className="full">Notes<textarea rows={3} placeholder="How did they hear about us? Any specific requirements?" /></label>
          </div>
        </div>

        <div className="card form-card">
          <h2>Tags & follow-up</h2>
          <div className="form-grid">
            <label>Tags<input type="text" placeholder="IPO prospect, High value (comma separated)" /></label>
            <label>First follow-up
              <input type="datetime-local" />
            </label>
            <label>Initial stage
              <select><option>New</option><option>Contacted</option></select>
            </label>
          </div>
          <div className="form-actions">
            <Link to="/leads" className="btn btn-secondary">Cancel</Link>
            <button type="button" className="btn btn-primary">Create lead</button>
          </div>
        </div>

        <div className="card form-card">
          <h2>Bulk import</h2>
          <p className="muted card-intro">Import leads from seminar attendee lists or CSV</p>
          <div className="upload-zone">
            <p>Drop CSV file or click to upload</p>
            <button type="button" className="btn btn-secondary btn-sm">Choose file</button>
          </div>
          <button type="button" className="btn btn-ghost btn-sm">Download CSV template</button>
        </div>
      </div>
    </div>
  )
}
