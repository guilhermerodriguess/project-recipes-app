import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';

const ReceitasFavoritas = () => {
  const [updateLocalStorage, setUpdateLocalState] = useState(true);
  const getStorageFavoriteRecipes = JSON.parse(
    localStorage.getItem('favoriteRecipes'),
  ) || [];
  const history = useHistory();

  const [types, setTypes] = useState('all');
  const favoritesRecipes = types === 'all'
    ? getStorageFavoriteRecipes
    : getStorageFavoriteRecipes.filter(
      (favorites) => favorites.type === types,
    );

  const redirectToDetails = (type, id) => {
    if (type === 'food') {
      history.push(`/foods/${id}`);
    } else {
      history.push(`/drinks/${id}`);
    }
  };

  return (
    <>
      <header>
        <Header pageTitle="Favorite Recipes" isSearch={ false } />
      </header>

      <main>
        <button
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ () => setTypes('all') }
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ () => setTypes('food') }
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ () => setTypes('drink') }
        >
          Drinks
        </button>

        <section>
          {favoritesRecipes.map(
            (
              { id, image, category, name, type, nationality, alcoholicOrNot },
              index,
            ) => (
              <article key={ id }>
                <div
                  onClick={ () => redirectToDetails(type, id) }
                  role="button"
                  tabIndex={ 0 }
                  onKeyPress={ () => {} }
                >
                  <img
                    data-testid={ `${index}-horizontal-image` }
                    src={ image }
                    alt={ name }
                  />
                </div>
                <p data-testid={ `${index}-horizontal-top-text` }>
                  {alcoholicOrNot === ''
                    ? `${nationality} - ${category}`
                    : alcoholicOrNot}
                </p>

                <div
                  onClick={ () => redirectToDetails(type, id) }
                  role="button"
                  tabIndex={ 0 }
                  onKeyPress={ () => {} }
                  data-testid={ `${index}-horizontal-name` }
                >
                  {name}
                </div>

                <ShareButton
                  dataId={ `${index}-horizontal-share-btn` }
                  URL={ type === 'food' ? `/foods/${id}` : `/drinks/${id}` }
                />

                <span
                  onClick={ () => setUpdateLocalState(!updateLocalStorage) }
                  role="button"
                  tabIndex={ 0 }
                  onKeyPress={ () => {} }
                >
                  <FavoriteButton
                    dataId={ `${index}-horizontal-favorite-btn` }
                    path={ false }
                    id={ id }
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
