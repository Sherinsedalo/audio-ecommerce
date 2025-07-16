import { SeeProductButton } from "../../buttons/ProductBtn";

export const Headphones = () => {
    return (
        <>
            <section className="bg-white">
                <div className="flex flex-col items-center justify-center gap-12 mt-3 font-manrope">
                    {/* Header */}
                    <div className="bg-[#101010] w-full h-20 flex items-center justify-center">
                        <h1 className="text-white uppercase text-3xl font-bold">Headphones</h1>
                    </div>

                    {/* First headphone */}
                    <div className="flex flex-col items-center text-center px-6 md:px-9 gap-8 md:gap-12 md:py-6 lg:flex-row lg:justify-center lg:items-center lg:max-w-7xl">
                        <img src="src/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg" alt="Headphone model" className="rounded-lg w-full max-w-md lg:w-1/2" />
                        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                            <p className="uppercase font-light text-md text-[#D87D4A] tracking-widest">New product</p>
                            <h2 className="font-semibold text-4xl tracking-wide">XX99 Mark II Headphones</h2>
                            <p className="text-[#878787] md:text-lg md:leading-7 max-w-lg">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                           
                            <SeeProductButton to="/headphones" variant="orange" />
                        </div>
                    </div>

                    {/* Second headphone - image on right for desktop */}
                    <div className="flex flex-col items-center text-center px-6 md:px-9 gap-8 md:gap-12 md:py-6 lg:flex-row-reverse lg:justify-center lg:items-center lg:max-w-7xl">
                        <img src="src/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg" alt="Headphone model" className="rounded-lg w-full max-w-md lg:w-1/2" />
                        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                            <p className="uppercase font-light text-md text-[#D87D4A] tracking-widest">New product</p>
                            <h2 className="font-semibold text-4xl tracking-wide">XX99 Mark I Headphones</h2>
                            <p className="text-[#878787] md:text-lg md:leading-7 max-w-lg">As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
                            
                            <SeeProductButton to="/headphones" variant="orange" />
                        </div>
                    </div>

                    {/* Third headphone */}
                    <div className="flex flex-col items-center text-center px-6 md:px-9 gap-8 md:gap-12 md:py-6 lg:flex-row lg:justify-center lg:items-center lg:max-w-7xl">
                        <img src="src/assets/product-xx59-headphones/mobile/image-product.jpg" alt="Headphone model" className="rounded-lg w-full max-w-md lg:w-1/2" />
                        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                            <p className="uppercase font-light text-md text-[#D87D4A] tracking-widest">New product</p>
                            <h2 className="font-semibold text-4xl tracking-wide">XX59 Headphones</h2>
                            <p className="text-[#878787] md:text-lg md:leading-7 max-w-lg">Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
                            
                            <SeeProductButton to="/headphones" variant="orange" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}