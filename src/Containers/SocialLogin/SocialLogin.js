import React from 'react';
import Google from '../../components/Google/Google';
import Facebook from '../../components/Facebook/Facebook';
import Header from '../../components/header';
import './SocialLoogin.css'


const SocialLogin = () => {

  return <div>
        <>
        <div className="main">
      <Header/>
      
        <div className="login-container">
          <div className="login-form">
            <input
              id="email"
              name="email"
              type="text"
              className="form-control"
              placeholder="Email"
            />
            <input
              id="password"
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
            />
          
       
          </div>

          <div className="info-link">
            <a href="#forget">Forgot password?</a>
          </div>

          <div className="login-btn">
            <button id="signIn" type="button" className="btn btn-primary-mn mt-3">
              Sign in &nbsp; &nbsp;
             <span id="btn-spinner" className="ml-3 spinner-border spinner-border-sm" />}
            </button>
          </div>

          <div className="divider">
            <hr size="30" width="250" />
          </div>

          <div className="login-btn">
      
              <Google className="-outline-secondary mt-3 btn-face-goo"/>

                 <Facebook className="btn-outline-secondary mt-3 btn-face-goo" />
   
            <div><a href="http://localhost:3000/social-login">Login With Social Accounts</a></div>
    
            
              
              <div className="col-sm-4">
              </div>
          </div>
          <div className="mt-3 info-link ">
            Don't have account yet?&nbsp;
            <a href="https://my.diligram.com/" target="_blank" rel="noreferrer">
              Register
            </a>
          </div>
          <br/><br/>
        </div> 
    </div>            
        </>
   
   
  </div>
}

export default SocialLogin;