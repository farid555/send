const express = require('express')
const router = express.Router()
const singupTemplateCopy = require('../models/SigUpModels')
const { request } = require('express')



router.post('/signup', (req, res) => {
    const signedUpUser = new singupTemplateCopy({

        fullName: request.body.fullName,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password
    })
    signUpUser.save()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.json(error)
        })
})

module.exports = router; 