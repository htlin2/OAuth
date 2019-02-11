import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Amplify from 'aws-amplify';

const { apiGateway, cognito } = require('../config.js');

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: cognito.REGION,
    userPoolId: cognito.USER_POOL_ID,
    identityPoolId: cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: cognito.APP_CLIENT_ID,
  },
  API: {
    endpoints: [{
      name: apiGateway.NAME,
      endpoint: apiGateway.URL,
      region: apiGateway.REGION,
    }]
  },
});

ReactDOM.render(<App />, document.getElementById('app'));
