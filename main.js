const { Client } = require('pg');

const con = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Nithshan",
    database: "demopost"
});

const insertQuery = `
    INSERT INTO demotable (name, id)
    VALUES ('laadu',7)
    RETURNING *;
`;

(async () => {
    try {
        await con.connect();
        console.log("Connected");
        const insertResult = await con.query(insertQuery);
        console.log("Data inserted successfully:", insertResult.rows);
        const fetchResult = await con.query('SELECT * FROM demotable');
        console.log("Data fetched:", fetchResult.rows);
    } catch (err) {
        console.error("Error:", err.message);
    } finally {
        await con.end();
        console.log("Connection closed");
    }
})();
