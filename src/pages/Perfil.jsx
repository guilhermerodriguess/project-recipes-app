import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';

const Perfil = (props) => {
  // const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    const { history } = props;

    const keysStorage = [
      'user',
      'mealsToken',
      'cocktailsToken',
      'doneRecipes',
      'favoriteRecipes',
      'inProgressRecipes',
    ];

    keysStorage.forEach((key) => {
      localStorage.removeItem(key);
    });

    history.push('/');
  };

  return (
    <>
      <Header pageTitle="Profile" isSearch={ false } />

      <div className="profile-container">
        {/* <h5 data-testid="profile-email">{user.email}</h5> */}

        <Link data-testid="profile-done-btn" to="/done-recipes">
          <button type="button">Done Recipes</button>
        </Link>
        <Link data-testid="profile-favorite-btn" to="/favorite-recipes">
          <button type="button">Favorite Recipes</button>
        </Link>

        <button
          onClick={ handleLogout }
          data-testid="profile-logout-btn"
          type="button"
        >
          Logout
        </button>
      </div>

      <MenuInferior />
    </>
  );
};

Perfil.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Perfil;
