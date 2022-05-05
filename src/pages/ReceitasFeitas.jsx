import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import DoneFood from '../components/DoneFood';

const ReceitasFeitas = () => {
  const [type, setType] = useState('all');
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];

  console.log(doneRecipes);

  const renderRecipes = type === 'all'
    ? doneRecipes
    : doneRecipes.filter((food) => food.type === type);

  return (
    <section>
      <header>
        <Header pageTitle="Done Recipes" isSearch={ false } />
      </header>

      <div className="done-recipe-buttons">
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setType('all') }
        >
          All
        </button>

        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => setType('food') }
        >
          Foods
        </button>

        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => setType('drink') }
        >
          Drinks
        </button>
      </div>

      <section>
        { renderRecipes.length === 0
          ? (
            <div className="done-recipe-non-recipe">
              <h3>Você não concluiu nenhuma comida ainda...</h3>
            </div>
          )
          : (
            <DoneFood
              food={ renderRecipes }
            />
          ) }
      </section>

    </section>
  );
};

ReceitasFeitas.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export default ReceitasFeitas;
