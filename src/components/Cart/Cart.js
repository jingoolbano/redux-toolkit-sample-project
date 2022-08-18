import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartItems.items);

  return (
    <>
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartItems.map((product) => (
            <CartItem
              key={product.id}
              item={{
                title: product.title,
                quantity: product.quantity,
                total: product.totalPrice,
                price: product.price,
                id: product.id,
              }}
            />
          ))}
        </ul>
      </Card>
    </>
  );
};

export default Cart;
