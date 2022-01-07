import { useContext } from "react"
import ThemeContext from "../context/Themecontext"
import LanguageContext from "../context/LanguageContext"

export default function Header(){
const {theme, handleTheme} = useContext(ThemeContext)
const {texts, handleLanguage} = useContext(LanguageContext)

    return(
    <div className={theme}>
     <h1>{texts.headerTitle}</h1>

<select name="language" onChange={handleLanguage}>
<option value="es">ES</option>
<option value="en">EN</option>
</select><br/><br/>

<label htmlFor="light">{texts.headerLight}</label>
<input type="radio" name="theme" id="light" value="light" onClick={handleTheme}/><br/>
<label htmlFor="dark">{texts.headerDark}</label>
<input type="radio" name="theme" id="dark" value="dark" onClick={handleTheme}/>
<div className="dark"></div>
<p>{texts.headerContent}</p>
    </div>
        
    )
}