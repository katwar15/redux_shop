import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addNotification } from "../Alert/alertsSlice";
import {
  decrementQuantity,
  incrementQuantity,
  Item,
  removeItem,
  selectIsDisplayed,
  selectItemQuantity,
  selectItems,
  selectItemTotal,
} from "../cart/cartSlice";
import "./Cart.css";

export function Cart() {
  const quantity: number = useAppSelector(selectItemQuantity);
  const total: number = useAppSelector(selectItemTotal);
  const items: Item[] = useAppSelector(selectItems);
  const dispatch = useAppDispatch();
  const isDisplayed: boolean = useAppSelector(selectIsDisplayed);

  const handleRemoveClick = (id: string) => {
    dispatch(removeItem(id));
    dispatch(
      addNotification({
        message: "Produkt został usunięty z koszyka.",
        type: "info",
      })
    );
  };

  const renderRemoveButton = (id: string) => {
    return <button onClick={() => handleRemoveClick(id)}>Remove</button>;
  };

  return (
    <>
      <div
        id="cart"
        className={
          "card position-absolute top-0 end-0 z-index-1 w-25 " +
          (isDisplayed ? "d-block" : "d-none")
        }
      >
        <ul className="list-group list-group-flush">
          {items.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {item.name} {item.price}
              <span>
                <button
                  className="btn btn-light"
                  onClick={() => dispatch(decrementQuantity(item.id))}
                >
                  -
                </button>
                ({item.quantity})
                <button
                  className="btn btn-light"
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  +
                </button>
                {renderRemoveButton(item.id)}
              </span>
            </li>
          ))}
        </ul>

        <div className="card-footer d-flex justify-space-between">
          <span>Total:</span> <strong>{total} PLN</strong>
        </div>
      </div>
    </>
  );
}
