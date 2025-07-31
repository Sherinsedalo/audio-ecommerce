import { Link } from "react-router-dom";
import { AddToCartBtn } from "../../buttons/AddToCartBtn";
import { QuantityButton } from "../../buttons/QuantityBtn";
import { useState } from "react";


type BoxItem = {
    quantity: string;
    item: string;

};

export function WirelessEarphones() {
    const [quantity, setQuantity] = useState(1);

    const handleResetQuantity = () => {
        setQuantity(1);
    }
    

    const boxItems: BoxItem[] = [
        { quantity: '2x', item: "Earphone unit" },
        { quantity: '6x', item: "Multi-size earplugs" },
        { quantity: '1x', item: "User manual", },
        { quantity: '1x', item: "USB-C charging cable" },
        { quantity: '1x', item: "travel pouch" },
    ];



    return (
        <div className="bg-[#F1F1F1] flex flex-col items-left font-manrope ">
            <Link to={'/earphones'} className="text-[#7D7D7D] text-md  mt-6 mb-4 ml-5 md:text-xl md:ml-9 md:mb-2  md:font-medium">
                Go Back
            </Link>
            <div className="flex flex-col items-start text-center px-6 md:px-9 gap-8 md:gap-6 lg:items-center  lg:gap-14">
                <div className="md:flex md:justify-center items-center lg:justify-start lg:items-start lg:max-w-2xl lg:gap-6 lg:px-0">
                    <picture>
                        <source media="(min-width: 1024px)" srcSet="/assets/product-yx1-earphones/desktop/image-product.jpg" />
                        <source media="(min-width: 768px)" srcSet="/assets/product-yx1-earphones/tablet/image-product.jpg" />
                        <img src="/assets/product-yx1-earphones/mobile/image-product.jpg" alt="Earphone model" className="rounded-lg w-full max-w-md md:max-w-full " />

                    </picture>
                    <div className=" flex flex-col items-left  text-left  lg:text-left gap-6">
                        <p className="uppercase font-light text-md text-[#D87D4A] md:text-xl tracking-widest">New product</p>
                        <h2 className="font-semibold text-4xl tracking-wide">YX1 Wireless Earphones</h2>
                        <p className="text-[#878787] leading-6 text-md font-light md:text-xl md:leading-7 max-w-lg lg:text-md md:max-w-full">    Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones.
                            Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.

                        </p>
                        <p className="font-bold tracking-wider"> $599</p>

                        <QuantityButton quantity={quantity} setQuantity={setQuantity} />


                        <AddToCartBtn product={{ id: 'yxi-wireless-earphones', name: 'YX1 Wireless Earphones', price: 599, quantity }} onAdd={handleResetQuantity} />


                    </div>
                </div>
                <div className="lg:w-1/2 flex flex-col items-left lg:items-start text-left  lg:text-left gap-7">
                    <h3 className="uppercase font-medium text-2xl md:text-3xl md:font-semibold">Features</h3>

                    <p className="text-[#878787] leading-6 text-md font-light md:text-xl md:leading-7 max-w-lg lg:max-w-full lg:text-md lg:leading-8">    Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics
                        designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with
                        the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and
                        truly immersive sound.

                        The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants
                        built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case,
                        giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in
                        an all new white and grey color scheme as well as the popular classic black.

                    </p>
                </div>
                <div className="flex flex-col  lg:items-start text-left lg:w-1/2 lg:text-left gap-5 lg:flex-row ">
                    <h4 className="uppercase text-2xl font-medium md:text-3xl md:font-semibold">In the box</h4>
                    <ul className="lg:ml-80">
                        {boxItems.map((item, index) => (
                            <li key={index}>
                                <span className="text-[#D87D4A] font-medium md:text-lg md:font-semibold">{item.quantity}</span>
                                <span className="text-[#878787] font-light ml-4 md:ml-6 md:text-lg md:tracking-wide">{item.item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2  px-6 md:px-9 mb-14 mt-9 max-w-6xl mx-auto md:items-center   ">
                <div className="lg:flex lg:flex-col lg:gap-6  ">
                    <picture >
                        <source media="(min-width: 1024px)" srcSet="/assets/product-yx1-earphones/desktop/image-gallery-1.jpg" />
                        <source media="(min-width: 768px)" srcSet="/assets/product-yx1-earphones/tablet/image-gallery-1.jpg" />
                        <img src="/assets/product-yx1-earphones/mobile/image-gallery-1.jpg" alt="Gallery image 1" className="w-full max-w-md rounded-lg mb-2 md:mb-5 md:mt-14 " />
                    </picture>
                    <picture>
                        <source media="(min-width: 1024px)" srcSet="/assets/product-yx1-earphones/desktop/image-gallery-2.jpg" />
                        <source media="(min-width: 768px)" srcSet="/assets/product-yx1-earphones/tablet/image-gallery-2.jpg" />
                        <img src="/assets/product-yx1-earphones/mobile/image-gallery-2.jpg" alt="Gallery image 2" className="w-full max-w-md rounded-lg" />
                    </picture>
                </div>
                <picture>
                    <source media="(min-width: 1024px)" srcSet="/assets/product-yx1-earphones/desktop/image-gallery-3.jpg" />
                    <source media="(min-width: 768px)" srcSet="/assets/product-yx1-earphones/tablet/image-gallery-3.jpg" />
                    <img src="/assets/product-yx1-earphones/mobile/image-gallery-3.jpg" alt="Gallery image 3" className="w-full max-w-md lg:h-full lg:object-cover rounded-lg" />
                </picture>
            </div>


        </div>
    )

}