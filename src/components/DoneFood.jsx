import React from 'react';
import { useHistory } from 'react-router-dom';
import ShareButton from './ShareButton';

const DoneFood = ({ food: foods }) => {
  const history = useHistory();
  console.log(history);

  const redirectToDetails = ({ id, type }) => {
    if (type === 'food') {
      history.push(`/foods/${id}`);
    } else {
      history.push(`/drinks/${id}`);
    }
  };

  return (
    foods.map((food, index) => (
      <div
        key={ Math.random() }
      >
        <div
          onClick={ () => redirectToDetails(food) }
          role="button"
          tabIndex={ 0 }
          onKeyPress={ () => {} }
        >
          <img
            src={ food.image }
            alt="Imagem da receita completada"
            data-testid={ `${index}-horizontal-image` }
            className="done-recipe-img"
          />

          <h3
            data-testid={ `${index}-horizontal-name` }
          >
            { food.name }
          </h3>
        </div>

        <p
          data-testid={ `${index}-horizontal-top-text` }
        >
          { food.alcoholicOrNot === ''
            ? `${food.nationality} - ${food.category}`
            : food.alcoholicOrNot }
        </p>

        <p
          data-testid={ `${index}-horizontal-done-date` }
        >
          { food.doneDate }
        </p>

        <ShareButton
          dataId={ `${index}-horizontal-share-btn` }
          URL={ food.type === 'food' ? `/foods/${food.id}` : `/drinks/${food.id}` }
        />

        {
          food.tags.map((tag) => (
            <p
              key={ tag }
              data-testid={ `${index}-${tag}-horizontal-tag` }
            >
              { tag }
            </p>
          ))
        }
      </div>
    ))
  );
};

export default DoneFood;
