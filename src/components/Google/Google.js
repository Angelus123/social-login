import {React, useState} from 'react';
import { GoogleLogin } from 'react-google-login';
const Google = () => {
  const [isLoggedIn] = useState(false)  
    const responseGoogle = (response) => {
      console.log(response);
    }
        let gContent;
        if(isLoggedIn) {

        } else {
          gContent = ( <GoogleLogin
          clientId="419296817763-squ56rn102gs3q7kudbnult10t6g1atv.apps.googleusercontent.com"
          buttonText="Sign in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          />)

        }
        return <div>{gContent}</div>;
    }
export default Google;