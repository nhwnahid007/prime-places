import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const BannerSlider = () => {
    return (
        <div className='mx-5 z-0 my-10'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
         <SwiperSlide><div className=''><img className='rounded-lg w-full  lg:h-[775px] object-cover' src="https://i.ibb.co/cDKCZvb/s4.jpg" alt="" /></div></SwiperSlide>
          <SwiperSlide><div className=''><img className='rounded-lg w-full  lg:h-[775px] object-cover' src="https://i.ibb.co/C1mjRD6/s2.jpg" alt="" /></div></SwiperSlide>
          <SwiperSlide><div className=''><img className='rounded-lg w-full  lg:h-[775px] object-cover' src="https://i.ibb.co/bPpS3dz/s3.jpg" alt="" /></div></SwiperSlide>
          
          <SwiperSlide><div className=''><img className='rounded-lg w-full  lg:h-[775px] object-cover' src="https://i.ibb.co/3yZ4xnk/s1.jpg" alt="" /></div></SwiperSlide>
          
        </Swiper>
      </div>
    );
};

export default BannerSlider;