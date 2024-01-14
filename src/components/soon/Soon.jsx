import React from 'react';
import { useTranslation } from 'react-i18next';
import { TbTruckLoading } from "react-icons/tb";
import { Link } from 'react-router-dom';


const Soon = () => {
    const { t } = useTranslation();
  return (
    <>
      <div className='w-100 vh-100 d-flex align-items-center justify-content-center flex-column bg-dark-subtle'>
              <div><h6 className='text-secondary'>{t("soon")}</h6></div>
              <div>
                  <span><TbTruckLoading size={30} color='red' className='d-block mx-auto' /></span>
                  <Link className='nav-link text-capitalize bg-info p-3 rounded-3 text-white mt-2' to='/'>
                      {t("back to main")}
                  </Link>
        </div>
      </div>
    </>
  );
}

export default Soon