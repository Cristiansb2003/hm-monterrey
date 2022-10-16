import React, { useState } from "react";

export default function Masonry(props) {
    console.log(props);
    return(
        <div style= {{columns: props.ColumnCount, columnGap: 0}}>
            {props.Images.map((img, i) =>
                <img src={img.img} key={i} className="image" style= {{padding: props.gap/2}} />
            )}
        </div>
    )
}