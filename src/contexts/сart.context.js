import { createContext } from "react";

const CartContext = createContext({
	show: false,
	toggleShow: () => {}
})

export default CartContext