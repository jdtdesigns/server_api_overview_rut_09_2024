import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();
import api_routes from './routes/api_routes.js';
import htmlRoutes from './routes/htmlRoutes.js';
const app = express();
const PORT = process.env.PORT || 3333;
const { Client } = pg;
const client = new Client({
    user: 'postgres',
    password: 'pass',
    database: 'first_db'
});
await client.connect();
const getAllUsers = await client.query('SELECT * FROM users');
// const insertUserQuery = await client.query("INSERT INTO users (id, firstName, lastName, course) VALUES (4, 'Milly', 'Thomas', 'cyber')");
console.log(getAllUsers.rows);
// Static Middleware - Allows the client access to an entire folder and all of the files within that folder
// The static method creates a GET route for every file within the shared folder
app.use(express.static('../client/dist'));
// Load In API Routes
app.use(api_routes);
// Load in HTML Routes
app.use(htmlRoutes);
// Start the server
app.listen(PORT, () => {
    console.log('Server started on port 3333');
});
