import {useContext, useEffect} from "react";
import {ServiceDirectusAPI} from "./service/serviceDirectusAPI.ts";
import {signIn_Supabase} from "./service/serviceSupabaseAPI.ts";
import MenuPrincipal from "./component/MenuPrincipal.tsx";
import Background from "./Background.tsx";
import PatientsMaster from "./pages/PatientsMaster.tsx";
import {IsUserConnectedContext} from "./contexts/UserContext.tsx"


function App() {
    const context = useContext(IsUserConnectedContext);
    if (!context) {
        throw new Error("SomeComponent must be used within a ContextProvider");
    }
    const {setIsUserConnected } = context;

    // Connexion automatique à l'API Directus et Supabase le temps du développement de l'application
    // Todo : Delete function
    useEffect(() => {
        async function asyncfunction() {
            const service = new ServiceDirectusAPI();
            await service.post_auth_user(import.meta.env.VITE_ADMIN_TEST_EMAIL, import.meta.env.VITE_ADMIN_TEST_PASSWORD);
            await signIn_Supabase(import.meta.env.VITE_ADMIN_TEST_EMAIL, import.meta.env.VITE_ADMIN_TEST_PASSWORD);
            setIsUserConnected("test");
        }
        asyncfunction()

    },[])

    return (
        <>
            <MenuPrincipal/>
            <div className="App">
                <h1>Bienvenue {localStorage.getItem("name")}</h1>
                <PatientsMaster/>
            </div>
            <Background/>
        </>
    )
}

//QUESTION : Should we do a special pages for the chatbot ?

//TODO : adding css to make this pretty <3

export default App
