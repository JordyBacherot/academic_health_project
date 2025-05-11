import { useState} from "react";
import {useIsUserConnectedContext} from "../contexts/IsUserConnectedContext.tsx";
import {signIn_Supabase} from "../service/serviceSupabaseAPI.ts";
import {ServiceDirectusAPI} from "../service/serviceDirectusAPI.ts";

function Signin() {
    const {isUserConnected, setIsUserConnected} = useIsUserConnectedContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function handleInputChangeEmail(e : any){
        setEmail(e.target.value);
    }

    async function handleInputChangePassword(e : any){
        setPassword(e.target.value);
    }

    async function handleSignin(){
        if (email.trim() === '' || password.trim() === '') {
            console.error("Email et mot de passe sont requis");
            return;
        }


        try {
            // Sign in with Directus API
            const service = new ServiceDirectusAPI()
            const response = await service.post_auth_user(email, password);
            if (response) {
                console.log("Connexion réussie avec Directus API");
            }
        } catch (error) {
            console.error("Erreur lors de la connexion avec Directus API :", error);
            return;
        }

        try {
            // Sign in with Supabase
            const response = await signIn_Supabase(email, password);
            if (response) {
                console.log("Connexion réussie avec Supabase");
            }
        } catch (error) {
            console.error("Erreur lors de la connexion avec Supabase :", error);
            return;
        }

        setIsUserConnected(true);
        console.log("Utilisateur connecté");
    }

    return (
        <div>
            <div>
                <input
                    type="email"
                    value={email}
                    onChange={handleInputChangeEmail}
                    placeholder="Email"
                />
            </div>
            <div>
                <input
                    type="password"
                    value={password}
                    onChange={handleInputChangePassword}
                    placeholder="Mot de passe"
                />
            </div>
            <button onClick={handleSignin}>Se connecter</button>
        </div>
    )
}

export default Signin;