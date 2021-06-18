import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Ludo from 'src/containers/Ludo';
import Content from 'src/containers/Content';
import Loading from 'src/components/Loading';
import Flash from 'src/components/Flash';
import './style.scss';

export default function Profil({
  user,
  loadProfil,
  loading,
  isLogged,
  showMessage,
  setShowMessage,
  message,
  isOk,
}) {
  useEffect(() => {
    loadProfil();
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {isLogged ? (
        <>
          <Flash
            message={message}
            isOk={isOk}
            showMessage={showMessage}
            setShowMessage={setShowMessage}
          />
          <main className="profil">
            <Content
              user={user}
              showMessage={showMessage}
              setShowMessage={setShowMessage}
            />
            <Ludo user={user} />
          </main>
        </>
      ) : <Redirect to="/" />}
    </>
  );
}

Profil.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  loadProfil: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

Profil.defaultProps = {
  loading: true,
}
