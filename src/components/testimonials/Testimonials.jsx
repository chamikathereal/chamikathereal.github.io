import React, { useState } from "react";
import "./testimonial.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
  };

  return (
    <section className="testimonial container section">
      <h2 className="section__title">My clients say</h2>
      <span className="section__subtitle">Testimonial</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, verified, status, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <div className="testimonial__header">
                <img src={image} alt="" className="testimonial__img" />

                <div className="testimonial__data">
                  <h3 className="testimonial__name">
                    {title}
                    <img src={verified} alt="" className="verified__img" />
                  </h3>
                  <p className="status__description">{status}</p>
                </div>
              </div>
              <hr />
              <br />
              <p className="testimonial__description">
                {description}
              </p>
              <br />
              <span
                className="services__button"
                onClick={() => openModal({ image, title, verified, status, description })}
              >
                View More
                <i className="uil uil-arrow-right services**button-icon"></i>
              </span>
              
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Modal */}
      {selectedTestimonial && (
        <div className="services__model active__model">
          <div className="services__model-content">
            <i
              onClick={closeModal}
              className="uil uil-times services__model-close"
            ></i>

            <div className="testimonial__header">
              <img
                src={selectedTestimonial.image}
                alt=""
                className="testimonial__img"
              />

              <div className="testimonial__data">
                <h3 className="testimonial__name">
                  {selectedTestimonial.title}
                  <img
                    src={selectedTestimonial.verified}
                    alt=""
                    className="verified__img"
                  />
                </h3>
                <p className="status__description">
                  {selectedTestimonial.status}
                </p>
              </div>
            </div>
            <hr />
            <br />
            <p className="testimonial__model__description">
              {selectedTestimonial.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
