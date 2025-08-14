import Subscription from "../models/subscriptionModel.js";
import User from "../models/userModel.js";

async function createSubscription (req, res) {
    try {
        // Assuming that payment happened outside the system
        const {tier, months} = req.body;
        const startDate = new Date();
        const endDate = new Date();
        endDate.setMonth(endDate.getMonth() + (months || 1));

        const sub = await Subscription.create({
            user: req.user.userId,
            tier,
            startDate,
            isActive: true
        });

        //link to user
        await User.findByIdAndUpdate(req.user.userId, {subscription: sub._id});
        res.status(201).json(sub);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
};

async function getSubscription(req, res) {
    try {
        const sub = await Subscription.findOne({user: req.user.userId});
        res.json(sub);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
};

async function cancelSubscription (req, res) {
    try {
        const updated = await Subscription.findOneAndUpdate(
            {user: req.user.userId},
            {isActive: false, endDate: new Date()},
            {new: true}
        );
        res.json(updated);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message})
    }
};
export default {
    createSubscription,
    getSubscription,
    cancelSubscription
}