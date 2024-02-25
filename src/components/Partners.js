import React from 'react'
import dubai from '../assets/imgs/dubai.png'
import chambers from '../assets/imgs/chamber.png'
import { useTranslation } from 'react-i18next'

const Partners = () => {
    const {t} = useTranslation()

    return (
        <div id='partners' className='container mx-auto px-4 py-4'>
            <div className='flex flex-col'>
                <h2 className='text-button font-medium text-4xl md:text-6xl'>{t('partners.title')}</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16'>
                    <div className='flex flex-col items-center justify-center space-y-1'>
                        <img src={dubai} alt='Dubai' width={250}/>
                        <p className='text-dark'>Expo Dubai</p>
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-1'>
                        <img src={chambers} alt='Dubai' width={250}/>
                        <p className='text-dark'>Dubai Chamber of Commerce</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners