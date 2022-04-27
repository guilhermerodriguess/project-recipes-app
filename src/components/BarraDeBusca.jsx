import React, { useContext } from 'react';
import RecipeContext from '../context/RecipesContext';

const BarraDeBusca = () => {
  const {
    setFilter, textFilter, setTextFilter, requestAPI,
  } = useContext(RecipeContext);

  return (
    <div>
      <form onSubmit={ (e) => requestAPI(e) }>
        <div>
          <input
            data-testid="search-input"
            type="text"
            value={ textFilter }
            onChange={ ({ target }) => setTextFilter(`${target.value}`) }
          />
        </div>
        <div>
          <label htmlFor="ingredient">
            <input
              name="filter"
              id="ingredient"
              value="i"
              data-testid="ingredient-search-radio"
              type="radio"
              onChange={ ({ target }) => setFilter(`${target.value}`) }
            />
            Ingredient
          </label>
          <label htmlFor="name">
            <input
              name="filter"
              id="name"
              value="s"
              data-testid="name-search-radio"
              type="radio"
              onChange={ ({ target }) => setFilter(`${target.value}`) }
            />
            Name
          </label>
          <label htmlFor="first-letter">
            <input
              name="filter"
              id="first-letter"
              value="f"
              data-testid="first-letter-search-radio"
              type="radio"
              onChange={ ({ target }) => setFilter(`${target.value}`) }
            />
            First Letter
          </label>
        </div>
        <button data-testid="exec-search-btn" type="submit">Search</button>
      </form>
    </div>
  );
};

export default BarraDeBusca;
