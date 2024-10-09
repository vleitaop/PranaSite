import{Route, Routes, 
  BrowserRouter as Router
} from "react-router-dom"

import Home from './Home'
import '../styles/App.css'
import Informacion from './Informacion.jsx'
import Beneficios from './Beneficios.jsx'
import Contacto from './Contacto.jsx'
import Reserva from './Reserva.jsx'
import NavBar from "./NavBar.jsx"
import { Container } from "react-bootstrap"

function App() {


  return (
    <div>

<Router>
        
       <NavBar/> 
        <Routes>
        
          





         




        </Routes>

      </Router>


      <Home/>
      <Informacion/>
      <Beneficios/>
      <Contacto/>
      <Reserva/>

    <footer>
      <div className="footer">
      <h5>2024 Prana Yoga.</h5>
      </div>
    </footer>


    </div>
  )
}

export default App
