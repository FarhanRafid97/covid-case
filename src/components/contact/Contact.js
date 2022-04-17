import React from 'react';
import fotoProfile from '../../img/foto.png';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai';
import './contact.css';

const Contact = () => {
  return (
    <>
      <div className="contact-me">
        <div className="cards-contact">
          <div className="foto">
            <img src={fotoProfile} alt="" />
          </div>
          <div className="keterangan-kontak">
            <div className="socmed">
              <div className="nama">
                <h3>Farhan Rafid Syauqi</h3>
              </div>
              <div className="link-socmed">
                <a
                  href="https://www.linkedin.com/in/farhan-rafid-syauqi-268a9820b/"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
                <a href="">
                  <AiFillTwitterCircle />
                </a>
                <a href="https://github.com/FarhanRafid97" target="_blank">
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
