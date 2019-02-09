import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Amplify from 'aws-amplify';
import config from '../config';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  API: {
    endpoints: [{
      name: config.apiGateway.NAME,
      endpoint: config.apiGateway.URL,
      region: config.apiGateway.REGION
    },]
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
