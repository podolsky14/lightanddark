import { useContext } from "react"
import ThemeContext from "./ThemeContext"

export default function Header() {
const {theme, handleTheme} = useContext(ThemeContext)
    return (
        <div className={theme}>
            <h1>HEADER</h1>
            <p>Esto es un header.</p>
            <button value="blanco" onClick={handleTheme}>CLARO</button>
            <button value="negro" onClick={handleTheme}>OBSCURO</button>
            
        </div>
    )
}
