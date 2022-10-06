import style from "./logo.module.css";
import logo from "./../../../utils/img/HM logo3.png";
export function Logo() {
  return (
    <div className={style.logo}>
      <img src={logo} alt="" />
    </div>
  );
}
