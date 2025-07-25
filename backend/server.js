import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database.js";
import RegistrationModel from "./models/RegistrationModel.js";
import ContactModel from "./models/ContactModel.js";
import EventModel from "./models/EventModel.js";

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());




// Event Registration API
app.post("/create", async (req, res) => {
  try {
    const { name, email, phone, event, message } = req.body;

    const newUser = new RegistrationModel({
      name,
      email,
      phone,
      event,
      message,
    });

    const savedUser = await newUser.save();
    res.status(201).json({ message: "success", data: savedUser });
  } catch (error) {
    res.status(400).json({ message: "fail", error: error.message });
  }
});

// Contact Us API
app.post("/createContact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newContact = new ContactModel({
      name,
      email,
      subject,
      message,
    });

    const savedContact = await newContact.save();
    res.status(201).json({ message: "success", data: savedContact });
  } catch (error) {
    res.status(400).json({ message: "fail", error: error.message });
  }
});

//get registrations
app.post('/getRegistrations', async (req, res) => {
  const { name, phone } = req.body;

  try {
    const records = await RegistrationModel.find({ name, phone });

    if (records.length > 0) {
      res.status(200).json({ message: 'success', data: records });
    } else {
      res.status(404).json({ message: 'No registrations found.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET all registrations for organizer dashboard
app.get('/all-registrations', async (req, res) => {
  try {
    const data = await RegistrationModel.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json({ message: 'success', data });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.get('/Messages', async (req, res) => {
  try {
    const data = await ContactModel.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json({ message: 'success', data });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});





import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Make sure this folder exists on server
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // e.g., 1721979881234.jpg
  },
});

const upload = multer({ storage });

app.post('/upload-image', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  const imageUrl = `/uploads/${req.file.filename}`;
  res.status(200).json({ imageUrl });
});


app.use('/uploads', express.static('uploads'));





// Organizer adds an event
app.post("/add-event", async (req, res) => {
  try {
    const { title, description, date, time, venue } = req.body;
   const image = req.body.image || '';


    const newEvent = new EventModel({
      title,
      description,
      image,
      date,
      time,
      venue,
    });

    const savedEvent = await newEvent.save();
    res.status(201).json({ message: "Event added successfully", data: savedEvent });
  } catch (error) {
    res.status(400).json({ message: "Failed to add event", error: error.message });
  }
});

// Fetch all events
app.get("/events", async (req, res) => {
  try {
    const events = await EventModel.find().sort({ createdAt: -1 });
    res.status(200).json({ message: "success", data: events });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch events", error: error.message });
  }
});




// Start Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});



