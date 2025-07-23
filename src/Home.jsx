import storeHero from "./assets/storeimage.webp";
import './Home.css'
import Card from './subcomponents/Card'

import { useContext, useState } from 'react';
import { ProductContext } from './ProductContext';

function Home() {

  const { storeItems, loading, fetchError } = useContext(ProductContext);
  const [productNumbers, setProductNumbers] = useState([0, 1, 2, 3, 4])

  function lowerNumbers(){
    if(productNumbers[0] == 0){
      return
    }
    setProductNumbers((prev) => prev.map((num) => num - 1))
  }

  function raiseNumbers(){
    setProductNumbers((prev) => prev.map((num) => num + 1))
  }

  return (
  <>
    {loading ? (
      <div>Loading...</div>
    ) : (
      <>
        <div className="storeHero" style={{ backgroundImage: `url(${storeHero})` }}>
          <h1 className="storeTitle">Ermazern</h1>
        </div>
        <div>
          <h2>What's Popular...</h2>
          <h4>Check out what other people are buying...</h4>
        </div>
        <div className="scroller">
          <div onClick={lowerNumbers}>&laquo;</div>
          {productNumbers.map((item) => (
            <Card Item={storeItems[item]} key={item} />
          ))}
          <div onClick={raiseNumbers}>&raquo;</div>
        </div>
      </>
    )}
    </>
  )
}

export default Home