import React from 'react';
import Google from '../../components/Google/Google';
import Header from '../../components/header/index';
import './Google.css'
const SocialLogin = () => {
  return <div>
        <>
            <div className="main">
                <Header/>
                <div className="login-container-goo" > <h1>Hi! Continue with google Sign in</h1> 
                   <div><Google className="btn-outline-secondary mt-3 btn-face-goo" /></div>       
                </div>
            </div>
        </>
  </div>
}

export default SocialLogin;