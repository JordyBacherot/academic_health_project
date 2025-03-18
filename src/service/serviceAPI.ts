import axios from "axios";

// With access_token

// Without access_token
export async function call_items_people(id: string = "") {
    if (id !== "") {
        return call_API("https://health.shrp.dev", `items/people/${id}`);
    }
    else {
        return call_API("https://health.shrp.dev", "items/people");
    }
}

export async function call_items_physiologicalData() {
    return await call_API("https://health.shrp.dev", "items/physiologicalData");
}

export async function call_items_physicalActivities() {
    return call_API("https://health.shrp.dev", "items/physicalActivities");
}

// Intern function to avoid code duplication
async function call_API(url: string, endpoint: string) {
    let response = null;
    try {
        response = await axios.get(`${url}/${endpoint}`);
    } catch (error) {
        console.error(`Request Error (${endpoint}): ${error}`);
        return ;
    }
    return response.data
}