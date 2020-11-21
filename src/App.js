import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Services from './components/Pages/Services';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 import Projects from './components/Pages/Projects';
import Winding from './components/Pages/Winding';
import Forming from './components/Pages/Forming';
import Tending from './components/Pages/Tending';



function App() {
  return (
    <>
    <Router>
    <Navbar />

    <Switch>
      <Route path='/tempest-app' exact component={Home} />
      <Route path='/tempest-app/about' component={About} />
<Route path='/tempest-app/services' component={Services} />
      <Route path='/tempest-app/projects' component={Projects} />
      <Route path='/tempest-app/winding' component={Winding} />
      <Route path='/tempest-app/forming' component={Forming} />
      <Route path='/tempest-app/tending' component={Tending} />
      <Route path='/tempest-app/contact' component={Contact}/>
    </Switch>
<Footer />

    </Router>
     
   

    </>
  );
}

export default App;
