
import { Link , NavLink} from "react-router-dom";
import "./header.css";
import { useSelector } from "react-redux";


export const Header = () => {
  const cartList = useSelector (state => state.cartState.cartList)

  return (
    <header>
        <Link to="/" className="logo-class">
            <img src="/assets/logo.png" alt="Shopmate Logo" />
            <span>Redux Cart</span>
        </Link>
        <nav >
            <NavLink to='/' className="link " end> Home</NavLink>
            <NavLink to="/cart" className="link">Cart</NavLink>
        </nav>

        <Link to="/cart">
            <span>
                Cart: {cartList.length}
            </span>
        </Link>
    


    </header>
  )
}
