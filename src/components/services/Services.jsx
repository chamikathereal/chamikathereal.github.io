import React, { useState } from "react";
// import DigitalMarketingImg from "../../assets/digital-marketing.svg";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer.</span>

        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">
                Social Media <br /> Consulting
              </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 1
                  ? "services__model active__model"
                  : "services__model"
              }
            >
              <div className="services__model-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__model-close"
                ></i>

                <h3 className="services__model-title">
                  Social Media Consultant
                </h3>
                <p className="services__model-description">
                  Service with more than 2 years of experience.Providing quality
                  Service to clients and companies.
                </p>

                <ul className="services__model-section grid">
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      Social Media Strategy Development.
                    </p>
                  </li>

                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      Content Creation and Planning.
                    </p>
                  </li>

                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      Paid Advertising Campaigns.
                    </p>
                  </li>

                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      Platform-Specific Consulting.
                    </p>
                  </li>

                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info services__modal">
                      Hacked Account Recovery.
                    </p>
                  </li>

                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info services__modal">
                      Analytics and Reporting.
                    </p>
                  </li>

                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info services__modal">
                      Competitor Analysis.
                    </p>
                  </li>

                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info services__modal">
                      Community Management.
                    </p>
                  </li>

                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info services__modal">
                      Social Media Audits.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-edit services__icon"></i>
              {/* <img src={DigitalMarketingImg} alt="Chamika Gayashan" className="services__icon" /> */}
              <h3 className="services__title">
                Digital <br /> Marketing
              </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(2)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 2
                  ? "services__model active__model"
                  : "services__model"
              }
            >
              <div className="services__model-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__model-close"
                ></i>

                <h3 className="services__model-title">Digital Marketer</h3>
                <p className="services__model-description">
                  Service with more than 2 years of experience.Providing quality
                  Service to clients and companies.
                </p>

                <ul className="services__model-section grid">
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      Integrated Digital Marketing Strategy.
                    </p>
                  </li>

                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      Social Media Management.
                    </p>
                  </li>

                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">Content Marketing.</p>
                  </li>

                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      SEO and Social Media Integration.
                    </p>
                  </li>

                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      Email Marketing Integration.
                    </p>
                  </li>

                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      Paid Advertising Campaigns.
                    </p>
                  </li>

                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      Social Media Analytics and Reporting.
                    </p>
                  </li>

                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      Conversion Rate Optimization (CRO).
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-arrow services__icon"></i>
              <h3 className="services__title">
                Software <br /> Development
              </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(3)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 3
                  ? "services__model active__model"
                  : "services__model"
              }
            >
              <div className="services__model-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__model-close"
                ></i>

                <h3 className="services__model-title">Software Development </h3>
                <p className="services__model-description">
                  Service with more than 2 years of experience.Providing quality
                  work to clients and companies.
                </p>

                <ul className="services__model-section grid">
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      Software Development Services.
                    </p>
                  </li>

                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      Web Development Services.
                    </p>
                  </li>

                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      Mobile App Development.
                    </p>
                  </li>

                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">Responsive Design.</p>
                  </li>

                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      Custom UI/UX Development.
                    </p>
                  </li>

                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      Single Page Applications (SPAs).
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
