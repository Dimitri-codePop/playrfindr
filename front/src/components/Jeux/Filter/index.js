import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import categoriesData from 'src/data/category';
import themesData from 'src/data/theme'
import Loading from 'src/components/Loading';

import './style.scss';

export default function Filter({
  handleChangeTheme,
  handleChangeCat,
  loading,
  categories,
  themes,
}) {

  console.log(`categoriescomp`, categories);
  console.log(`themescomp`, themes);

  //const categories = categoriesData.category;
  //const themes = themesData.theme;

  const handleOnChangeTheme = (event) => {
    handleChangeTheme(event.target.name);
  };

  const handleOnChangeCat = (event) => {
    handleChangeCat(event.target.name);
  };

  const themesList = themes.map((theme) => (
      <div key={theme.id} className="games__filter__results__items">
        <label 
          htmlFor={theme.label}
        >
          <input 
            type="checkbox" 
            id={theme.label} 
            name={theme.label}
            onChange={handleOnChangeTheme}
            className="games__filter__results__input" 
          />
          {theme.label}</label>
      </div>
  ))

  const categoryList = categories.map((cat) => (
      <div key={cat.id} className="games__filter__results__items">
        <label 
          htmlFor={cat.label}
        >
          <input 
            type="checkbox" 
            id={cat.label} 
            name={cat.label}
            onChange={handleOnChangeCat}
            className="games__filter__results__input" 
          />
          {cat.label}</label>
      </div>
  ))

  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    setOpen(!open);
  };

  const chevronClass = open ? "games__filter--icon off" : "games__filter--icon on"
  const chevronIcon = open ? faChevronLeft : faChevronRight

  const list = open ? "games__filter__results" : "games__filter__noresults"


  if (loading) {
    return <Loading />;
  }
  return(
      <div className="games__filter">
        <div className="games__filter--toggle">
          <button
            className="games__filter--button"
            onClick={handleOnClick}
            >
              Filtrer
          </button>
          
        </div>
        <div className="games__filter--comp">
            <div className={list}>
              <h2 className="games__filter__results--themestitle">Thèmes</h2>
              <ul className="games__filter__results--themeslist">
                {themesList}
              </ul>
              <h2 className="games__filter__results--categoriestitle">Catégories</h2>
              <ul className="games__filter__results--categorieslist">
                {categoryList}
              </ul>
            </div>
            <FontAwesomeIcon onClick={handleOnClick} className={chevronClass} icon={chevronIcon} />
        </div>
      </div>
  );
}

Filter.propTypes = {};
