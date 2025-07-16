export function AboutUs() {
    return (
        <div className="flex flex-col lg:flex-row-reverse lg:gap-19 items-center justify-center text-center p-6 gap-6 bg-[#f1f1f1] font-manrope">
            <picture>
                <source srcSet="src/assets/shared/desktop/image-best-gear.jpg"
                    media="(min-width:1024px)" />
                <source srcSet="src/assets/shared/tablet/image-best-gear.jpg"
                    media="(min-width:768px)" />

                <img
                    src="src/assets/shared/mobile/image-best-gear.jpg"
                    alt="Man with headphones on"
                    className="w-full h-64 object-cover rounded-lg mb-6 lg:size-max"
                />
            </picture>

            <div className=" lg:flex lg:flex-col lg:w-md lg:items-center  lg:text-left gap-4 pl-6">
                <h2 className="text-4xl font-semibold mb-4 uppercase text-[#101010]">Bringing you the <span className="text-[#D87D4A]">best</span> audio gear</h2>
                <p className="text-sm leading-7 tracking-wide text-center max-w-2xl text-[#7D7D7D]">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
                    rooms available for you to browse and experience a wide range of our products. Stop by our store
                    to meet some of the fantastic people who make Audiophile the best place to buy your portable
                    audio equipment.
                </p>
            </div>
        </div>
    );
}   