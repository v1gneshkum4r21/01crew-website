import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default App;