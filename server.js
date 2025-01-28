import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import morgan from 'morgan';
import cors from 'cors';
import session from 'express-session';
// import staffRouter from './src/controllers/staff.js'; // Ensure the path to staff router is correct
// import taskRouter from './src/controllers/tasks.js'; // Ensure the path to task router is correct
// import leadRouter from './src/controllers/leads.js'; // Ensure the path to lead router is correct

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: process.env.SESSION_SECRET || 'defaultSecret',
    resave: false,
    saveUninitialized: true,
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

// CRUD Routes
// app.use('/api/staff', staffRouter);
// app.use('/api/tasks', taskRouter);
// app.use('/api/leads', leadRouter);

// Server Listener
app.listen(3000, () => {
    console.log('Server started on port 3000');
});