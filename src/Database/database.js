const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const db = new sqlite3.Database('./database.db');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

app.get('/api/users', (req, res) => {
    db.get('SELECT * FROM users LIMIT 1', (err, row) => {
        if (err) {
            console.log("fatal error with the query 'users'");
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(row);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});