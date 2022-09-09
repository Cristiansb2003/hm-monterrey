import style from "./cabecera.module.css";
//import logo from "../../utils/img/HM logo3.png";
import { Logo } from "./logo/Logo";
import { useState } from "react";

export function Cabecera() {
  const [click, setClick] = useState(false);

  const display = () => {
    if (window.screen.width < 1000) {
      console.log(window.screen.width);
      setClick(true);
    } else {
      setClick(false);
    }
  };
  return (
    <div className={style.contenedor}>
      <div className={style.izq}></div>
      <div className={style.espacio}></div>
      {/* <div className={style.logo}>
        <img src={logo} alt="" />
      </div> */}
      {/* {click ? <Logo/> : <h2>HOla</h2>} */}
      <Logo/>
      <div className={style.conDer}>
        <div className={style.der}></div>
      </div>
    </div>
  );
}
