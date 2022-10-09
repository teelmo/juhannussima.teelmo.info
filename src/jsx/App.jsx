import React from 'react';
import '../styles/styles.less';

import Confetti from 'react-confetti';

function App() {
  return (
    <div className="app">
      <Confetti width={window.innerWidth} height={window.innerHeight} recycle className="rain" />
      <div className="image_container"><img src="./assets/img/kokko.jpg" alt="Meme" /></div>
      <h1>You! Yes you!</h1>
      <div className="image_container"><img src="./assets/img/juhannus.jpg" alt="Meme" /></div>
      <h3>You are summoned to get drunk on Saturday</h3>
      <h1>The Finnish way</h1>
      <div className="image_container"><img src="./assets/img/humalainen.jpeg" alt="Meme" /></div>
      <h3>Be there or don&apos;t come to Finland, ever!!</h3>
    </div>
  );
}
export default App;
