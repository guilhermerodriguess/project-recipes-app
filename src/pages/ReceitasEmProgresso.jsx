import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';
import RecipeContext from '../context/RecipesContext';
import IngredientsAndMesures from '../components/IngredientsAndMesures';

const ReceitasEmProgresso = ({ match: { params: { id } } }) => {
  const history = useHistory();
  const pathFood = history.location.pathname.includes('/foods');
  const { dataRecipe, setDataRecipe } = useContext(RecipeContext);
  const [loading, setLoading] = useState(true);
  const idFood = id;

  const requestRecipeAPI = async () => {
    const mealURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const drinkURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const URL = pathFood ? mealURL : drinkURL;
    const response = await fetch(URL);
    const { meals, drinks } = await response.json();
    const data = pathFood ? meals : drinks;
    setDataRecipe(data);
    setLoading(false);
  };

  const URL = pathFood ? `/foods/${idFood}` : `/drinks/${idFood}`;

  useEffect(() => {
    requestRecipeAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    loading ? 'Carregando' : (
      <div>
        <div>
          <h2
            data-testid="recipe-title"
          >
            {pathFood ? dataRecipe[0].strMeal : dataRecipe[0].strDrink}

          </h2>
          <h4 data-testid="recipe-category">
            {pathFood
              ? dataRecipe[0].strCategory : dataRecipe[0].strAlcoholic}
          </h4>
          <img
            src={ pathFood ? dataRecipe[0].strMealThumb : dataRecipe[0].strDrinkThumb }
            alt="Foto da coisa pronta"
            data-testid="recipe-photo"
            width="80 vn"
            height="80 vn"
          />
          <div className="favorite-share-btn">
            <ShareButton URL={ URL } dataId="share-btn" />
            <FavoriteButton id={ id } path={ pathFood } />
          </div>
          <br />
          <p data-testid="instructions">{dataRecipe[0].strInstructions}</p>
          <IngredientsAndMesures id={ id } pathFood={ pathFood } />
        </div>
      </div>));
};

export default ReceitasEmProgresso;

ReceitasEmProgresso.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
