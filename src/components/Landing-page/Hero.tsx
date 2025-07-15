import { Link } from "react-router-dom";
export function Hero() {

    return (
        <div className="flex flex-col items-center justify-center gap-9 h-screen bg-[url('src/assets/home/desktop/image-hero.jpg')] bg-cover bg-center text-white text-center p-4 font-manrope">
            <p className="uppercase text-xl text-[#]">New product</p>
            <h1 className="font-bold text-5xl"> XX99 Mark II Headphones</h1>
            <p className="font-light leading-8 text-lg "> Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <Link to="/headphones" className="text-white bg-[#D87D4A] hover:bg-[#FBAF85]rounded-sm px-6 py-3 mt-4 transition-colors duration-300 uppercase">
                See product
            </Link>
        </div>
    )

}



