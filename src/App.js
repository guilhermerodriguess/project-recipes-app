import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import DetalhesDeReceita from './pages/DetalhesDeReceita';
import Explorar from './pages/TelaDeExplorar';
import PrincipalDeReceitas from './pages/PrincipalDeReceitas';
import ReceitasEmProgresso from './pages/ReceitasEmProgresso';
import ExplorarPorNacionalidades from './pages/ExplorarPorNacionalidades';
import ExplorarBebidasOuComidas from './pages/ExplorarBebibasOuComidas';
import Perfil from './pages/Perfil';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import ReceitasFeitas from './pages/ReceitasFeitas';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExplorarIngredientes from './pages/ExplorarIngredientes';

function App() {
  return (
    <Switch>
      <Route
        path="/foods/{id-da-receita}/in-progress"
        component={ ReceitasEmProgresso }
      />

      <Route
        path="/foods/{id-da-receita}"
        component={ DetalhesDeReceita }
      />

      <Route
        path="/foods"
        component={ PrincipalDeReceitas }
      />

      <Route
        path="/drinks/{id-da-receita}/in-progress"
        component={ ReceitasEmProgresso }
      />

      <Route
        path="/drinks/{id-da-receita}"
        component={ DetalhesDeReceita }
      />

      <Route
        path="/drinks"
        component={ PrincipalDeReceitas }
      />

      <Route
        path="/explore/foods/ingredients"
        component={ ExplorarIngredientes }
      />

      <Route
        path="/explore/foods/nationalities"
        component={ ExplorarPorNacionalidades }
      />

      <Route
        path="/explore/foods"
        component={ ExplorarBebidasOuComidas }
      />

      <Route
        path="/explore/drinks/ingredients"
        component={ ExplorarIngredientes }
      />

      <Route
        path="/explore/drinks"
        component={ ExplorarBebidasOuComidas }
      />

      <Route
        path="/explore"
        component={ Explorar }
      />

      <Route
        path="/profile"
        component={ Perfil }
      />

      <Route
        path="/done-recipes"
        component={ ReceitasFeitas }
      />

      <Route
        path="/favorite-recipes"
        component={ ReceitasFavoritas }
      />

      <Route
        path="/"
        component={ Login }
      />
    </Switch>
  );
}

export default App;
