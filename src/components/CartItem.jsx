import React from "react";
import { formatPrice, generateAmountOptions } from "../utils";
import { removeItem, editItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ cartItem }) => {
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;

  return <article className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">

<img src={image} alt={title} classNme="" />
  </article>
};

export default CartItem;
