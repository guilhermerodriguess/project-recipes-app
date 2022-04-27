import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const MenuInferior = () => (
  <footer className="footer-container" data-testid="footer">
    <div className="footer">
      <Link to="/drinks">
        <img
          src={ drinkIcon }
          alt="Ícone de bebida"
          data-testid="drinks-bottom-btn"
        />
      </Link>
      <Link to="/explore">
        <img
          src={ exploreIcon }
          alt="Ícone de explore"
          data-testid="explore-bottom-btn"
        />
      </Link>
      <Link to="/foods">
        <img
          src={ mealIcon }
          alt="Ícone de comida"
          data-testid="food-bottom-btn"
        />
      </Link>
    </div>
  </footer>
);

export default MenuInferior;

// comidas: /explore/foods
// bebidas: /explore/drinks
// explorar: /explore
