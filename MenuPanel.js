import React from 'react';

function MenuPanel({ onNavigate }) {
  return (
    <div className="menu-panel">
      <h1>Menú Principal</h1>
      <button onClick={() => onNavigate('juego')}>Jugar</button>
      <button onClick={() => onNavigate('instrucciones')}>Instrucciones</button>
      <button onClick={() => window.close()}>Salir</button>
    </div>
  );
}

export default MenuPanel;
