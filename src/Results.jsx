import React from 'react';
import './Results.scss';



function Results() {
  
  return(
    
    <div className="Results">
      <h2>Réponses à la question 2</h2>

      <img src='./images/histo.png' alt='histo'/>

      <h3>La bonne réponse est B :</h3><br></br>
      <p>Composez le 3020. Il est ouvert du lundi au vendredi de 9h à 18h (sauf les jours fériés). Le numéro vert est géré par la plateforme <a href="x">nonauharcelement.education.gouv.fr</a> qui propose de nombreuses ressources pour les victimes, témoins, parents et professionnels (écoles, collèges, lycées).

Si le harcèlement a lieu sur internet, vous pouvez également composer le 0800 200 000 ou vous rendre sur netecoute.fr. La plateforme propose une assistance gratuite, anonyme, confidentiel par courriel, téléphone, chat en ligne, Skype. Une fonction « être rappelé par un conseiller » est également disponible. La réponse en ligne est ouverte du lundi au vendredi de 9h à 19h.</p>
  </div>
  )
}
export default Results;
