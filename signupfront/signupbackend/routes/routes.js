const express = require('express')
const router = express.Router()
const singUpTemplateCopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt')



//VALIDITION



router.post('/signup', async (req, res) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)

    //LETS VALIDATE THE DATA BEFORE WE A USER

    const signedUpUser = new singUpTemplateCopy({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: securePassword
    })
    try {
        const postsave = await signedUpUser.save()
        res.send(postsave)
    } catch (err) {
        res.status(400).send(err)
    }


})

module.exports = router; 