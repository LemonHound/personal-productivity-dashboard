const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());

const db = new sqlite3.Database('./database.db');

const PORT = process.env.PORT || 3001;

// Function to read query details from the lookup file
const getQueryDetails = (queryName) => {
    try {
        const lookupData = fs.readFileSync(path.join(__dirname, 'sql', 'queries', 'SQL_query_definitions.json'), 'utf8');
        const lookup = JSON.parse(lookupData);
        return lookup[queryName];
    } catch (error) {
        console.error("Error reading lookup file:", error);
        return null;
    }
};

// Function to read SQL queries from files
const readQueryFromFile = async (queryName) => {
    const queryDetails = getQueryDetails(queryName);
    if (!queryDetails) {
        throw new Error(`Query '${queryName}' not found in lookup file`);
    }

    const { folder, query } = queryDetails;
    const filePath = path.join(__dirname, folder, query);

    try {
        const query = await fs.promises.readFile(filePath, 'utf8');
        return query;
    } catch (error) {
        console.error("Error reading query file: ", error);
        throw error;
    }
};

/*
**  QUERY ENDPOINTS
*/

app.get('/api/Users/FullUserDownload', async (req, res) => {

    try {
        const query = await readQueryFromFile("FullUserDownload");
        db.all(query, (err, rows) => {
            if (err) {
                console.log("fatal error with the query FullUserDownload");
                res.status(500).json({ error: err.message });
                return;
            }
            res.json(rows);
        })
    } catch (error) {
        console.error("Error reading query from file: ", error);
        res.status(500).json({ error: "Error reading query from file" });
    }

});

/*
** OPEN SERVER
*/
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
