import React from 'react';
import Facebook from '../../components/Facebook/Facebook';
import Header from '../../components/header/index';
import './Facebook.css'
const SocialLogin = () => {
  return <div>
        <>
            <div className="main">
                <Header/>
                <div className="login-container-goo" > <h1>Hi! Continue with Facebook Sign in</h1> 
                   <div><Facebook className="btn-outline-secondary mt-3 btn-face-goo" /></div>       
                </div>
            </div>
        </>
  </div>
}

export default SocialLogin;