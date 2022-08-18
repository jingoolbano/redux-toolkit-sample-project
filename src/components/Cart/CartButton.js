import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const badgeNum = useSelector((state) => state.cartItems.totalQuantity);

  const toggleShowHandler = () => {
    dispatch(cartActions.toggleShow());
  };

  return (
    <button className={classes.button} onClick={toggleShowHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{badgeNum}</span>
    </button>
  );
};

export default CartButton;
