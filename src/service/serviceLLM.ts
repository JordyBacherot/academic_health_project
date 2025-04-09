import { ChatGroq } from "@langchain/groq";
import {HumanMessage, BaseMessage, AIMessage, SystemMessage} from "@langchain/core/messages";

const groq_api_key = import.meta.env.VITE_GROQ_API_KEY;

const model = new ChatGroq({
    model: "llama3-70b-8192",
    temperature: 0.3,
    apiKey: groq_api_key,
});

const systemMessage = new SystemMessage(
    "Tu es un assistant virtuel en coaching sportif et santé. " +
    "Réponds de manière précise et détaillée, en posant des questions pour mieux comprendre les besoins et objectifs de l'utilisateur."
);

export async function llm_stream_request(onToken: any, history: BaseMessage[], message: string) {
    let aiResponse = "";
    const userMessage = new HumanMessage(message);
    try {
        const messages: BaseMessage[] = [systemMessage,...history, userMessage];
        const stream = await model.stream(messages);

        for await (const chunk of stream) {
            const token = chunk.content;
            onToken(token);
            console.log(token);
            aiResponse += token;
        }
    } catch (error) {
        console.error("Erreur dans llm_stream_request :", error);
        onToken("Le Chatbot dysfonctionne.");
    }

    const aiMessage = new AIMessage(aiResponse);
    return [...history, userMessage, aiMessage];
}

