import logo from './logo.svg';

import Navigationbar from './Navigationbar';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div>     
      <Navigationbar/>
      <main className="main">        
       <Hero/>
       <About/>
       <Portfolio/>
       <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
