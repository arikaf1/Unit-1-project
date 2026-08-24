import React, { useState } from 'react';

function JobCard() {
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    setApplied(true);
    alert('Application submitted successfully!');
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', margin: '12px 0' }}>
      <h2>Software Engineer</h2>
      <p>Company: TechCorp</p>
      
      {/* Upfront Info placeholders for later phases */}
      <p><strong>Status:</strong> Open</p>

      <button 
        onClick={handleApply} 
        disabled={applied}
        style={{ padding: '8px 16px', backgroundColor: applied ? '#ccc' : '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        {applied ? 'Applied ✔' : 'One-Click Apply'}
      </button>
    </div>
  );
}

export default JobCard;
