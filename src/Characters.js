import React, { useState } from "react";
import "./Characters.css";

export default function Characters({ data, items }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(selectedCharacter === character ? null : character);
  };

  return (
    <div>
      <div className="character-container">
        {data.slice(items, items + 5).map((character) => (
          <div
            key={character.id}
            onClick={() => handleCharacterClick(character)}
          >
            {selectedCharacter !== character && (
              <img
                className="char-img"
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
              />
            )}
            {selectedCharacter !== character && (
              <h2 className="char-name">{character.name}</h2>
            )}

            {selectedCharacter === character && (
              <div className="character-details-active">
                <h2 className="char-name">{character.name}</h2>
                {character.description ? (
                  <p>Description: {character.description}</p>
                ) : (
                  <p>Description: -</p>
                )}
                {character.comics && (
                  <p>Comics: {character.comics.available} available</p>
                )}
                {character.stories && (
                  <p>Stories: {character.stories.available} available</p>
                )}
                {character.events && (
                  <p>Events: {character.events.available} available</p>
                )}
                {character.series && (
                  <p>Series: {character.series.available} available</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
