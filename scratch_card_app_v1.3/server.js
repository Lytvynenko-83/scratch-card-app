const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const bodyParser = require("body-parser");
const crypto = require("crypto");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database("./scratch_card.db");

app.post("/register", (req, res) => {
    const { username, password, email } = req.body;
    db.run("INSERT INTO clients (username, password, email) VALUES (?, ?, ?)", 
        [username, password, email],
        function (err) {
            if (err) return res.status(400).json({ error: err.message });
            res.json({ success: true, userId: this.lastID });
        }
    );
});

app.post("/buy", (req, res) => {
    const { client_id, card_number } = req.body;
    const access_token = crypto.randomBytes(16).toString("hex");
    const expiration_date = new Date();
    expiration_date.setDate(expiration_date.getDate() + 30);

    db.run(
        "INSERT INTO purchased_cards (client_id, card_number, access_link, expiration_date) VALUES (?, ?, ?, ?)",
        [client_id, card_number, access_token, expiration_date.toISOString()],
        function (err) {
            if (err) return res.status(400).json({ error: err.message });
            res.json({
                success: true,
                access_link: `http://localhost:3000/access/${access_token}`,
                expiration: expiration_date,
            });
        }
    );
});

app.listen(3000, () => {
    console.log("Сервер працює на порту 3000");
});
