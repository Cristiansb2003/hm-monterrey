import React from "react"; //Este es para poder hacer interfaces
import ReactDOM from "react-dom/client"; //Esta para hacer interfaces con el DOM
import { Cabecera } from "./components/cabecera/Cabecera";
import { Carrucel } from "./components/Carrucel/Carrucel";
import { Qs } from "./components/qs/Qs";
import {Mision} from "./components/mision/Mision";
//import { Carrucel } from "./components/carrucel/Carrucel";
import "./normalize.css"
import { Vision } from "./components/vision/Vision";
import { Info } from "./components/info/Info";
import { Mision2 } from "./components/mision2/Mision2";
import { Vision2 } from "./components/vision2/Vision2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>

<Cabecera/>

<Carrucel/>

<Info/>
<Mision2/>
<Vision2/>




</>);
