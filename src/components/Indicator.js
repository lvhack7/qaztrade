import React from 'react'
import bg1 from '../assets/imgs/bg-ind1.png'
import bg2 from '../assets/imgs/bg-ind2.png'
import { useTranslation } from 'react-i18next'
import yellow1 from '../assets/icons/arrows-yellow/arrow1.svg'
import yellow2 from '../assets/icons/arrows-yellow/arrow2.svg'
import yellow3 from '../assets/icons/arrows-yellow/arrow3.svg'
import yellow4 from '../assets/icons/arrows-yellow/arrow4.svg'
import yellow5 from '../assets/icons/arrows-yellow/arrow5.svg'

import blue1 from '../assets/icons/arrow-blue/Arrow 3.svg'
import blue2 from '../assets/icons/arrow-blue/Arrow 3-1.svg'
import blue3 from '../assets/icons/arrow-blue/Arrow 3-2.svg'
import blue4 from '../assets/icons/arrow-blue/Arrow 3-3.svg'
import blue5 from '../assets/icons/arrow-blue/Arrow 3-4.svg'

const importImgs = [
    yellow1, yellow5, yellow4, yellow3, yellow2
]

const exportImgs = [
    blue1, blue2, blue3, blue4, blue5
]

const Indicator = () => {
    const {t} = useTranslation()

    const importArray = t('indicator.import-array', {returnObjects: true})
    const exportArray = t('indicator.export-array', {returnObjects: true})

    return (
        <div className='flex flex-col space-y-6'>
            <div className='relative'>
                <img src={bg1} className='absolute object-cover w-full h-full -z-10 rounded-[20px]' alt='' />
                <div className='flex flex-col px-2 pt-2 pb-8 lg:p-10'>
                    <div className='text-xl md:text-4xl text-white'>{t('indicator.title1')}</div>
                    <div className="flex flex-row mt-12 md:mt-16">
                        {
                            importArray.map((item, id) => (
                                <div key={id} className={`relative flex flex-col border-b border-white pt-4 pb-1 pr-2 md:pr-6 min-w-[75px] md:min-w-[150px] xl:min-w-[270px]`}>
                                    <p className='flex justify-end text-white font-medium text-sm lg:text-4xl'>{item.price}</p>
                                    <p className='flex justify-end text-xs lg:text-2xl md:mt-1 text-lightYellow'>{t('indicator.import')}</p>
                                    <div className='absolute -bottom-1.5 right-0 w-3 h-3 bg-white rounded-full'></div>
                                    <img 
                                        data-aos="fade-up"
                                        data-aos-offset="100"
                                        data-aos-delay="100"
                                        data-aos-duration={`${800 + id*200}`}
                                        data-aos-easing="ease-in-out"
                                        data-aos-once="true"
                                        src={importImgs[id]} className='absolute w-[12px] md:w-auto bottom-0 -right-0.5 -z-10' alt=''/>
                                    <p className='absolute -bottom-8 -right-2 md:-right-7 text-white md:text-lg'>{item.year}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-row mt-32 md:mt-52">
                        {
                            exportArray.map((item, id) => (
                                <div key={id} className={`relative flex flex-col border-b border-white pt-4 pb-1 pr-2 md:pr-6 min-w-[75px] md:min-w-[150px] xl:min-w-[270px]`}>
                                    <p className='flex justify-end text-white font-medium text-sm lg:text-4xl'>{item.price}</p>
                                    <p className='flex justify-end text-xs md:text-2xl md:mt-2 text-[#BBDAFF]'>{t('indicator.import')}</p>
                                    <div className='absolute -bottom-1.5 right-0 w-3 h-3 bg-white rounded-full'></div>
                                    <img 
                                    data-aos="fade-up"
                                    data-aos-offset="100"
                                    data-aos-delay="100"
                                    data-aos-duration={`${1200 + id*200}`}
                                    data-aos-easing="ease-in-out"
                                    data-aos-once="true"
                                    src={exportImgs[id]} 
                                    className='w-[7px] md:w-auto absolute bottom-0 -right-0.5 -z-10' alt=''/>
                                    <p className='absolute -bottom-8 -right-2 md:-right-7 text-white md:text-lg'>{item.year}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='relative'>
                <img src={bg1} className='absolute object-cover w-full h-full -z-10 rounded-[20px]' alt='' />
                <div className='flex flex-col px-2 pt-2 pb-8 lg:p-10 space-y-8'>
                    <div className='text-xl md:text-4xl text-white'>{t('indicator.title2')}</div>
                    <div className='flex flex-col space-y-4'>
                        <div className='bg-ind'>
                            <div className='grid grid-cols-2'>
                                <div className='flex justify-between items-center p-1 md:p-2'>
                                    <p className='text-white text-xs md:text-xl max-w-[100px]'>{t('indicator.oil')}</p>
                                    <p className='text-lightYellow text-xs md:text-4xl font-medium'>$ 88 201,85</p>
                                </div>
                                <div 
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay="100"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-once="true"
                                className='bg-white w-[90%] h-full'></div>
                            </div>
                        </div>
                        <div className='bg-ind'>
                            <div className='grid grid-cols-2'>
                                <div className='flex justify-between items-center p-1 md:p-2'>
                                    <p className='text-white text-xs md:text-xl max-w-[100px]'>{t('indicator.metal')}</p>
                                    <p className='text-lightYellow text-xs md:text-4xl font-medium'>$ 59 749,49</p>
                                </div>
                                <div 
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                                className='bg-white w-[60%] h-full'></div>
                            </div>
                        </div>
                        <div className='bg-ind'>
                            <div className='grid grid-cols-2'>
                                <div className='flex justify-between items-center p-1 md:p-2'>
                                    <p className='text-white text-xs md:text-xl max-w-[100px]'>{t('indicator.other')}</p>
                                    <p className='text-lightYellow text-xs md:text-4xl font-medium'>$ 14 937,20</p>
                                </div>
                                <div 
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay="300"
                                data-aos-duration="1000"
                                className='bg-white w-[25%] h-full'></div>
                            </div>
                        </div>
                        <div className='bg-ind'>
                            <div className='grid grid-cols-2'>
                                <div className='flex justify-between items-center p-1 md:p-2'>
                                    <p className='text-white text-xs md:text-xl max-w-[100px]'>{t('indicator.food')}</p>
                                    <p className='text-lightYellow text-xs md:text-4xl font-medium'>$ 13 422,96</p>
                                </div>
                                <div
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay="400"
                                data-aos-duration="1000"
                                className='bg-white w-[23%] h-full'></div>
                            </div>
                        </div>
                        <div className='bg-ind'>
                            <div className='grid grid-cols-2'>
                                <div className='flex justify-between items-center p-1 md:p-2'>
                                    <p className='text-white text-xs md:text-xl max-w-[100px]'>{t('indicator.chemistry')}</p>
                                    <p className='text-lightYellow text-xs md:text-4xl font-medium'>$ 13 150,77</p>
                                </div>
                                <div 
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay="500"
                                data-aos-duration="1000"
                                className='bg-white w-[21%] h-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Indicator