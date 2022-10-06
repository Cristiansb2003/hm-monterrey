import React,{useState} from "react"; 
import "./actimg.css";
import CloseIcon from '@material-ui/icons/Close';

import img1AP from './../../utils/actividad-piloto/img1AP.jpg'
import img2AP from './../../utils/actividad-piloto/img2AP.jpg'
import img3AP from './../../utils/actividad-piloto/img3AP.jpg'
import img4AP from './../../utils/actividad-piloto/img4AP.jpg'
import img5AP from './../../utils/actividad-piloto/img5AP.jpg'
import img6AP from './../../utils/actividad-piloto/img6AP.jpg'
import img7AP from './../../utils/actividad-piloto/img7AP.jpg'
import img8AP from './../../utils/actividad-piloto/img8AP.jpg'
import img9AP from './../../utils/actividad-piloto/img9AP.jpg'
import img10AP from './../../utils/actividad-piloto/img10AP.jpg'
//import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";

export function ActImg() {
    let data =[
        {
            id: 1,
            imgSrc: img1AP,
        },
        {
            id: 2,
            imgSrc: img2AP,
        },
        {
            id: 3,
            imgSrc: img3AP,
        },
        {
            id: 4,
            imgSrc: img4AP,
        },
        {
            id: 5,
            imgSrc: img5AP,
        },
        {
            id: 6,
            imgSrc: img6AP,
        },
        {
            id: 7,
            imgSrc: img7AP,
        },
        {
            id: 8,
            imgSrc: img8AP,
        },
        {
            id: 9,
            imgSrc: img9AP,
        },
        {
            id: 10,
            imgSrc: img10AP,
        }
    ]
    
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg =(imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
      <>
      <div className={model? "model open" : "model"}>
            <img src={tempimgSrc} />
            <CloseIcon />
      </div>
        <h1 style={{textAlign:'center'}}>Actividad Piloto</h1>
        <div className="GaleriaAP">
            {data.map((item, index)=>{
                return(
                    <div className="imgs" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width: '100%'}} />
                    </div>
                )
            })}
        </div>
      </>
    );
  }