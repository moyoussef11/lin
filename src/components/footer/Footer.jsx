import React from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import "./footer.css";
const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer className="px-5 text-center bg-dark d-flex flex-column justify-content-center text-white text-capitalize py-3">
        <div className="d-flex align-items-center justify-content-between lis">
          <div>
            <p>{t("follow us on")}</p>
            <ul className="d-flex align-items-center justify-content-between">
              <li>
                <a
                  href="https://www.facebook.com/?locale=ar_AR"
                  target="-blank"
                >
                  <FaFacebook size={35} />
                </a>
              </li>
              <li>
                <a href="https://web.whatsapp.com/" target="-blank">
                  <FaWhatsapp size={35} color="green" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="-blank">
                  <FaInstagram size={35} color="red" />
                </a>
              </li>
            </ul>
            <hr />
            <div>
              <h3>{t("Administration")}</h3>
              <span>+966551322980</span>
            </div>
          </div>
          <div>
            <h5>{t("Contact email")}</h5>
            <ul>
              <li>info@leeneldiaa.com</li>
              <li>sales@leeneldiaa.com</li>
              <li>{t("Maintenance and installations")}</li>
              <li>+966534437528</li>
            </ul>
          </div>
          <div>
            <h5>{t("Connect with us")}</h5>
            <ul>
              <li>{t("Surveillance cameras")}</li>
              <li>+966546802834</li>
              <li>{t("Glass and texture")}</li>
              <li>+966551060519</li>
              <li>{t("Design, advertising and advertising")}</li>
              <li>+966508159771</li>
            </ul>
          </div>
        </div>
        <hr />
        <div>
          <p>{t("AllRights")}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
