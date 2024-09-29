// llama
import { Request, Response, NextFunction } from "express";
import User from "../models/User.js";
import Groq from 'groq-sdk';  // Import the Groq SDK

// Define the type for messages
type ChatCompletionRequestMessage = {
    role: 'system' | 'user' | 'assistant';
    content: string;
};

export const generateChatCompletion = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { message } = req.body;

    try {
        // Find user by ID
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).json({ message: "User not registered OR Token malfunctioned" });
        }

        // Grab chats of user
        const chats = user.chats.map(({ role, content }) => ({ role, content })) as ChatCompletionRequestMessage[];
        chats.push({ role: "user", content: message });
        user.chats.push({ role: "user", content: message });

        // Initialize Groq SDK
        const groq = new Groq();

        // Get latest response
        const chatCompletion = await groq.chat.completions.create({
            model: "llama3-groq-70b-8192-tool-use-preview",  // Update with the correct model
            messages: chats,
            temperature: 0.5,
            max_tokens: 1024,
            top_p: 0.65,
            stream: true,
            stop: null
        });

        // Process and update user chats with the response from Groq
        let assistantResponse = '';
        for await (const chunk of chatCompletion) {
            assistantResponse += chunk.choices[0]?.delta?.content || '';
        }

        user.chats.push({ role: "assistant", content: assistantResponse });
        await user.save();

        return res.status(200).json({ chats: user.chats });
    } catch (error) {
        console.error("Error in generateChatCompletion:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

//youtube ----
export const  sendChatsToUser = async(
    req: Request,
    res: Response,
    next: NextFunction
) =>{
    try{
        //user token check
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).send("User not regitered OR TOken malfunctioned");
        }
        console.log(user._id.toString(), res.locals.jwtData.id);

        if (user._id.toString()  !== res.locals.jwtData.id) {
            return res.status(401).send("Permission didn't match");
        }
        return res.status(200).json({ message: "OK", chats: user.chats });
    }catch (error){
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause:error.message});
    }
};

export const  deleteChats = async(
    req: Request,
    res: Response,
    next: NextFunction
) =>{
    try{
        //user token check
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).send("User not regitered OR TOken malfunctioned");
        }
        console.log(user._id.toString(), res.locals.jwtData.id);

        if (user._id.toString()  !== res.locals.jwtData.id) {
            return res.status(401).send("Permission didn't match");
        }
        //@ts-ignore
        user.chats = [];
        await user.save();
        return res.status(200).json({ message: "OK" });
    }catch (error){
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause:error.message});
    }
};
