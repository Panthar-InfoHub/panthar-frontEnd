'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export const SwiperComponent = () => {
    return (
        <section className='section_container h-auto relative w-full' >
            <Swiper spaceBetween={50} slidesPerView={4} className='w-full h-full' loop={true} >
                {[0, 1, 2, 3, 4, 5, 6].map((slide, index) => (
                    <SwiperSlide key={index} className='relative !mr-0'  >
                        <div className="collab_circle"></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};