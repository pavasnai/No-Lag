import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlay } from "react-icons/fa";

import GameImage from "../../../assets/image/gameimage.png";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./GamesPage.css";
const GameCarousel = () => {
    return (
        <>
            <div class="filters">
                <div class="filter-btn active">sum</div>
                <div class="filter-btn">FPS</div>
                <div class="filter-btn">RPG</div>
                <div class="filter-btn">MOBA</div>
                <div class="filter-btn">Battle Royale</div>
                <div class="filter-btn">Strategy</div>
                <div class="filter-btn">Sports</div>
            </div>
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
                    slidesPerView={6}
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
                            slidesPerView: 6,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div class="gamecradset">
                            <div class="gamecard">
                                <div class="gamebadge">s</div>
                                <img src={GameImage} alt="Product" />
                                <button class="launchgame"> <FaPlay />LAUNCH</button>
                                <div class="overlayeffect"></div>

                                <div class="gamecardcontent">
                                    <div class="gamecardtitle">League of Legends</div>
                                    <div class="gamecardsubtitle">Last played: 3 days ago</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="gamecradset">
                            <div class="gamecard">
                                <div class="gamebadge">s</div>
                                <img src={GameImage} alt="Product" />
                                <button class="launchgame">  <FaPlay />LAUNCH</button>
                                <div class="overlayeffect"></div>

                                <div class="gamecardcontent">
                                    <div class="gamecardtitle">League of Legends</div>
                                    <div class="gamecardsubtitle">Last played: 3 days ago</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="gamecradset">
                            <div class="gamecard">
                                <div class="gamebadge">s</div>
                                <img src={GameImage} alt="Product" />
                                <button class="launchgame"> <FaPlay /> LAUNCH</button>
                                <div class="overlayeffect"></div>

                                <div class="gamecardcontent">
                                    <div class="gamecardtitle">League of Legends</div>
                                    <div class="gamecardsubtitle">Last played: 3 days ago</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="gamecradset">
                            <div class="gamecard">
                                <div class="gamebadge">s</div>
                                <img src={GameImage} alt="Product" />
                                <button class="launchgame"> <FaPlay /> LAUNCH</button>
                                <div class="overlayeffect"></div>

                                <div class="gamecardcontent">
                                    <div class="gamecardtitle">League of Legends</div>
                                    <div class="gamecardsubtitle">Last played: 3 days ago</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="gamecradset">
                            <div class="gamecard">
                                <div class="gamebadge">s</div>
                                <img src={GameImage} alt="Product" />
                                <button class="launchgame"><FaPlay /> LAUNCH</button>
                                <div class="overlayeffect"></div>

                                <div class="gamecardcontent">
                                    <div class="gamecardtitle">League of Legends</div>
                                    <div class="gamecardsubtitle">Last played: 3 days ago</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="gamecradset">
                            <div class="gamecard">
                                <div class="gamebadge">s</div>
                                <img src={GameImage} alt="Product" />
                                <button class="launchgame"> LAUNCH</button>
                                <div class="overlayeffect"></div>

                                <div class="gamecardcontent">
                                    <div class="gamecardtitle">League of Legends</div>
                                    <div class="gamecardsubtitle">Last played: 3 days ago</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="gamecradset">
                            <div class="gamecard">
                                <div class="gamebadge">s</div>
                                <img src={GameImage} alt="Product" />
                                <button class="launchgame"> LAUNCH</button>
                                <div class="overlayeffect"></div>

                                <div class="gamecardcontent">
                                    <div class="gamecardtitle">League of Legends</div>
                                    <div class="gamecardsubtitle">Last played: 3 days ago</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="gamecradset">
                            <div class="gamecard">
                                <div class="gamebadge">s</div>
                                <img src={GameImage} alt="Product" />
                                <button class="launchgame"> LAUNCH</button>
                                <div class="overlayeffect"></div>

                                <div class="gamecardcontent">
                                    <div class="gamecardtitle">League of Legends</div>
                                    <div class="gamecardsubtitle">Last played: 3 days ago</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="gamecradset">
                            <div class="gamecard">
                                <div class="gamebadge">s</div>
                                <img src={GameImage} alt="Product" />
                                <button class="launchgame"> LAUNCH</button>
                                <div class="overlayeffect"></div>

                                <div class="gamecardcontent">
                                    <div class="gamecardtitle">League of Legends</div>
                                    <div class="gamecardsubtitle">Last played: 3 days ago</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    );
};
export default GameCarousel;