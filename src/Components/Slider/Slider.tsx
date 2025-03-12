import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const SliderCarousel = () => {
  return (
    <div className="w-[100vw] p-[50px]">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        navigation={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="opacity-[99%] w-[100%]"
      >
        <SwiperSlide className="">
          <img
            src="../../../assets/works/IMG_20210922_170245.jpg"
            alt="first slide"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <img
            src="../../../assets/works/IMG_20210928_192711.jpg"
            alt="second slide"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <img
            src="../../../assets/works/IMG_20211020_174547.jpg"
            alt="third slide"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderCarousel;
