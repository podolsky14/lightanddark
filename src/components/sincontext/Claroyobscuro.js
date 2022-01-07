import { useState } from "react"
import '../../App.css';

const initialState = "blanco"

export default function Claroyobscuro() {
    const [color, setColor] = useState(initialState)

    const handleColor = (e) => {
        if(e.target.value === "blanco"){
        setColor("blanco")
    } else {
        setColor("negro")
    }
    }


    return (
        <div className={color}>
            <h1>SIN CONTEXT API</h1>
            <p>vamo a copar lano, y vamo a desmotrar, que est abanda itene huevos, tiene huevos de verdad.</p>
          <button value="blanco" onClick={handleColor}>LIGHT</button>
          <button value="negro" onClick={handleColor}>DARK</button>
        </div>
    )
}