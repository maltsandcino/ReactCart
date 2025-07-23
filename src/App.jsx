import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom';
import './App.css'
import Nav from "./subcomponents/Nav"
import { CartContext } from './CartContext'
import { ProductContext } from './ProductContext'

function App() {
  const [currentPage, setCurrentPage] = useState("Home")
  const [cartContents, setCartContents] = useState({})
  const [numberCartItems, setNumberCartItems] = useState(0)
  const [storeItems, setStoreItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState(false)
  const location = useLocation();

  useEffect(() => {
  const url = "https://fakestoreapi.in/api/products?limit=150"

  fetch(url)
  .then(res => res.json())
  .then(res => {setStoreItems(res.products)
  setLoading(false)})
  .catch(err => {
    console.error("fetching error: ", err)
    setLoading(false);
    setFetchError(true)
  })
  }, [])

  useEffect(() => {
    const path = location.pathname;

    const pageMap = {
      '/': 'home',
      '/home': 'home',
      '/cart': 'cart',
      '/store': 'store',
    };

    setCurrentPage(pageMap[path] || 'Unknown Page');

    return () => {
    }
  }, [location]);

  return (
  <>
    <ProductContext.Provider value={{ storeItems, loading, fetchError }}>
      <CartContext.Provider
        value={{ cartContents, setCartContents, numberCartItems, setNumberCartItems }}
      >
        <div className="appWrapper">
          <Nav pageTitle={currentPage} numberCartItems={numberCartItems} />

          {loading ? (
            <div>Loading...</div>
          ) : fetchError ? (
            <div>Error Loading Data. Check your internet connection.</div>
          ) : (
            <>
              <div className="mainContent">
                <Outlet />
              </div>
              <footer className="footer">
                <div className="footerInfo">
                  <p>Location</p>
                  <p>100 Store St.</p>
                  <p>Seattle, Wa.</p>
                </div>
                <div className="footerInfo">
                  <p>Opening Hours</p>
                  <p>Mon - Fri: 10am - 8pm</p>
                  <p>Sat: 10am - 10pm</p>
                </div>
                <div className="footerInfo">
                  <a href="#">Careers</a>
                  <a href="#">About</a>
                  <a href="#">Contact</a>
                </div>
              </footer>
            </>
          )}
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  </>
);
}

export default App
