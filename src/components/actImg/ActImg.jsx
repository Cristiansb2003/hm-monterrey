import React,{ useState } from "react"; 
import "./actimg.css";
import Images from './../../utils/images.jsx';
import Masonry from './Masonry.js';

export function ActImg() {

    return (
      <div>
        <Masonry Images={Images} columnCount="3" gap="5"></Masonry>
      </div>
    );
}