import './App.css';
import Navigation from './Component/Navigation'
import Home from './Component/Home'
import bg from './images/image-hero-mobile.jpg'
import dt from './images/image-hero-desktop.jpg'


function App() {
  return (
    <div className="App">
      {/* NAVIGTION */}
      <Navigation/>
      <div className="bg" >
        <img src={bg} alt="bg-Image" className="mobile" />
        <img src={dt} alt="bg-Image" className="desktop" />
      </div>

      {/* HOME */}
      <Home />
    </div>
  );
}

export default App;
