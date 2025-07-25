import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  date: String,
  time: String,
  venue: String,
});

const EventModel = mongoose.model('Event', eventSchema);
export default EventModel;
