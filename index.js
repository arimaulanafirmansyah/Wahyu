import express from 'express';
import { checkaccount, totalVisitors } from './src/routes/checkaccount.js';
import { endpoint } from './src/routes/endpoint.js';

const app = express();

app.use('/api/', checkaccount);  // Use checkaccount middleware for '/api/' routes
app.use(endpoint);  // Use endpoint middleware for other routes

app.listen(3000, () => {
    console.log('App Running on http://localhost:3000');
});
