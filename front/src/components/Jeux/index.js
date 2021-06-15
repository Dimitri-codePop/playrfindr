import React, { useEffect } from 'react';
import Proptypes from 'prop-types';
import Filter from 'src/containers/Jeux/Filter';
import List from 'src/containers/Jeux/List';
import Loading from 'src/components/Loading';


import './style.scss';

export default function Jeux({
  loading,
  categories,
  themes,
  loadTypes,
  games,
  handleChangeTheme,
  handleChangeCat
}) {

  useEffect(() => {
    loadTypes();
  }, []);
  
  if (loading) {
    return <Loading />;
  }
  return(
    <main className="games">
      < Filter 
        handleChangeTheme={handleChangeTheme}
        handleChangeCat={handleChangeCat}
        categories={categories}
        themes={themes}
      />
      < List games={games}/>
    </main>
  );
}

Jeux.propTypes = {};
