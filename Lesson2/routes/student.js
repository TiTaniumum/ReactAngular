const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const studentsPath = path.join(__dirname, '../data/students.json');

function readStudents() {
    const data = fs.readFileSync(studentsPath, 'utf-8');
    return JSON.parse(data);
}

function writeStudents(students) {
    fs.writeFileSync(studentsPath, JSON.stringify(students, null, 2));
}

router.get('/', (req, res) => {
    const students = readStudents();
    res.json(students);
});

router.post('/', (req, res) => {
    const students = readStudents();
    const newStudent = req.body;
    newStudent.id = students.length ? students[students.length - 1].id + 1 : 1;
    students.push(newStudent);
    writeStudents(students);
    res.status(201).json(newStudent);
});

router.put('/:id', (req, res) => {
    const students = readStudents();
    const studentId = parseInt(req.params.id);
    const updatedStudent = req.body;

    const index = students.findIndex(student => student.id === studentId);
    if (index === -1) {
        return res.status(404).json({ message: 'Книга не найдена' });
    }

    students[index] = { ...students[index], ...updatedStudent };
    writeStudents(students);
    res.json(students[index]);
});

router.delete('/:id', (req, res) => {
    const students = readStudents();
    const studentId = parseInt(req.params.id);

    const index = students.findIndex(student => student.id === studentId);
    if (index === -1) {
        return res.status(404).json({ message: 'Студент не найден' });
    }

    const deletedStudent = students.splice(index, 1);
    writeStudents(students);
    res.json(deletedStudent[0]);
});

module.exports = router