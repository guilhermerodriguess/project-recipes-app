import React from 'react';
import { Switch, Route } from 'react-router-dom';

// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// PAGES
import Login from './pages/Login';
import DetalhesDeReceita from './pages/DetalhesDeReceita';
import Explorar from './pages/TelaDeExplorar';
import PrincipalDeReceitas from './pages/PrincipalDeReceitas';
import ReceitasEmProgresso from './pages/ReceitasEmProgresso';
import ExplorarPorNacionalidades from './pages/ExplorarPorNacionalidades';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarBebidas from './pages/ExplorarBebidas';
import Perfil from './pages/Perfil';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ExplorarIngredientes from './pages/ExplorarIngredientes';
import PrincipalDeBebidas from './pages/PrincipalDeBebidas';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>

      <Route
        path="/foods/:id/in-progress"
        component={ ReceitasEmProgresso }
      />
      <Route
        path="/foods/:id"
        component={ DetalhesDeReceita }
      />
      <Route
        path="/foods"
        component={ PrincipalDeReceitas }
      />
      <Route
        path="/drinks/:id/in-progress"
        component={ ReceitasEmProgresso }
      />
      <Route
        path="/drinks/:id"
        component={ DetalhesDeReceita }
      />
      <Route
        path="/drinks"
        component={ PrincipalDeBebidas }
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
        component={ ExplorarComidas }
      />
      <Route
        path="/explore/drinks/ingredients"
        component={ ExplorarIngredientes }
      />
      <Route
        exact
        path="/explore/drinks"
        component={ ExplorarBebidas }
      />
      <Route
        exact
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
        exact
        path="/"
        component={ Login }
      />
      <Route
        path="*"
        component={ NotFound }
      />
    </Switch>
  );
}

export default App;
