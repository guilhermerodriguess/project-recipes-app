import React from 'react';
import PropTypes from 'prop-types';
// import RecipeContext from '../context/RecipesContext';

const DropDownNationalities = ({ nationalities, setSelected, selected }) => (
  <select
    name="nationalities"
    id=""
    data-testid="explore-by-nationality-dropdown"
    onChange={ ({ target }) => setSelected(target.value) }
    value={ selected }
  >
    <option data-testid="All-option" value="All">All</option>
    { nationalities.map((meal) => (
      <option
        data-testid={ `${meal.strArea}-option` }
        key={ Math.random() }
        value={ meal.strArea }
      >
        {meal.strArea}
      </option>
    )) }
  </select>
);

DropDownNationalities.propTypes = {
  nationalities: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelected: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default DropDownNationalities;
