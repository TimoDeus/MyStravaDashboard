import * as React from 'react';
import stravaConfig from '../../../utils/strava.config';


const Login = () => (
  <div>
    <a href={stravaConfig.getAuthUrl()}>
      Login please
    </a>
    {process.env.CLIENT_ID ||1234}
  </div>
);

export default Login;
