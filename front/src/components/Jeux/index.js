import React, { useState } from 'react';
import Proptypes from 'prop-types';
import Filter from 'src/containers/Jeux/Filter';
import List from 'src/containers/Jeux/List';
import { getSpec } from 'src/selectors/find';


import './style.scss';

export default function Jeux({
  games,
  handleChangeTheme,
  handleChangeCat
}) {

  console.log(games);
  /*const setUpCheck = (event) => {
    setChecked(event);
    console.log(checked);
  }*/
  
  //check={setUpCheck}
  return(
    <main className="games">
      < Filter 
        handleChangeTheme={handleChangeTheme}
        handleChangeCat={handleChangeCat}
      />
      < List games={games}/>
    </main>
  );
}

Jeux.propTypes = {};
