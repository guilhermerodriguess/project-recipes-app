import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// IMAGES
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const Header = ({ pageTitle, isSearch }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      <div className="header">
        <Link to="/profile">
          <img data-testid="profile-top-btn" src={ profileIcon } alt="Profile" />
        </Link>

        <h4 data-testid="page-title">{pageTitle}</h4>

        {isSearch && (
          <button
            className="btn-search"
            type="button"
            onClick={ () => setShowSearch(!showSearch) }
          >
            <img data-testid="search-top-btn" src={ searchIcon } alt="Search" />
          </button>
        )}
      </div>

      {showSearch && (
        <input
          type="text"
          className="search-input"
          data-testid="search-input"
          placeholder="Pesquisar"
        />
      )}
    </div>
  );
};

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  isSearch: PropTypes.bool.isRequired,
};

export default Header;
