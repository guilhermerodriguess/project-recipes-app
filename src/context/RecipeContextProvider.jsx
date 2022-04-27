import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from './RecipesContext';

const RecipeContextProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const contextValue = {
    email,
    setEmail,
    btnDisabled,
    setBtnDisabled,
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
