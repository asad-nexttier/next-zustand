import Link from 'next/link'
import React from 'react'

const Header = () => {

    return (
        <header className='bg-white text-black h-[50px] w-[100vw] fixed z-[9999] drop-shadow-md shadow px-[30px] xl:px-[60px]'>
            <div className='grid grid-cols-12 items-center h-full'>
                <div className='col-start-1 col-end-4'>
                    NZ
                </div>
                <div className='col-start-5 col-end-13'>
                    <div className='flex flex-row justify-end items-center text-black/[0.6] font-[500]'>
                        <Link href={''} className='bg- py-[8px] px-[15px] hover:text-black'>Link - 1</Link>
                        <Link href={''} className='bg- py-[8px] px-[15px] hover:text-black'>Link - 2</Link>
                        <button className='bg-primary text-white px-[20px] py-1 flex rounded'>
                            <span>{'Cart '} 5</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header