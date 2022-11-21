// libraries
import React from 'react';
// assets
import { ReactComponent as PhoneIcon } from 'assets/images/phone.svg';
import { ReactComponent as LetterIcon } from 'assets/images/letter.svg';
import { ReactComponent as LibraIcon } from 'assets/images/Libra.svg';
import { ReactComponent as GplayIcon } from 'assets/images/play.svg';
import { ReactComponent as FacebookIcon } from 'assets/images/facebook.svg';
import { ReactComponent as TwitterIcon } from 'assets/images/twitter.svg';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow-up.svg';
import { ReactComponent as MessageIcon } from 'assets/images/message.svg';

const Footer = () => (
  <footer className="footer">
    <h3 className="container">Send us a message</h3>
    <div className="top container">
      <div>
        <p>Call us or write to us so that we can solve your doubts.</p>
        <p>Our customer service hours are: Monday to Friday from 9:00 a.m. to 8:00 p.m.</p>
      </div>
      <div className="contacts">
        <div className="contact-block">
          <PhoneIcon className="icon" />
          <a className="contact-block__sign" href="tel:937 227 354 / 900 533 827">937 227 354 / 900 533 827</a>
        </div>
        <div className="contact-block">
          <LetterIcon className="icon" />
          <a className="contact-block__sign" href="mailto: clientes@moneyman.es">clientes@moneyman.es</a>
        </div>
        <div className="contact-block">
          <LibraIcon className="icon" />
          <span className="contact-block__sign">Customer Ombudsman</span>
        </div>
      </div>
      <div>
        <p>Our offices are located at: 08006 Barcelona</p>
        <div>
          <GplayIcon className="icon" />
          <FacebookIcon className="icon" />
          <TwitterIcon className="icon" />
        </div>
      </div>
    </div>
    <hr className="line" />
    <div className="container copyright-block">
      <span>
        {`© ${(new Date()).getFullYear()} Moneyman España`}
      </span>
      <span>
        Go back up
        <ArrowIcon className="arrow" />
      </span>
      <MessageIcon className="message" />
    </div>
  </footer>
);

export default Footer;
