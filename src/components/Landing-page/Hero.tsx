import { SeeProductButton } from '../buttons/ProductBtn';

export function Hero() {

    return (
        <div className="flex flex-col  lg:items-start justify-center h-screen bg-[url('/assets/home/mobile/image-header.jpg')] md:bg-[url('/assets/home/tablet/image-header.jpg)] lg:bg-[url('/assets/home/desktop/image-hero.jpg')] bg-cover bg-center text-white text-center p-4 font-manrope">
            <div className="flex flex-col  lg:m-24 lg:w-lg gap-6 lg:items-start lg:text-left">
                <p className="uppercase text-2xl ld:leading-8 text-[#7D7D7D] tracking-wider">New product</p>
                <h1 className="font-bold text-5xl lg:text-9xl lg:font-bold"> XX99 Mark II Headphones</h1>
                <p className="font-extralight leading-8 text-lg"> Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                </p>
                <SeeProductButton to="/headphones/MarkTwoHeadphones" variant="orange" className=" w-40 lg:mx-0 lg:w-50 lg:text-xl" />

            </div>
        </div>
    )

}


