import { useContext, useState } from 'react';
import { ProductContext } from './ProductContext';
import Card from "./subcomponents/Card"
import "./Store.css"

function Store() {
  const categories = ["tv", "audio", "laptop", "mobile", "gaming", "appliances"]
  const { storeItems, loading, fetchError } = useContext(ProductContext);
  const [currentCategory, setCurrentCategory] = useState("tv")
  const currentGroup = storeItems.filter((item) => item.category === currentCategory)

function capitalizeFirstLetter(str) {
  if (!str) return ''; 
  return str.charAt(0).toUpperCase() + str.slice(1);
}

  return (
    <>
      <div className="storeWrapper">
        <div className="storeNav">
          <p>Categories</p>
          {categories.map((cat) => (
            <a className="category" onClick={() => setCurrentCategory(cat)}>{capitalizeFirstLetter(cat)}</a>
          ))
          }
        </div>
        <div className="storeItems">Currently Browsing: {capitalizeFirstLetter(currentCategory)} <br></br>
        {loading ? (
            <div>Loading...</div>
          ) : fetchError ? (
            <div>Error Loading Data. Check your internet connection.</div>
          ) : (
        <div className="itemsContainer">
          {currentGroup.map((item) => <Card Item={item} key={item.id} />)}
        </div>
          )}
        </div>
        
        </div>
      
    </>
  )
}

export default Store