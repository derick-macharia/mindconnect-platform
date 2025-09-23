import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: String,
    age: Number,
    gender: String,
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'therapist', 'peer'],
        default: 'user'
    },
    preferredLanguage: String,
    remindersEnabled:{
        type: Boolean,
        default: true
    },
    reminderChannels: [String],
    subscription: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subscription'
    },
},
  {
        timestamps: true,
});
const User = mongoose.model("User", userSchema);
export default User;