import "./itemDetail.css";

import React from "react";

const ItemDetail = ({data}) => {
    return(
        <div className="container">
            <div className="detail">
                <img  className="detail__image" src={data.image} alt="" />
            </div>
            <div className="content">
              <h1>{data.title}</h1>
            </div>
        </div>
    )
}

export default ItemDetail;