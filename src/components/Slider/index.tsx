import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';

import classes from './slider.module.scss';
import { transformImagePaths } from '../../utils/utils';

const Slider = ({ images, className }: { images: string[], className?: string }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className={className}
            draggable={true}
        >
            {
                images.map((each, i) => (
                    <SwiperSlide className={classes.slide} key={i}>
                        {/* Add a CSS class to the image and adjust width and height in CSS */}
                        <img src={transformImagePaths(each)} className={`${classes.image} block cursor-grab`} alt={`Slide ${i + 1}`} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default Slider;