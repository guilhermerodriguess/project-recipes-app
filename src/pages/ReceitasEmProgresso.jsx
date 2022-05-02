import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';
import FoodCard from '../components/FoodCardP';

import Header from '../components/Header';
import FavoriteButton from '../components/FavoriteButton';
import ShareButton from '../components/ShareButton';

const ReceitasEmProgresso = ({ match: { params: { id }, url } }) => {
  const history = useHistory();

  const pathFood = history.location.pathname.includes('/foods');

  return (
    <div>
      <Header pageTitle="in progress" isSearch />
      <FoodCard />
      <ShareButton URL={ url } />
      <FavoriteButton id={ id } path={ pathFood } />
    </div>
  );
};

export default ReceitasEmProgresso;

ReceitasEmProgresso.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    url: PropTypes.string,
  }).isRequired,
};
