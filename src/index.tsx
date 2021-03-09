import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Amplify from 'aws-amplify';

Amplify.configure({
  aws_appsync_region: process.env.REGION,
  aws_appsync_graphqlEndpoint: process.env.APPSYNC_GRAPH_QL_ENDPOINT,
  aws_appsync_authenticationType: process.env.APPSYNC_AUTHENTICATION_TYPE,
  aws_appsync_apiKey: process.env.APPSYNC_API_KEY
});

console.log("Amplify.configure")
console.log(process.env.REGION)
console.log(process.env.APPSYNC_GRAPH_QL_ENDPOINT)
console.log(process.env.APPSYNC_AUTHENTICATION_TYPE)
console.log(process.env.APPSYNC_API_KEY)


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
