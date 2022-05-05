import React from 'react';
import { useHistory } from 'react-router-dom';
import ShareButton from './ShareButton';

const DoneFood = ({ food: foods }) => {
  const history = useHistory();

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
        className="done-recipe"
      >
        <div
          onClick={ () => redirectToDetails(food) }
          role="button"
          tabIndex={ 0 }
          onKeyPress={ () => {} }
          className="done-recipe-img"
        >
          <img
            src={ food.image }
            alt="Imagem da receita completada"
            data-testid={ `${index}-horizontal-image` }
          />
        </div>

        <div className="done-recipe-describe">
          <div className="done-recipe-top">
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              { food.alcoholicOrNot === ''
                ? `${food.nationality} - ${food.category}`
                : food.alcoholicOrNot }
            </p>

            <ShareButton
              dataId={ `${index}-horizontal-share-btn` }
              URL={ food.type === 'food' ? `/foods/${food.id}` : `/drinks/${food.id}` }
            />
          </div>

          <div
            onClick={ () => redirectToDetails(food) }
            role="button"
            tabIndex={ 0 }
            onKeyPress={ () => {} }
          >
            <h3
              data-testid={ `${index}-horizontal-name` }
            >
              { food.name }
            </h3>
          </div>

          <p
            data-testid={ `${index}-horizontal-done-date` }
          >
            { food.doneDate }
          </p>

          <div className="done-recipe-ingredients">
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
        </div>
      </div>
    ))
  );
};

export default DoneFood;
