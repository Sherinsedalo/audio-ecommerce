type QuantityBtnProps = {
    quantity: number;
    setQuantity: (q: number) => void;
    id?: string;
}

export function QuantityButton({ quantity, setQuantity }: QuantityBtnProps) {

    const increment = () => {
        setQuantity(quantity + 1);
    }

    const decrement = () => {
        setQuantity(Math.max(0, quantity - 1));
    }

    return (
        <div className=" flex items-center justify-center gap-4 rounded-lg px-6 py-3 mt-4 bg-[#F1F1F1] text-[#B5B5B5] ml-2 ">
            <button onClick={decrement} className="w-8 h-8 flex items-center  justify-center text-xl font-bold ">-</button>
            <span className="text-[#101010] text-md justify-center font-semibold">{quantity}</span>
            <button onClick={increment} className="w-8 h-8 flex items-center justify-center text-xl font-bold ">+</button>
        </div>
    )
}
