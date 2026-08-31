import React, { useState } from 'react';

function StatusTracker() {
  // 1. Local state array to hold trackable job history items
  const [trackedJobs, setTrackedJobs] = useState([
    { id: 1, title: 'Frontend Developer', company: 'Google', status: 'Interviewing', date: '2026-08-28' },
    { id: 2, title: 'Data Analyst', company: 'Amazon', status: 'Applied', date: '2026-08-29' }
  ]);

  // Form states for adding a tracking log item
  const [newTitle, setNewTitle] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newStatus, setNewStatus] = useState('Applied');

  // 2. Custom action function to handle log submissions
  const handleAddTrack = (e) => {
    e.preventDefault();
    if (!newTitle || !newCompany) {
      alert('Please fill out the Job Title and Company!');
      return;
    }

    const newLogItem = {
      id: Date.now(),
      title: newTitle,
      company: newCompany,
      status: newStatus,
      date: new Date().toISOString().split('T')[0] // Captures current calendar date
    };

    setTrackedJobs([newLogItem, ...trackedJobs]);
    setNewTitle('');
    setNewCompany('');
    setNewStatus('Applied');
  };

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <h2 style={{ color: '#212F3D' }}>📊 Application Status Tracker</h2>
      <p style={{ color: '#666' }}>Keep tabs on where your resume is sitting across companies.</p>

      {/* Mini Form to log a tracked job */}
      <form onSubmit={handleAddTrack} style={{ border: '1px solid #ccc', padding: '16px', background: '#fdfdfd', marginBottom: '24px' }}>
        <h4 style={{ margin: '0 0 12px 0' }}>Log an Application Entry</h4>
        
        <label style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Job Title</label>
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="form-input-field" placeholder="e.g. Developer" />

        <label style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Company</label>
        <input type="text" value={newCompany} onChange={(e) => setNewCompany(e.target.value)} className="form-input-field" placeholder="e.g. Netflix" />

        <label style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Current Stage</label>
        <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)} className="form-input-field" style={{ background: '#fff', height: '38px' }}>
          <option value="Applied">Applied 📁</option>
          <option value="Interviewing">Interviewing 💬</option>
          <option value="Offered">Offered 🎉</option>
          <option value="Rejected">Closed ❌</option>
        </select>

        <button type="submit" className="action-btn" style={{ width: '100%', marginTop: '6px' }}>Add Log Entry</button>
      </form>

      {/* Styled Grid list of tracked entries */}
      <div className="grid-row">
        {trackedJobs.map((item) => (
          <div key={item.id} className="job-card-item" style={{ borderLeftColor: item.status === 'Offered' ? '#16a34a' : item.status === 'Interviewing' ? '#0284c7' : '#64748b' }}>
            <h4 style={{ margin: '0 0 4px 0' }}>{item.title}</h4>
            <h5 style={{ margin: '0 0 12px 0', color: '#666' }}>{item.company}</h5>
            <p style={{ margin: '4px 0', fontSize: '14px' }}>
              <strong>Status:</strong> <span style={{ padding: '2px 6px', background: '#eee', borderRadius: '4px', fontSize: '12px' }}>{item.status}</span>
            </p>
            <p style={{ margin: '4px 0', fontSize: '14px', color: '#999' }}>Logged on: {item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatusTracker;
