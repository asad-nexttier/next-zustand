'use client'
import Image from 'next/image'
import React from 'react'
import Button from '@/components/UI/Button'
import Link from 'next/link'
const nextArrow = '/assets/icons/arrowNext.svg'
const reviewStar = '/assets/icons/review-star.png'

import { products } from '@/data/products'


interface productProps {
    product: any
};

const ProductCard = ({ product }: productProps) => {

    const clickHandler = () => {
        alert(`${product?.name} is added in your cart`);
    }

    

    return (
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
                <Image
                    className="aspect-[2/2] rounded-md object-cover"
                    src={product?.image ?? ""}
                    alt={`${product?.name} image`}
                    width={1024}
                    height={1024}
                />
            </div>
            <div className="w-full md:w-1/2 p-5">
                <h1 className="text-3xl font-bold leading-10 text-gray-100">
                    {product?.name}
                </h1>
                <div className="my-1 text-md leading-5 text-gray-300">
                    {product?.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                    })}
                </div>
                <div className="mt-1 text-sm leading-5 text-gray-300 font-light italic">
                    {product?.description}
                </div>
                {/* <AverageRating /> */}
                {/* <div className="flex justify-end">
                    <AddToCart addToCartAction={addToCartAction} />
                </div> */}
            </div>
            {/* <div className="w-full">
                <Reviews addReviewAction={addReviewAction} />
            </div> */}
            {/* <div className="flex flex-wrap gap-2 w-full">
                <h1 className="text-2xl font-bold mt-2 -mb-2">Related Products</h1>
                <ul role="list" className="flex flex-row flex-wrap m-2">
                    {products
                        .filter((p) => p.id !== +id)
                        .map((product) => (
                            <li key={product.id} className="md:w-1/5">
                                <Link href={`/products/${product.id}`}>
                                    <ProductCard {...product} small />
                                </Link>
                            </li>
                        ))}
                </ul>
            </div> */}
        </div>

        // <div className='hover:drop-shadow bg-white rounded sx-maz-lg:drop-shadow mb-[20px]'>
        //     <div>
        //         <div className='absolute flex items-center bg-primary/[0.8] text-white rounded py-[1px] px-[10px] mt-[5px] ml-[5px]'>
        //             {`${data?.rating}`}&nbsp;
        //             <Image src={reviewStar} alt='Review star' height={10} width={10} className='h-[15px] w-[15px]' />
        //         </div>
        //         <Image src={data?.image} className='group rounded w-full max-h-[350px] aspect-square' priority alt={data?.name} width={100} height={100} />
        //     </div>
        //     <div className='p-3 pt-2'>
        //         <h1 className='font-[700] [font-size:_clamp(2rem,1.5vw,3vw)]'>{data?.name}</h1>
        //         <p>Price: {data?.price}</p>
        //         <small>{data?.desc}</small>
        //         <div className='flex flex-row items-center justify-between mt-3'>
        //             <Button title='Add to cart' onClick={clickHandler} />
        //             <Link href={`/products/${data?.id}`} className='flex-ds1'>
        //                 <Image src={nextArrow} alt='' height={23} width={20} />
        //             </Link>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ProductCard