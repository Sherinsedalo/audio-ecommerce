import { createContext, useState, useEffect } from "react";

type CartContextType = {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
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
    image: string;
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
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
                )
            );

        } else {
            setCartItems([...cartItems, { ...item }]);
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
    const updateQuantity = (id: string, quantity: number) => {
        setCartItems(prev => prev
            .map(item => item.id === id ? { ...item, quantity } : item)
            .filter(item => item.quantity > 0));
    }

    const clearCart = () => {
        setCartItems([]);
    };
    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    }


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal }}> {children}</CartContext.Provider>

    )
};