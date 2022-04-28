import React from 'react';
import ButtonsExploreBy from '../components/ButtonsExploreBy';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';

const ExplorarBebidas = () => (
  <div>
    <Header pageTitle="Explore Drinks" isSearch={ false } />
    <ButtonsExploreBy />
    <MenuInferior />
  </div>
);

export default ExplorarBebidas;
