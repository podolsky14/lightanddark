import { createContext, useState } from "react";
import "../App.css"

const ThemeContext = createContext()

const initialState = "blanco"


function ThemeProvider({children}) {
const [theme, setTheme] = useState(initialState)

const handleTheme = (e) => {
if(e.target.value === "blanco"){
setTheme("blanco")
} else { 
    setTheme("negro")
} };

const data = {theme, handleTheme}

    return (
        <div >
            <ThemeContext.Provider value={data}> {children}</ThemeContext.Provider>
        </div>
    )
}


export { ThemeProvider };
export default ThemeContext;