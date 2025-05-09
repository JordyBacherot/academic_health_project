import { useEffect, useState } from "react";
import { ThemeContext } from  "./ThemeContext";
import { IsUserConnectedContext } from "./IsUserConnectedContext";
import { get_is_user_connected } from "../service/serviceSupabaseAPI";
import {ServiceDirectusAPI} from "../service/serviceDirectusAPI.ts";
import {ContextProviderProps} from "../types.tsx";

export default function ContextProvider({ children }: ContextProviderProps) {
    const [theme, setTheme] = useState("light");
    const [isUserConnected, setIsUserConnected] = useState(false);


    useEffect(() => {
        // This function checks if the user is already connected to Supabase and Directus API
        async function checkUserConnection(){
            const hasRefreshToken = localStorage.getItem("refresh_token");
            const hasAccessToken = localStorage.getItem("access_token");
            // Check if the user is connected to Supabase
            const user_connected_supabase = await get_is_user_connected();
            if (hasRefreshToken && hasAccessToken && user_connected_supabase) {
                // Check if the user is connected to Directus API
                // and set the access token and refresh token in local storage
                const service = new ServiceDirectusAPI();
                const test_data_directusAPI = await service.post_refresh_token();
                setIsUserConnected(!!test_data_directusAPI);
            } else {
                setIsUserConnected(false);
            }
        }
        checkUserConnection()
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <IsUserConnectedContext.Provider value={{ isUserConnected, setIsUserConnected }}>
                {children}
            </IsUserConnectedContext.Provider>
        </ThemeContext.Provider>
    );
}
