import express from 'express'
import { checkAccountAOV, checkAccountCOD, checkAccountPUBG, checkAccountFF, checkAccountHDI, checkAccountGI, checkAccountML, checkAccountSM, checkDana } from '../controller/checkaccountController.js'

const checkaccount = express()
checkaccount.get('/pubg/:id', checkAccountPUBG)
checkaccount.get('/ff/:id', checkAccountFF)
checkaccount.get('/hdi/:id', checkAccountHDI)
checkaccount.get('/ml/:zoneid/:id', checkAccountML)
checkaccount.get('/aov/:id', checkAccountAOV)
checkaccount.get('/cod/:id', checkAccountCOD)
checkaccount.get('/gi/:id', checkAccountGI)
checkaccount.get('/sm/:id', checkAccountSM)
checkaccount.get('/dana/:id', checkDana)

export default checkaccount
