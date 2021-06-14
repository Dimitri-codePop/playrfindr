import React from 'react'
import Proptypes from 'prop-types'
import Ludo from 'src/containers/Ludo';
import Content from 'src/containers/Content';
import users from 'src/data/user'

import './style.scss';

export default function Profil() {
  return(
    <main className="profil">
      <Content user={users.user}/>
      <Ludo />
    </main>
  );
}

Profil.propTypes = {};
