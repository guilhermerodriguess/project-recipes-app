import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';

const ReceitasFavoritas = () => {
  const [updateState, setUpdateState] = useState(true);
  const getStorageFavoriteRecipes = JSON.parse(
    localStorage.getItem('favoriteRecipes'),
  ) || [];

  const [filter, setFilter] = useState('all');
  const favoritesRecipes = filter === 'all'
    ? getStorageFavoriteRecipes
    : getStorageFavoriteRecipes.filter(
      (favorites) => favorites.type === filter,
    );

  return (
    <>
      <Header pageTitle="Favorite Recipes" isSearch={ false } />

      <main>
        <section>
          <button
            data-testid="filter-by-all-btn"
            type="button"
            onClick={ () => setFilter('all') }
          >
            All
          </button>
          <button
            data-testid="filter-by-food-btn"
            type="button"
            onClick={ () => setFilter('food') }
          >
            Food
          </button>
          <button
            data-testid="filter-by-drink-btn"
            type="button"
            onClick={ () => setFilter('drink') }
          >
            Drinks
          </button>
        </section>

        <section>
          {favoritesRecipes.map(
            (
              { id, image, category, name, type, nationality, alcoholicOrNot },
              index,
            ) => (
              <article key={ id }>
                <Link to={ type === 'food' ? `/foods/${id}` : `/drinks/${id}` }>
                  <img
                    className="done-recipe-img"
                    data-testid={ `${index}-horizontal-image` }
                    src={ image }
                    alt={ name }
                  />
                </Link>

                <p data-testid={ `${index}-horizontal-top-text` }>
                  {alcoholicOrNot === ''
                    ? `${nationality} - ${category}`
                    : alcoholicOrNot}
                </p>

                <Link to={ type === 'food' ? `/foods/${id}` : `/drinks/${id}` }>
                  <h1 data-testid={ `${index}-horizontal-name` }>{name}</h1>
                </Link>

                <ShareButton
                  dataId={ `${index}-horizontal-share-btn` }
                  URL={ type === 'food' ? `/foods/${id}` : `/drinks/${id}` }
                />

                <span
                  onClick={ () => setUpdateState(!updateState) }
                  role="button"
                  tabIndex={ 0 }
                  onKeyPress={ () => {} }
                >
                  <FavoriteButton
                    dataId={ `${index}-horizontal-favorite-btn` }
                    path={ false }
                    id={ id }
                    onClick={ () => setUpdateState(!updateState) }
                  />
                </span>
              </article>
            ),
          )}
        </section>
      </main>
    </>
  );
};

export default ReceitasFavoritas;
