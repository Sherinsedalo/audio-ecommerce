import { createContext, useState, useEffect } from "react";

type CartContextType = {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    getCartTotal: () => number;
};
type CartProviderProps = {
    children: React.ReactNode;
};

export type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const saved = localStorage.getItem('cartItems');
        return saved ? JSON.parse(saved) : [];
    }
    );


    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);


    const addToCart = (item: CartItem) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
        if (isItemInCart) {
            setCartItems(
                cartItems.map(cartItem =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                )
            );

        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }



    };

    const removeFromCart = (id: string) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === id);

        if (!isItemInCart) return;

        if (isItemInCart.quantity === 1) {
            setCartItems(cartItems.filter(cartItem => cartItem.id !== id));
        }
        else {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
                ));
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };
    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    }


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getCartTotal }}> {children}</CartContext.Provider>

    )
};