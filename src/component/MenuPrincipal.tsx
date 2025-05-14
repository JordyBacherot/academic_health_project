import { NavLink, useLocation} from "react-router";
import {useContext} from "react";
import {IsUserConnectedContext} from "../contexts/UserContext.tsx";
import {signOut_Supabase} from "../service/serviceSupabaseAPI.ts";

function MiniMenu(){
    return(
            <NavLink
                to="/"
                className="title-link"
            >
                <img src="/icons/home.svg" alt="icon home"/>
            </NavLink>)
}

function MenuPrincipal(){
    const location = useLocation();
    const userContext = useContext(IsUserConnectedContext);
    if (!userContext) {
        throw new Error("SomeComponent must be used within a ContextProvider");
    }

    const { isUserConnected, setIsUserConnected } = userContext;

    console.log("isUserConnected", isUserConnected);

    // Hide menu on the login page
    if (location.pathname === "/login") {
        return (
            <div id='mini-menu'>
                <nav>
                    <MiniMenu/>
                </nav>
            </div>
        )
    }

    async function handleLogout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("name");
        setIsUserConnected("not connected");
        await signOut_Supabase()
        console.log("Logout");
    }

    return(
        <div id='menu-principal'>
            <nav>
                <MiniMenu/>

                <NavLink
                    to="/globalchat"
                >
                    <img src="/icons/connect.svg" alt="icon globalchat"/>
                </NavLink>
                {
                    isUserConnected !== "not connected" ? (
                        <NavLink to="/">
                            <img src="/icons/logout_small.svg" alt="icon logout" onClick={handleLogout}/>
                        </NavLink>
                    ) : (
                        <NavLink to="/login">
                            <img src="/icons/login_small.svg" alt="icon login" />
                        </NavLink>
                    )
                }
            </nav>
        </div>
    )
}

export default MenuPrincipal;