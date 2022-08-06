import React from "react";
import "tiny-slider/dist/tiny-slider.css";
import "./testimonial.css";
import { ScreenHeader } from "../../utilities/ScreeenHeader/SCreenHeader";
import { Header } from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

export const Testimonial = (props) => {
  const testemonialDetails = [
    {
      id: 1,
      name: "Dasiy Domig",
      position: "CEO InanceGlobal",
      description:
        "I pertonised online Store and when he delivered, I honestly fell in love with the project. She is a very honest and she delivers on time.",
      img: {
        src: "img/testimonail/3.jpg",
        alt: "No Internet Connection.",
      },
    },
    {
      id: 2,
      name: "Dasiy Domig",
      position: "CEO",
      description:
        "I pertonised online Store and when he delivered, I honestly fell in love with the project. She is a very honest and she delivers on time.",
      img: {
        src: "img/testimonail/3.jpg",
        alt: "No Internet Connection.",
      },
    },
    {
      id: 3,
      name: "Dasiy Domig",
      position: "CEO",
      description:
        "I pertonised online Store and when he delivered, I honestly fell in love with the project. She is a very honest and she delivers on time.",
      img: {
        src: "img/testimonail/3.jpg",
        alt: "No Internet Connection.",
      },
    },
    {
      id: 4,
      name: "Dasiy Domig",
      position: "CEO",
      description:
        "I pertonised online Store and when he delivered, I honestly fell in love with the project. She is a very honest and she delivers on time.",
      img: {
        src: "img/testimonail/3.jpg",
        alt: "No Internet Connection.",
      },
    },
    {
      id: 5,
      name: "Dasiy Domig",
      position: "CEO",
      description:
        "I pertonised online Store and when he delivered, I honestly fell in love with the project. She is a very honest and she delivers on time.",
      img: {
        src: "img/testimonail/3.jpg",
        alt: "No Internet Connection.",
      },
    },
    {
      id: 6,
      name: "Dasiy Domig",
      position: "CEO",
      description:
        "I pertonised online Store and when he delivered, I honestly fell in love with the project. She is a very honest and she delivers on time.",
      img: {
        src: "img/testimonail/3.jpg",
        alt: "No Internet Connection.",
      },
    },
  ];

  return (
    <div className="container0">
      <Header />
      <ScreenHeader
        title={"Testimonial"}
        subHeading={"What My Client Say About Me"}
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <Swiper
              //  modules={[Navigation, Scrollbar]}
              modules={[Scrollbar, A11y]}
              spaceBetween={50}
              breakpoints={{
                // when window width is >= 768px
                768: {
                  // width: 768,
                  slidesPerView: 2,
                },
                // when window width is >= 360px
                359: {
                  slidesPerView: 1,
                },
                1020: {
                  // width: 768,
                  slidesPerView: 3,
                },
              }}
              // navigation
              // pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={""}
              onSlideChange={""}
              // effect="cube"
              className="swiper"
            >
              <div className="col-lg-12">
                {testemonialDetails.map((testimaonial, index) => (
                  <SwiperSlide
                    // className="col-lg-12"
                    key={index}
                  >
                    <div>
                      <div className="testi-item">
                        <div className="testi-comment">
                          <p>
                            <i className="fa fa-quote-left" />
                            {testimaonial.description}
                            <i className="fa fa-quote-right" />
                          </p>
                          <ul className="starts list-unstlyed">
                            <li>
                              <i className="fa fa-star" />
                            </li>
                            <li>
                              <i className="fa fa-star" />
                            </li>
                            <li>
                              <i className="fa fa-star" />
                            </li>
                            <li>
                              <i className="fa fa-star-half-alt" />
                            </li>
                            <li>
                              <i className="fa fa-star" />
                            </li>
                          </ul>
                        </div>
                        <div className="client-info">
                          <img
                            src={testimaonial.img.src}
                            alt={testimaonial.img.alt}
                          ></img>
                          <h5>{testimaonial.name}</h5>
                          <p>{testimaonial.position} </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      <div className="footer-image">
        <img
          src={require("../../assets/Home/24.png")}
          alt="no internet connection"
        />
      </div> </section>
      {/* <Footer/> */}
     
    </div>
  );
};
