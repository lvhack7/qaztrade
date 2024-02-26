import React from 'react'
import img1 from '../assets/imgs/what/interview 1.png'
import img2 from '../assets/imgs/what/interview 1-1.png'
import img3 from '../assets/imgs/what/interview 1-2.png'
import img4 from '../assets/imgs/what/interview 1-3.png'
import img5 from '../assets/imgs/what/interview 1-4.png'

import c1 from '../assets/imgs/carousel1/image 13.png'
import c2 from '../assets/imgs/carousel1/image 55.png'
import c3 from '../assets/imgs/carousel1/image 56.png'
import c4 from '../assets/imgs/carousel1/image 57.png'
import c5 from '../assets/imgs/carousel1/image 58.png'
import c6 from '../assets/imgs/carousel1/image 59.png'

import arrow from '../assets/icons/arrow-right.svg'
import { Trans, useTranslation } from 'react-i18next'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
};

const carouselImgs = [c1, c2, c3, c4, c5, c6]
const icons = [img2, img3, img4, img5]

const WhatYouGet = () => {
    const {t} = useTranslation()

    const array = t('what.array', {returnObjects: true})

    return (
        <div id='services' className='container mx-auto px-4 py-4'>
            <div className='flex flex-col'>
                <h2 className='text-button font-medium text-4xl md:text-6xl'>{t('what.title')}</h2>
                <div className='bg-lightGray px-6 py-4 lg:px-12 lg:py-8 rounded-[20px] mt-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8'>
                        <div className='flex items-start space-x-4 py-4 md:py-8'>
                            <img src={img1} className='w-[40px] md:w-[50px]'/>
                            <div className='flex flex-col py-2'>
                                <p className='text-dark text-2xl md:text-4xl font-medium'>{t('what.coworking')}</p>
                                <p className='text-gray-700 mt-4 md:text-lg'>
                                    <Trans
                                        i18nKey={'what.coworking-desc'}
                                        components={{br: <br/>}}
                                    />
                                </p>
                                <div className='flex justify-start mt-10'>
                                    <a href='#form' className='flex items-center space-x-4 group'>
                                        <span className='text-dark text-xl md:text-3xl group-hover:text-button'>{t('what.more')}</span>
                                        <img src={arrow} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <Carousel
                            responsive={responsive}
                            infinite
                            containerClass='w-full h-full'
                            itemClass='relative max-h-[250px] lg:max-h-[400px]'
                        >
                            {
                                carouselImgs.map((img, id) => (
                                    <img key={id} src={img} className='object-cover w-full h-full rounded-[10px]' />
                                ))
                            }
                        </Carousel>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 mt-4 gap-4'>
                    {
                        array.map((item, id) => (
                            <div key={item.title} className='bg-lightGray px-6 py-4 lg:px-12 lg:py-8 rounded-[20px]'>
                                <div className='relative flex items-start space-x-4 py-4 md:py-6 h-full'>
                                    <img src={icons[id]} className='w-[40px] md:w-[50px]'/>
                                    <div className='flex flex-col py-2'>
                                        <p className='text-dark text-2xl md:text-4xl font-medium'>{item.title}</p>
                                        <p className='text-gray-700 mt-4 md:text-lg max-w-[400px]'>
                                            {item.text}
                                        </p>
                                        <div className='justify-start items-end mt-10'>
                                            <a href='#form' className='flex items-center space-x-4 group'>
                                                <span className='text-dark text-xl md:text-3xl group-hover:text-button'>{t('what.more')}</span>
                                                <img src={arrow} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default WhatYouGet