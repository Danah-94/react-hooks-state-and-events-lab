import React, { useState } from "react";

function Item({ name, category }) {
   
   const [add, setAdd] = useState(false);

   function AddToCart() {
       setAdd( add => !add)
   }

   const AddOrNot = add ? "in-cart" : "" ;
   const textColor = add? "white" : "black" ;
   const backgroundColor = add?  "rgb(210, 51, 210)" : "rgb(237, 237, 32)" ;
  
  return (
    <li className={AddOrNot}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={AddToCart} className="add" style={{ color: textColor, backgroundColor: backgroundColor }}>{ add ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
