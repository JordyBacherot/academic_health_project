import { createContext, useContext } from "react";


export const IsUserConnectedContext = createContext(null);

export function useIsUserConnectedContext() {
    const context = useContext(IsUserConnectedContext);
    if (!context) {
        throw new Error("problem with useIsUserConnectedContext");
    }
    return context;
}
