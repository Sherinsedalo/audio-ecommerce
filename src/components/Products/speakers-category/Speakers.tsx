import { SeeProductButton } from "../../buttons/ProductBtn";

export const Speakers = () => {
    return (
        <>
            <section className="bg-white">
                <div className="flex flex-col items-center justify-center gap-12 mt-3 font-manrope">
                    {/* Header */}
                    <div className="bg-[#101010] w-full h-20 flex items-center justify-center">
                        <h1 className="text-white uppercase text-3xl font-bold">Speakers</h1>
                    </div>

                    {/* First Speaker*/}
                    <div className="flex flex-col items-center text-center px-6 md:px-9 gap-8 md:gap-12 md:py-6 lg:flex-row lg:justify-center lg:items-center lg:max-w-7xl">
                        <img src="/assets/product-zx9-speaker/mobile/image-product.jpg" alt="Speaker model" className="rounded-lg w-full max-w-md lg:w-1/2" />
                        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                            <p className="uppercase font-light text-md text-[#D87D4A] tracking-widest">New product</p>
                            <h2 className="font-semibold text-4xl tracking-wide">ZX9 speaker</h2>
                            <p className="text-[#878787] md:text-lg md:leading-7 max-w-lg">  Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker
                                system that offers truly wireless connectivity -- creating new possibilities for more
                                pleasing and practical audio setups.</p>

                            <SeeProductButton to="/speakers" variant="orange" />
                        </div>
                    </div>

                    {/* Second Speaker */}
                    <div className="flex flex-col items-center text-center px-6 md:px-9 gap-8 md:gap-12 md:py-6 lg:flex-row-reverse lg:justify-center lg:items-center lg:max-w-7xl">
                        <img src="/assets/product-zx7-speaker/mobile/image-product.jpg" alt="Headphone model" className="rounded-lg w-full max-w-md lg:w-1/2" />
                        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                            <p className="uppercase font-light text-md text-[#D87D4A] tracking-widest">New product</p>
                            <h2 className="font-semibold text-4xl tracking-wide">ZX7 speaker</h2>
                            <p className="text-[#878787] md:text-lg md:leading-7 max-w-lg">  Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses
                                high-end audiophile components that represents the top of the line powered speakers for
                                home or studio use.</p>

                            <SeeProductButton to="/speakers" variant="orange" />
                        </div>
                    </div>


                </div>
            </section>
        </>
    );
}