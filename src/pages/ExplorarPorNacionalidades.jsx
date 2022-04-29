import React, { useState, useEffect, useContext } from 'react';
import CardNationalities from '../components/CardNationalities';
import DropDownNationalities from '../components/DropdownNationalities';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';
import RecipeContext from '../context/RecipesContext';

const ExplorarPorNacionalidades = () => {
  const [nationalities, setNationalities] = useState([]);
  const [selected, setSelected] = useState('All');
  const { requestAPIInitial, setData } = useContext(RecipeContext);

  const allNationalities = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
    const response = await fetch(url);
    const { meals } = await response.json();
    setNationalities(meals);
  };

  useEffect(() => {
    allNationalities();
    requestAPIInitial();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchByArea = async () => {
    if (selected === 'All') {
      return requestAPIInitial();
    }
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selected}`;
    const response = await fetch(url);
    const { meals } = await response.json();
    return setData(meals);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { searchByArea(); }, [selected]);

  return (
    <div>
      <Header pageTitle="Explore Nationalities" isSearch />
      <DropDownNationalities
        nationalities={ nationalities }
        setSelected={ setSelected }
        selected={ selected }
      />
      <CardNationalities nationalities={ nationalities } />
      <MenuInferior />
    </div>
  );
};

export default ExplorarPorNacionalidades;
