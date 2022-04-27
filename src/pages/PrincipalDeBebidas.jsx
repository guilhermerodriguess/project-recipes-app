import React from 'react';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';
import CardRecipe from '../components/CardRecipe';

const PrincipalDeBebidas = () => (
  <div>
    <Header pageTitle="Drinks" isSearch />
    <CardRecipe />
    <MenuInferior />
  </div>
);

export default PrincipalDeBebidas;
