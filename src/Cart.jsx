import { useContext } from 'react';
import { CartContext } from './CartContext';
import { ProductContext } from './ProductContext';
import Card from './subcomponents/Card'
import './Cart.css'


function Cart() {
const { cartContents, numberCartItems, setNumberCartItems } = useContext(CartContext);
const { storeItems, loading, fetchError } = useContext(ProductContext);
const total = Object.entries(cartContents).reduce((sum, [id, qty]) => {
  return sum + storeItems[id - 1].price * qty;
}, 0);

  return (
    <>
      
      <div className="cartHolder">
        <div className="flexCol">
          <h3>Your Cart</h3>
          <p className="left">Items currently in your cart:</p>
          <div className="itemsInCart">
          {Object.keys(cartContents).map((item) => <Card Item={storeItems[item - 1]} key={item} />)}
          </div>
        </div>
        <div className="toCheckout">
          <p className="cartTitle">Cart Details: </p>
          <p>Items: {numberCartItems}</p>
          <p>Value: ${total}.00 </p>
          <button>Click here To Pay</button>

        </div>

      </div>
      
    </>
  )
}

export default Cart