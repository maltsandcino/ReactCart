import './Nav.css'
import { Link} from 'react-router-dom';


let pages = ["home", "store", "cart"]

function Nav({ pageTitle, numberCartItems}) {
  return (
    <div className="full-width-flex-row">
      {pages.map((page) => (
<Link key={page} to={page} className={page}>
  <div className={`pageLink ${page === pageTitle ? 'active' : ''}`}>
    {page}
    {page === 'cart' && numberCartItems > 0 && (
      <span className="cart-count">✓</span>
    )}
  </div>
</Link>
))}

    </div>
  );
}

export default Nav