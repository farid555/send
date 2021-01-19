const express = require('express')
const router = express.Router()
const singUpTemplateCopy = require('../models/SignUpModels')




router.post('/signup', async (req, res) => {

    const signedUpUser = new singUpTemplateCopy({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const postsave = await signedUpUser.save()
        res.json(postsave)
    } catch (err) {
        res.json({ message: "Please Fix this issues" })
    }


})

module.exports = router; 