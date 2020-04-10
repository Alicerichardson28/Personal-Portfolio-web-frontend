import React from 'react';
import CustomNavBar from './components/CustomNavBar'
import './App.css';
import Home from "./components/Home"
import ContactMe from "./components/ContactMe"
import Profile from "./components/Profile"
import MyAccount from "./components/MyAccount"
import LogIn from "./components/LogIn"
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavBar/>
      <Route exact path='/' component={Home} />  
      <Route exact path='/profile' component={Profile} />  
      <Route exact path='/myaccount' component={MyAccount} />  
      <Route exact path='/login' component={LogIn} />  
      <Route exact path='/contactMe' component={ContactMe} />  
      </div>
      </Router>
  );
}

export default App;