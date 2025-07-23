import { useContext } from "react";
import { CartContext } from "../../context/cart";

export const CartPage = () => {
    const cartContext = useContext(CartContext);

    if (!cartContext) {
        return <div>Loading...</div>;
    }

    const { cartItems, removeFromCart, clearCart, getCartTotal } = cartContext;

    return (
        <div className="bg-[#F1F1F1] flex flex-col items-center p-6 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id} className="flex justify-between items-center mb-2">
                                <span>{item.name} - ${item.price} x {item.quantity}</span>
                                <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <strong>Total: ${getCartTotal()}</strong>
                    </div>
                    <button onClick={clearCart} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Clear Cart</button>
                </div>
            )}
        </div>
    );
};