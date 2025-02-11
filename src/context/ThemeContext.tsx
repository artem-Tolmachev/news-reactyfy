import { ReactNode, createContext, useState, useContext} from "react";

interface IThemeCOntext {
  isDark: boolean;
  ToggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeCOntext | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error("context error");
    }
    return context;
}

interface ThemeProviderProps {
    children: ReactNode;
}
export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [isDark, setIsdark] = useState(false);

    const ToggleTheme = () => {
       setIsdark(prev => !prev)
    }

    return (
        <ThemeContext.Provider value={{isDark, ToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}