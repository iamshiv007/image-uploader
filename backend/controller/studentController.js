const Student = require('../models/student')

exports.createStudent = (req, res) => {

    const { name, birthday } = req.body
    const avatar = req.file.filename

    Student.create({name, birthday, avatar})
    .then((student) => res.status(201).json({ success:true, student}))
    .catch((err) => res.status(500).json({ success:false, err}))
}

exports.getAllStudents = (req, res) => {
    Student.find()
    .then((students) => res.status(200).json({success:true, students}))
    .catch((err) => res.send(err))
}