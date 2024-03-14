import React from 'react'
import Link from 'next/link'

const Footer = () => {

    return (
        <footer className='bg-black/[0.8] text-white h-[50px] px-[30px] xl:px-[60px]'>
            <div className='grid grid-cols-12 items-center'>
                <div className='col-start-1 col-end-7'>
                    NZ
                </div>
                <div className='col-start-7 col-end-13'>
                    <div className='flex flex-row justify-center items-center font-[600]'>
                        <Link href={''} className='bg- py-[8px] px-[15px]'>Link - 1</Link>
                        <Link href={''} className='bg- py-[8px] px-[15px]'>Link - 2</Link>
                        <Link href={''} className='bg- py-[8px] px-[15px]'>Link - 3</Link>
                        <Link href={''} className='bg- py-[8px] px-[15px]'>Link - 4</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer