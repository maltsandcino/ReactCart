import './Card.css'
import { useContext, useEffect } from 'react'
import image from '../assets/product.gif'
import { CartContext } from "../CartContext";



function Card({ Item }) {
  const { cartContents, setCartContents, numberCartItems, setNumberCartItems } = useContext(CartContext);
  const imageSrc = Item?.image ?? image
  const numItems = cartContents[Item.id]
  
  function addItem(id) {
  setCartContents((prev) => {
    const updated = { ...prev };
    updated[id] = (updated[id] || 0) + 1;
    return updated;
  });
}

function removeItem(id) {
  setCartContents((prev) => {
    const updated = { ...prev };
    if (!updated[id] || updated[id] === 0) return updated;
    if (updated[id] === 1){
      delete updated[id];
      return updated
    }
    updated[id] -= 1;
    return updated;
  });
}

useEffect(() => {
  const total = Object.values(cartContents).reduce((sum, qty) => sum + qty, 0);
  setNumberCartItems(total);
}, [JSON.stringify(cartContents)]);

  return (<div className="productCard"><img className="productImage" src={imageSrc}></img><div className="productInformation">{Item.title}</div>
  <div className="itemSelection">
    <div className="cardAction" onClick={() => removeItem(Item.id)}>-</div><span className="cardAction">{numItems ?? 0}</span><div className="cardAction" onClick={() => addItem(Item.id)}>+</div>
  </div>
    </div>)}

export default Card