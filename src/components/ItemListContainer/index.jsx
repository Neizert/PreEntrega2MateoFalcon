import React, {useState, useEffect} from "react";
import Title from "../Title"
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import redbull from "../../img/redbull.png"
import alfajor from "../../img/alfajor.png"
import doritos from "../../img/doritos.png"

const productos = [
    { id:1, image: redbull, title:"Redbull"},
    { id:2, image: alfajor, title:"Alfajor"},
    { id:3, image: doritos, title:"Doritos"}

];


const ItemListContainer = () => {

    const [data,setData] = useState([]);
      
    useEffect(() =>{
        const getData = new Promise(resolver => {
            setTimeout(() => {
                 resolver(productos);
            }, 3000)
        });
        getData.then(res => setData(res));
    },[])
 
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <div>
        <Title saludo="Bienvenido a mi página"/>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        <ItemList data ={data}/>
        </div>
    );
};

export default ItemListContainer;