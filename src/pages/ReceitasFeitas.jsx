import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import DoneFood from '../components/DoneFood';

const ReceitasFeitas = () => {
  const [type, setType] = useState('all');
  const doneRecipes = [
    {
      id: '52771',
      type: 'food',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      doneDate: '23/06/2020',
      tags: ['Pasta', 'Curry'],
    },
    {
      id: '178319',
      type: 'drink',
      nationality: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      doneDate: '23/06/2020',
      tags: [],
    },
  ];

  const renderRecipes = type === 'all'
    ? doneRecipes
    : doneRecipes.filter((food) => food.type === type);

  return (
    <section>
      <header>
        <Header pageTitle="Done Recipes" isSearch={ false } />
      </header>

      <div>
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

      <div>
        <DoneFood
          food={ renderRecipes }
        />
      </div>

    </section>
  );
};

ReceitasFeitas.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export default ReceitasFeitas;
