import mongoose from "mongoose";

const nuggetSchema = new mongoose.Schema({
    title: String,
    content: String,
    topic: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    tags: [String]
});
const Nugget = mongoose.model("Nugget", nuggetSchema);
export default Nugget;