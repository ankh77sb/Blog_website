import React, { Component } from 'react';
import { BrowserRouter, Route} from  'react-router-dom';
import { Container } from 'reactstrap';

import Navbar from './Components/navbar';
import Home from './Components/Home';
import Dashboard from './Components/dashboard';
import Editprofile from './Components/editprofile';
import Bookmark from './Components/bookmark';
import Blogdisplay from './Components/Blogpage'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
    <div className="App">
        <Navbar/>
            <Route exact path ='/' component={Home}/>
            <Route path ='/dashboard' component={Dashboard}/> 
            <Route path='/editprofile' component={Editprofile}/>
            <Route path='/bookmark' component={Bookmark}/>
            <Route path='/blogdisplay' component={Blogdisplay} />
    </div>
    </BrowserRouter>
    );
   } 
  
}

export default App;
