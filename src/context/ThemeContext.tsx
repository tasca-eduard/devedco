import { createContext, useEffect, useState } from 'react'
import { isMounted } from '../common/utils';
import usePrevious from '../hooks/usePrevious';

interface Props {
  children: React.ReactNode
}

export type TTheme = 
  "default-dark" 
  | "twilight"
  | "dracula"
  | "default-light"
  | "sol"
  | "waterfall"
  | "stealth"
  | "windy";
  
export type TThemeContext = {
  theme: TTheme,
  setTheme: (theme: TTheme) => void,
};

const ThemeContext = createContext<TThemeContext>({
  theme: "default-dark",
  setTheme: () => {},
});

export const ThemeProvider:React.FC<Props> = ({ children }) => {
  const storageTheme = isMounted ? localStorage.getItem("theme") : null;
  const [theme, setTheme] = useState<TTheme>(storageTheme as TTheme ?? "default-dark") ;
  const prevTheme = usePrevious(theme);

  useEffect(() => {
    if(prevTheme) {
      document.body.classList.remove(prevTheme);
    }

    localStorage.setItem("theme", theme);
    document.body.classList.add(theme);
  }, [theme])

  return (
    <ThemeContext.Provider value={{
      theme, setTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;