import AiMessage from "../models/AiMessageModel.js";
import axios from "axios";

async function sendAiMessage(req, res) {
    try {
        const {message } = req.body;
        const userId = req.user.id;

        //save user message / prompt
        await AiMessage.create({
            userId,
            role: "user",
            message
        });

        // Call AI API
        const aiResponse = await axios.post("https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                message: [{role: "user", content: message}]
            },
            {
                headers: {
                    "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        const aiMessageText = aiResponse.data.choices[0].message.content;

        //Save AI message
        await AiMessage.create({
            userId,
            role: "ai",
            message: aiMessageText
        });

        res.status(200).json({
            success: true,
            reply: aiMessageText
        });
    } catch (error) {
        console.error("AI Message error", error);
        res.status(500).json({message: "Failed to process AI message"});
    }
};

async function getAiMessages(req, res) {
    try {
        const userId = req.user.id;
        const messages = await AiMessage.find({userId}).sort({createdAt: 1});
        res.json(messages);
    } catch (error) {
        res.status(500).json({message: "Failed to fetch AI messages"})
    }
};
export default {
    sendAiMessage,
    getAiMessages
}