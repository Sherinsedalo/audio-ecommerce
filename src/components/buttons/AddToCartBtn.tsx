import { useContext } from "react";
import { CartContext } from "../../context/cart";
import type { CartItem } from "../../context/cart";

export function AddToCartBtn({ product}: { product: CartItem }) {
    const cart = useContext(CartContext);

    if (!cart) return null;

    const handleAddToCart = () => {
        cart.addToCart(product);
    };

    return (
        <button
            onClick={handleAddToCart}
            className="px-6 py-3 mt-4 text-white bg-[#D87D4A] hover:bg-[#FBAF85] transition-colors duration-300 uppercase"
        >
            Add to cart
        </button>
    );
}
