import React, { useState } from 'react';
import Proptypes from 'prop-types';
import Filter from 'src/containers/Jeux/Filter';
import List from 'src/containers/Jeux/List';


import './style.scss';

export default function Jeux() {



  return(
    <main className="games">
      < Filter />
      < List />
    </main>
  );
}

Jeux.propTypes = {};
