import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Ludo from 'src/containers/Ludo';
import Content from 'src/containers/Content';
import Loading from 'src/components/Loading';

import './style.scss';

export default function Profil({ user, loadProfil, loading }) {
  useEffect(() => {
    loadProfil();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <main className="profil">
        <Content user={user} />
        <Ludo />
      </main>
    </>
  );
}

Profil.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  loadProfil: PropTypes.func.isRequired,
};

Profil.defaultProps = {
  loading: true,
}
