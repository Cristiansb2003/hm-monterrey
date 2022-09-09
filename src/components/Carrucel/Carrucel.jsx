import st from './carrucel.module.css'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import { Navigation, EffectFade } from "swiper";
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import img1 from './../../utils/actividad-piloto/1.png'
import img2 from './../../utils/actividad-piloto/4.png'

export function Carrucel(){
    return(<>
    <div className={st.container}>
        <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        effect
        speed={800}
        slidesPerView={1}
        loop
        className={st.mySwiper}
        >
            <SwiperSlide className={st.swiperSlide}>
                <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide className={st.swiperSlide}>
                <img src={img2} alt="" />
            </SwiperSlide>
            
        </Swiper>
    </div>
        </>);
}