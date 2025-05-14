import MenuPrincipal from "../component/MenuPrincipal.tsx";
import Background from "../Background.tsx";
import Signup from "../component/Signup.tsx";

export default function CreateAccount() {
    return (
        <div>
            <div className="App">
                <MenuPrincipal/>
                <Signup></Signup>
            </div>
            <Background/>
        </div>
    );
}