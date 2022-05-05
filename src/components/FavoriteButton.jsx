import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import RecipeContext from '../context/RecipesContext';

function FavoriteButton({ id, path }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { dataRecipe } = useContext(RecipeContext);
  const savedFavoriteRecipes = JSON.parse(localStorage
    .getItem('favoriteRecipes')) || [];

  const favoriteRecipe = {
    id,
    type: path ? 'food' : 'drink',
    nationality: dataRecipe[0].strArea || '',
    category: dataRecipe[0].strCategory || '',
    alcoholicOrNot: dataRecipe[0].strAlcoholic || '',
    name: dataRecipe[0].strMeal || dataRecipe[0].strDrink,
    image: dataRecipe[0].strMealThumb || dataRecipe[0].strDrinkThumb,
  };

  useEffect(() => {
    const isFavoriteRecipe = savedFavoriteRecipes
      .some((element) => element.id.includes(id));
    setIsFavorite(isFavoriteRecipe);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    if (isFavorite) {
      const deleteFavoriteRecipe = savedFavoriteRecipes
        .filter((element) => element.id !== id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(deleteFavoriteRecipe));
      setIsFavorite(false);
    } else {
      const newSave = savedFavoriteRecipes.concat(favoriteRecipe);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newSave));
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <button
      src={ isFavorite ? blackHeart : whiteHeart }
      type="button"
      data-testid="favorite-btn"
      onClick={ handleClick }
    >
      <img
        src={ isFavorite ? blackHeart : whiteHeart }
        alt="botão de compartilhamento"
      />
    </button>
  );
}

FavoriteButton.propTypes = {
  id: PropTypes.string.isRequired,
  path: PropTypes.bool.isRequired,
};

export default FavoriteButton;
