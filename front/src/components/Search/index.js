import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loading from 'src/components/Loading';
import { Link } from 'react-router-dom';
import './style.scss';

export default function Search({
  resultsGames,
  resultsUsers,
  resultsSearch,
  loading,
}) {



  if (loading) {
    return <Loading />;
  }
  console.log(`resultsGames`, resultsGames[0][0])
  console.log(`resultsUsers`, resultsUsers[0][0])
  console.log(`resultsSearch`, resultsSearch)

  const users = resultsUsers[0].map((user) => (
    <Link
      className="resultcard"
      to={`/profil/${user.id}`}
    >
    <article className="resultcard-article" key={user.id}>
      <img className="resultcard-img" src="https://st.depositphotos.com/thumbs/1008939/image/1880/18807295/api_thumb_450.jpg" alt={user.firstname} />
      <h2 className="resultcard-title">{user.firstname} {user.lastname}</h2>
    </article>
    </Link>
  ));

  const games = resultsGames[0].map((game) => (
    <Link
    className="resultcard"
      to={`/jeu/${game.id}`}
    >
    <article className="resultcard-article" key={game.id}>
      <img className="resultcard-img" src={game.picture} alt={game.label} />
      <h2 className="resultcard-title">{game.label}</h2>
    </article>
    </Link>
  ));
  return (
      <main className="search">
        <h1 className="search-title">resultats pour "{resultsSearch}"</h1>
        <div className="search-items">
          <div className="search-content">
            <h2 className="search-subtitle">Utilisateurs : </h2>
            <ul className="search-results">
              {users}
            </ul>
          </div>
          <div className="search-content">
            <h2 className="search-subtitle">Jeux : </h2>
            <ul className="search-results">
              {games}
            </ul>
          </div>
        </div>
      </main>
  );
}

Search.propTypes = {

};
