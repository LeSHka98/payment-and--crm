// libraries
import React from 'react';
// assets
import { ReactComponent as PhoneIcon } from 'assets/images/phone.svg';
import { ReactComponent as LetterIcon } from 'assets/images/letter.svg';
import { ReactComponent as ViberIcon } from 'assets/images/viber.svg';

const InfoBlock = () => (
  <div className="info-block">
    <h4 className="info-block__header">Need help?</h4>
    <p>
      You can contact us from Monday to Saturday from 09:00 a.m. to 10:00 p.m.
    </p>
    <div className="contacts">
      <div className="contact-block">
        <PhoneIcon className="icon" />
        <a className="text" href="tel:937 227 354 / 900 533 827">937 227 354 / 900 533 827</a>
      </div>
      <div className="contact-block">
        <ViberIcon className="icon" />
        <span className="text">682 214 539</span>
      </div>
      <div className="contact-block">
        <LetterIcon className="icon" />
        <a className="text" href="mailto: clients@moneyman.es">Send us a message</a>
      </div>
    </div>
  </div>
);

export default InfoBlock;
