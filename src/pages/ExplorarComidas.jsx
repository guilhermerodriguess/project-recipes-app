import React from 'react';
import ButtonsExploreBy from '../components/ButtonsExploreBy';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';

const ExplorarComidas = () => (
  <div>
    <Header pageTitle="Explore Foods" isSearch={ false } />
    <ButtonsExploreBy />
    <MenuInferior />
  </div>
);

export default ExplorarComidas;
