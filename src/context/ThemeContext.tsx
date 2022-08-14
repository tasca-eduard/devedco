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

const DEFAULT_THEME = "default-dark";

const ThemeContext = createContext<TThemeContext>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
});

export const ThemeProvider:React.FC<Props> = ({ children }) => {
  const storageTheme = isMounted ? localStorage.getItem("theme") : null;
  const [theme, setTheme] = useState<TTheme>(storageTheme as TTheme ?? DEFAULT_THEME);
  const prevTheme = usePrevious(theme);

  useEffect(() => {
    if(prevTheme) {
      document.body.classList.remove(prevTheme);
    }

    localStorage.setItem("theme", theme);
    document.body.classList.add(theme);
  }, [theme])

  if(isMounted) {
    return (
      <ThemeContext.Provider value={{
        theme, setTheme,
      }}>
        {children}
      </ThemeContext.Provider>
    )
  } else {
    return <></>
  }
}

export default ThemeContext;