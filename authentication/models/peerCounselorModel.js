import mongoose from "mongoose";

const peerCounselorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    scope: String,
    verified: {
        type: Boolean,
        default: false
    },
    bio: String,
});
const PeerCounselor = mongoose.model("PeerCounselor", peerCounselorSchema);
export default PeerCounselor;