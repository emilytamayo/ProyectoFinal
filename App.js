import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import InstruccionesPanel from './components/InstruccionesPanel';
import JuegoPanel from './components/JuegoPanel';
import MenuPanel from './components/MenuPanel';

const socket = io('http://localhost:5000');

function App() {
  const [currentPanel, setCurrentPanel] = useState('menu');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('game-started', (data) => {
      setMessage(data.message);
    });

    socket.on('error', (data) => {
      setMessage(data.message);
    });

    return () => {
      socket.off('game-started');
      socket.off('error');
    };
  }, []);

  const handleStartGame = () => {
    socket.emit('start-game', { nombre, apellido, id });
  };

  const renderPanel = () => {
    switch (currentPanel) {
      case 'juego':
        return <JuegoPanel onNavigate={setCurrentPanel} />;
      case 'instrucciones':
        return <InstruccionesPanel onNavigate={setCurrentPanel} />;
      default:
        return <MenuPanel onNavigate={setCurrentPanel} />;
    }
  };

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      {renderPanel()}
      {currentPanel === 'juego' && (
        <div>
          <h1>Iniciar Juego</h1>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{ fontSize: '18px', margin: '10px' }}
          />
          <input
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            style={{ fontSize: '18px', margin: '10px' }}
          />
          <input
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            style={{ fontSize: '18px', margin: '10px' }}
          />
          <button onClick={handleStartGame} style={{ fontSize: '18px', margin: '10px' }}>
            Empezar Juego
          </button>
          {message && <p style={{ fontSize: '18px', marginTop: '20px' }}>{message}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
