import { createContext, useContext } from "react";

//another way ----> when u want to pass a default value ---> like when user come for first time which UI mustg be visible...
export const ThemeContext = createContext(
    {
        themeMode: "light",
        darkTheme: () => { },
        lightTheme: () => { },
    }
);

//ca alse create the custom Hooks...
export const ThemeContextProvider = ThemeContext.Provider
export default function useThemeContext() {
    return useContext(ThemeContext);
}