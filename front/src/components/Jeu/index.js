import React, { useEffect } from 'react';
import Proptypes from 'prop-types'
import Loading from 'src/components/Loading'
import Content from 'src/containers/Jeu/Content'

import './style.scss';

export default function Jeu({
  game,
  loading,
  loadGame,
}) {


  useEffect(() => {
    loadGame();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return(
    <main className="game">
      < Content {...game}/>
    </main>
  );
}

Jeu.propTypes = {};
