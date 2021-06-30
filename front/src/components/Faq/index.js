import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function Faq({
}) {

  return (
      <main className="faq">
        <h1 className="faq-title">La F.A.Q de playrfindr :</h1>
        <div className="faq-items"> 
        <h2 className="faq-question">Question 1: Peut on participer a un événement sans avoir de compte ?</h2>
        <p className="faq-answer">Non, vous devez possédez un compte utilisateur pour participer un événement</p>
        <h2 className="faq-question">Question 2: Peut on ajouter un événement sans avoir de compte ?</h2>
        <p className="faq-answer">Non, vous devez possédez un compte utilisateur pour ajouter un événement</p>
        <h2 className="faq-question">Question 3: Peut on voir la liste des jeux sans avoir de compte ?</h2>
        <p className="faq-answer">Oui, vous pouvez visionner toute notre liste de jeux ainsi que son détail sans avoir de compte utilisateur</p>
        <h2 className="faq-question">Question 4: Quelles sont les features disponibles avec un compte ?</h2>
        <p className="faq-answer">Une fois inscrit à notre site vous pourrez voir votre profil et celui d'autre utilisateur, ajouter des jeux a votre collection, participer et ajouter des événements</p>
        </div>
      </main>
  );
}

Faq.propTypes = {

};
