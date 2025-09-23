import Nugget from "../models/nuggetModel.js";

async function createNugget(req, res) {
    try {
        const nugget = await Nugget.create(req.body);
        res.status(201).json(nugget)
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
};

async function getNuggets(req, res) {
    try {
        const nuggets = await Nugget.find().sort({createdAt: -1});
        res.json(nuggets);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
};

async function getNugget(req, res) {
    try {
        const nugget = await Nugget.findById(req.params.id);
    if (!nugget) {
        return res.status(404).json({message: "Not found"});
    }else {
        res.json(nugget);
    }
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
};

async function deleteNugget(req, res) {
    try {
        const deleted = await Nugget.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({message: "Not found"});
        } else {
            res.json({message: "Deleted"})
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
};
export default {
    createNugget,
    getNuggets,
    getNugget,
    deleteNugget
}