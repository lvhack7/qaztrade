import React from 'react'
import { useTranslation } from 'react-i18next'
import arrow from '../assets/icons/arrow-right-white.svg'

const Advantages = () => {
    const {t} = useTranslation()
    const array = t('adv.array', {returnObjects: true})
    return (
        <div id='advantages' className='container mx-auto px-4 py-4'>
            <div className='flex flex-col space-y-4 md:space-y-8'>
                <h2 className='text-button font-medium text-4xl md:text-6xl'>{t('adv.title')}</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        array.map((item, id) => (
                            <div 
                            data-aos="fade-left"
                            data-aos-offset="100"
                            data-aos-delay={`${800 + id*100}`}
                            data-aos-duration="1000"
                            key={id} className='bg-button rounded-[20px] px-6 py-8'>
                                <div className='flex flex-col space-y-5'>
                                    <p className='text-white font-medium text-3xl'>{item.title}</p>
                                    <p className='text-white text-lg'>{item.text}</p>
                                </div>
                                <a href='#form' className='flex items-center space-x-3 mt-16 ml-8'>
                                    <span className='text-white text-xl'>{t('adv.more')}</span>
                                    <img src={arrow} />
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