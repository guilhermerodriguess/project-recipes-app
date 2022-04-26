import React from 'react';
import Header from '../components/Header';

const PrincipalDeReceitas = () => {
  const foods = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  return (
    <section>
      <Header />
      {
        foods.map((food, index) => (
          <div
            key={ index }
            data-testid={ `${index}-recipe-card` }
          >
            <img
              src=""
              alt="Food-ilustration"
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{ food }</p>
          </div>
        ))
      }
    </section>
  );
};

export default PrincipalDeReceitas;
