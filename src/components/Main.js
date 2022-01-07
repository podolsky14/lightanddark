import { useContext } from "react"
import ThemeContext from "../context/Themecontext"
import LanguageContext from "../context/LanguageContext"
export default function Main (){
    const {theme} = useContext(ThemeContext)
    const {texts} = useContext(LanguageContext)

    return(
        <div className={theme}>
        <h1>{texts.mainTitle}</h1>
        <p>{texts.mainContent}</p>
        </div>
    )
}