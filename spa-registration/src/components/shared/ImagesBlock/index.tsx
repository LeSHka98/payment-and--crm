// libraries
import React from 'react';
// assets
import { ReactComponent as Instantor } from 'assets/images/CardImages/instantor.svg';
import { ReactComponent as EKomi } from 'assets/images/CardImages/eKomi.svg';
import { ReactComponent as Confianza } from 'assets/images/CardImages/confianza.svg';
import { ReactComponent as MasterCard } from 'assets/images/CardImages/masterCard.svg';
import { ReactComponent as Visa } from 'assets/images/CardImages/visa.svg';
import { ReactComponent as Aemip } from 'assets/images/CardImages/aemip.svg';

const ImagesBlock = () => (
  <div className="images container">
    <Instantor className="image" />
    <EKomi className="image" />
    <Confianza className="image" />
    <MasterCard className="image" />
    <Visa className="image" />
    <Aemip className="image" />
  </div>
);

export default ImagesBlock;
