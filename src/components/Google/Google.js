import {React, useState} from 'react';
import { GoogleLogin } from 'react-google-login';
const Google = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)  


    const responseGoogle = (response) => {
      console.log('Response:',response);
      console.log('Token:',response.accessToken);
      console.log('Profile:',response.profileObj);
      console.log('First Name:',response.profileObj.givenName);
      console.log('Full Name:',response.profileObj.name);
      console.log('Pic:',response.profileObj.imageUrl);
      setIsLoggedIn(true)

    }
        let gContent;
        if(isLoggedIn) {

        } else {
          gContent = (  <GoogleLogin
            clientId="419296817763-cimlp258lp4s5kf2vrorl7osrf74g0d0.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            isSignedIn={true}
            cookiePolicy={'single_host_origin'}
          />)

        }
        return <div>
          {gContent}
        </div>;
    }
export default Google;