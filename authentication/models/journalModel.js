import mongoose from "mongoose";

const journalSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    content: String,
    mood: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const Journal = mongoose.model("Journal", journalSchema);
export default Journal;