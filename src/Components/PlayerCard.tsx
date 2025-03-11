import React, { useState } from "react";

const Card = ({ children, className }) => (
  <div
    className={`card border-2 border-solid bg-zinc-900 p-4 shadow-lg rounded-2xl ${className}`}
  >
    {children}
  </div>
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
      className={`cursor-pointer ${baseStyles} ${sizeStyles} ${variantStyles}`}
    >
      {children}
    </button>
  );
};

interface Props {
  playerName: string;
  onClick: () => void; // Define the Prop for the button onClick event
}

const PlayerCard = ({ playerName, onClick }: Props) => {
  const [characterLevel, setCharacterLevel] = useState(1);
  const [gearLevel, setGearLevel] = useState(0);

  const incrementLevel = (
    level: number,
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => setter(level + 1);
  const decrementLevel = (
    level: number,
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (level > 1) setter(level - 1);
  };

  const decrementGear = (
    level: number,
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (level > 0) setter(level - 1);
  };

  const combatLevel = characterLevel + gearLevel;

  return (
    <Card className="max-w-sm mx-auto relative group">
      <h2 className="text-xl font-bold text-center">{playerName}</h2>
      <div className="space-y-8 mt-4 ">
        <div className="flex items-center justify-between">
          <span className="text-lg text-left font-medium">Character Level</span>
          <div className="flex items-center space-x-4">
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
          <span className="text-lg font-medium text-left">Gear Level</span>
          <div className="flex items-center space-x-4">
            <Button
              size="sm"
              variant="outline"
              onClick={() => decrementGear(gearLevel, setGearLevel)}
            >
              &#x25BC;
            </Button>
            <span className="w-4 text-lg font-bold text-left">{gearLevel}</span>
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
        <div className=" flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="px-2 py-1 text-sm cursor-pointer border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 flex items-center justify-center rounded-lg"
            onClick={onClick}
          >
            Delete
            <i
              className="fa fa-trash"
              style={{ padding: "5px", color: "red" }}
            ></i>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default PlayerCard;
