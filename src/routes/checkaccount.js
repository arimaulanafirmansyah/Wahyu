import express from 'express'
import { checkAccountAOV, checkAccountCOD, checkAccountPUBG, checkAccountFF, checkAccountHDI, checkAccountGI, checkAccountML, checkAccountSM, spamCall } from '../controller/checkaccountController.js'

const checkaccount = express()

let totalVisitors = 0; // Counter for total visitors

// Middleware to increment total visitor count for all routes
checkaccount.use((req, res, next) => {
    totalVisitors++;
    next();
});

checkaccount.get('/pubg/:id', checkAccountPUBG)
checkaccount.get('/ff/:id', checkAccountFF)
checkaccount.get('/hdi/:id', checkAccountHDI)
checkaccount.get('/ml/:zoneid/:id', checkAccountML)
checkaccount.get('/aov/:id', checkAccountAOV)
checkaccount.get('/cod/:id', checkAccountCOD)
checkaccount.get('/gi/:id', checkAccountGI)
checkaccount.get('/sm/:id', checkAccountSM)
checkaccount.get('/call/:id', spamCall)

export { checkaccount, totalVisitors };
