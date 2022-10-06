import style from "./cabecera.module.css";
//import logo from "../../utils/img/HM logo3.png";
import { Logo } from "./logo/Logo";

export function Cabecera() {
  return (
    <div className={style.contenedor}>
      <div className={style.izq}></div>
      <div className={style.espacio}></div>
    <Logo/>
      <div className={style.conDer}>
        <div className={style.der}></div>
      </div>
    </div>
  );
}