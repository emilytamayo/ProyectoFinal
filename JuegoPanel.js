import React from 'react';

const JuegoPanel = ({ onNavigate }) => {
  return (
    <div>
      <button onClick={() => onNavigate('menu')}>Volver al Menú</button>
    </div>
  );
};

export default JuegoPanel;
