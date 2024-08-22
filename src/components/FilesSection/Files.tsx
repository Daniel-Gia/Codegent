import React from 'react'
import { MoreVertical } from 'lucide-react'
import Image from 'next/image'
import clsx from 'clsx'

const Files = (props: { name: string, ImageSrc: string, IconSrc: string }) => {
  return (
    <div className='w-[12vw] h-[12vw] cursor-pointer flex flex-col gap-2 justify-between items-center overflow-hidden rounded-2xl relative bg-[#FDE8E8]'>
        <div className='w-full h-[80%] flex justify-center items-center'>
            <Image src={props.ImageSrc} alt='Image' width={180} height={180} />
        </div>
        <div className='flex-1 w-full flex justify-center items-center bg-[#FFDAB9]'>
            <h1>{props.name}</h1>
        </div>
        <div className='absolute w-8 h-8 left-3 top-3'>
            <Image src={props.IconSrc} alt='Icon' fill objectFit='contain' />
        </div>
        <MoreVertical size={22} className='absolute right-3 top-3' />
    </div>
  )
}

export default Files