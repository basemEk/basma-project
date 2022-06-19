import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import BasmaApps from './components/BasmaApps';
import Features from './components/Features';
import PowerfulTools from './components/PowerfulTools';
import LearnMore from './components/LearnMore';
import OtherFeatures from './components/OtherFeatures';
import Packages from './components/Packages';
import Subscribe from './components/Subscribe';
import Contacts from './components/Contacts';
// import '../public/css/custom.css';
// import '../public/css/bootstrap.css';

function App() {
  return (
    <div className="App" >
      <Navbar />
      <Header />
      <Features />
      <PowerfulTools />
      <LearnMore />
      <OtherFeatures />
      <Packages />
      <BasmaApps />
      <Subscribe />
      <Contacts />
      
    </div>
  );
}

export default App;
