import express from 'express'

const app = express()

export const endpoint = app.get('/', (req,res) => {
    res.status(200).json({
        status: 200,
        message: 'Welcome to Profile Game Checker API 👋',
        author: '@amfcode_'
    })
})
