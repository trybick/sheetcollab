const HEROKU_API = 'https://sheetcollab.herokuapp.com/graphql';
const LOCAL_API = 'http://localhost:4000/graphql';

export const apolloEndpoint = process.env.NODE_ENV === 'production' ? HEROKU_API : LOCAL_API;
