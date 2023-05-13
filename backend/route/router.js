const router = require("express").Router()
const { createProduct, getAllProducts } = require("../controller/productController")
const { createStudent, getAllStudents } = require('../controller/studentController')
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


router.route("/student/new").post(upload.single("avatar"), createStudent)
router.route("/students").get(getAllStudents)

router.route("/product/new").post(upload.array("images"), createProduct)
router.route("/products").get(getAllProducts)

module.exports = router