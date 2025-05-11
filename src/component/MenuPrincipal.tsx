import { NavLink, useLocation} from "react-router";

function MiniMenu(){
    return(
            <NavLink
                to="/"
                className="title-link"
            >
                <img src="./icons/home.svg" alt="icon home"/>
                {/*<b>NewTech4Health</b>*/}
            </NavLink>)
}
function MenuPrincipal(){
    const location = useLocation();

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

    return(
        <div id='menu-principal'>
            <nav>
                <MiniMenu/>
                <NavLink
                    to="/login"
                >
                    <img src="./icons/login_small.svg" alt="icon login"/>
                    {/*Login*/}
                </NavLink>
            </nav>
        </div>
    )
}

export default MenuPrincipal;

//TODO : "Login" should change to "Logout" when connected to allow the user to log out + gives name of who is connected