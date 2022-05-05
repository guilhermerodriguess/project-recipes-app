/* eslint-disable react-hooks/exhaustive-deps */
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
  const [dataRecipe, setDataRecipe] = useState(['']);
  const [recomendation, setRecomendation] = useState([]);
  const [pathFood, setPathFood] = useState(true);

  // Todos os Ingredientes de Receita
  const [allIngredients, setAllIngredients] = useState([]);

  // Requisições das Api's de comidas.
  // Caso não receba nenhuma receita, retorna um alerta.
  const ALERT_NO_RECIPE = 'Sorry, we haven\'t found any recipes for these filters.';
  // Criei este toggle para quando na pagina explorar, for clicado em algum ingrediente,
  // ao redirecionar para a pagina de receitas principal, muda esse estado, para no UseEffect, fazer a requisição da API,
  // Por que sem esse Toggle, ele só pega o valor antigo de filter e textFilter.
  const [toggleRequestAPI, setToggleRequestAPI] = useState(false);

  // Usa o Hook useHistory para manipular a url.
  const history = useHistory();
  const redirectToDetail = (result, foodsOrDrinks) => {
    const recipeOne = result[0];
    const id = recipeOne[`id${foodsOrDrinks}`];
    history.push(`${history.location.pathname}/${id}`);
  };

  // Função para trazer um inteiro aleatório, recebendo como paramento o length máximo da resposta da Api.
  // const getRandomInt = (min, max) => {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min)) + min;
  // };

  // Função que faz a requisição da api de ingredientes, e organiza de forma aleatória cada ingrediente.
  const requestIngredientsFoods = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
    const response = await fetch(url);
    const { meals } = await response.json();
    // Função que randomiza o resultado da API, dando sentido a página ExplorarIngredientes, porém não passa no teste.
    // let randomMeals = [];
    // meals
    //   .forEach(() => {
    //     if (randomMeals.length < meals.length) {
    //       const numberRandom = getRandomInt(0, meals.length - 1);
    //       const objectRandom = meals.filter((meal, index) => index === numberRandom);
    //       randomMeals = [...randomMeals, ...objectRandom];
    //     }
    //   });
    return setData(meals);
  };

  const requestIngredientsDrinks = async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
    const response = await fetch(url);
    const { drinks } = await response.json();
    // Função que randomiza o resultado da API, dando sentido a página ExplorarIngredientes, porém não passa no teste.
    // let randomDrinks = [];
    // drinks
    //   .forEach(() => {
    //     if (randomDrinks.length < drinks.length) {
    //       const numberRandom = getRandomInt(0, drinks.length - 1);
    //       const objectRandom = drinks.filter((drink, index) => index === numberRandom);
    //       randomDrinks = [...randomDrinks, ...objectRandom];
    //     }
    //   });
    return setData(drinks);
  };

  const exploreFoodsOrDrinks = () => {
    if (history.location.pathname === '/explore/foods/ingredients') {
      requestIngredientsFoods();
    }
    if (history.location.pathname === '/explore/drinks/ingredients') {
      requestIngredientsDrinks();
    }
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
      return redirectToDetail(meals, 'Meal');
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
      redirectToDetail(drinks, 'Drink');
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
      return requestInitialFood();
    }
    if (history.location.pathname === '/drinks') {
      return requestInitialDrink();
    }
    return requestInitialFood();
  };

  // Funções para filtrar por tipo de Radio selecionado.
  const requestAPIByFilter = (event) => {
    if (event !== undefined) {
      event.preventDefault();
    }
    if (filter === 'f') {
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
    exploreFoodsOrDrinks,
    toggleRequestAPI,
    setToggleRequestAPI,
    dataRecipe,
    setDataRecipe,
    recomendation,
    setRecomendation,
    pathFood,
    setPathFood,
    allIngredients,
    setAllIngredients,
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
