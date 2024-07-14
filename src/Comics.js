import React from "react";
import "./Characters.css";

export default function Comics({data,items}) {
  return (
    <div>
       <div className="character-container">
        {data.slice(items,items+5).map((character) => (
          <div key={character.id}>
            {character.thumbnail && (
              <img
                className="char-img"
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
              />
            )}
            <h2 className="char-name">{character.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
