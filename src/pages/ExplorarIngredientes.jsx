import React from 'react';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';

const ExplorarIngredientes = () => (
  <div>
    <Header pageTitle="Explore Ingredients" isSearch={ false } />
    <MenuInferior />
  </div>
);

export default ExplorarIngredientes;
