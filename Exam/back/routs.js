const express = require("express");
const mysql = require("mysql2");
const router = express.Router();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clinic",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: ", err.message);
    return;
  }
  console.log("Connected to the MySQL database.");
});

router.post("/addedit", (req, res) => {
  const { doctor } = req.body;
  console.log(doctor);
  const sql = "call create_update_doctor(?,?,?,?)";
  db.query(
    sql,
    [doctor.id, doctor.fullname, doctor.phone, doctor.specialization],
    (err, results) => {
      if (err) {
        console.error("Error executing query: ", err.message);
        res.status(500).send("Error querying the database");
        return;
      }
      res.status(201).json({ message: "saved" });
    }
  );
});

router.get("/doctorlist", (req, res) => {
  const sql = "SELECT * FROM doctors";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing query: ", err.message);
      res.status(500).send("Error querying the database");
      return;
    }
    res.status(200).json(results);
  });
});

router.post("/delete/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const sql = "delete from doctors where id = ?";
  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error("Error executing query: ", err.message);
      res.status(500).send("Error querying the database");
      return;
    }
    res.status(200).json({ message: "deleted" });
  });
});

router.post("/setschedule", (req, res) => {
  const { doctorid, scheduledate, scheduletime, patientname } = req.body;
  console.log(doctorid, scheduledate, scheduletime, patientname);
  const sql = "call add_schedule(?,?,?,?)";
  db.query(
    sql,
    [doctorid, scheduledate, scheduletime, patientname],
    (err, results) => {
      if (err) {
        console.error("Error executing query: ", err.message);
        res.status(500).send("Error querying the database");
        return;
      }
      res.status(200).json(results);
    }
  );
});

router.post("/getschedule", (req, res) => {
  const { doctorid, scheduledate } = req.body;
  const sql = "call get_doctor_schedule(?,?)";
  db.query(sql, [doctorid, scheduledate], (err, results) => {
    if (err) {
      console.error("Error executing query: ", err.message);
      res.status(500).send("Error querying the database");
      return;
    }
    res.status(200).json(results[0]);
  });
});

module.exports = router;