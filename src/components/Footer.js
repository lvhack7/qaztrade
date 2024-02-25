import React from 'react'
import qth from '../assets/icons/QTH.cdr-white.svg'
import kaz from '../assets/icons/no_image 1.svg'
import trade from '../assets/icons/QazTrade 1 (1) 1.svg'
import expo from '../assets/imgs/qaz-expo.png'
import arrow from '../assets/icons/arrow-up-blue.svg'
import { useTranslation, Trans } from 'react-i18next'

const Footer = () => {
    const {t} = useTranslation()

    return (
        <footer className='bg-button w-full rounded-t-[10px] py-10'>
            <div className='container mx-auto px-4'>
                <div className='flex items-start md:items-center justify-between'>
                    <div className='flex flex-col md:flex-row md:items-center space-y-5 md:space-y-0 justify-between md:space-x-12'>
                        <img className='w-[120px] sm:w-[140px]' src={qth} />
                        <div className='flex items-center space-x-1 md:space-x-2'>
                            <img className='flex-shrink-0 w-[55px] sm:w-[60px]' src={kaz} />
                            <p className='text-[7px] text-xs text-white font-medium md:leading-4'>
                                <Trans
                                    i18nKey={"navbar.ministry"}
                                    components={{br: <br/>}}
                                />
                            </p>
                        </div>
                        <img className='w-[120px] sm:w-[160px]' src={trade} />
                        <img className='w-[120px]' src={expo}/>
                    </div>
                    <a href='#nav' className='bg-white flex items-center justify-center w-12 h-12 rounded-full'>
                        <img src={arrow} />
                    </a>
                </div>
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 mt-10 pb-6 border-b border-white'>
                    <div className='flex flex-col lg:flex-row lg:items-center justify-between space-y-5 lg:space-y-0 lg:space-x-12'>
                        <a className='text-xl md:text-lg text-white'>{t('navbar.about')}</a>
                        <a className='text-xl md:text-lg text-white'>{t('navbar.direction')}</a>
                        <a className='text-xl md:text-lg text-white'>{t('navbar.services')}</a>
                        <a className='text-xl md:text-lg text-white'>{t('navbar.advantages')}</a>
                        <a className='text-xl md:text-lg text-white'>{t('navbar.contacts')}</a>
                    </div>
                    <a href='#form' className='flex items-center justify-center bg-white text-button px-8 md:px-12 py-3 text-lg rounded-[15px] mt-6 md:mt-0 hover:bg-[#006087] hover:text-white w-2/3 md:w-auto'>
                        {t('footer.ask')}
                    </a>
                </div>
                <p className='text-white text-xl md:text-lg mt-6'>{t('footer.policy')}</p>
            </div>
        </footer>
    )
}

export default Footer