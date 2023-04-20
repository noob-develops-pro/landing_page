const router = require('express').Router()

const { sendMail } = require('../controller/appController.js')

/** HTTP Reqeust */
router.post('/user/sendmail', sendMail)

module.exports = router
