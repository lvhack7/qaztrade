import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import arrow from '../assets/icons/arrow-up.svg'
import foodImg from '../assets/imgs/food-industries.png'
import oilImg from '../assets/imgs/oil-industry.png'
import it1 from '../assets/imgs/it-industries/Frame 44.png'
import it2 from '../assets/imgs/it-industries/Frame 43.png'
import it3 from '../assets/imgs/it-industries/Frame 45.png'
import it4 from '../assets/imgs/it-industries/Frame 182.png'
import it5 from '../assets/imgs/it-industries/Frame 44-1.png'
import it6 from '../assets/imgs/it-industries/Frame 46.png'
import it7 from '../assets/imgs/it-industries/Frame 47.png'
import it8 from '../assets/imgs/it-industries/Frame 48.png'


const Direction = () => {
    const [food, setFood] = useState(false)
    const [oil, setOil] = useState(false)
    const [it, setIT] = useState(false)
    const [logistics, setLogistics] = useState(false)

    const {t} = useTranslation()

    return (
        <div id='direction' className='container mx-auto px-4 py-4'>
            <div className='flex flex-col space-y-4 md:space-y-8'>
                <h2 className='text-button font-medium text-4xl md:text-6xl'>{t('direction.title')}</h2>
                <div className='flex flex-col space-y-4'>
                    <div 
                    data-aos="fade-left"
                    data-aos-offset="100"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    className='bg-lightBlue rounded-[20px] px-6 py-4'>
                        <div className='flex flex-col space-y-3'>
                            <h3 className='text-dark text-3xl'>{t('direction.food')}</h3>
                            <p className='text-gray-600'>{t('direction.food-desc')}</p>
                            <div className='bg-white px-6 py-5 rounded-[15px]'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-xl'>{t('direction.dropdown')}</p>
                                    <img src={arrow} className={`${!food && 'rotate-180'} hover:cursor-pointer`} onClick={() => setFood(prev => !prev)}/>
                                </div>
                                <div className={`transition-all ease-in-out duration-500 delay-100 overflow-hidden ${food ? 'h-auto' : 'h-0'}`}>
                                    <img className='mt-4' src={foodImg} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div 
                    data-aos="fade-left"
                    data-aos-offset="100"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    className='bg-lightBlue rounded-[20px] px-6 py-4'>
                        <div className='flex flex-col space-y-3'>
                            <h3 className='text-dark text-3xl'>{t('direction.oil')}</h3>
                            <p className='text-gray-600'>{t('direction.oil-desc')}</p>
                            <div className='bg-white px-6 py-5 rounded-[15px]'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-xl'>{t('direction.dropdown')}</p>
                                    <img src={arrow} className={`${!oil && 'rotate-180'} hover:cursor-pointer`} onClick={() => setOil(prev => !prev)}/>
                                </div>
                                <div className={`transition-all ease-in-out duration-500 delay-100 overflow-hidden ${oil ? 'h-auto' : 'h-0'}`}>
                                    <img className='mt-4' src={oilImg} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div 
                    data-aos="fade-left"
                    data-aos-offset="100"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    className='bg-lightBlue rounded-[20px] px-6 py-4'>
                        <div className='flex flex-col space-y-3'>
                            <h3 className='text-dark text-3xl'>{t('direction.it')}</h3>
                            <p className='text-gray-600'>{t('direction.it-desc')}</p>
                            <div className='bg-white px-6 py-5 rounded-[15px]'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-xl'>{t('direction.dropdown')}</p>
                                    <img src={arrow} className={`${!it && 'rotate-180'} hover:cursor-pointer`} onClick={() => setIT(prev => !prev)}/>
                                </div>
                                <div className={`transition-all ease-in-out duration-500 delay-100 overflow-hidden ${it ? 'h-auto' : 'h-0'}`}>
                                    <div className='flex flex-wrap items-center gap-4 mt-4'>
                                        <img src={it1} />
                                        <img src={it2} />
                                        <img src={it3} />
                                        <img src={it4} />
                                        <img className='hidden lg:flex' src={it5} />
                                        <img className='hidden lg:flex' src={it6} />
                                        <img className='hidden lg:flex' src={it7} />
                                        <img className='hidden lg:flex' src={it8} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div 
                    data-aos="fade-left"
                    data-aos-offset="100"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    className='bg-lightBlue rounded-[20px] px-6 py-4'>
                        <div className='flex flex-col space-y-3'>
                            <h3 className='text-dark text-3xl'>{t('direction.logistics')}</h3>
                            <p className='text-gray-600'>{t('direction.logistics-desc')}</p>
                            <div className='bg-white px-6 py-5 rounded-[15px]'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-xl'>{t('direction.dropdown')}</p>
                                    <img src={arrow} className={`${!logistics && 'rotate-180'} hover:cursor-pointer`} onClick={() => setLogistics(prev => !prev)}/>
                                </div>
                                {/* <div className={`transition-all ease-in-out duration-500 delay-100 overflow-hidden ${logistics ? 'h-auto' : 'h-0'}`}>
                                    <img className='mt-4' src={foodImg} />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Direction