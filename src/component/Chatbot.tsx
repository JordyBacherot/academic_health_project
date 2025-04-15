import { useState } from 'react';
import { llm_stream_request } from  '../service/serviceLLM';
import { BaseMessage, HumanMessage } from '@langchain/core/messages';

function Chatbot() {
    const [userMessage, setUserMessage] = useState('');
    const [history, setHistory] = useState<BaseMessage[]>([]);
    const [streamResponse, setstreamResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function sendMessage(message: string) {
        setUserMessage('');
        const newUserMessage = new HumanMessage(message);
        setHistory(prev => [...prev, newUserMessage]);
        setIsLoading(true);

        let streamedContent = '';

        const whenNewToken = (token: string) => {
            streamedContent += token;
            setstreamResponse(streamedContent);
        };

        const newHistory = await llm_stream_request(
            whenNewToken,
            [...history],
            message
        );

        setHistory(newHistory);
        setstreamResponse('');
        setIsLoading(false);
    }

    return (
        <div>
            <div>
                {history.map((msg) => (
                    <div>
                        {/* Erreur normal ici, tout fonctionne */}
                        {JSON.stringify(msg.content)}
                    </div>
                ))}
                {isLoading
                    ? <div>{streamResponse}</div>
                    : null
                }
            </div>
            <div>
                <input
                    type="text"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Poser une question"
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage(userMessage)}
                />
                <button onClick={() => sendMessage(userMessage)}>Envoyer</button>
            </div>
        </div>
    );
}

export default Chatbot;
