import { SeeProductButton } from "../../buttons/ProductBtn";

export const Earphones = () => {
    return (
        <>
            <section className="bg-white">
                <div className="flex flex-col items-center justify-center gap-12 mt-3 font-manrope">
                    {/* Header */}
                    <div className="bg-[#101010] w-full h-20 flex items-center justify-center">
                        <h1 className="text-white uppercase text-3xl font-bold">Earphones</h1>
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col items-center text-center px-6 md:px-9 gap-8 md:gap-12 md:py-6 lg:flex-row lg:justify-center lg:items-center lg:max-w-7xl">
                        <img src="/assets/product-yx1-earphones/mobile/image-product.jpg" alt="Earphone model" className="rounded-lg w-full max-w-md lg:w-1/2" />
                        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                            <p className="uppercase font-light text-md text-[#D87D4A] tracking-widest">New product</p>
                            <h2 className="font-semibold text-4xl tracking-wide">YX1 wireless earphones</h2>
                            <p className="text-[#878787] md:text-lg md:leading-7 max-w-lg">  Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones.
                                Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
                                .</p>

                            <SeeProductButton to="/earphones/wirelessEarphones" variant="orange" />
                        </div>
                    </div>




                </div>
            </section>
        </>
    );
}