import qsstyle from './qs.module.css'


export function Qs(){
    return(
    <div className={qsstyle.quienes}>
        
    <div className={qsstyle.arriba}></div>
    <div className={qsstyle.arriba2}></div>

       <div className={qsstyle.frente}><h1>¿Qué es Hágamoslo Monterrey?</h1></div>
       
       <div className={qsstyle.prueba}>
       <div className={qsstyle.somos}>
       Hagámoslo Monterrey es una organización sin fines de lucro, creada y dirigida por y para 
jóvenes de 16 a 26 años, que busca convocar a la comunidad juvenil a mejorar el entorno físico 
y social de su ciudad. La organización trabaja para difundir en los jóvenes una conciencia 
colectiva y una preocupación por los problemas sociales que suceden en su ambiente, que les 
motive a actuar y a buscar soluciones de efecto inmediato y a largo plazo en la sociedad.

       
       </div>
       <div className={qsstyle.abajo}></div>

       </div>
       
    </div>
    )
}