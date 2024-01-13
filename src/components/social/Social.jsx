import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import './social.css';

const Social = () => {
  return (
    <>
      <div className='social'>
        <ul className='m-0 border p-1 border-black bg-white'>
          <li>
            <a href="https://www.facebook.com/?locale=ar_AR" target="-blank">
              <FaFacebook size={35} />
            </a>
          </li>
          <li>
            <a href="https://web.whatsapp.com/" target="-blank">
              <FaWhatsapp size={35} color='green' />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/"  target="-blank">
              <FaInstagram  size={35} color='red'/>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Social