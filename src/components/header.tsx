import React from 'react'
import Image from 'next/image'
import { DM_Sans, Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk(
    { 
        subsets: ["latin"],
        variable: '--font-space-grotesk',
    }
)

const dm_Sans = DM_Sans(
    { 
        subsets: ["latin"],
        variable: '--font-DM-Sans',
    }
)

const Header = () => {
  return (
    <div className='w-full bg-[#FFDAB9] flex justify-between gap-16 pl-2 pr-6 py-2'>
        <div className='flex justify-center items-center gap-2'>
            <div className='h-24 w-24 xl:h-28 xl:w-28 2xl:h-36 2xl:w-36 relative'>
                <Image src='/logo.png' alt='logo' fill objectFit='contain' />
            </div>
            <h1 className={`text-3xl text-[#8B3232] font-bold ${spaceGrotesk.variable} font-spaceGrotesk`}>Cogent</h1>
        </div>
        <div className='flex-1 flex justify-center items-center max-w-[45vw] xl:max-w-[55vw]'>
            <div className='bg-[#F6EDED] rounded-full w-full px-6 py-3 xl:py-4 flex gap-4 items-center'>
                <div className='h-8 w-8 xl:h-12 xl:w-12 relative'>
                    <Image src='/searchIcon.png' alt='logo' fill objectFit='contain' className='opacity-40' />
                </div>
                <h1 className='opacity-40 text-lg md:text-xl xl:text-2xl'>Search in Cogent</h1>
            </div>
        </div>
        <div className='flex justify-center items-center gap-5'>
            <div className={`cursor-pointer flex justify-center items-center rounded-full w-8 h-8 xl:w-11 xl:h-11 border-4 border-[#F08080] px-1 text-xl xl:text-3xl ${dm_Sans.variable} font-dmSans`}>
                ?
            </div>
            <div className='cursor-pointer flex justify-center items-center w-8 h-8 xl:w-11 xl:h-11  relative'>
                <Image src='/settingsIcon.png' alt='settings' fill objectFit='contain' />
            </div>
            <div className={`cursor-pointer rounded-full bg-[#FFA07A] flex justify-center items-center w-14 h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 text-3xl xl:text-4xl 2xl:text-5xl font-bold ${spaceGrotesk.variable} font-spaceGrotesk`}>
                D
            </div>
        </div>
    </div>
  )
}

export default Header