import * as React from 'react';

const Login = () => (
  <div>
    <a href="https://www.strava.com/oauth/authorize?response_type=code&redirect_uri=http://localhost:3000/oauth-callback&client_id=29594">
      Login please
    </a>
    {process.env.CLIENT_ID}
  </div>
);

export default Login;
