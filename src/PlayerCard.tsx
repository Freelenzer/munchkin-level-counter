import React, { useState } from "react";

const Card = ({ children, className }) => (
  <div className={`card border-2 border-solid bg-zinc-900 p-4 shadow-lg rounded-2xl ${className}`}>{children}</div>
);

const Button = ({ children, onClick, variant, size }) => {
  const baseStyles = "flex items-center justify-center rounded-lg";
  const sizeStyles = size === "sm" ? "px-2 py-1 text-sm" : "px-4 py-2";
  const variantStyles =
    variant === "outline"
      ? "border border-gray-300 text-gray-700 bg-white hover:bg-gray-100"
      : "bg-blue-500 text-white hover:bg-blue-600";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles} ${variantStyles}`}
    >
      {children}
    </button>
  );
};

const PlayerCard = ({ playerName }) => {
  const [characterLevel, setCharacterLevel] = useState(1);
  const [gearLevel, setGearLevel] = useState(0);

  const incrementLevel = (level, setter) => setter(level + 1);
  const decrementLevel = (level, setter) => {
    if (level > 1) setter(level - 1);
  };

  const decrementGear = (level, setter) => {
    if (level > 0) setter(level - 1);
  };

  const combatLevel = characterLevel + gearLevel;

  return (
    <Card className="max-w-sm mx-auto">
      <h2 className="text-xl font-bold text-center">{playerName}</h2>
      <div className="space-y-8 mt-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">Character Level</span>
          <div className="flex items-center space-x-8">
            <Button
              size="sm"
              variant="outline"
              onClick={() => decrementLevel(characterLevel, setCharacterLevel)}
            >
              &#x25BC;
            </Button>
            <span className="w-4 text-lg font-bold">{characterLevel}</span>
            <Button
              size="sm"
              variant="outline"
              onClick={() => incrementLevel(characterLevel, setCharacterLevel)}
            >
              &#x25B2;
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">Gear Level</span>
          <div className="flex items-center space-x-8">
            <Button
              size="sm"
              variant="outline"
              onClick={() => decrementGear(gearLevel, setGearLevel)}
            >
              &#x25BC;
            </Button>
            <span className="w-4 text-lg font-bold">{gearLevel}</span>
            <Button
              size="sm"
              variant="outline"
              onClick={() => incrementLevel(gearLevel, setGearLevel)}
            >
              &#x25B2;
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">Combat Level</span>
          <span className="text-4xl font-bold">{combatLevel}</span>
        </div>
      </div>
    </Card>
  );
};

export default PlayerCard;
