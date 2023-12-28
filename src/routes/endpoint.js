import express from 'express'
import { checkaccount, totalVisitors } from './checkaccount.js';
const app = express()

export const endpoint = app.get('/', (req,res) => {
    res.status(200).json({
        status: 200,
        message: 'Welcome to Profile Game Checker API 👋',
        documentation: 'https://documenter.getpostman.com/view/13740929/VUjMnkXK',
        donate: 'https://saweria.co/arimaulana',
        author: '@amfcode',
        totalhit: totalVisitors  // Include total visitors count in the response
    });
})
