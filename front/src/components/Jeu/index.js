import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import Loading from 'src/components/Loading'
import Content from 'src/containers/Jeu/Content'

import './style.scss';

export default function Jeu({
  id,
  game,
  loading,
  loadGame,
  showMessage,
  setShowMessage,
}) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    loadGame(id);
    setTimeout(() => {
      setLoader(!loader);
    }, 1000);
  }, [id]);

  if (loader) {
    return <Loading />;
  }
  return(
    <main className="game">
      < Content
        {...game}
        loading={loading}
        showMessage={showMessage}
        setShowMessage={setShowMessage}
      />
    </main>
  );
}

Jeu.propTypes = {
  id: PropTypes.number.isRequired,
  game: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  loadGame: PropTypes.func.isRequired,
  showMessage: PropTypes.bool.isRequired,
  setShowMessage: PropTypes.func.isRequired,
};

//< Content {...game} loading={loading}/>
