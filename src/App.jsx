import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import JobCard from './components/JobCard';
import About from './components/About';
import NewJobForm from './components/NewJobForm';

function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // 1. Add state to track our conditional toggle setting
  const [showHighPayOnly, setShowHighPayOnly] = useState(false);

  useEffect(() => {
    const mockApiData = [
      {
        id: 1,
        title: "Software Engineer",
        company: "TechCorp",
        pay: "$120,000 / year", // High pay
        hours: "40 hours/week (Hybrid)",
        interview: "3 Rounds (1 Phone, 1 Technical, 1 Manager)",
        review: "4.2/5 - 'Great work-life balance, slow promotion tracks.'"
      },
      {
        id: 2,
        title: "UX/UI Designer",
        company: "CreativeFlow Studio",
        pay: "$85,000 / year", // Standard pay
        hours: "35 hours/week (Fully Remote)",
        interview: "2 Rounds (Portfolio review & Design challenge)",
        review: "4.5/5 - 'Incredible design culture, fast-paced environment.'"
      },
      {
        id: 3,
        title: "Data Analyst",
        company: "FinMetrics Inc",
        pay: "$100,000 / year", // High pay
        hours: "Flexible hours (Core hours 10am - 3pm)",
        interview: "2 Rounds (SQL assessment & Panel talk)",
        review: "4.1/5 - 'Very collaborative data team, high expectations.'"
      }
    ];

    const timer = setTimeout(() => {
      setJobs(mockApiData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleAddNewJob = (newJobObject) => {
    setJobs((prevJobs) => [newJobObject, ...prevJobs]);
  };

  // 2. Perform conditional filtering based on our toggle state selection
  // If the toggle is active, it only passes jobs that earn $100k or more
  const displayedJobs = showHighPayOnly
    ? jobs.filter(job => job.pay.includes('$120,000') || job.pay.includes('$100,000'))
    : jobs;

  if (loading) {
    return <h3 style={{ textAlign: 'center', fontFamily: 'sans-serif', color: '#666' }}>Loading transparent jobs...</h3>;
  }

  return (
    <>
      <h1 style={{ textAlign: 'center', color: '#111', marginBottom: '4px' }}>Transparent Job Board</h1>
      <p style={{ textAlign: 'center', color: '#666', marginTop: '0', marginBottom: '32px' }}>
        Skip the guesswork. Upfront details on pay, hours, and expectations.
      </p>

      {/* 3. Conditional Button Control */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <button 
          onClick={() => setShowHighPayOnly(!showHighPayOnly)}
          style={{
            padding: '10px 18px',
            backgroundColor: showHighPayOnly ? '#dc3545' : '#17a2b8',
            color: '#fff',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          {showHighPayOnly ? 'Showing: High-Paying Roles 💰' : 'Filter: High-Paying Roles Only'}
        </button>
      </div>

      <NewJobForm onAddJob={handleAddNewJob} />

      {/* 4. Conditional UI Rendering */}
      {/* If our filtered array ends up empty, show a fallback notification text block */}
      {displayedJobs.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#999', fontStyle: 'italic', marginTop: '32px' }}>
          No jobs match this filter criteria right now.
        </p>
      ) : (
        <div>
          {displayedJobs.map((individualJob) => (
            <JobCard key={individualJob.id} job={individualJob} />
          ))}
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ backgroundColor: '#333', padding: '12px 24px', display: 'flex', gap: '20px', fontFamily: 'sans-serif' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>About Mission</Link>
      </nav>

      <div style={{ padding: '24px', maxWidth: '700px', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
