import { ThemeProvider } from "./pages/ThemeContext";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Main from "./pages/Main";
import "./pages/Styles.css"





function App() {

  return (
<div className="principal">
<ThemeProvider>
<Header/><br/>
<Main/><br/>
<Footer/>
</ThemeProvider>
</div>
  )
}

export default App;
