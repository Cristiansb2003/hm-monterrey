import React,{useState} from "react"; 
import "./actimg.css";
const Images = [
  {img1AP: require ('./../../utils/actividad-piloto/img1AP.jpg').default}
]

export function ActImg() {
    const[selectedImg, setSelectedImg] = useState(Images[0]);

    return (
      <div className="Galeria">
        <div className="container">
            <img src={selectedImg} alt="Seleccionada" className="selected" />
            <div className="imgContainer">
                {Images.map((img, index) => (
                    <img 
                    key={index} 
                    src={img} 
                    alt="grupo" 
                    onClick={() => setSelectedImg(img)}
                    />
                ))}
            </div>
        </div>
      </div>
    );
  }