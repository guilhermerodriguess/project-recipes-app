import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import getIngredientsAndMeasures from '../services/telaDeDetalhes';

const DetalhesDeReceita = ({ match: { params: { id } } }) => {
  const [dataRecipe, setDataRecipe] = useState(['']);
  const [loading, setLoading] = useState(true);
  const idFood = id;
  const history = useHistory();
  const pathFood = history.location.pathname.includes('/foods');

  const requestRecipeAPI = async () => {
    const mealURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idFood}`;
    const drinkURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idFood}`;
    const URL = pathFood ? mealURL : drinkURL;
    const response = await fetch(URL);
    const { meals, drinks } = await response.json();
    const data = pathFood ? meals : drinks;
    setDataRecipe(data);
    setLoading(false);
  };

  useEffect(() => {
    requestRecipeAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const embedVideo = () => {
    if (dataRecipe.length > 0) {
      const takeOffWatch = dataRecipe[0].strYoutube.split('watch?v=');
      const embedado = `${takeOffWatch[0]}embed/${takeOffWatch[1]}`;
      return embedado;
    }
  };

  return (
    loading ? 'Carregando' : (
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
        { getIngredientsAndMeasures(dataRecipe[0]) }
        {pathFood || dataRecipe[0].strAlcoholic}
        <p data-testid="instructions">{dataRecipe[0].strInstructions}</p>
        { pathFood
      && (
        <iframe
          src={ embedVideo() }
          frameBorder="100"
          data-testid="video"
          title="vídeo"
        />
      )}
        <h6 data-testid={ `${0}-recomendation-card` }>CARD DE RECEITAS</h6>
        <button type="button" data-testid="share-btn">Compartilhar</button>
        <button type="button" data-testid="favorite-btn">Favoritar</button>
        <button type="button" data-testid="start-recipe-btn">Start Recipe</button>
      </div>
    )
  );
};

DetalhesDeReceita.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default DetalhesDeReceita;
