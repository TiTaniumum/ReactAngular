const express = require('express');
const bodyParser = require('body-parser');
const studentsRoutes = require('./routes/student');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/students', studentsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
