
import { useContext } from "react"
import ThemeContext from "./ThemeContext"
export default function Footer(){
const{theme} = useContext(ThemeContext)



    return(
        <div className={theme}>
            <div>
        <h1>FOOTER
        </h1>
        <p>Esto es un footer</p>
        </div>
        </div>
    )

} 