import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import JobCard from './components/JobCard';
import './App.css';
import About from './components/About';
import NewJobForm from './components/NewJobForm';
import StatusTracker from './components/StatusTracker';


function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  
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

  const displayedJobs = showHighPayOnly
    ? jobs.filter(job => job.pay.includes('$120,000') || job.pay.includes('$100,000'))
    : jobs;

  if (loading) {
    return <h3 style={{ textAlign: 'center', fontFamily: 'sans-serif', color: '#666' }}>Loading transparent jobs...</h3>;
  }

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <img 
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMjAwIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojMjEyRjNEOyBib3JkZXItcmFkaXVzOjhweDsiPjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEyMCIgcj0iMzAiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNMTUwLDE5MCBDMTUwLDE1MCAyNTAsMTUwIDI1MCwxOTAiIGZpbGw9IiNmZmZmZmYiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSIxMDAiIHI9IjM1IiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTI0MCwxOTAgQzI0MCwxNDAgMzYwLDE0MCAzNjAsMTkwIiBmaWxsPSIjZmZmZmZmIi8+PGNpcmNsZSBjeD0iNDAwIiBjeT0iMTIwIiByPSIzMCIgZmlsbD0iI2ZmZmZmZiIvPjxwYXRoIGQ9Ik0zNTAsMTkwIEMzNTAsMTUwIDQ1MCwxNTAgNDUwLDE5MCIgZmlsbD0iI2ZmZmZmZiIvPjx0ZXh0IHg9IjUwJSIgeT0iNDUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjIwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VEVBTSBXT1JLUExBQ0U8L3RleHQ+PC9zdmc+" 
          alt="Graphic vector illustration of happy employees working together in a dark blue office environment" 
          style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.15)', marginBottom: '16px' }} 
        />
      </div>

      <h1 className="main-title">Application Guru</h1>
      <p className="main-subtitle">
        No longer have to wonder. Upfront details on pay, hours, and expectations.
      </p>

      <div className="filter-btn-container">
        <button 
          onClick={() => setShowHighPayOnly(!showHighPayOnly)}
          className="filter-btn"
          style={{ backgroundColor: showHighPayOnly ? '#dc3545' : '#17a2b8' }}
        >
          {showHighPayOnly ? 'Showing: High-Paying Roles 💰' : 'Filter: High-Paying Roles Only'}
        </button>
      </div>

      <NewJobForm onAddJob={handleAddNewJob} />
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
      <header>
        <nav className="navbar">
          <Link to="/" className="navitem">Home</Link>
          <Link to="/about" className="navitem">About Mission</Link>
          <Link to="/tracker" className="navitem">Status Tracker</Link>
        </nav>
      </header>

      <main className="layout-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tracker" element={<StatusTracker />} />
        </Routes>
      </main>

      <footer style={{ backgroundColor: '#212F3D', color: '#ffffff', textAlign: 'center', padding: '16px', marginTop: '40px', fontSize: '14px', fontFamily: 'sans-serif' }}>
        <p>© 2026 Application Guru. Built for LaunchCode Project Submissions.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;