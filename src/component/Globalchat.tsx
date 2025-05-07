import { useEffect, useState } from "react";
import {get_globalchat, send_message_globalchat} from "../service/serviceSupabaseAPI.ts";
import {useIsUserConnectedContext} from "../contexts/IsUserConnectedContext.tsx";

function Globalchat() {
    const { isUserConnected } = useIsUserConnectedContext();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    async function get_set_Messages() {
        if (!isUserConnected) return;

        const messages = await get_globalchat();
        if (!messages) {
            console.error("Erreur lors de la récupération des messages");
            setMessages([]);
        }
        else {
            setMessages(messages);
        }
    }

    useEffect(() => {
        get_set_Messages();
    }, [isUserConnected]);

    async function handleInputChange(e : any){
        setNewMessage(e.target.value);
    }

    async function handleSendMessage(){
        if (newMessage.trim() === '') {
            console.error("Le message ne peut pas être vide");
            return;
        }

        await send_message_globalchat(newMessage);

        setNewMessage('');
        get_set_Messages();
    }

    // raccourcir le nom de l'utilisateur
    const shortcutName = (idUser: string): string => {
        if (idUser.length > 0) {
            return idUser.slice(0, 5) + "... : ";
        }
        return "Utilisateur : ";
    };

    return (
        <div id="globalchat" className="element">
            <div>
                {[...messages].reverse().map((msg, index) => (
                    <div key={index}>
                        <span className="id_user">{shortcutName(msg.id_user_admin) || 'Utilisateur'}: </span>
                        <span>{msg.message}</span>
                    </div>
                ))}
            </div>

            <div className="msg_input">
                <input
                    type="text"
                    value={newMessage}
                    onChange={handleInputChange}
                    placeholder="Écris un message..."
                />
                <button
                    onClick={handleSendMessage}
                >
                    Envoyer
                </button>
            </div>
        </div>
    );
}

export default Globalchat;
