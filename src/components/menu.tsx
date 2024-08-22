import React from 'react'

import { Varela_Round } from "next/font/google";
import ArrowOpen from './arrows/arrowOpen';
import Image from 'next/image';
import ArrowClosed from './arrows/arrowClosed';
import { Clock, CrownIcon, HomeIcon, Share2Icon, Star, Trash2 } from 'lucide-react';

const varelaRound = Varela_Round(
    { 
        subsets: ["latin"],
        variable: '--font-varelaRound',
        weight: "400",
    }
)

const Menu = () => {
return (
    <div className='w-[380px] 2xl:w-[400px] bg-[#FFDAB9] flex flex-col justify-between'>
        <div className='px-4'>
            <div className='cursor-pointer flex w-[90%] justify-start items-center gap-6 bg-white rounded-3xl py-4 px-4'>
                    <div><h1 className={`text-6xl ${varelaRound.variable} font-varelaRound`}>+</h1></div>
                    <h1 className='font-medium text-[1.3rem]'>New Topic</h1>
            </div>

            <div className='mt-8 flex flex-col gap-1'>
                <div className='cursor-pointer flex justify-start items-center rounded-2xl py-1 px-6'>
                    <HomeIcon size={26} />
                    <h1 className='font-medium text-lg ml-2'>Home</h1>
                </div>



                <div className='cursor-pointer flex justify-start items-center rounded-2xl py-1'>
                    <ArrowOpen />
                    <div className='w-10 h-10 relative'>
                        <Image src='/icons/1.png' alt='logo' fill objectFit='contain' />
                    </div>
                    <h1 className='font-medium text-lg ml-2'>My Cogent</h1>
                </div>

                <div className='cursor-pointer flex justify-start items-center rounded-2xl py-1 pl-8 bg-[#FFA07A]'>
                    <ArrowClosed />
                    <div className='ml-1 w-8 h-8 relative bg-'>
                        <Image src='/icons/2.png' alt='logo' fill objectFit='contain' />
                    </div>
                    <h1 className='font-medium text-lg ml-2'>Grade 11 English</h1>
                </div>

                <div className='cursor-pointer flex justify-start items-center rounded-2xl py-1 pl-8'>
                    <ArrowClosed />
                    <div className='ml-1 w-8 h-8 relative bg-'>
                        <Image src='/icons/3.png' alt='logo' fill objectFit='contain' />
                    </div>
                    <h1 className='font-medium text-lg ml-2'>AP History</h1>
                </div>

                <div className='cursor-pointer flex justify-start items-center rounded-2xl py-1 pl-8'>
                    <ArrowClosed />
                    <div className='ml-1 w-8 h-8 relative bg-'>
                        <Image src='/icons/4.png' alt='logo' fill objectFit='contain' />
                    </div>
                    <h1 className='font-medium text-lg ml-2'>Calc BC</h1>
                </div>

                <div className='cursor-pointer flex justify-start items-center rounded-2xl py-1 pl-8'>
                    <ArrowClosed />
                    <div className='ml-1 w-8 h-8 relative bg-'>
                        <Image src='/icons/5.png' alt='logo' fill objectFit='contain' />
                    </div>
                    <h1 className='font-medium text-lg ml-2'>Chemistry</h1>
                </div>

                <div className='cursor-pointer flex justify-start items-center rounded-2xl py-1 pl-8'>
                    <ArrowClosed />
                    <div className='ml-1 w-8 h-8 relative bg-'>
                        <Image src='/icons/6.png' alt='logo' fill objectFit='contain' />
                    </div>
                    <h1 className='font-medium text-lg ml-2'>Physics</h1>
                </div>
            </div>

            <div className='mt-8 flex flex-col gap-2'>
                <div className='cursor-pointer flex justify-start items-center rounded-2xl py-1 px-7'>
                    <Share2Icon />
                    <h1 className='font-medium text-lg ml-2'>Shared Files</h1>
                </div>

                <div className='cursor-pointer flex justify-start items-center rounded-2xl py-1 px-7'>
                    <Clock />
                    <h1 className='font-medium text-lg ml-2'>Recents</h1>
                </div>

                <div className='cursor-pointer flex justify-start items-center rounded-2xl py-1 px-7'>
                    <Star />
                    <h1 className='font-medium text-lg ml-2'>Starred</h1>
                </div>

                <div className='cursor-pointer flex justify-start items-center rounded-2xl py-1 px-7'>
                    <Trash2 />
                    <h1 className='font-medium text-lg ml-2'>Trash</h1>
                </div>
            </div>
        </div>
        
        <div className='cursor-pointer flex gap-2 justify-start items-center pl-5 pb-2 pt-2 rounded-t-2xl bg-[#FFC38D]'>
            <div className='w-8 h-8 relative'>
                <Image src='/crown.png' alt='logo' fill objectFit='contain' />
            </div>
            <h1 className='text-lg font-medium'>Subscription</h1>
        </div>
    </div>
)
}

export default Menu