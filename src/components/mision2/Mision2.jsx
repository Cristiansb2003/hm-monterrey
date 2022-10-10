import React from "react";
import style from "./mision2.module.css";

export function Mision2() {
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
          <div className={style.titulo}>Misión</div>
          <div className={style.tex}>
            Hagámoslo Monterrey es una organización sin fines de lucro dedicada a planear y 
ejecutar proyectos de servicio social, que nace de la necesidad de actuar, de hacer, y de 
trascender a la práctica las buenas intenciones o preocupaciones de mejorar nuestra sociedad.
<a className={style.avmas}>[VER MAS]</a>
<p className={style.vmas}> 
Esto a través de actividades enfocadas en la limpia de áreas verdes, la reparación o 
restauración de zonas y parques públicos, la recolección de donativos de víveres o demás 
objetos que beneficien a un sector vulnerable de la comunidad, y la atención a instituciones o 
centros de acogida con diferentes fines.<br/><br/>
Principalmente, la organización tiene el objetivo de invitar y convocar a jóvenes en el 
Estado de Nuevo León a participar en proyectos o labores de servicio social que puedan ayudar 
a su comunidad y mejorar su entorno, fomentar la integración, y formar vínculos con más 
jóvenes preocupados y deseosos por contribuir al beneficio de su sociedad. Hagámoslo 
Monterrey busca diferenciarse de otros proyectos de servicio social por medio de la búsqueda 
de una mayor pluralidad de participantes en sus convocatorias, pues, además, la organización 
aspira a ser una plataforma para que los asistentes a los eventos conozcan más personas y 
se promueva la integración y comunicación entre las diferentes esferas de la sociedad.
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