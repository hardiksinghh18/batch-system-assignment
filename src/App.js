
import './App.css';
import Advantages from './components/Advantages';
import Advantages2 from './components/Advantages2';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Footer from './components/Footer';
import Herosection from './components/Herosection';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
       <Navbar/>
       <Herosection/>

       <Features/>

       <Advantages/>
       <Advantages2/>

       <Testimonials/>
       <FAQ/>
       <Footer/>
    </>
  );
}

export default App;
