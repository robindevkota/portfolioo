import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/grocery.png";
import HOC1 from "../../img/meme.png";
import MusicApp from "../../img/you.png";
import Linked from "../../img/linked.png";
import Gmail from "../../img/gmail.png";
import Chat from "../../img/chat.jpg";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>
      <span>Click the Image fro Demo.</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
         <SwiperSlide>
         <a href="https://gmail1clone1.netlify.app/">
        <img src={Gmail} alt="" />
          </a>
        </SwiperSlide>
         <SwiperSlide>
         <a href="https://linkedin-clone-4a5ec.web.app/">
        <img src={Linked} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://chat-46250.web.app/">
        <img src={Chat} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://side1bar.netlify.app/">
        <img src={Sidebar} alt="" />
          </a>
        </SwiperSlide>
        



        <SwiperSlide>
          <a href="https://e-commercw.netlify.app/">

          <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
         <a href="https://yt1clone.netlify.app/">

          <img src={MusicApp} alt="" />
         </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://tudo1list.netlify.app/">

          <img src={HOC} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://meme1-app.netlify.app/">

          <img src={HOC1} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
