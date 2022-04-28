import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';
import RecipeContext from './RecipesContext';

const RecipeContextProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  // Utilizando somente um data para Drinks e Meals, pois os 2 não estarão renderizados ao mesmo tempo.
  const [data, setData] = useState([]);
  // Armazenando a requisição da API dos filtros em uma variável
  const [filterRecipe, setFilterRecipe] = useState([]);

  // Deixa os inputs controlados.
  const [filter, setFilter] = useState('');
  const [textFilter, setTextFilter] = useState('');
  // Memorizando o ID da receita em uma variável
  const [recipeID, setRecipeID] = useState('');

  // Requisições das Api's de comidas.
  // Caso não receba nenhuma receita, retorna um alerta.
  const ALERT_NO_RECIPE = 'Sorry, we haven\'t found any recipes for these filters.';

  // Usa o Hook useHistory para manipular a url.
  const history = useHistory();
  const redirectToDetail = (result) => {
    const recipeOne = result[0];
    const id = Object.keys(recipeOne)[0];
    history.push(`${history.location.pathname}/${recipeOne[id]}`);
  };

  // Requisição das comidas de acordo com o botão clicado
  const requestFoodByButtonFilter = async (category) => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

    const response = await fetch(url);
    const { meals } = await response.json();
    setData(meals);
  };

  // Requisição dos drinks de acordo com o botão clicado
  const requestDrinkByButtonFilter = async (category) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;

    const response = await fetch(url);
    const { drinks } = await response.json();
    setData(drinks);
  };

  // Requisição inicial das comidas e dos filtros das comidas
  const requestInitialFood = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const urlFilter = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

    const response = await fetch(url);
    const { meals } = await response.json();
    setData(meals);

    const responseFilter = await fetch(urlFilter);
    const { meals: category } = await responseFilter.json();
    setFilterRecipe(category);
  };

  // Requisição inicial dos drinks e dos filtros dos drinks
  const requestInitialDrink = async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const urlFilter = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

    const response = await fetch(url);
    const { drinks } = await response.json();
    setData(drinks);

    const responseFilter = await fetch(urlFilter);
    const { drinks: category } = await responseFilter.json();
    setFilterRecipe(category);
  };

  const requestFoodsByFilter = async () => {
    const urlFilter = filter === 'i' ? 'filter' : 'search';
    const url = `https://www.themealdb.com/api/json/v1/1/${urlFilter}.php?${filter}=${textFilter}`;
    const response = await fetch(url);
    const { meals } = await response.json();
    if (meals === null) {
      global.alert(ALERT_NO_RECIPE);
      return setData([]);
    }
    setData(meals);
    if (meals.length === 1) {
      redirectToDetail(meals);
    }
  };

  // Requisições das Api's de drinks.
  // Caso não receba nenhuma receita, retorna um alerta.
  const requestDrinksByFilter = async () => {
    const urlFilter = filter === 'i' ? 'filter' : 'search';
    const url = `https://www.thecocktaildb.com/api/json/v1/1/${urlFilter}.php?${filter}=${textFilter}`;
    const response = await fetch(url);
    const { drinks } = await response.json();
    if (drinks === null) {
      global.alert(ALERT_NO_RECIPE);
      return setData([]);
    }
    setData(drinks);
    if (drinks.length === 1) {
      redirectToDetail(drinks);
    }
  };

  // Caso esteja na página foods, solicita Api's de comida.
  // Caso esteja na página drinks, solicita Api's de drinks.
  const foodsOrDrinksByFilter = () => {
    if (history.location.pathname === '/foods') {
      requestFoodsByFilter();
    }
    if (history.location.pathname === '/drinks') {
      requestDrinksByFilter();
    }
  };

  // Caso esteja na página foods, solicita Api's de comida.
  // Caso esteja na página drinks, solicita Api's de drinks.
  const requestAPIInitial = () => {
    if (history.location.pathname === '/foods') {
      requestInitialFood();
    }
    if (history.location.pathname === '/drinks') {
      requestInitialDrink();
    }
  };

  // Funções para filtrar por tipo de Radio selecionado.
  const requestAPIByFilter = (event) => {
    event.preventDefault();
    if (filter === 'f') {
      // Caso o filtro de por letra inicial receba mais de uma letra, retorna um alerta.
      if (textFilter.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      return foodsOrDrinksByFilter();
    }
    return foodsOrDrinksByFilter();
  };

  const contextValue = {
    data,
    setData,
    filter,
    setFilter,
    textFilter,
    setTextFilter,
    requestAPIByFilter,
    requestAPIInitial,
    filterRecipe,
    requestFoodByButtonFilter,
    requestDrinkByButtonFilter,
    email,
    setEmail,
    recipeID,
    setRecipeID,
  };

  return (
    <RecipeContext.Provider value={ contextValue }>
      {children}
    </RecipeContext.Provider>
  );
};

RecipeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipeContextProvider;
