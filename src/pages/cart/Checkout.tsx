import { useContext, useState } from "react";
import { CartContext } from "../../context/cart";
import { Link } from "react-router-dom";


export const Checkout = () => {

    const cart = useContext(CartContext);

    const [form, setForm] = useState(
        {
            name: '',
            phoneNumber: '',
            address: '',
            email: '',
            zipCode: '',
            city: '',
            country: '',
            payment: 'card',
            cardNumber: ''
        });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        alert('Order placed!');
        cart?.clearCart();
    }

    if (!cart) return null;

    return (
        <div className="bg-[#FAFAFA] font-manrope">
            <Link to={'/'} className="text-[#7D7D7D] text-md  mt-6 mb-4 ml-5 md:text-xl md:ml-9 md:mb-2  md:font-medium">
                Go Back
            </Link>

            <div className="max-w-lg mx-auto p-6 bg-white rounded shadow">
                <h1 className="font-bold text-xl">Checkout</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <h2 className="uppercase text-sm font-semibold  text-[#D87D4A]">Billing details</h2>
                    <label>Name</label>
                    <input
                        placeholder="Enter your name"
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required
                    />
                    <label> Email address</label>
                    <input
                        placeholder="enter your email Address"
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required
                    />
                    <label>Phone Number</label>
                    <input
                        placeholder="Phone number"
                        name='phoneNumber'
                        value={form.phoneNumber}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required
                    />
                    <h2 className="uppercase text-sm font-semibold  text-[#D87D4A]">Shipping details</h2>

                    <label>Your address</label>
                    <input
                        placeholder=""
                        name='address'
                        value={form.address}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required
                    />
                    <label>ZIP Code</label>
                    <input
                        placeholder='10002'
                        name='zipCode'
                        value={form.zipCode}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required
                    />
                    <label>City</label>
                    <input
                        placeholder='City'
                        name='city'
                        value={form.city}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required
                    />

                    <label>Country</label>
                    <input
                        placeholder='Country'
                        name='country'
                        value={form.country}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required
                    />
                    <div>
                        <h2>Payment Details</h2>
                        <p>Payment Method</p>
                        <div >
                            <label>Card</label>
                            <input type="radio" name="payment" value='card' checked={form.payment === 'card'} onChange={handleChange} />

                            {form.payment === 'card' && (
                                <div className="flex flex-col gap-2">

                                    <label>Card Number</label>
                                    <input name="cardNumber" placeholder="123-456-778" type="number" value={form.cardNumber} onChange={handleChange} required={form.payment === 'card'} />

                                </div>
                            )}

                            <input type="radio" name="payment" value='cash' checked={form.payment === 'cash'} onChange={handleChange} />
                            <label>Cash on delivery</label>

                        </div>
                    </div>
                </form>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Summary</h2>
                    <ul>
                        {cart.cartItems.map(item => (

                            <li key={item.id}>
                                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                                <div className="flex flex-col m-4 ">
                                    <span className="font-bold text-sm">{item.name}</span>
                                    <span className="text-[#B0B0B0] font-bold">$ {item.price}  </span>
                                </div>
                                x {item.quantity}
                            </li>


                        ))}

                    </ul>

                    <div className="font-bold mt-2">Total ${cart.getCartTotal()}</div>
                    <button onClick={handleSubmit} className=" mt-6 bg-[#D87D4A] text-white py-2 text-center font-semibold uppercase w-full">Continue & pay</button>
                </div>
            </div>

        </div >
    )
}