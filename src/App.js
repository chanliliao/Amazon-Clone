import './App.css';
import Navbar from './components/layout/Navbar';
import Subnav from './components/layout/Subnav';
import Home from './components/pages/home/Home';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Subnav />
      <Home />
    </div>
  );
}

export default App;
