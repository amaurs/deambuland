import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
  aws_appsync_region: process.env.REACT_APP_REGION,
  aws_appsync_graphqlEndpoint: process.env.REACT_APP_APPSYNC_GRAPH_QL_ENDPOINT,
  aws_appsync_authenticationType: process.env.REACT_APP_APPSYNC_AUTHENTICATION_TYPE,
  aws_appsync_apiKey: process.env.REACT_APP_APPSYNC_API_KEY
});

Amplify.configure({
  API: {
    graphql_headers: async () => {
        const currentSession = await Auth.currentSession();
        return { Authorization: currentSession.getIdToken().getJwtToken() }
        }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
