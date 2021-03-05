const router = require('express').Router()

let User = require('../models/user.model')


router.route('/').get((req,res)=>{
    User.find()
        .then(users=>res.json(users))
        .catch(err=>res.status(400).json('Error :' + err))
})

router.route('/add').post((req,res)=>{
    // pick the user name for the request body
    const userName = req.body.userName
    // add to the data in the schema modle
    const newUser = new User({userName})

    newUser.save()
        .then(()=>res.json('User added!'))
        .catch(err=>res.status(400).json('Error :' + err))
})

module.exports = router