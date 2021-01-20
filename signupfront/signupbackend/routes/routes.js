const express = require('express')
const router = express.Router()
const singUpTemplateCopy = require('../models/SignUpModels')

const joi = require('@hapi/joi')
const Joi = require('@hapi/joi')


//VALIDITION



router.post('/signup', async (req, res) => {

    //LETS VALIDATE THE DATA BEFORE WE A USER

    const signedUpUser = new singUpTemplateCopy({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const postsave = await signedUpUser.save()
        res.send(postsave)
    } catch (err) {
        res.status(400).send(err)
    }


})

module.exports = router; 