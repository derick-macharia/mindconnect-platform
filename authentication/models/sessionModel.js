import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    counselor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    counselorType: {
        type: String,
        enum: ['Therapist', 'PeerCounselor']
    },
    sessionType: {
        type: String,
        enum: ['therapy', 'peer']
    },
    scheduledAt: Date,
    status: {
        type: String,
        enum: ['pending', 'completed', 'canceled'],
        default: 'pending'
    },
    notes: String
});
const Session = mongoose.model("Session", sessionSchema);
export default Session;