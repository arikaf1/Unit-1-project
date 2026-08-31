import React, { useState } from 'react';

function NewJobForm({ onAddJob }) {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [pay, setPay] = useState('');
  const [hours, setHours] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !company || !pay || !hours) {
      alert('Please fill out all transparent metrics fields!');
      return;
    }

    onAddJob({
      id: Date.now(),
      title,
      company,
      pay,
      hours,
      interview: "Not Specified Yet",
      review: "No Reviews Posted"
    });

    setTitle('');
    setCompany('');
    setPay('');
    setHours('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: "1px solid #ccc", padding: "20px", marginBottom: "30px", background: "#fdfdfd" }}>
      <h3 style={{ marginTop: '0', color: '#212F3D' }}>📢 Add Custom Job</h3>
      
      <label>Company Name</label>
<input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="form-input-field" placeholder="e.g. TechCorp" />
      <label>Job Title</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-input-field" placeholder="e.g. Developer" />

      <label>Upfront Pay</label>
      <input type="text" value={pay} onChange={(e) => setPay(e.target.value)} className="form-input-field" placeholder="e.g. $45 / hour" />

      <label>Hours / Schedule</label>
      <input type="text" value={hours} onChange={(e) => setHours(e.target.value)} className="form-input-field" placeholder="e.g. 40 hours/week" />

      <button type="submit" className="action-btn" style={{ width: '100%', marginTop: "8px" }}>Add Job to Board</button>
    </form>
  );
}

export default NewJobForm;
