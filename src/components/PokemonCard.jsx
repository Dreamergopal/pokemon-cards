import React from "react";
import "../cssFiles/Pokemon.css";

function PokemonCard({ pokData }) {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={pokData.sprites?.other?.dream_world?.front_default}
          alt={pokData.name}
          className="pokemon-image"
        />
      </figure>
      <h1 className="pokemon-name">{pokData.name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>{pokData.types.map((currType) => currType.type.name).join(" , ")}</p>
      </div>
      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span>
            Height: <span>{pokData.height}</span>
          </span>
        </p>

        <p className="pokemon-info">
          <span>
            Weight: <span>{pokData.weight}</span>
          </span>
        </p>

        <p className="pokemon-info">
          <span>
            Speed: <span>{pokData.stats[5].base_stat}</span>
          </span>
        </p>
      </div>

      <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>{pokData.base_experience}</p>
          <span>Experience</span>
        </div>

        <div className="pokemon-info">
          <p>{pokData.stats[1].base_stat}</p>
          <span>Attack</span>
        </div>

        <div className="pokemon-info">
          <p>
            {pokData.abilities
              .map((currAbility) => currAbility.ability.name)
              .slice(0, 1)
              .join(" , ")}
          </p>
          <span> Abilities
            
          </span>
        </div>
      </div>
    </li>
  );
}

export default PokemonCard;
