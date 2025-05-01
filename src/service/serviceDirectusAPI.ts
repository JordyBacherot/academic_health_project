import axios from "axios";

const directusURL = import.meta.env.VITE_DIRECTUS_URL

// -------------- Post Requests --------------

export async function post_admin_user(email: string, password: string, first_name: string, last_name: string) {
    const data = {
        "role" : "16317dcf-1e2f-4fba-969f-6f6b15ba1062",
        "email": email,
        "password": password,
        "first_name": first_name,
        "last_name": last_name
    }
    return await post_API(directusURL, "users", data);
}

export async function post_normal_user(email: string, password: string, first_name: string, last_name: string) {
    const data = {
        "role" : "0777b505-b6cc-4308-9f17-c47fda65da29",
        "email": email,
        "password": password,
        "first_name": first_name,
        "last_name": last_name
    }
    return await post_API(directusURL, "users", data);
}

export async function post_auth_user(email: string, password: string) {
    const data = {
        "email": email,
        "password": password
    }
    const response = await post_API(directusURL, "auth/login", data);
    localStorage.setItem("access_token", response.data.access_token);
    localStorage.setItem("refresh_token", response.data.refresh_token);
    return await response;
}

export async function post_refresh_token() {
    const refresh_token = localStorage.getItem("refresh_token");
    const data = {
        "refresh_token": refresh_token,
        "mode": "json"
    }
    const response = await post_API(directusURL, "auth/refresh", data);
    if (response === undefined) {
        console.log("Refresh token expired, authentification impossible");
        return;
    }
    localStorage.setItem("access_token", response.data.access_token);
    localStorage.setItem("refresh_token", response.data.refresh_token);
    return response;
}

// -------------- End Post Requests --------------

// -------------- Get Requests --------------
export async function get_items_people(id: string = "") {
    if (id !== "") {
        return get_API(directusURL, `items/people/${id}`);
    }
    else {
        return get_API(directusURL, "items/people");
    }
}

export async function get_items_physiologicalData(id: string = "") {
    if (id !== "") {
        return get_API(directusURL, `items/physiologicalData?filter[people_id]=${id}&sort=date`);
    } else {
        return get_API(directusURL, "items/physiologicalData");
    }
}

export async function get_items_physicalActivities(id: string = "") {
    if (id !== "") {
        return get_API(directusURL, `items/physicalActivities?filter[people_id]=${id}&sort=date`);
    } else {
        return get_API(directusURL, "items/physicalActivities");
    }
}

// With access_token
export async function get_psychic_data(user_id: string = "") {
    const access_token = localStorage.getItem("access_token");
    if (access_token === null) {
        console.error("No access token found");
        return "No access token found, authentificate or use refresh token to have access token first";
    }
    const config = {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    }
    if (user_id !== "") {
        return get_API(directusURL, `items/psychicData?filter[people_id]=${user_id}&sort=date`, config);
    } else {
        return await get_API(directusURL, "items/psychicData", config);
    }
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
        console.log(`Request Error (${endpoint}): ${error}`);
        return ;
    }
    return response.data
}

async function post_API(url: string, endpoint: string, data: any) {
    let response = null;
    try {
        response = await axios.post(`${url}/${endpoint}`, data);
    } catch (error) {
        console.log(`Request Error (${endpoint}): ${error}`);
        return ;
    }
    return response.data
}

// -------------- End Intern function to avoid code duplication --------------