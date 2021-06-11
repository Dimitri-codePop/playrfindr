import React, { useState } from 'react';
import Proptypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import categoriesData from 'src/data/category';
import themesData from 'src/data/theme'

import './style.scss';

export default function Filter() {
  const categories = categoriesData.category;
  const themes = themesData.theme;

  const handleChange = (event) => {
    console.log(event.target.name)
  };

  const themesList = themes.map((theme) => (
      <div key={theme.id}>
        <label 
          htmlFor={theme.label}
        >
          <input 
            type="checkbox" 
            id={theme.label} 
            name={theme.label}
            onChange={handleChange}
          />
          {theme.label}</label>
      </div>
  ))

  const categoryList = categories.map((cat) => (
      <div key={cat.id}>
        <label 
          htmlFor={cat.label}
        >
          <input 
            type="checkbox" 
            id={cat.label} 
            name={cat.label}
            onChange={handleChange}
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
