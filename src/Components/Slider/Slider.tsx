import { Swiper, SwiperSlide } from "swiper/react";
import style from "swiper/css";

const SliderCarousel = () => {
  return (
    <div className="w-full p-[50px]">
      <Swiper spaceBetween={50} slidesPerView={3} className="opacity-[99%]">
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
      </Swiper>
    </div>
  );
};

export default SliderCarousel;
