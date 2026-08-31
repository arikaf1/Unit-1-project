import React from 'react';

function About() {
  return (
    <div style={{ padding: '24px', maxWidth: '700px', margin: '0 auto', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      <h1>About Our Mission</h1>
      <p>
        Finding a job shouldn't feel like a guessing game. Most job boards hide critical details 
        like exact salary ranges, schedule expectations, and interview steps until the very end of the process.
      </p>
      <p>
        This <strong>Application Guru</strong> was designed to give applicants total visibility upfront. 
        By providing clear data on pay, weekly hours, interview structures, and honest peer reviews, we aim 
        to cut down on wasted application hours and connect people to roles that genuinely fit their lives.
      </p>
      
      <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '24px 0' }} />
      
      <h3>Contact Us</h3>
      <p>Have questions or feedback about our platform? Reach out at <strong>support@applicationguru.com</strong>.</p>
    </div>
  );
}

export default About;
