import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlay } from "react-icons/fa";
import ProductImage from "../../../assets/image/ProductImage.png";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./PrizeVaultPage.css";
const ChallengeCarousel = () => {
    return (
        <>
            <div className="shopslider ">
                {/* TOP HEADER */}
                <div className="shopheader">
                    <h2 className="lableheading">Popular at ClutcHH</h2>
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
                                        <h2>Daily Check In</h2>
                                        <p>Login Today</p>
                                        <div class="progress-bar">
                                            <div class="progress-fill"></div>
                                        </div>
                                        <div class="bottom-section">
                                            <div class="reward">
                                                <span>50XP</span>
                                                <span class="coins">Coins-234</span>
                                            </div>
                                            <button class="coinsbtn">Claim</button>
                                        </div>
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
export default ChallengeCarousel;