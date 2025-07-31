import { Link } from "react-router-dom";
import { AddToCartBtn } from "../../buttons/AddToCartBtn";
import { QuantityButton } from "../../buttons/QuantityBtn";
import { useState } from "react";


type BoxItem = {
    quantity: string;
    item: string;

};

export function ZxNineSpeaker() {
    const [quantity, setQuantity] = useState(1);
    
    const handleResetQuantity = () => {
        setQuantity(1);
    }

    const boxItems: BoxItem[] = [
        { quantity: '2x', item: "Speaker Unit" },
        { quantity: '2x', item: "Speaker cloth panel" },
        { quantity: '1x', item: "User manual", },
        { quantity: '1x', item: "3.5mm 10m audio cable" },
        { quantity: '1x', item: "10m optical cable" }
    ];



    return (
        <div className="bg-[#F1F1F1] flex flex-col items-left font-manrope ">
            <Link to={'/speakers'} className="text-[#7D7D7D] text-md  mt-6 mb-4 ml-5 md:text-xl md:ml-9 md:mb-2  md:font-medium">
                Go Back
            </Link>
            <div className="flex flex-col items-start text-center px-6 md:px-9 gap-8 md:gap-6 lg:items-center  lg:gap-14">
                <div className="md:flex md:justify-center items-center lg:justify-start lg:items-start lg:max-w-2xl lg:gap-6 lg:px-0">
                    <picture>
                        <source media="(min-width: 1024px)" srcSet="/assets/product-zx9-speaker/desktop/image-product.jpg" />
                        <source media="(min-width: 768px)" srcSet="/assets/product-zx9-speaker/tablet/image-product.jpg" />
                        <img src="/assets/product-zx9-speaker/mobile/image-product.jpg" alt="Speaker model" className="rounded-lg w-full max-w-md md:max-w-full " />

                    </picture>
                    <div className=" flex flex-col items-left  text-left  lg:text-left gap-6">
                        <p className="uppercase font-light text-md text-[#D87D4A] md:text-xl tracking-widest">New product</p>
                        <h2 className="font-semibold text-4xl tracking-wide">  ZX9 Speaker</h2>
                        <p className="text-[#878787] leading-6 text-md font-light md:text-xl md:leading-7 max-w-lg lg:text-md md:max-w-full">    Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker
                            system that offers truly wireless connectivity -- creating new possibilities for more
                            pleasing and practical audio setups. </p>
                        <p className="font-bold tracking-wider">$4,500</p>

                        <QuantityButton quantity={quantity} setQuantity={setQuantity} />


                        <AddToCartBtn product={{ id: 'zxNineSpeaker', name: 'ZX9 Speaker', price: 4500, quantity }} onAdd={handleResetQuantity} />


                    </div>
                </div>
                <div className="lg:w-1/2 flex flex-col items-left lg:items-start text-left  lg:text-left gap-7">
                    <h3 className="uppercase font-medium text-2xl md:text-3xl md:font-semibold">Features</h3>

                    <p className="text-[#878787] leading-6 text-md font-light md:text-xl md:leading-7 max-w-lg lg:max-w-full lg:text-md lg:leading-8"> Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial,
                        USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices
                        connected for easy switching. Improved bluetooth technology offers near lossless audio quality at
                        up to 328ft (100m).

                        Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm
                        tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass
                        unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you
                        will experience new sensations from old songs since it can respond to even the subtle waveforms.


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
                        <source media="(min-width: 1024px)" srcSet="/assets/product-zx9-speaker/desktop/image-gallery-1.jpg" />
                        <source media="(min-width: 768px)" srcSet="/assets/product-zx9-speaker/tablet/image-gallery-1.jpg" />
                        <img src="/assets/product-zx9-speaker/mobile/image-gallery-1.jpg" alt="Gallery image 1" className="w-full max-w-md rounded-lg mb-2 md:mb-5 md:mt-14 " />
                    </picture>
                    <picture>
                        <source media="(min-width: 1024px)" srcSet="/assets/product-zx9-speaker/desktop/image-gallery-2.jpg" />
                        <source media="(min-width: 768px)" srcSet="/assets/product-zx9-speaker/tablet/image-gallery-2.jpg" />
                        <img src="/assets/product-zx9-speaker/mobile/image-gallery-2.jpg" alt="Gallery image 2" className="w-full max-w-md rounded-lg" />
                    </picture>
                </div>
                <picture>
                    <source media="(min-width: 1024px)" srcSet="/assets/product-zx9-speaker/desktop/image-gallery-3.jpg" />
                    <source media="(min-width: 768px)" srcSet="/assets/product-zx9-speaker/tablet/image-gallery-3.jpg" />
                    <img src="/assets/product-zx9-speaker/mobile/image-gallery-3.jpg" alt="Gallery image 3" className="w-full max-w-md lg:h-full lg:object-cover rounded-lg" />
                </picture>
            </div>


        </div>
    )

}