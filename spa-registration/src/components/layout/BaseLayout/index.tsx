// libraries
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// components
import Header from 'components/layout/Header';
import InfoBlock from 'components/shared/InfoBlock';
import ImagesBlock from 'components/shared/ImagesBlock';
import Footer from 'components/layout/Footer';
// constants
import { HEADER_VALUES, HEADER_LINKS } from 'constants/header';

const links = [
  { value: HEADER_VALUES[0], to: HEADER_LINKS[0], isEnd: true },
  { value: HEADER_VALUES[1], to: HEADER_LINKS[1] },
  { value: HEADER_VALUES[2], to: HEADER_LINKS[2] },
  { value: HEADER_VALUES[3], to: HEADER_LINKS[3] },
  { value: HEADER_VALUES[4], to: HEADER_LINKS[4] },
  { value: HEADER_VALUES[5], to: HEADER_LINKS[5] },
];

const BaseLayout = () => (
  <>
    <Header links={links} />
    <main className="main">
      <div className="main-block container-main">
        <div className="main-block-left">
          <Outlet />
        </div>
        <div className="main-block-right">
          <InfoBlock />
        </div>
      </div>
      <ImagesBlock />
    </main>
    <Footer />
    <ToastContainer />
  </>
);

export default BaseLayout;
