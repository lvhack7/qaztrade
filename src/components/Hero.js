import React from 'react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
    const {t} = useTranslation()

    return (
        <div className='container mx-auto pt-14 pb-4 px-2 md:py-36'>
            <div className='flex flex-col'>
                <div className='flex flex-col space-y-2 text-center md:text-left mb-24 md:mb-16'>
                    <h1 className='font-semibold text-4xl md:text-7xl text-dark'>{t('hero.title')}</h1>
                    <p className='text-3xl md:text-5xl text-dark'>{t('hero.subtitle')}</p>
                </div>
                <div className='flex justify-start px-2 md:px-0'>
                    <a href='#form' className='flex justify-center bg-button shadow-sm px-6 py-4 md:px-12 md:py-4 rounded-2xl text-white text-2xl w-full md:w-auto hover:bg-[#006087]'>
                        {t('hero.request')}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero