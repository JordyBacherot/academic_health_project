import { createContext, useContext } from "react";

export const ThemeContext = createContext(null);

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("problem with useThemeContext");
    }
    return context;
}
