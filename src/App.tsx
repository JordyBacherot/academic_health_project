import Contexts from "./contexts/Contexts.tsx";
import {useEffect} from "react";
import {post_auth_user} from "./service/serviceDirectusAPI.ts";
import {signIn_Supabase} from "./service/serviceSupabaseAPI.ts";
import MenuPrincipal from "./component/MenuPrincipal.tsx";
import Background from "./Background.tsx";
import Carrousel from "./component/Carrousel.tsx";

function App() {

    // Connexion automatique à l'API Directus et Supabase le temps du développement de l'application
    // Todo : Delete function
    useEffect(() => {
        async function asyncfunction() {
            await post_auth_user(import.meta.env.VITE_ADMIN_TEST_EMAIL, import.meta.env.VITE_ADMIN_TEST_PASSWORD);
            await signIn_Supabase(import.meta.env.VITE_ADMIN_TEST_EMAIL, import.meta.env.VITE_ADMIN_TEST_PASSWORD);
        }
        asyncfunction()
    },[])

    return (
        <>
            <div className="App">
                <Contexts>
                    <MenuPrincipal/>
                </Contexts>
                <Carrousel/>
            </div>
            <Background/>
        </>
    )
}

//QUESTION : Should we do a special pages for the chatbot ?

//TODO : adding css to make this pretty <3

export default App
