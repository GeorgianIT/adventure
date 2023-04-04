import './App.css';
import Challenges from './components/Challenges';
import FirstSection from './components/FirstSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-neutral-200">
      <Navbar />
      <FirstSection />
      <Challenges />
    </div>
  );
}

export default App;
