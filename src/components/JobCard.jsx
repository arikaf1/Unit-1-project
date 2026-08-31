import React, { useState } from 'react';

function JobCard({ job }) {
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    setApplied(true);
    alert(`Successfully applied for ${job.title} at ${job.company}!`);
  };

  return (
    <div className="w3-card">
      <h3 style={{ margin: "0 0 4px 0", color: "#212F3D" }}>{job.title}</h3>
      <h4 style={{ margin: "0 0 12px 0", color: "#666" }}>{job.company}</h4>
      
      <p style={{ margin: "4px 0" }}><strong>💵 Pay:</strong> {job.pay}</p>
      <p style={{ margin: "4px 0" }}><strong>⏱️ Hours:</strong> {job.hours}</p>
      <p style={{ margin: "4px 0" }}><strong>💬 Interviews:</strong> {job.interview}</p>
      <p style={{ margin: "4px 0" }}><strong>⭐ Reviews:</strong> {job.review}</p>
      
      <button 
        onClick={handleApply} 
        disabled={applied}
        className="w3-btn"
        style={{ marginTop: "12px", backgroundColor: applied ? "#bbb" : "#04AA6D" }}
      >
        {applied ? 'Applied ✓' : 'One-Click Apply'}
      </button>
    </div>
  );
}

export default JobCard;
