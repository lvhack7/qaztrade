import React from 'react'
import { useTranslation } from 'react-i18next'
import arrow from '../assets/icons/arrow-right-white.svg'
import arrow_blue from '../assets/icons/arrow-right-blue.svg'

const Advantages = () => {
    const {t} = useTranslation()
    const array = t('adv.array', {returnObjects: true})
    return (
        <div id='advantages' className='container mx-auto px-4 py-4'>
            <div className='flex flex-col space-y-8'>
                <h2 className='text-button font-medium text-4xl md:text-6xl'>{t('adv.title')}</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
                    {
                        array.map((item, id) => (
                            <div 
                            data-aos="fade-left"
                            data-aos-offset="100"
                            data-aos-delay={`${800 + id*100}`}
                            data-aos-duration="1000"
                            key={id} className='relative bg-button rounded-[20px] px-6 py-8 min-h-[380px]'>
                                <div className='flex flex-col space-y-5'>
                                    <p className='text-white font-medium text-3xl'>{item.title}</p>
                                    <p className='text-white text-lg'>{item.text}</p>
                                </div>
                                <a href='#form' className='absolute bottom-8 left-0 px-8 flex items-center justify-center w-full'>
                                    <div className='px-8 py-4 rounded-[15px] hover:bg-white group w-full'>
                                        <div className='flex items-center'>
                                            <span className='text-white text-xl group-hover:text-button'>{t('adv.more')}</span>
                                            <img className='group-hover:hidden ml-3' src={arrow} />
                                            <img className='hidden group-hover:block ml-3' src={arrow_blue} />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Advantages