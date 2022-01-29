import logo from './logo.svg';
import './App.css';
import './pages/Home.css';
import './components/Navbar.css';
import './pages/About.css'
import './pages/Contact.css'
import Nav from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import './components/Footer.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import About from './pages/About';
import Three from './pages/Three';
import Contact from './pages/Contact';






function App() {



  return (
    <div className="App">

      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/work" element={<Three/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
   
      </BrowserRouter>
      
      
      <Footer/>
     



     
    </div>
  );
}

export default App;
