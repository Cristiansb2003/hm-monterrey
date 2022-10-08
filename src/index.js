import React from "react"; //Este es para poder hacer interfaces
import ReactDOM from "react-dom/client"; //Esta para hacer interfaces con el DOM
import { Cabecera } from "./components/cabecera/Cabecera";
import { Carrucel } from "./components/Carrucel/Carrucel";
//import { Carrucel } from "./components/carrucel/Carrucel";
import "./normalize.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>
<Cabecera/>
<Carrucel/>
<h1>Hola</h1>
</>);
