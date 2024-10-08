import React from 'react'
import { MoreVertical } from 'lucide-react'
import Image from 'next/image'
import clsx from 'clsx'

const Folder = (props: { name: string, folerIcon: number }) => {
  return (
    <div className='min-w-64 cursor-pointer flex justify-between items-center gap-1 px-4 py-2 rounded-xl bg-[#FFB9A3]'>
        <div className='flex gap-2 items-center'>
            <div className='w-10 h-10 relative'>
                <Image src='/FolderIcon1.png' alt='logo' fill objectFit='contain' className={clsx('', {'hidden': props.folerIcon !== 1})} />
                <Image src='/FolderIcon2.png' alt='logo' fill objectFit='contain' className={clsx('', {'hidden': props.folerIcon !== 2})} />
            </div>
            <h1 className='font-medium text-lg text-nowrap'>{props.name}</h1>
        </div>
        <div className='flex gap-2 items-center pr-4'>
            <div className='ml-1 w-8 h-8 relative'>
                <Image src='/icons/2.png' alt='logo' fill objectFit='contain' />
            </div>
            <MoreVertical size={22} />
        </div>
    </div>
  )
}

export default Folder