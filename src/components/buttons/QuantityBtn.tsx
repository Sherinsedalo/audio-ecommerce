type QuantityBtnProps = {
    quantity: number;
    setQuantity: (q: number) => void;
}

export function QuantityButton({ quantity, setQuantity }: QuantityBtnProps) {

    const increment = () => {
        setQuantity(quantity + 1);
    }

    const decrement = () => {
        setQuantity(Math.max(0, quantity - 1));
    }

    return (
        <div className="px-6 py-3 mt-4 transition-colors duration-300 uppercase bg-[#F1F1F1] text-[#B5B5B5] ">
            <button onClick={decrement} >-</button>
            <span className="text-[#101010] font-semibold text-center">{quantity}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}
