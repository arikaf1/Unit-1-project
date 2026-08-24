function app() {
  return (
    <div>
      <h1>Job Hunt Guru</h1>
      </div>
  )
}

import JobCard from './components/JobCard';

function App() {
  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Job Hunt Application Guru</h1>
      <JobCard />
    </div>
  );
}

export default App;
