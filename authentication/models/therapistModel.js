import mongoose from "mongoose";

const therapistSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    lincenseNumber: String,
    specialization: [String],
    bio: String,
    languages: [String],
    retes: {
        currency: {
            type: String,
            default: 'KES'},
            amount: Number
        },
    availableSlots: [Date]
    });
const Therapist = mongoose.model("Therapist", therapistSchema);
export default Therapist;