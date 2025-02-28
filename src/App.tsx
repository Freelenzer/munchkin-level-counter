import PlayerCard from './Components/PlayerCard'
import './App.css'

import React, { useState } from 'react';

export default function App() {
  const [players, setPlayers] = useState([]);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addPlayer = () => {
    if (newPlayerName.trim()) {
      setPlayers([...players, newPlayerName.trim()]);
      setNewPlayerName('');
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        style={{
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Add Player
      </button>

      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'gray',
            padding: '20px',
            borderRadius: '10px',
            width: '300px'
          }}>
            <h2 style={{ marginTop: 0 }}>Add New Player</h2>
            <input
              type="text"
              value={newPlayerName}
              onChange={(e) => setNewPlayerName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addPlayer()}
              placeholder="Enter player name"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                boxSizing: 'border-box'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  backgroundColor: '#f44336',
                  color: 'black',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                onClick={addPlayer}
                style={{
                  backgroundColor: '#4CAF50',
                  color: 'black',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        marginTop: '20px'
      }}>
        {players.map((player, index) => (
          <PlayerCard playerName={player}></PlayerCard>
        ))}
      </div>
    </div>
  );
}