import React from 'react'
import Folder from './folder'

const FoldersSection = () => {
  return (
    <div className='flex flex-wrap gap-12'>
        <Folder name='Unit 1: Hamlet' folerIcon={1} />
        <Folder name='Literary Devices' folerIcon={2} />
        <Folder name='Final Essay Prep' folerIcon={1} />
        <Folder name='Speech and De...' folerIcon={2} />
        <Folder name='Great Gatsby' folerIcon={2} />
    </div>
  )
}

export default FoldersSection