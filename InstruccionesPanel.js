import React from 'react';

const InstruccionesPanel = ({ onNavigate }) => {
  const additionalInstructions = [
    "1. Usa las flechas del teclado para mover la serpiente.",
    "2. Come las palabras que coincidan con la descripción.",
    "3. Si comes una palabra incorrecta, pierdes.",
    "4. Pulsa ESC para salir."
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'Serif', fontWeight: 'bold', fontSize: '36px' }}>Instrucciones</h1>
      <ul>
        {additionalInstructions.map((instruction, index) => (
          <li key={index} style={{ fontFamily: 'Serif', fontSize: '24px' }}>{instruction}</li>
        ))}
      </ul>
      <button 
        style={{ fontFamily: 'Serif', fontSize: '24px', margin: '10px' }} 
        onClick={() => onNavigate('menu')}
      >
        Retroceder
      </button>
    </div>
  );
};

export default InstruccionesPanel;
