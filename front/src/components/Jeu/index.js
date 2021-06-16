import React, { useEffect } from 'react';
import Proptypes from 'prop-types'
import Loading from 'src/components/Loading'
import Content from 'src/containers/Jeu/Content'

import './style.scss';

export default function Jeu({
  id,
  game,
  loading,
  loadGame,
}) {

  useEffect(() => {
    loadGame(id);
  }, []);
  console.log(`game`, game)

  if (loading) {
    return <Loading />;
  }
  return(
    <main className="game">
      < Content {...game} loading={loading}/>
    </main>
  );
}

Jeu.propTypes = {};

//< Content {...game} loading={loading}/>
