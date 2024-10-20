import Navbar from './components/Navbar';
import Header from './components/Header';
import JobListing from './components/JobListing';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <JobListing/>
      
    </div>
  );
}

export default App;
