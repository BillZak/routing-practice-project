import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import ServicesDetail from './Pages/ServicesDetail'
import './nav.css'



function App() {
  return (
    <>
    <Router>
      <div className="nav">
          <Link to="/"><button>Home</button></Link>
          <Link to="/about"><button>About</button></Link>
          <Link to="/contact"><button>Contact</button></Link>
          <Link to="/services"><button>Services</button></Link>
      </div>
      
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" exact component={Services}/>
          <Route path="/services/:id" component={ServicesDetail}/>
    </Router>
    </>
  );
}

export default App;
