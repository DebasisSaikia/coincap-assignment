import React from "react";
import styled from "styled-components";
import style from "./footerStyle";
import {BsTwitter} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'

const FooterWrapper = styled.div`
  ${style}
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer_container">
        <div>
          <h3>
            COINCAP.IO   
          </h3>
          <li>
          Methodology
          </li>
          <li>Support</li>
          <li>Our API</li>
          <li>Rate Comparison</li>
          <li>Careers</li>
        </div>
        <div>
          <h3>LEGALS</h3>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <h3>DISCLAIMER</h3>
          <li>Neither ShapeShift</li>
        </div>
        <div>
          <h3>FOLLOW US</h3>
          <span><BsTwitter/> <AiFillFacebook/></span>
        </div>
        <div>
          <h3>COINCAP APP AVAILABLE ON</h3>
          <img src="https://coincap.io/static/images/stores/google_play.svg" alt="playStore" />
          <br/>
          <img src="https://coincap.io/static/images/stores/apple_store.svg" alt="appStore" />
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
