import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEvent, ReactNode, useContext } from "react";
import ThemeContext, { TTheme } from "../../context/ThemeContext";

interface Props {
  faIcon: IconProp,
  value: string,
  children: ReactNode
}

export default function ButtonSetting({faIcon, children, value}: Props) {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const themeValue = e.currentTarget.value as TTheme;
    setTheme(themeValue);
  }

  return (
    <button 
      className={[
        "btn",
        value === theme ? "active" : "" 
      ].join(" ")}
      value={value}
      onClick={handleTheme}
    >
      <FontAwesomeIcon icon={faIcon} />
      {children}
    </button>
  )
}