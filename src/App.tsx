import Contexts from "./contexts/Contexts.tsx";
import Globalchat from "./component/Globalchat.tsx";
import {useEffect} from "react";
import {post_auth_user} from "./service/serviceDirectusAPI.ts";
import {signIn_Supabase} from "./service/serviceSupabaseAPI.ts";

function App() {

    // Connexion automatique à l'API Directus et Supabase le temps du développement de l'application
    useEffect(() => {
        async function asyncfunction() {
            await post_auth_user(import.meta.env.VITE_ADMIN_TEST_EMAIL, import.meta.env.VITE_ADMIN_TEST_PASSWORD);
            await signIn_Supabase(import.meta.env.VITE_ADMIN_TEST_EMAIL, import.meta.env.VITE_ADMIN_TEST_PASSWORD);
        }
        asyncfunction()
    },[])

    return (
        <>
            <Contexts>
                <Globalchat></Globalchat>
            </Contexts>
        </>
    )
}

export default App
