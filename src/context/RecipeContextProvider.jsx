import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from './RecipesContext';

const RecipeContextProvider = ({ children }) => {
  // Utilizando somente um data para Drinks e Meals, pois os 2 não estarão renderizados ao mesmo tempo.
  const [data, setData] = useState([]);

  const contextValue = {
    data,
    setData,
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
