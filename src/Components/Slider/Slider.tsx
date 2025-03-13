import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const SliderCarousel = () => {
  return (
    <div className="w-[100vw] p-[50px] bg-black mt-16 rounded-[70px]">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        navigation={true}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 10,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img
            src="../../../assets/works/IMG_20210922_170245.jpg"
            alt="first slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../assets/works/IMG_20210928_192711.jpg"
            alt="second slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../assets/works/IMG_20211020_174547.jpg"
            alt="third slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../assets/works/IMG_20211228_162117.jpg"
            alt="fourth slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../assets/works/IMG_20231216_031535.jpg"
            alt="fives slide"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="../../../assets/works/IMG_20240426_114431.jpg"
            alt="six slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../assets/works/IMG_20211022_152800.jpg"
            alt="seven slide"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderCarousel;
