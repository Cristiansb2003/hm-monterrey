import React from "react"; //Este es para poder hacer interfaces
import ReactDOM from "react-dom/client"; //Esta para hacer interfaces con el DOM
import { Cabecera } from "./components/cabecera/Cabecera";


const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(<>
<Cabecera/>
</>);
