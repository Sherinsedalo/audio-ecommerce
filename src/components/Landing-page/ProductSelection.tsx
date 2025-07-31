import { ProductCategories } from '../Products/ProductCategories';
import { SeeProductButton } from '../buttons/ProductBtn';


export function ProductSelection() {


    return (
        <div>

            <ProductCategories />

            <section className='bg-[#f1f1f1] flex flex-col items-center justify-center gap-6 p-4 font-manrope uppercase '>
                {/* first speakers section */}
                <div className='bg-[url(/assets/home/desktop/pattern-circles.svg)] bg-[#D87D4A] bg-no-repeat bg-cover bg-center  flex flex-col items-center justify-center text-white text-center gap-4 p-6 rounded-lg md:w-xl md:h-lg '>
                    <img src='/assets/home/mobile/image-speaker-zx9.png' alt='speaker model' className='w-32 h-40 md:w-40 md:h-50 object-contain' />
                    <h2 className='text-4xl text-[#f1f1f1] font-semibold'>ZX9 speaker</h2>
                    <p className='lowercase font-medium text-sm leading-7'> Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <SeeProductButton to='/speakers/ZxSevenSpeaker' variant='primary' />
                </div>

                {/* second speaker section */}
                <div className='rounded-lg flex flex-col items-start justify-center p-6 bg-[url(/assets/home/mobile/image-speaker-zx7.jpg)]  h-80 w-96 bg-cover bg-center  md:w-xl md:h-lg object-contain'>
                    <h2 className='text-4xl text-[#101010] font-semibold'>ZX7 speaker</h2>
                    <SeeProductButton to='/speakers/ZxSevenSpeaker' variant='secondary' />
                </div>

                {/* earphones section*/}

                <div className='rounded-lg w-96 h-80 bg-cover bg-center bg-[url(/assets/home/mobile/image-earphones-yx1.jpg)] md:w-xl md:h-lg  '>
                </div>
                <div className='flex flex-col items-center justify-center pt-6'>
                    <h2 className='text-4xl text-[#101010] font-semibold'>YX1 earphones</h2>
                    <SeeProductButton to='/earphones/wirelessEarphones' variant='secondary' />
                </div>
            </section>
        </div>

    )
}
