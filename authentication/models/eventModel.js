import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: String,
    description: String,
    speaker: String,
    eventDate: Date,
    price: {
        live: Number,
        recording: Number
    },
    isLive: Boolean,
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})
const Event = mongoose.model("Event", eventSchema);
export default Event;