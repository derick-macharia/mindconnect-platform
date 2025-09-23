import Event from "../models/eventModel.js";
import User from "../models/userModel.js";

//Create event (therapist)
async function createEvent(req, res) {
    try {
        const event = await Event.create(req.body);
        res.status(201).json(event);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
};

//Update event
async function updateEvent(req, res) {
    try {
        const updated = await Event.findByIdAndUpdate(req.params.id, req.body, 
            {new:true}
        );
        if (!updated) {
            return res.status(404).json({message: "Event not found"});
        } else {
            res.json(updated);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message})
    }
};

// Get all events (Public)
async function getEvents(req, res) {
    try {
        const events = await Event.find().sort({eventDate: -1});
        res.json(events);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
};

//Get event by ID
async function getEvent(req, res) {
    try {
        const event = await Event.findById(req.params.id).populate("participants", "-password");
    if (!event) {
        return res.status(404).json({message: "Event not found"});
    }
    res.json(event);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
};

// Join event
async function joinEvent(req, res) {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            res.status(404).json({message: "Event not found"});
        }

        // Check if you're already a participant
        const alreadyParticipant = event.participants.find(p => p.toString() === req.user.userId);
        if (alreadyParticipant) {
            return res.status(400).json({message: "Already registered"});
        }

        event.participants.push(req.user.userId);
        await event.save();

        res.json({message: "Registered", event});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
};

export default {
    createEvent,
    updateEvent,
    getEvents,
    getEvent,
    joinEvent
}