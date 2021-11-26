import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Facebook from './Containers/Facebook/Facebook';
import Google from './Containers/Google/Google';
import Login from './Containers/Login/Login';
import SocialLogin from './Containers/SocialLogin/SocialLogin';

function App() {

  return <div>
   
    <Router>
      <Switch>
        <Route path="/"  exact component={Login} />
        <Route path="/social-login" component={SocialLogin} />
        <Route path="/facebook"  component={Facebook} />
        <Route path="/google" component={Google} />
      </Switch>
    </Router>
   
  </div>
}

export default App;