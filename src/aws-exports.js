const awsconfig =  {
    aws_project_region: process.env.REACT_APP_REGION,
    aws_cognito_region: process.env.REACT_APP_REGION,
    aws_user_pools_id: process.env.REACT_APP_USER_POOL_ID,
    aws_user_pools_web_client_id: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID,
    aws_appsync_graphqlEndpoint: process.env.REACT_APP_APPSYNC_GRAPH_QL_ENDPOINT,
    aws_appsync_region: process.env.REACT_APP_REGION,
    aws_appsync_authenticationType: process.env.REACT_APP_APPSYNC_AUTHENTICATION_TYPE,
    aws_appsync_apiKey: process.env.REACT_APP_APPSYNC_API_KEY,
};


export default awsconfig;