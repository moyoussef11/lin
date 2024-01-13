import React, { useState } from "react";
import "./btn.css";
import { useTranslation } from "react-i18next";

const Up = () => {
  const { t } = useTranslation();
  const [visable, setVisable] = useState(false);
  function toUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  }
  window.addEventListener("scroll", function () {
    if (this.scrollY > 700) {
      setVisable(true);
    } else {
      setVisable(false);
    }
  });

  return (
    <>
      {!visable ? (
        ""
      ) : (
        <div onClick={toUp} className="up">
          {t("up")}
        </div>
      )}
    </>
  );
};

export default Up;
