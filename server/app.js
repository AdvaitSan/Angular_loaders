import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Apply CORS to the app
const app = express();
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/studentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Create a student schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: String,
});

// Create a student model
const Student = mongoose.model('Student', studentSchema);

// Middleware to parse JSON
app.use(express.json());

// Route to get all students
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    setTimeout(() => {
      res.json(students);
    }, 2000);
  } catch (error) {
    res.status(500).json({ error: 'Error getting students' });
  }
});

// Route to create a new student
app.post('/students', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Error creating student' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
