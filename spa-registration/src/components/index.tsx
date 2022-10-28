import React from 'react';
// styles
import 'styles/index.scss';
// components
import Header from 'components/layout/Header';
import BreadCrumbs from 'components/shared/BreadCrumbs';
import RegistrationForm from 'components/RegistrationForm';
import InfoBlock from 'components/shared/InfoBlock';
import Footer from 'components/layout/Footer';
import ImagesBlock from 'components/shared/ImagesBlock';
// constants
import { breadCrumbs } from 'constants/index';

const App = () => (
  <div className="App">
    <Header />
    <main className="main">
      <BreadCrumbs elements={breadCrumbs} />
      <div className="main-block container-main">
        <div className="main-block-left">
          <RegistrationForm />
        </div>
        <div className="main-block-right">
          <InfoBlock />
        </div>
      </div>
      <ImagesBlock />
      <div className="cookies">Cookie settings</div>
    </main>
    <Footer />
  </div>
);

export default App;
