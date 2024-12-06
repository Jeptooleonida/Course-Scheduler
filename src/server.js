const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Sample route to test server
app.get('/', (req, res) => {
    res.send('UMD Course Scheduling API is running');
});

// Import routes
const courseRoutes = require('./routes/courses');
const scheduleRoutes = require('./routes/schedule');

// Use routes
app.use('/api/courses', courseRoutes);
app.use('/api/schedule', scheduleRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
