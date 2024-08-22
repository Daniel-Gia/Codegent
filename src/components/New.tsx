'use client'
import clsx from 'clsx'
import { FolderPlusIcon } from 'lucide-react'
import { Varela_Round } from 'next/font/google'
import Image from 'next/image'
import React, { useState } from 'react'
const varelaRound = Varela_Round(
    { 
        subsets: ["latin"],
        variable: '--font-varelaRound',
        weight: "400",
    }
)

const New = () => {
    const [clicked, setClicked] = useState(false)
    return (
    <>
        <div className={clsx('absolute right-20 bottom-28 z-20 flex flex-col gap-4 w-[310px] overflow-hidden shadow-2xl border-2 border-gray-100 bg-white rounded-2xl', {'hidden': clicked === false})}>
            <div className='cursor-pointer flex justify-start items-center rounded-2xl pt-5 px-5'>
                <div className='w-6 h-6 relative'>
                    <Image src='/MLAIcon.png' alt='logo' fill objectFit='contain' />
                </div>
                <h1 className='font-medium text-lg ml-2'>Citation Generator</h1>
            </div>

            <div className='cursor-pointer flex justify-start items-center rounded-2xl pt-5 px-5'>
                <div className='w-6 h-6 relative'>
                    <Image src='/StudyPlanIcon.png' alt='logo' fill objectFit='contain' />
                </div>
                <h1 className='font-medium text-lg ml-2'>Study Plan</h1>
            </div>

            <div className='cursor-pointer flex justify-start items-center rounded-2xl pt-5 px-5'>
                <div className='w-6 h-6 relative'>
                    <Image src='/FlashcardIcon.png' alt='logo' fill objectFit='contain' />
                </div>
                <h1 className='font-medium text-lg ml-2'>Flashcards</h1>
            </div>

            <div className='cursor-pointer flex justify-start items-center rounded-2xl pt-5 px-5'>
                <div className='w-6 h-6 relative'>
                    <Image src='/ChatbotIcon.png' alt='logo' fill objectFit='contain' />
                </div>
                <h1 className='font-medium text-lg ml-2'>Chatbot</h1>
            </div>

            <div className='cursor-pointer flex justify-start items-center pt-2 pb-3 px-5 border-t-2 border-gray-300 bg-[#FFF0E3]'>
                <FolderPlusIcon size={24} />
                <h1 className='font-medium text-lg ml-2'>New Folder</h1>
            </div>
        </div>

        <div onClick={() => setClicked(!clicked)} className='absolute right-20 bottom-10 cursor-pointer flex gap-2 justify-between items-center text-nowrap px-8 py-4 rounded-xl bg-[#FFF0E3]'>
            <div><h1 className={`text-6xl ${varelaRound.variable} font-varelaRound`}>+</h1></div>
            <h1 className='font-medium text-[1.3rem]'>New</h1>
        </div>
    </>
    )
}

export default New