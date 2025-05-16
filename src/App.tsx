import {useContext} from "react";
import MenuPrincipal from "./component/MenuPrincipal.tsx";
import Background from "./Background.tsx";
import PatientsMaster from "./pages/PatientsMaster.tsx";
import {IsUserConnectedContext} from "./contexts/UserContext.tsx"
import Home from "./component/Home.tsx";

function App() {
    const context = useContext(IsUserConnectedContext);
    if (!context) {
        throw new Error("SomeComponent must be used within a ContextProvider");
    }
    const {isUserConnected } = context;

    return (
        <>
            <MenuPrincipal/>
            <div className="App">
            {isUserConnected !== "not connected" ? (
                <>
                    <h1 className="text-xl">Bienvenue {localStorage.getItem("name")}</h1>
                    <PatientsMaster/>
                </>
            ) : (
                <Home/>
            )}
            </div>
            <Background/>
        </>
    )
}

export default App
