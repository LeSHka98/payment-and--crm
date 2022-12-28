// libraries
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// api
import { onAuthStateChanged, User } from 'firebase/auth';
import { getUserInfo, logOut } from 'api/FireBase/firebase';
import { auth } from 'api/FireBase/databaseConfig';
// components
import UserInfo from 'components/UserInfo/index';
import ImagesBlock from 'components/shared/ImagesBlock';
import Footer from 'components/layout/Footer';
// constants
import { Registration } from 'constants/common';

const UserInfoPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<Registration>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser: User) => {
      if (currentUser) {
        const data = await getUserInfo(currentUser.email);

        setUser(data);
      } else {
        navigate('/login');
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigate]);

  return (
    <>
      <div className="user-info-page">
        <div className="user-info-form">
          {user
            ? <UserInfo user={user} />
            : <h1>Loading ...</h1>}
          <button className="button orange-button" onClick={() => logOut(navigate)}>LOG OUT</button>
        </div>
      </div>
      <div className="green-background">
        <ImagesBlock />
      </div>
      <Footer />
    </>
  );
};

export default UserInfoPage;
