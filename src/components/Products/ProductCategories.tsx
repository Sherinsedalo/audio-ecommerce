import { Link } from 'react-router-dom';

type ProductItem = {
    image: string;
    title: string;
    btnLink: string;
}


export function ProductCategories() {

    const productItems: ProductItem[] = [
        {
            image: '/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg',
            title: 'Headphones',
            btnLink: '/headphones',
        },
        {
            image: '/assets/product-zx9-speaker/mobile/image-product.jpg',
            title: 'Speakers',
            btnLink: '/speakers',
        },
        {
            image: '/assets/product-yx1-earphones/mobile/image-product.jpg',
            title: 'Earphones',
            btnLink: '/earphones',
        }
    ]

    return (
        <div className='flex flex-col items-center justify-center gap-6 p-4 bg-gray-100 md:flex-row md:gap-8 font-manrope'>
            {productItems.map((item, index) => (
                <div key={index} className='flex flex-col items-center justify-center text-center p-6 '>
                    <img src={item.image} alt={item.title} className='w-32 h-32 object-contain mb-4 md:w-40 md:h-40 mx-auto' />
                    <h2 className='uppercase font-semibold mb-4'>{item.title}</h2>
                    <Link to={item.btnLink} className=' flex items-center gap-2 font-sm font-semibold uppercase text-[#797979] hover:text-orange-500'>Shop<img src='/assets/shared/desktop/icon-arrow-right.svg' alt='arrow' /> </Link>
                </div>
            ))}

        </div>
    )
}