import { createContext } from "react";

// const [theme, setTheme] = useState("yellow")

const ThemeContext = createContext(["yellow", () => {}]);

export default ThemeContext;
