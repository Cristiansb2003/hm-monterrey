import React from "react"; //Este es para poder hacer interfaces
import ReactDOM from "react-dom/client"; //Esta para hacer interfaces con el DOM
import { Cabecera } from "./components/cabecera/Cabecera";
import { Carrucel } from "./components/Carrucel/Carrucel";
import { Qs } from "./components/qs/Qs";
import {Mision} from "./components/mision/Mision";
//import { Carrucel } from "./components/carrucel/Carrucel";
import "./normalize.css"
import { Vision } from "./components/vision/Vision";
import { ActImg } from "./components/actImg/ActImg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>

<Cabecera/>

<Carrucel/>


<ActImg />

</>);
