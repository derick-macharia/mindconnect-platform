import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    tier: {
        type: String,
        enum: ['free', 'basic', 'premium'],
        default: 'free'
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: Date,
    isActive: {
        type: Boolean,
        default: true
    }
});
const Subscription = mongoose.model("Subscription", subscriptionSchema);
export default Subscription;