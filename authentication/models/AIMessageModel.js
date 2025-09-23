import mongoose from "mongoose";

const aiMessageSchema = new mongoose.Schema({
userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
},
role: {
    type: String,
    enum: ["user", "ai"],
    required: true
},
message: {
    type: String,
    required: true
},
createdAt: {
    type: Date,
    default: Date.now
}
});
const AiMessage = mongoose.model("AiMessage", aiMessageSchema);
export default AiMessage;