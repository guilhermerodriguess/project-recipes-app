import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function ShareButton({ URL, dataId }) {
  const [isCopy, setIsCopy] = useState(false);

  const handleClick = () => {
    copy(`http://localhost:3000${URL}`);
    setIsCopy(true);
  };

  return (
    <div>
      <button
        type="button"
        data-testid={ dataId }
        onClick={ handleClick }
        src={ shareIcon }
      >
        <img src={ shareIcon } alt="imagem para compartilhamento de receita" />
      </button>
      {isCopy
      && <p>Link copied!</p>}
    </div>
  );
}

ShareButton.propTypes = {
  URL: PropTypes.string.isRequired,
  dataId: PropTypes.string.isRequired,
};

export default ShareButton;
