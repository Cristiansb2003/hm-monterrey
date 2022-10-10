import React from "react";
import style from "./vision2.module.css";

export function Vision2() {
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
          <div className={style.titulo}>Visión</div>
          <div className={style.tex}>
          En Hagámoslo Monterrey aspiramos a ser reconocidos por la gran mayoría de la 
juventud regiomontana como una oportunidad de aportar a la sociedad siendo identificados 
por la comunidad nuevoleonense como una organización con alto impacto social y ambiental.
<a className={style.avmas}>[VER MAS]</a>
<p className={style.vmas}> 
Asimismo, Hagámoslo Monterrey tiene el vivo deseo de agotar y trascender el trabajo realizado 
en Monterrey para fomentar la creación de subdivisiones de Hagámoslo Monterrey que 
ejecuten las mismas labores en los demás municipios de la entidad, para así, algún día, migrar 
la organización a otros Estados del país. Para lograr los objetivos planteados por la 
organización, los miembros de Hagámoslo Monterrey están comprometidos con la esencia del 
proyecto, con ser perseverantes y responsables en la ejecución de las tareas, así como con 
lograr establecer vínculos de apoyo con instituciones que confíen en la organización y tengan 
la capacidad de apoyar la realización de las actividades.<br/><br/>
Además, Hagámoslo Monterrey sostiene el compromiso de estar siempre dirigido a la 
juventud regiomontana y del resto del país; no obstante, llegado el momento, la organización 
modificará sus espacios y actividades para integrar jóvenes de diversas edades, si es que 
quienes han acompañado el proyecto desde sus inicios desean continuar con las labores de 
servicio en su adultez.<br/>
</p>
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