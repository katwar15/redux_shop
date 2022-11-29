import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Cart } from "../Card/Cart";
import {
  ProductModel,
  ProductsState,
  selectProducts,
} from "../Items/productsSlice";
import { Product } from "../Product/Product";
import "./Shop.css";

export function Shop() {
  const products: ProductModel[] = useAppSelector(selectProducts);

  return (
    <div>
      <Cart />
      <div className="list">
        {products.map((product, key) => (
          <Product
            key={key}
            name={product.name}
            id={product.id}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
