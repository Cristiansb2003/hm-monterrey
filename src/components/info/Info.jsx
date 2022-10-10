import React from "react";
import style from "./info.module.css";

export function Info() {
  return (
    <div className= {style.sec2}>
      <div className={style.con_trian2}>
        <div className={style.trian2}></div>
      </div>
      <div className={style.con_trian3}>
        <div className={style.trian3}></div>
      </div>
      <div className={style.centro}>
        <div className={style.contenedor}>
          
          <div className={style.izq}>
            <div className={style.l1}></div>
            <div className={style.l2}></div>
          </div>
          <div className={style.sup}>
            <div className={style.l1}></div>
            <div className={style.l2}></div>
          </div>
          <div className={style.titulo}>Hagamoslo Monterrey</div>
          <div className={style.tex}>
            <p>Hagámoslo Monterrey es una organización sin fines de lucro, creada y dirigida por y para 
jóvenes de 16 a 26 años, que busca convocar a la comunidad juvenil a mejorar el entorno físico 
y social de su ciudad.</p>
<a className={style.avmas}>[VER MAS]</a> 
<p className={style.vmas}>La organización trabaja para difundir en los jóvenes una conciencia 
colectiva y una preocupación por los problemas sociales que suceden en su ambiente, que les 
motive a actuar y a buscar soluciones de efecto inmediato y a largo plazo en la sociedad.</p>
          
          
          </div>
          <div className={style.der}>
            <div className={style.l1}></div>
            <div className={style.l2}></div>
          </div>
          <div className={style.inf}>
            <div className={style.l1}></div>
            <div className={style.l2}></div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
