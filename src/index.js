import React from "react"; //Este es para poder hacer interfaces
import ReactDOM from "react-dom/client"; //Esta para hacer interfaces con el DOM
import { ActImg } from "./components/actImg/ActImg";
import { Cabecera } from "./components/cabecera/Cabecera";
import { Carrucel } from "./components/Carrucel/Carrucel";
//import { Carrucel } from "./components/carrucel/Carrucel";
import "./normalize.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>
<Cabecera/>
<Carrucel/>
<ActImg/>
<h1>Saqué 25</h1>
</>);
