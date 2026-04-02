import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const fullURL = process.env.MONGODB_URL;
   await mongoose.connect(fullURL);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.log('MongoDB connection error:', error.message);
    throw error;
  }
};


export default connectDB;
