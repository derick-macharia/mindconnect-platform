import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    type: String,
    message: String,
    frequency: {
        type: String,
        enum: ['daily', 'weekly', 'custom']
    },
    channels: [String],
    nextTrigger: Date
});
const Reminder = mongoose.model("Reminder", reminderSchema);
export default Reminder;