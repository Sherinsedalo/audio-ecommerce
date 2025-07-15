import { Link } from 'react-router-dom';

export function ProductSelection() {
    type ProductItem = {
        image: string;
        title: string;
        btnLink: string;
    }

    const productItems: ProductItem[] = [
        {
            image: 'src/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg',
            title: 'Headphones',
            btnLink: '/headphones',
        },
        {
            image: 'src/assets/product-zx9-speaker/mobile/image-product.jpg',
            title: 'Speakers',
            btnLink: '/speakers',
        },
        {
            image: 'src/assets/product-yx1-earphones/mobile/image-product.jpg',
            title: 'Earphones',
            btnLink: '/earphones',
        }
    ]


    return (
        <div>
            <section className='flex flex-col items-center justify-center gap-6 p-4 bg-gray-100 md:flex-row md:gap-8 font-manrope'>
                {productItems.map((item, index) => (
                    <div key={index} className='flex flex-col items-center justify-center text-center p-6 '>
                        <img src={item.image} alt={item.title} className='w-32 h-32 object-contain mb-4 md:w-40 md:h-40 mx-auto' />
                        <h2 className='uppercase font-semibold mb-4'>{item.title}</h2>
                        <Link to={item.btnLink} className=' flex items-center gap-2 font-sm font-semibold uppercase text-[#797979] hover:text-orange-500'>Shop<img src='src/assets/shared/desktop/icon-arrow-right.svg' alt='arrow' /> </Link>
                    </div>
                ))}

            </section>

            <section className='bg-[#f1f1f1] flex flex-col items-center justify-center gap-6 p-4 font-manrope uppercase '>
                {/* first speakers section */}
                <div className='bg-[url(src/assets/home/desktop/pattern-circles.svg)] bg-[#D87D4A] bg-no-repeat bg-cover bg-center  flex flex-col items-center justify-center text-white text-center gap-4 p-6 rounded-lg md:w-xl md:h-lg '>
                    <img src='src/assets/home/mobile/image-speaker-zx9.png' alt='speaker model' className='w-32 h-40 md:w-40 md:h-50 object-contain' />
                    <h2 className='text-4xl text-[#f1f1f1] font-semibold'>ZX9 speaker</h2>
                    <p className='lowercase font-medium text-sm leading-7'> Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Link to={'/speakers'} className='text-white bg-[#101010] hover:bg-[#f1f1f1] hover:text-[#101010] px-6 py-3 mt-4 transition-colors duration-300'>See product</Link>
                </div>

                {/* second speaker section */}
                <div className='rounded-lg flex flex-col items-start justify-center p-6 bg-[url(src/assets/home/mobile/image-speaker-zx7.jpg)]  h-80 w-96 bg-cover bg-center  md:w-xl md:h-lg object-contain'>
                    <h2 className='text-4xl text-[#101010] font-semibold'>ZX7 speaker</h2>
                    <Link to={'/speakers'} className='text-black border-black border-2 bg-none hover:bg-[#101010] hover:text-[#f1f1f1] px-6 py-3 mt-4 transition-colors duration-300'>See product</Link>
                </div>

                {/* earphones section*/}

                <div className='rounded-lg w-96 h-80 bg-cover bg-center bg-[url(src/assets/home/mobile/image-earphones-yx1.jpg)] md:w-xl md:h-lg  '>
                </div>
                <div className='flex flex-col items-center justify-center pt-6'>
                    <h2 className='text-4xl text-[#101010] font-semibold'>YX1 earphones</h2>
                    <Link to={'/speakers'} className='text-black bg-none border-2 hover:bg-[#101010] hover:text-[#f1f1f1] px-6 py-3 mt-4 transition-colors duration-300'>See product</Link>
                </div>
            </section>
        </div>

    )
}
