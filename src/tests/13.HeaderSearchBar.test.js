import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import React from 'react';
import App from '../App';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{component}</Router>), history,
  });
};

describe('13 - Implemente a barra de busca respeitando os atributos descritos',
  () => {
    test('Tem os data-testids tanto da barra de busca quanto de todos os radio-buttons',
      () => {
        renderWithRouter(<App />);

        const inputText = screen.getByTestId('ingredient-search-radio');
        expect(inputText).toBeInTheDocument();
      });
  });
