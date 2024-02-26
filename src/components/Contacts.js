import React from 'react'
import phone from '../assets/icons/phone.svg'
import email from '../assets/icons/email.svg'
import location from '../assets/icons/location.svg'
import { useTranslation } from 'react-i18next'
import ymaps from 'ymaps'
import insta from '../assets/icons/Instagram.svg'
import whatsapp from '../assets/icons/watsapp.svg'
import facebook from '../assets/icons/Facebook.svg'

const Contacts = () => {
    const {t} = useTranslation()

    ymaps
        .load("https://api-maps.yandex.ru/2.1/?apikey=3ccce595-960c-4919-ad3d-65478a41ba4a&lang=ru_RU")
        .then(maps => {
            let map = new maps.Map('map', {
                center: [24.963411, 55.154734],
                zoom: 17
            });

            map.geoObjects.add(new maps.Placemark([24.963411, 55.154734], {
                    balloonContent: '<strong>Kazakhstan Pavilion</strong>'
                }, {
                    preset: 'islands#icon',
                    iconColor: '#0095b6'
                })
            )
        })
    .catch(error => console.log('Failed to load Yandex Maps', error));

    return (
        <div id='contacts' className='container mx-auto px-4 py-4'>
            <div className='flex flex-col space-y-6 md:space-y-8'>
                <h2 className='text-button font-medium text-4xl md:text-6xl'>{t('contact.title')}</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='flex flex-col space-y-10 lg:space-y-20'>
                        <div className='flex flex-col space-y-4'>
                            <a href='tel:+77711158028' className='flex items-center space-x-3'>
                                <img src={phone} className='ml-1.5' />
                                <span className='text-dark text-lg'>+7 (771) 115-80-28</span>
                            </a>
                            <a href='https://wa.me/77711158028' className='flex items-center space-x-3'>
                                <img src={whatsapp} className='-ml-1' />
                                <span className='text-dark text-lg'>+7 (771) 115-80-28</span>
                            </a>
                            <a href='mailto:qazaqtradehouse.uae@gmail.com' className='flex items-center space-x-3'>
                                <img src={email} />
                                <span className='text-dark text-lg'>qazaqtradehouse.uae@gmail.com</span>
                            </a>
                            <div className='flex items-start space-x-3'>
                                <img src={location} />
                                <span className='text-dark max-w-[350px] text-lg'>National Pavilion of Kazakhstan 132, Al Forsan Crescent street Opportunity District, Madinat Al Mataar, Dubai World Central, Dubai</span>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-button text-2xl'>{t('contact.our')}</p>
                            <div className='flex flex-col space-y-3 mt-6'>
                                <a href='https://www.instagram.com/qazaqtradehouse.uae/?igsh=MWZ4aGJ4cWU2MnJyMA%3D%3D' className='flex items-start space-x-2'>
                                    <img src={insta} />
                                    <span className='text-dark max-w-[350px] text-lg'>@tradehouse-uae-kz</span>
                                </a>
                                <a href='https://www.facebook.com/profile.php?id=61556707739484&mibextid=dGKdO6' className='flex items-start space-x-2'>
                                    <img src={facebook} />
                                    <span className='text-dark max-w-[350px] text-lg'>@tradehouse-uae-kz</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div id='map' className='w-full h-[450px]'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts