import React, { useState } from 'react';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';

function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <button type="button" data-testid="favorite-btn" onClick={ handleClick }>
      {isFavorite ? <img src={ blackHeart } alt="coração branco de não compartilhado" />
        : <img src={ whiteHeart } alt="coração branco de não compartilhado" />}

    </button>
  );
}

export default FavoriteButton;
