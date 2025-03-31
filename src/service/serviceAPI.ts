import axios from "axios";

// -------------- Post Requests --------------

export async function post_admin_user(email: string, password: string, first_name: string, last_name: string) {
    const data = {
        "role" : "16317dcf-1e2f-4fba-969f-6f6b15ba1062",
        "email": email,
        "password": password,
        "first_name": first_name,
        "last_name": last_name
    }
    return await post_API("https://health.shrp.dev", "users", data);
}

export async function post_normal_user(email: string, password: string, first_name: string, last_name: string) {
    const data = {
        "role" : "0777b505-b6cc-4308-9f17-c47fda65da29",
        "email": email,
        "password": password,
        "first_name": first_name,
        "last_name": last_name
    }
    return await post_API("https://health.shrp.dev", "users", data);
}

export async function post_auth_user(email: string, password: string) {
    const data = {
        "email": email,
        "password": password
    }
    return await post_API("https://health.shrp.dev", "auth/login", data);
}

// -------------- End Post Requests --------------

// -------------- Get Requests --------------
export async function get_items_people(id: string = "") {
    if (id !== "") {
        return get_API("https://health.shrp.dev", `items/people/${id}`);
    }
    else {
        return get_API("https://health.shrp.dev", "items/people");
    }
}

export async function get_items_physiologicalData(id: string = "") {
    if (id !== "") {
        return get_API("https://health.shrp.dev", `items/physiologicalData?filter[people_id]=${id}`);
    } else {
        return get_API("https://health.shrp.dev", "items/physiologicalData");
    }
}

export async function get_items_physicalActivities(id: string = "") {
    if (id !== "") {
        return get_API("https://health.shrp.dev", `items/physicalActivities?filter[people_id]=${id}`);
    } else {
        return get_API("https://health.shrp.dev", "items/physicalActivities");
    }
}

// With access_token
export async function get_psychic_data(access_token: string) {
    const config = {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    }
    return await get_API("https://health.shrp.dev", "items/psychicData", config);
}

// -------------- End Get Requests --------------

// -------------- Intern function to avoid code duplication --------------

async function get_API(url: string, endpoint: string, config: any = {}) {
    let response = null;
    try {
        if (config) {
            response = await axios.get(`${url}/${endpoint}`, config);
        } else {
            response = await axios.get(`${url}/${endpoint}`);
        }
    } catch (error) {
        console.error(`Request Error (${endpoint}): ${error}`);
        return ;
    }
    return response.data
}

async function post_API(url: string, endpoint: string, data: any) {
    let response = null;
    try {
        response = await axios.post(`${url}/${endpoint}`, data);
    } catch (error) {
        console.error(`Request Error (${endpoint}): ${error}`);
        return ;
    }
    return response.data
}

// -------------- End Intern function to avoid code duplication --------------