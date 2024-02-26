import React, {useState, useEffect} from 'react'
import { Trans, useTranslation } from 'react-i18next'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../assets/imgs/carousel/img1.png'
import img2 from '../assets/imgs/carousel/img2.png'
import img3 from '../assets/imgs/carousel/img3.png'
import img4 from '../assets/imgs/carousel/img4.png'
import img5 from '../assets/imgs/carousel/img5.png'
import img6 from '../assets/imgs/carousel/img6.png'
import img7 from '../assets/imgs/carousel/img7.png'
import img8 from '../assets/imgs/carousel/img8.png'

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

const About = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const images = [img1, img2, img3, img4, img5, img6, img7, img8]

    const {t} = useTranslation()

    return (
        <div id='about' className='container mx-auto px-4 py-4'>
            <h2 className='text-button font-medium text-4xl md:text-6xl'>{t('about.title')}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-8 gap-6'>
                <div className='flex items-center justify-center px-6 py-4 bg-gray-100 rounded-[20px] w-full h-full'>
                    <p className='text-dark text-lg md:text-xl md:leading-10'>
                        <Trans
                            i18nKey={"about.text"}
                            components={{br: <br/>}}
                        />
                    </p>
                </div>
                <Carousel
                    containerClass='w-full'
                    responsive={responsive}
                    arrows
                    itemClass='relative h-[300px] md:h-[500px] rounded-[20px] md:p-3'
                >
                    {
                        images.map((img, id) => (
                            <img key={id} src={img} className='object-cover w-full h-full rounded-[20px]' alt=''/>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default About