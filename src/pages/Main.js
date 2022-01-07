import { useContext } from "react"
import ThemeContext from "./ThemeContext"

export default function Main() {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={theme}>
          <h1>MAIN</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, dui ut ultricies lacinia, metus justo
               efficitur nulla, quis porttitor lorem ex ac nisi. Donec consectetur semper libero eget viverra. Aenean ornare 
               quam et sem dignissim, sit amet dignissim tellus vestibulum. Nunc tempus libero non consectetur ornare. Etiam 
               dapibus rhoncus dolor eu eleifend. Praesent fringilla lorem at aliquet porttitor. Duis sollicitudin velit sagittis, 
               viverra nisi eu, cursus nunc Sed sed nisi sollicitudin, vulputate lacus ornare, egestas erat. Donec nec 
               massa feugiat, pulvinar diam a, gravida ipsum. Etiam a leo a eros euismod interdum ac ut nibh. Quisque interdum 
               semper viverra.
          </p>
        </div>
    )
}
