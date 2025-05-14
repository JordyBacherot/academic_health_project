import {useState} from "react";
import {signUp_Supabase} from "../service/serviceSupabaseAPI.ts";
import {ServiceDirectusAPI} from "../service/serviceDirectusAPI.ts";



function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [lastname, setLastName] = useState('');
    const [firstname, setFirstName] = useState('');

    async function handleInputChangeEmail(e : any){
        setEmail(e.target.value);
    }

    async function handleInputChangePassword(e : any){
        setPassword(e.target.value);
    }

    async function handleInputChangeLastName(e : any){
        setLastName(e.target.value);
    }

    async function handleInputChangeFirstName(e : any){
        setFirstName(e.target.value);
    }

    async function handleSignup(){
        if (email.trim() === '' || password.trim() === '' || lastname.trim() === '' || firstname.trim() === '') {
            console.error("Email, mot de passe, nom et prénom sont requis");
            return;
        }

        // Sign up with Directus API
        const service = new ServiceDirectusAPI();
        const responseDirectus = await service.post_admin_user(email, password, lastname, firstname);
        if (responseDirectus) {
            console.log("Connexion réussie avec Directus API");
        }
        else {
            console.error("Erreur lors de la connexion avec Directus API");
            return;
        }


        // Sign up with Supabase
        const responseSupabase = await signUp_Supabase(email, password)
        if (responseSupabase) {
            console.log("Connexion réussie avec Supabase");
        } else {
            console.error("Erreur lors de la connexion avec Supabase");
            return;
        }

        console.log("Inscription réussie avec succès");
    }


    // TODO : Add a message to inform the user that the account has been created successfully
    // TODO : Add a redirection to the login page after successful signup
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
                    type="text"
                    value={firstname}
                    onChange={handleInputChangeFirstName}
                    placeholder="Prénom"
                />
            </div>
            <div>
                <input
                    type="text"
                    value={lastname}
                    onChange={handleInputChangeLastName}
                    placeholder="Nom"
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
            <button onClick={handleSignup}>Se créer un compte</button>
        </div>
    )
}

export default Signin;