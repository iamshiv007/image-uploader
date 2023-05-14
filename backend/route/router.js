const router = require("express").Router()
const { createProduct, getAllProducts } = require("../controller/productController")
const { createStudent, getAllStudents } = require('../controller/studentController')
const multer = require('multer')

const storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './student/avatars')
    },
    filename: function (req, file, cb) {
        const newName = Date.now() + '-' + file.originalname
        cb(null, newName)
    }
})

const upload1 = multer({ storage:storage1 })

const storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './product/images')
    },
    filename: function (req, file, cb) {
        const newName = Date.now() + '-' + file.originalname
        cb(null, newName)
    }
})

const upload2 = multer({ storage:storage2 })


router.route("/student/new").post(upload1.single("avatar"), createStudent)
router.route("/students").get(getAllStudents)

router.route("/product/new").post(upload2.array("images"), createProduct)
router.route("/products").get(getAllProducts)

module.exports = router