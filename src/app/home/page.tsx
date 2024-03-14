import React from 'react'
import ProductCard from '@/components/productCard/page'
import { products } from '@/data/products'

const Home = () => {

    const ProductItems = () => {
        return products.map((item: any, index: number) => {
            return <ProductCard key={index} product={item} />
        })
    }

    return (
        <header className='px-[30px] xl:px-[60px] mt-3'>
            <div className='grid grid-cols-12 items-center h-full'>
                <div className='col-start-1 col-end-13'>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6'>
                        <ProductItems />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Home