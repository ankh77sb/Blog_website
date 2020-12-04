import React, { Component } from 'react';
import { BrowserRouter, Route} from  'react-router-dom';
import { Container } from 'reactstrap';

import Navbar from './Components/navbar';
import Home from './Components/Home';
import Dashboard from './Components/dashboard';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
    <div className="App">
        <Navbar />
            <Route exact path ='/' component={Home} />
            <Route path ='/dashboard' component={Dashboard} /> 
    </div>
    </BrowserRouter>
    );
   } 
  
}

export default App;
