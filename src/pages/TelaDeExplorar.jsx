import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';

const TelaDeExplorar = () => (
  <div>
    <Header pageTitle="Explore" isSearch={ false } />

    <div className="explore-container">
      <Link data-testid="explore-foods" to="/explore/foods">
        <button type="button">Explore Foods</button>
      </Link>
      <Link data-testid="explore-drinks" to="/explore/drinks">
        <button type="button">Explore Drinks</button>
      </Link>
    </div>

    <MenuInferior />
  </div>
);

export default TelaDeExplorar;
