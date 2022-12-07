import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { AlertList } from "../Alert/AlertList";

import { Cart } from "../Card/Cart";
import {
  loadProducts,
  ProductModel,
  selectIsLoading,
  selectSearchResults,
  sortProducts,
} from "../Product/productsSlice";
import { Product } from "../Product/Product";
import "./Shop.css";
import { useEffect } from "react";

export function Shop() {
  const products: ProductModel[] = useAppSelector(selectSearchResults);
  const dispatch = useAppDispatch();

  const loading: boolean = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <div className="position-relative">
      <Cart />
      <div className="container pt-5">
        {loading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        ) : (
          <div>
            <div className="mb-3">
              <strong className="me-2">Filters:</strong>

              <button
                onClick={() => dispatch(sortProducts("asc"))}
                className="btn btn-light"
              >
                <i className="bi bi-sort-alpha-down"></i>
              </button>
            </div>

            <div>
              <button
                onClick={() => dispatch(sortProducts("desc"))}
                className="btn btn-light"
              >
                <i className="bi bi-sort-alpha-down-alt"></i>
              </button>
            </div>

            <div className="products-list mb-5">
              {products.map((product, key) => (
                <Product key={key} product={product} />
              ))}
            </div>
          </div>
        )}
        <AlertList />
      </div>
    </div>
  );
}
