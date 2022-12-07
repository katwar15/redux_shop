import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleCart } from "../cart/cartSlice";
import { ProductSearch } from "../Product/ProductSearch";

export function Navbar() {
  const dispatch = useAppDispatch();

  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="./">
          Navbar
        </a>
        <ProductSearch></ProductSearch>
        <button
          className="btn btn-warning"
          onClick={() => dispatch(toggleCart())}
        >
          Cart
        </button>
      </div>
    </nav>
  );
}
