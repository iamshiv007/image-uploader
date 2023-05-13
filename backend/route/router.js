const router = require("express").Router()
const { createUser } = require('../controller/userController')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './avatars')
    },
    filename: function (req, file, cb) {
        const newName = Date.now() + '-' + file.originalname
        cb(null, newName)
    }
})

const upload = multer({ storage })


router.route("/user/new").post(upload.single("avatar"), createUser)

module.exports = router