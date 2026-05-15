import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductImage from "../../assets/image/ProductImage.png";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./ShopCarousel.css";
const ShopCarousel = () => {
    return (
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
                        <div className="cardbottom">
                            <div className="carddetails">
                                <h4>Coca-Cola</h4>
                                <h6>330 ml can</h6>
                                <h5>₹250</h5>
                            </div>

                            <div className="cardbutton glassyfinish">
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="shopcard glassyfinish">
                        <div className="cardtop">
                            <div className="badge redbadge">
                                Most Popular
                            </div>
                            <img src={ProductImage} alt="Product" />
                        </div>
                        <div className="cardbottom">
                            <div className="carddetails">
                                <h4>Coca-Cola</h4>
                                <h6>330 ml can</h6>
                                <h5>₹250</h5>
                            </div>

                            <div className="cardbutton glassyfinish">
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="shopcard glassyfinish">
                        <div className="cardtop">
                            <div className="badge redbadge">
                                Most Popular
                            </div>
                            <img src={ProductImage} alt="Product" />
                        </div>
                        <div className="cardbottom">
                            <div className="carddetails">
                                <h4>Coca-Cola</h4>
                                <h6>330 ml can</h6>
                                <h5>₹250</h5>
                            </div>

                            <div className="cardbutton glassyfinish">
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="shopcard glassyfinish">
                        <div className="cardtop">
                            <div className="badge redbadge">
                                Most Popular
                            </div>
                            <img src={ProductImage} alt="Product" />
                        </div>
                        <div className="cardbottom">
                            <div className="carddetails">
                                <h4>Coca-Cola</h4>
                                <h6>330 ml can</h6>
                                <h5>₹250</h5>
                            </div>

                            <div className="cardbutton glassyfinish">
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="shopcard glassyfinish">
                        <div className="cardtop">
                            <div className="badge redbadge">
                                Most Popular
                            </div>
                            <img src={ProductImage} alt="Product" />
                        </div>
                        <div className="cardbottom">
                            <div className="carddetails">
                                <h4>Coca-Cola</h4>
                                <h6>330 ml can</h6>
                                <h5>₹250</h5>
                            </div>

                            <div className="cardbutton glassyfinish">
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="shopcard glassyfinish">
                        <div className="cardtop">
                            <div className="badge redbadge">
                                Most Popular
                            </div>
                            <img src={ProductImage} alt="Product" />
                        </div>
                        <div className="cardbottom">
                            <div className="carddetails">
                                <h4>Coca-Cola</h4>
                                <h6>330 ml can</h6>
                                <h5>₹250</h5>
                            </div>

                            <div className="cardbutton glassyfinish">
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default ShopCarousel;