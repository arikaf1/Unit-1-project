function app() {
  return (
    <div>
      <h1>Job Hunt Guru</h1>
      </div>
  )
}

import JobCard from './components/JobCard';

function App() {
  // An array filled with 6 realistic jobs containing data your platform highlights
  const jobList = [
    {
      id: 1,
      title: "Software Engineer",
      company: "TechCorp",
      pay: "$110,000 - $130,000 / year",
      hours: "40 hours/week (Hybrid)",
      interview: "3 Rounds (1 Phone, 1 Technical, 1 Manager)",
      review: "4.2/5 - 'Great work-life balance, slow promotion tracks.'"
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "CreativeFlow Studio",
      pay: "$85,000 / year",
      hours: "35 hours/week (Fully Remote)",
      interview: "2 Rounds (Portfolio review & Design challenge)",
      review: "4.5/5 - 'Incredible design culture, fast-paced environment.'"
    },
    {
      id: 3,
      title: "Customer Support Lead",
      company: "ShipFast Logistics",
      pay: "$28 / hour",
      hours: "40 hours/week (Night Shift, 4pm - 12am)",
      interview: "1 Round (30-minute phone screen)",
      review: "3.8/5 - 'Good pay for the industry, but strict performance tracking.'"
    },
    {
      id: 4,
      title: "Junior Frontend Developer",
      company: "LaunchPad Apps",
      pay: "$70,000 / year",
      hours: "40 hours/week (In-office)",
      interview: "3 Rounds (Take-home project, Live coding, Culture fit)",
      review: "4.0/5 - 'Perfect place to learn for juniors, lower starting salary.'"
    },
    {
      id: 5,
      title: "Data Analyst",
      company: "FinMetrics Inc",
      pay: "$95,000 - $105,000 / year",
      hours: "Flexible hours (Core hours 10am - 3pm)",
      interview: "2 Rounds (SQL assessment & Panel talk)",
      review: "4.1/5 - 'Very collaborative data team, high expectations.'"
    },
    {
      id: 6,
      title: "Social Media Manager",
      company: "GlowUp Cosmetics",
      pay: "$32 / hour",
      hours: "Part-time (20 hours/week)",
      interview: "2 Rounds (Intro call & 1-page strategy brief)",
      review: "4.6/5 - 'Amazing discounts, creative freedom, small team.'"
    }
  ];

  return (
    <div style={{ padding: '24px', maxWidth: '700px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#111', marginBottom: '4px' }}>Transparent Job Board</h1>
      <p style={{ textAlign: 'center', color: '#666', marginTop: '0', marginBottom: '32px' }}>
        Skip the guesswork. Upfront details on pay, hours, and expectations.
      </p>

      {/* Looping through the array to turn each job object into a visual JobCard */}
      <div>
        {jobList.map((individualJob) => (
          <JobCard key={individualJob.id} job={individualJob} />
        ))}
      </div>
    </div>
  );
}

export default App;
