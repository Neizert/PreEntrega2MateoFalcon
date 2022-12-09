import "./item.css"

import React from "react";
import redbull from "../../img/redbull.png";


const Item = ({info}) => {
    return(
        <a href="" className="producto">
            <img src={info.image} alt="" />
            <p>{info.title}</p>
        </a>
        
    )
}
export default Item;