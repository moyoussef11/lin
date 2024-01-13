import React from 'react';
import hero1 from '../images/hero1.png';
import hero2 from '../images/hero2.jpg';
import hero3 from "../images/hero3.png";
import ser1 from "../images/زجاج-ستركتشر.jpg";
import ser2 from "../images/612KhxwYLkL.jpg";   
import './pages.css';
import { useTranslation } from 'react-i18next';
import Titles from '../components/titles/Titles';
import { FiArrowDownLeft } from "react-icons/fi";
import { GrServices } from "react-icons/gr";
import { MdArticle } from "react-icons/md";
import { FcPicture } from "react-icons/fc";
import { FaVideo } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";


import Services from '../components/services/Services';

const Hero = () => {
  const { t,i18n } = useTranslation();
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide position-relative"
      >
        <div className="carousel-indicators bg-light">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={hero1} className="d-block w-100" alt="hero1" />
            <div className="carousel-caption d-none d-md-block py-5 text-light bg-opacity-75 bg-dark rounded-2">
              <h5>{t("slideTitle")}</h5>
              <p>{t("slideDesc")}</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={hero2} className="d-block w-100" alt="hero2" />
            <div className="carousel-caption d-none d-md-block py-5 text-light bg-opacity-75 bg-dark rounded-2">
              <h5>{t("slideTitle")}</h5>
              <p>{t("slideDesc")}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={hero3} className="d-block w-100" alt="hero3" />
            <div className="carousel-caption d-none d-md-block py-5 text-light bg-opacity-75 bg-dark rounded-2">
              <h5>{t("slideTitle")}</h5>
              <p>{t("slideDesc")}</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section className="w-100 container d-flex flex-column flex-md-row text-center text-lg-start align-items-center justify-content-between py-5">
        <div className="container-sm">
          <img
            src={require("../images/who.jpg")}
            className="w-100 object-fit-contain"
            alt="who"
          />
        </div>
        <div className="">
          {i18n.language === "en" ? (
            <Titles
              title={t("who are we")}
              icon={<FiArrowDownLeft size={30} />}
            />
          ) : (
            <Titles
              title={t("who are we")}
              icon={<FiArrowDownLeft size={30} />}
            />
          )}
          <p className="text-capitalize mt-3 py-2">{t("whoDesc")}</p>
        </div>
      </section>
      <section className="services p-5">
        <div className="text-center">
          <Titles title={t("services")} icon={<GrServices size={30} />} />
        </div>
        <div className="d-flex align-items-center justify-content-between cardService">
          <Services pic={ser1} type={t("glass")} />
          <Services pic={ser2} type={t("Propaganda and advertising")} />{" "}
          <Services pic={ser1} type={t("glass")} />
          <Services pic={ser2} type={t("Propaganda and advertising")} />
        </div>
      </section>
      <section className="p-5">
        <Titles title={t("Article")} icon={<MdArticle size={30} />} />
        <Titles title={t("pictures")} icon={<FcPicture size={30} />} />
        <Titles title={t("Videos")} icon={<FaVideo size={30} />} />
      </section>
      <section className="location px-5">
        <div>
          <Titles title={t("Our Location")} icon={<CiLocationOn size={30} />} />
        </div>
        <div className='text-center'>
          <img src={require('../images/map.jpg')} className='w-50 h-50 object-fit-contain' alt="map" />
        </div>
      </section>
    </>
  );
}

export default Hero;