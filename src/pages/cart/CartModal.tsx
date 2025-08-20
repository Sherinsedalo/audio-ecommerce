import { CartContext } from "../../context/cart";
import { useContext } from "react";
import { QuantityButton } from "../../components/buttons/QuantityBtn";
import { Link } from "react-router-dom";

export function CartModal({ onClose }: { onClose: () => void }) {
    const cart = useContext(CartContext);
    if (!cart) return null;

    const handleSetQuantity = (id: string, newQuantity: number) => {
        cart.updateQuantity(id, newQuantity);
    }

    return (
        <div className="fixed inset-0 flex justify-center items-center font-manrope ">
            <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
                <button className="absolute top-2 right-2 text-gray cursor-pointer font-bold text-xl " onClick={onClose}>
                    &times;
                </button>
                <h2 className="text-md font-bold mb-4">Cart {cart.cartItems.length > 0 &&
                    (<button onClick={cart.clearCart} className="text-sm underline text-gray ml-4 cursor-pointer">Remove All</button>)}</h2>
                {cart.cartItems.length === 0 ? (<p className="lowercase">Your cart is empty ☹️ </p>) : (
                    <div>
                        <>
                            <ul>
                                {cart.cartItems.map(item => (
                                    <li key={item.id} className="flex justify-between items-center mb-2">
                                        <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                                        <div className="flex flex-col m-4 ">
                                            <span className="font-bold text-sm">{item.name}</span>
                                            <span className="text-[#B0B0B0] font-bold">$ {item.price}</span>
                                        </div>

                                        <QuantityButton quantity={item.quantity} setQuantity={q => handleSetQuantity(item.id, q)} />

                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 flex justify-between items-center text-lg">
                                <span className="uppercase text-gray">Total</span>
                                <span className="font-bold text-black">${cart.getCartTotal()}</span>
                            </div>
                            <Link to='/checkout' className="block mt-6 bg-[#D87D4A] text-white py-2 text-center font-semibold uppercase" onClick={onClose}>Checkout</Link>
                        </>

                    </div>
                )}
            </div>
        </div>
    )

}