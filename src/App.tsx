import PlayerCard from "./Components/PlayerCard";
import "./App.css";
import BackgroundMusic from "./Components/BackgroundMusic.tsx";

import React, { useState } from "react";

export default function App() {
  const [players, setPlayers] = useState([]);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const deleteSound = new Audio("paper-bin.mp3");

  const addPlayer = () => {
    if (newPlayerName.trim()) {
      setPlayers([...players, newPlayerName.trim()]);
      setNewPlayerName("");
      setIsModalOpen(false);
    }
  };
  const deletePlayer = (index: number) => {
    setPlayers(players.filter((_, i) => i !== index));
    deleteSound.play();
  };

  return (
    <div className="lightmode">
      <div className="header ">
        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            border: "4px solid",
            borderColor: "black",
            backgroundColor: "#e7c08d",
            padding: "10px 20px",
            borderRadius: "5px",
            color: "black",

            fontSize: "1.5rem",
          }}
        >
          Add Player
        </button>
        <div className="absolute right-1 top-5">
          <BackgroundMusic />
        </div>
      </div>

      <div className="table">
        {isModalOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                backgroundColor: "#e7c08d",
                border: "5px solid",
                borderColor: "black",
                color: "black",
                padding: "20px",
                borderRadius: "10px",
                width: "300px",
              }}
            >
              <h2 style={{ marginTop: 0, fontSize: "1.5rem" }}>
                Add New Player
              </h2>
              <input
                autoFocus
                type="text"
                value={newPlayerName}
                onChange={(e) => setNewPlayerName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addPlayer()}
                placeholder="Enter player name"
                style={{
                  color: "black",
                  borderColor: "black",
                  border: "2px solid",
                  borderRadius: "5px",
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                  boxSizing: "border-box",
                }}
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    backgroundColor: "#f44336",
                    color: "black",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={addPlayer}
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "black",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          {players.map((player, index) => (
            <PlayerCard
              key={index}
              onClick={() => deletePlayer(index)}
              playerName={player}
            ></PlayerCard>
          ))}
        </div>
      </div>
    </div>
  );
}
