
import { useContext } from "react"
import ThemeContext from "../context/Themecontext"
import LanguageContext from "../context/LanguageContext"
export default function Footer(){
const{theme} = useContext(ThemeContext)
const{texts} = useContext(LanguageContext)


    return(
        <div className={theme}>
        <h1>{texts.footerTitle}</h1>
        <p>{texts.footerContent}</p>
        </div>
    )
}