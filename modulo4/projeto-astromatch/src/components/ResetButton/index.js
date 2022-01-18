import axios from 'axios';
import React from 'react';

function ResetButton() {

  const onClickClear = () => {
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/clear').then(response => {
      console.log(response);
    })
  }

  return (
    <div >
      <button onClick={onClickClear}>Resetar</button>
    </div>
  );
}

export default ResetButton;