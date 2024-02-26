import React, {useState} from 'react'
import { useTranslation } from 'react-i18next'
import Indicator from './Indicator'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor';

const Stat = () => {
    const [focus, setFocus] = useState(false)

    const {t} = useTranslation()

    return (
        <div className='container mx-auto px-4 py-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6'>
                <div className='bg-lightGray p-4 lg:p-6 flex items-center justify-center rounded-[20px]'>
                    <div className='flex flex-col space-y-2'>
                        <p className='text-button text-4xl xl:text-5xl font-medium'>$ 
                            <span className='text-7xl xl:text-[5rem]'>
                                <CountUp start={focus ? 200000 : null} end={328890} duration={2} redraw={true} seperator=" ">
                                    {({ countUpRef }) => (
                                        <VisibilitySensor onChange={(isVisible) => {
                                            if (isVisible) { setFocus(true); }
                                        }}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </span>
                        </p>
                        <p className='text-button text-2xl tracking-wide'>{t('stat.good-cycle')}</p>
                    </div>
                </div>
                <div className='bg-lightGray p-4 lg:p-6 flex items-center justify-center rounded-[20px]'>
                    <div className='flex flex-col space-y-2'>
                        <p className='text-button text-4xl xl:text-5xl font-medium'>$ 
                            <span className='text-7xl xl:text-[5rem]'>
                                <CountUp start={focus ? 200000 : null} end={210278.3} seperator=' ' decimals={1} duration={2} redraw={true}>
                                    {({ countUpRef }) => (
                                        <VisibilitySensor onChange={(isVisible) => {
                                            if (isVisible) { setFocus(true); }
                                        }}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </span>
                        </p>
                        <p className='text-button text-2xl tracking-wide'>{t('stat.export')}</p>
                    </div>
                </div>
                <div className='bg-lightGray p-4 lg:p-6 flex items-center justify-center rounded-[20px]'>
                    <div className='flex flex-col space-y-2'>
                        <p className='text-button text-4xl xl:text-5xl font-medium'>$ 
                            <span className='text-7xl xl:text-[5rem]'>
                                <CountUp start={focus ? 200000 : null} end={118611.7} duration={2} seperator=' ' decimals={1} redraw={true}>
                                    {({ countUpRef }) => (
                                        <VisibilitySensor onChange={(isVisible) => {
                                            if (isVisible) { setFocus(true); }
                                        }}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </span>
                        </p>
                        <p className='text-button text-2xl tracking-wide'>{t('stat.import')}</p>
                    </div>
                </div>
            </div>
            <Indicator/>
        </div>
    )
}

export default Stat