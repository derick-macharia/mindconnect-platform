import Reminder from "../models/reminderModel.js";

async function createReminder(req, res) {
    try {
        const payload = {
            user: req.user.userId,
            ...req.body
        };
        const reminder = await Reminder.create(payload);
        res.status(201).json(reminder);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
};

async function getUserReminders(req, res) {
    try {
        const reminders = await Reminder.find({
            user: req.user.userId
        }).sort({nextTrigger: 1});
        res.json(reminders);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
};

async function updateReminder(req, res) {
    try {
        const updated = await Reminder.findOneAndUpdate(
            {
                _id: req.params.id,
                user: req.user.userId
            },
            req.body,
            {
                new: true
            }
        );
        if (!updated) {
            return res.status(404).json({message: "Not found"});
        } else {
            res.json(updated);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
};

async function deleteReminder(req, res) {
    try {
        const deleted = await Reminder.findOneAndDelete({
            _id: req.params.id,
            user: req.user.userId
        });
        if (!deleted) {
            return res.status(404).json({message: "Not found"});
        } else {
            res.json({message: "Deleted"});
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
};
export default {
    createReminder,
    getUserReminders,
    updateReminder,
    deleteReminder
}