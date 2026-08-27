import React, { useState } from 'react';

function NewJobForm({ onAddJob }) {
  // Set up state variables for each text input field
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [pay, setPay] = useState('');
  const [hours, setHours] = useState('');

  // Custom function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the browser page from reloading
    
    // Quick validation to ensure fields aren't completely blank
    if (!title || !company || !pay || !hours) {
      alert('Please fill out all transparent metrics fields!');
      return;
    }

    // Create a new structured job object matching your data model
    const newJob = {
      id: Date.now(), // Generates a unique ID using the timestamp
      title,
      company,
      pay,
      hours,
      interview: "Not Specified Yet",
      review: "No Reviews Posted"
    };

    // Pass the new object back up to the major parent component
    onAddJob(newJob);

    // Clear out the input boxes so they are blank again
    setTitle('');
    setCompany('');
    setPay('');
    setHours('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '2px dashed #007bff', padding: '20px', borderRadius: '8px', marginBottom: '32px', fontFamily: 'sans-serif' }}>
      <h3 style={{ marginTop: '0', color: '#007bff' }}>📢 Post a New Transparent Job</h3>
      
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>Job Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} placeholder="e.g. Backend Developer" />
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>Company Name:</label>
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} placeholder="e.g. Innovate LLC" />
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>Upfront Pay Range:</label>
        <input type="text" value={pay} onChange={(e) => setPay(e.target.value)} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} placeholder="e.g. $45 / hour or $90,000 / year" />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>Weekly Hours / Schedule:</label>
        <input type="text" value={hours} onChange={(e) => setHours(e.target.value)} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} placeholder="e.g. 40 hours/week (Fully Remote)" />
      </div>

      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', width: '100%' }}>
        Add Job to Board
      </button>
    </form>
  );
}

export default NewJobForm;
