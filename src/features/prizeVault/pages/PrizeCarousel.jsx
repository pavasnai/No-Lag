import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlay } from "react-icons/fa";
import ProductImage from "../../../assets/image/ProductImage.png";
import { IoGameControllerOutline } from "react-icons/io5";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./PrizeVaultPage.css";
const PrizeCarousel = () => {
    return (
        <>
            <div className="shopslider ">
                {/* TOP HEADER */}
                <div className="shopheader">
                    <h2 className="lableheading">Popular at ClutcHH</h2>
                    <div class="filters challengefilters">
                        <div class="filter-btn active">sum</div>
                        <div class="filter-btn">FPS</div>
                        <div class="filter-btn">RPG</div>
                    </div>
                    {/* CUSTOM NAVIGATION */}
                    <div className="navbuttons">
                        <div className="swiper-button-prev custom-nav"></div>
                        <div className="swiper-button-next custom-nav"></div>
                    </div>
                </div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="shopcard glassyfinish">
                            <div className="cardtop">
                                <div className="badge redbadge">
                                    Most Popular
                                </div>
                                <img src={ProductImage} alt="Product" />
                            </div>
                            <div className="">
                                <div class="daily-card">
                                    <div class="daily-content">
                                        <h2>Free One Hour</h2>
                                        <div class="bottom-section">
                                            <div class="reward">
                                                <IoGameControllerOutline />
                                                <span class="coins">35000</span>
                                            </div>
                                        </div>
                                        <button class="coinsbtn Prizesbtn">Claim</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};
export default PrizeCarousel;