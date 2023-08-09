const mongoose = require('mongoose');

const connectDB = async (options = {}) => {
  try {
    // MongoDB URI
    await mongoose.connect(process.env.URI, options);
    console.log(`Successfully connected to MongoDB!`);
    //  MongoDB Error Event
    mongoose.connection.on('error', (error) => {
      console.error('MongoDB Connection Error: ', error.message);
    });
  } catch (error) {
    console.error('Could Not Connect to MongoDB: ', error.message);
  }
};

module.exports = connectDB;
