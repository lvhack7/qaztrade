import React from 'react'
import qth from '../assets/icons/QTH.cdr.svg'
import kaz from '../assets/icons/no_image 1.svg'
import trade from '../assets/icons/QazTrade 1 (1) 1.svg'
import expo from '../assets/icons/no_image_1__1.png'
import { Trans, useTranslation } from 'react-i18next'

const Navbar = () => {

    const {t} = useTranslation()

    return (
        <div id='nav' className='container mx-auto px-2 py-2'>
            <div className='flex flex-col'>
                <div className='flex flex-wrap items-center justify-center lg:justify-between gap-4 py-3'>
                    <div className='flex items-center justify-between space-x-6 sm:space-x-8 md:space-x-16'>
                        <img className='w-[70px] sm:w-[100px]' src={qth} />
                        <div className='flex items-center space-x-1 md:space-x-2'>
                            <img className='flex-shrink-0 w-[35px] sm:w-[50px]' src={kaz} />
                            <p className='text-[7px] md:text-sm text-primary font-medium md:leading-4'>
                                <Trans
                                    i18nKey={"navbar.ministry"}
                                    components={{br: <br/>}}
                                />
                            </p>
                        </div>
                        <img className='w-[75px] sm:w-[150px]' src={trade} />
                        <img className='w-[60px] sm:w-[100px]' src={expo}/>
                    </div>
                    <div>
                        <a href='#form' className='flex items-center space-x-2'>
                            <div className='bg-brownDarker w-6 h-6 rounded-full'></div>
                            <span>{t('navbar.contact-us')}</span>
                        </a>
                    </div>
                </div>
                <div className='flex flex-wrap items-center justify-between gap-4 py-3 border-t border-[rgb(197,197,197)]'>
                    <div className='flex items-center justify-between space-x-6 lg:space-x-24'>
                        <a href='#about' className='text-dark text-xs md:text-base'>{t('navbar.about')}</a>
                        <a href='#direction' className='text-dark text-xs md:text-base'>{t('navbar.direction')}</a>
                        <a href='#services' className='text-dark text-xs md:text-base'>{t('navbar.services')}</a>
                        <a href='#advantages' className='text-dark text-xs md:text-base'>{t('navbar.advantages')}</a>
                        <a href='#contacts' className='text-dark text-xs md:text-base'>{t('navbar.contacts')}</a>
                    </div>
                    <div className='flex items-center justify-between space-x-10'>
                        <p className='text-dark text-xs md:text-base'>RU</p>
                        <p className='text-dark text-xs md:text-base'>KZ</p>
                        <p className='text-dark text-xs md:text-base'>EN</p>
                        <p className='text-dark text-xs md:text-base'>ARA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar