import MenuPrincipal from "../component/MenuPrincipal.tsx";
import Background from "../Background.tsx";

function Login() {
    return (
        <div>
            <Background/>
            <div className="App">
                <MenuPrincipal/>
            </div>
        </div>
    );
}

export default Login;

//TODO : login page