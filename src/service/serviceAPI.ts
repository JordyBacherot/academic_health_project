import axios from "axios";

async function call_items_people() {
    try {
        // Envoi d'une requête GET vers une API d'exemple
        const response = await axios.get("https://health.shrp.dev/items/people");
        console.log("Données récupérées :", response.data);
    } catch (error) {
        console.error("Erreur lors de la requête :", error);
    }
}

call_items_people();
