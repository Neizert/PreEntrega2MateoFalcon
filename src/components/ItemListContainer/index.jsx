import React from "react";
import Title from "../Title"
import ItemCount from "../ItemCount";

const ItemListContainer = () => {
 
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <div>
        <Title saludo="Bienvenido a mi página"/>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </div>
    );
};

export default ItemListContainer;