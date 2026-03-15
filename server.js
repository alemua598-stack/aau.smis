require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to Supabase PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Endpoint: Get all students
app.get('/api/students', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM students');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Endpoint: Add a new student
app.post('/api/students', async (req, res) => {
    const { aau_id, first_name, last_name, email } = req.body;
    try {
        const query = 'INSERT INTO students (aau_id, first_name, last_name, email) VALUES ($1, $2, $3, $4) RETURNING *';
        const result = await pool.query(query, [aau_id, first_name, last_name, email]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`AAU SMIS Server running on port ${PORT}`));