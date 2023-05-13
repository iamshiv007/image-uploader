const User = require('../models/user')

exports.createUser = (req, res) => {

    const { name, birthday } = req.body
    const avatar = req.file.filename

    User.create({name, birthday, avatar})
    .then((user) => res.status(201).json({ success:true, user}))
    .catch((err) => res.status(500).json({ success:false, err}))
}