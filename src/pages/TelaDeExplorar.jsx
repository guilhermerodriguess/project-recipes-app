import React from 'react';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';

const TelaDeExplorar = () => (
  <div>
    <Header pageTitle="Explore Foods" isSearch={ false } />
    <MenuInferior />
  </div>
);

export default TelaDeExplorar;
