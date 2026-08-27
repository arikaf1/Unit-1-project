import React, { useState } from 'react';

// We pass "job" as a prop into the function
function JobCard({ job }) {
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    setApplied(true);
    alert(`Successfully applied for ${job.title} at ${job.company}!`);
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', margin: '16px 0', backgroundColor: '#f9f9f9', fontFamily: 'sans-serif' }}>
      <h2 style={{ margin: '0 0 8px 0', color: '#333' }}>{job.title}</h2>
      <h3 style={{ margin: '0 0 16px 0', color: '#666', fontSize: '1.1rem' }}>{job.company}</h3>
      
      {/* Upfront transparency metrics based on your brainstorming notes */}
      <div style={{ marginBottom: '16px', fontSize: '0.95rem', lineHeight: '1.5' }}>
        <div>💵 <strong>Pay:</strong> {job.pay}</div>
        <div>⏱️ <strong>Hours:</strong> {job.hours}</div>
        <div>💬 <strong>Interview Process:</strong> {job.interview}</div>
        <div>⭐ <strong>Employee Review:</strong> {job.review}</div>
      </div>

      <button 
        onClick={handleApply} 
        disabled={applied}
        style={{ padding: '10px 20px', backgroundColor: applied ? '#6c757d' : '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: applied ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}
      >
        {applied ? 'Applied ✔' : 'One-Click Apply'}
      </button>
    </div>
  );
}

export default JobCard;

