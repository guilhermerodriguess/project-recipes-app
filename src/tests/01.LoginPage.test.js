import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import Login from '../pages/Login';
// import App from '../App';
import renderWithRouter from './renderWithRouter';
// import RecipeContextProvider from '../context/RecipeContextProvider';

const emailID = 'email-input';
const passID = 'password-input';
const btnID = 'login-submit-btn';
const validMail = 'test@test.com';

it('Check the data test', () => {
  renderWithRouter(<Login />);

  expect(screen.getByTestId(emailID)).toBeInTheDocument();
  expect(screen.getByTestId(passID)).toBeInTheDocument();
  expect(screen.getByTestId(btnID)).toBeInTheDocument();
});

it('Check the route page', () => {
  const { history } = renderWithRouter(<Login />);
  const { pathname } = history.location;
  expect(pathname).toBe('/');
});

it('expect the button to be disabled with less than 6 characters', () => {
  renderWithRouter(<Login />);

  const EMAIL_INPUT = screen.getByTestId(emailID);
  fireEvent.change(EMAIL_INPUT, { target: { value: validMail } });
  const PASS_INPUT = screen.getByTestId(passID);
  fireEvent.change(PASS_INPUT, { target: { value: '123' } });

  expect(screen.getByTestId(btnID)).toBeDisabled();
});

it('expect the button to be disabled if the email is not valid', () => {
  renderWithRouter(<Login />);

  const EMAIL_INPUT = screen.getByTestId(emailID);
  fireEvent.change(EMAIL_INPUT, { target: { value: 'testteste.com' } });
  const PASS_INPUT = screen.getByTestId(passID);
  fireEvent.change(PASS_INPUT, { target: { value: '1234567' } });

  expect(screen.getByTestId(btnID)).toBeDisabled();
});

/* it('Check if the local Storage save the email user', async () => {
  renderWithRouter(
    <RecipeContextProvider>
      <App />
    </RecipeContextProvider>,
  );

  const EMAIL_INPUT = screen.getByTestId(emailID);
  fireEvent.change(EMAIL_INPUT, { target: { value: validMail } });
  const PASS_INPUT = screen.getByTestId(passID);
  fireEvent.change(PASS_INPUT, { target: { value: '1234567' } });

  expect(screen.getByTestId(btnID)).toBeEnabled();

  waitFor(expect(await JSON.parse(localStorage.getItem('user')))
    .toEqual({ email: validMail }));
});
*/
