const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Parse JSON request body
app.use(express.json());

// Define authentication routes
app.use('/auth', authRoutes);

// Define user routes
app.use('/user', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
// {
//   "token"= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGMwZDQ2NTgzOWM1MTQ2ODZjYzZiYTAiLCJpYXQiOjE2MTkxMzcyNjAsImV4cCI6MTYxOTE0MDg2MH0.wJGkkTz27e_vyaxf1M85rMUPtNvXo25ntGtJgdy-aNk"
// }
// {
//   "message"= "Welcome john.doe"
// }