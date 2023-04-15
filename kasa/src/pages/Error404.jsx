import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Error404.css';

const Erreur404 = () => {
    return (
    <div className="error">
      <h1 className="error_404">404</h1>
      <span className="error_description">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link to="/" className="error_return">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default Erreur404;