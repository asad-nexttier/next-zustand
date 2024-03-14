'use client'
import Image from 'next/image'
import React from 'react'
import Button from '@/components/UI/Button'
import Link from 'next/link'
const nextArrow = '/assets/icons/arrowNext.svg'
const reviewStar = '/assets/icons/review-star.png'
interface productProps {
    data: any
};

const ProductCard = ({ data }: productProps) => {

    const clickHandler = () => {
        alert(`${data?.name} is added in your cart`);
    }

    return (
        <div className='hover:drop-shadow bg-white rounded sx-maz-lg:drop-shadow mb-[20px]'>
            <div>
                <div className='absolute flex items-center bg-primary/[0.8] text-white rounded py-[1px] px-[10px] mt-[5px] ml-[5px]'>
                    {`${data?.rating}`}&nbsp;
                    <Image src={reviewStar} alt='Review star' height={10} width={10} className='h-[15px] w-[15px]' />
                </div>
                <Image src={data?.image} className='group rounded w-full max-h-[350px] aspect-square' priority alt={data?.name} width={100} height={100} />
            </div>
            <div className='p-3 pt-2'>
                <h1 className='font-[700] [font-size:_clamp(2rem,1.5vw,3vw)]'>{data?.name}</h1>
                <p>Price: {data?.price}</p>
                <small>{data?.desc}</small>
                <div className='flex flex-row items-center justify-between mt-3'>
                    <Button title='Add to cart' onClick={clickHandler} />
                    <Link href={`/products/${data?.id}`} className='flex-ds1'>
                        <Image src={nextArrow} alt='' height={23} width={20} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard