import mongoose from "mongoose";

const aiMessageSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    role: {
        type: String,
        enum: ['user', 'ai']
    },
    content: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
});
const AIMessage = mongoose.model("AIMessage", aiMessageSchema);
export default AIMessage;