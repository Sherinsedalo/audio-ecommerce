import { useContext } from "react";
import { CartContext } from "../../context/cart";
import type { CartItem } from "../../context/cart";

type AddToCartBtnProps = {
    product: CartItem;
    onAdd?: () => void;
};

export function AddToCartBtn({ product, onAdd }: AddToCartBtnProps) {
    const cart = useContext(CartContext);

    if (!cart) return null;

    const handleAddToCart = () => {
        cart.addToCart(product);
        if (onAdd) onAdd();
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
