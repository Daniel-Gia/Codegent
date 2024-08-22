import React from 'react'
import Files from './Files'
const FilesSection = () => {
  return (
    <div className='flex flex-wrap gap-12'>
        <Files name='Chapter 3 “To Kill a Mockingbird”' ImageSrc='/ChatbotIcon.png' IconSrc='/icons/2.png' />
        <Files name='Slave Trade MLA Citations' ImageSrc='/MLAIcon.png' IconSrc='/icons/2.png' />
        <Files name='Study Plan for April' ImageSrc='/StudyPlanIcon.png' IconSrc='/icons/2.png' />
    </div>
  )
}

export default FilesSection