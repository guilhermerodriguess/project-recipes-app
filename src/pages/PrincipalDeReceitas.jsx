import React from 'react';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';
import CardRecipe from '../components/CardRecipe';

const PrincipalDeReceitas = () => (
  <div>
    <Header pageTitle="Foods" isSearch />
    <CardRecipe />
    <MenuInferior />
  </div>
);

export default PrincipalDeReceitas;
