const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const filePath = path.join(__dirname, 'users.json');

router.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).json({ error: 'Error reading file' });
        }

        let users = [];

        if (data) {
            users = JSON.parse(data);
        }

        users.push({ username, password });

        fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Error writing to file' });
            }

            res.status(201).json({ message: 'User saved successfully' });
        });
    });
});

router.get('/users', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).json({ error: 'Error reading file' });
        }

        const users = data ? JSON.parse(data) : [];
        res.status(200).json(users);
    });
});

router.get('/users/:username', (req, res) => {
    const { username } = req.params;

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).json({ error: 'Error reading file' });
        }

        const users = data ? JSON.parse(data) : [];
        const user = users.find((u) => u.username === username);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(user);
    });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).json({ error: 'Error reading file' });
        }

        const users = data ? JSON.parse(data) : [];
        const user = users.find((u) => u.username === username && u.password === password);

        if (!user) {
            return res.status(404).json({ error: 'Username or password is wrong!' });
        }

        res.status(200).json(user);
    });
});

module.exports = router;