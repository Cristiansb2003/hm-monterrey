import style from "./logo.module.css";
import logo from "./../../../utils/img/HM emblema.png";

export function LogoH() {
  return (
    <div className={style.logo}>
      <img src={logo} alt="" />
    </div>
  );
}
