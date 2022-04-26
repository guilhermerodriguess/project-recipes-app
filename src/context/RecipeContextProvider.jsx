import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from './RecipesContext';

const RecipeContextProvider = ({ children }) => {
  const contextValue = {

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
