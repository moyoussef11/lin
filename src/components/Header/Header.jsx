import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './Header.css';
export const Header = () => {
  const { t, i18n } = useTranslation();
  if (i18n.language === "ar") {
    document.body.dir = "rtl";
  } else {
    document.body.dir = "ltr";
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid container-lg px-2">
          <Link className="navbar-brand text-uppercase" to="/">
            {t("logo")}
          </Link>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className={
                i18n.language === "en"
                  ? "navbar-nav ms-auto mb-2 mb-lg-0"
                  : "navbar-nav me-auto mb-2 mb-lg-0"
              }
            >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {t("main")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/articles">
                  {t("Articles")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/videos">
                  {t("Videos")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ourBusiness">
                  {t("Of Our Business")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/OurServices">
                  {t("Our services")}
                </Link>
              </li>
              {i18n.language === "en" && (
                <li className="nav-item">
                  <button
                    className="btn btn-dark px-4 py-2 bg-white text-dark"
                    onClick={() => {
                      i18n.changeLanguage("ar");
                    }}
                  >
                    AR
                  </button>
                </li>
              )}
              {i18n.language === "ar" && (
                <li className="nav-item">
                  <button
                    className="btn btn-dark px-4 py-2 bg-white text-dark"
                    onClick={() => {
                      i18n.changeLanguage("en");
                    }}
                  >
                    EN
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
