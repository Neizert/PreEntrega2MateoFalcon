import React,{useState,useEffect} from "react";
import ItemDetail from "../ItemDetail";
import redbull from "../../img/redbull.png"

const  producto = [
    { id:1, image: redbull, title:"Redbull"}
];

const ItemDetailContainer = () => {
   const [data,setData] = useState({});
    
   useEffect(() =>{
    const getData= new Promise(resolve =>{
        setTimeout(() =>{
            resolve(producto);
        }, 3000);
    })
    getData.then(res => setData(res));
   })

    return(
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer;