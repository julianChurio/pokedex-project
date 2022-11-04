import React, { useEffect, useState } from "react";

import {
  normal,
  fire,
  water,
  grass,
  electric,
  ice,
  fighting,
  poison,
  ground,
  flying,
  psychic,
  bug,
  rock,
  ghost,
  dark,
  dragon,
  steel,
  fairy,
} from "../Images/Images";

const Card = ({ data }) => {
  const [pokeType, setPokeType] = useState([]);
  const [pokeTypeImage, setPokeTypeImage] = useState([]);
  const [pokeTypeImageTwo, setpokeTypeImageTwo] = useState([]);

  useEffect(() => {
    setPokeType(data.types.map((x) => x.type.name));

    // PRIMERA IMAGEN
    if (data.types[0] !== undefined) {
      if (data.types[0].type.name === "grass") {
        setPokeTypeImage(grass);
      } else if (data.types[0].type.name === "fire") {
        setPokeTypeImage(fire);
      } else if (data.types[0].type.name === "dark") {
        setPokeTypeImage(dark);
      } else if (data.types[0].type.name === "electric") {
        setPokeTypeImage(electric);
      } else if (data.types[0].type.name === "psychic") {
        setPokeTypeImage(psychic);
      } else if (data.types[0].type.name === "water") {
        setPokeTypeImage(water);
      } else if (data.types[0].type.name === "flying") {
        setPokeTypeImage(flying);
      } else if (data.types[0].type.name === "dragon") {
        setPokeTypeImage(dragon);
      } else if (data.types[0].type.name === "poison") {
        setPokeTypeImage(poison);
      } else if (data.types[0].type.name === "normal") {
        setPokeTypeImage(normal);
      } else if (data.types[0].type.name === "steel") {
        setPokeTypeImage(steel);
      } else if (data.types[0].type.name === "fairy") {
        setPokeTypeImage(fairy);
      } else if (data.types[0].type.name === "ice") {
        setPokeTypeImage(ice);
      } else if (data.types[0].type.name === "fighting") {
        setPokeTypeImage(fighting);
      } else if (data.types[0].type.name === "ghost") {
        setPokeTypeImage(ghost);
      } else if (data.types[0].type.name === "rock") {
        setPokeTypeImage(rock);
      } else if (data.types[0].type.name === "bug") {
        setPokeTypeImage(bug);
      } else if (data.types[0].type.name === "ground") {
        setPokeTypeImage(ground);
      }
    }

    // SEGUNDA IMAGEN

    if (data.types[1] !== undefined) {
      if (data.types[1].type.name === "grass") {
        setpokeTypeImageTwo(grass);
      } else if (data.types[1].type.name === "fire") {
        setpokeTypeImageTwo(fire);
      } else if (data.types[1].type.name === "dark") {
        setpokeTypeImageTwo(dark);
      } else if (data.types[1].type.name === "electric") {
        setpokeTypeImageTwo(electric);
      } else if (data.types[1].type.name === "psychic") {
        setpokeTypeImageTwo(psychic);
      } else if (data.types[1].type.name === "water") {
        setpokeTypeImageTwo(water);
      } else if (data.types[1].type.name === "flying") {
        setpokeTypeImageTwo(flying);
      } else if (data.types[1].type.name === "dragon") {
        setpokeTypeImageTwo(dragon);
      } else if (data.types[1].type.name === "poison") {
        setpokeTypeImageTwo(poison);
      } else if (data.types[1].type.name === "normal") {
        setpokeTypeImageTwo(normal);
      } else if (data.types[1].type.name === "steel") {
        setpokeTypeImageTwo(steel);
      } else if (data.types[1].type.name === "fairy") {
        setpokeTypeImageTwo(fairy);
      } else if (data.types[1].type.name === "ice") {
        setpokeTypeImageTwo(ice);
      } else if (data.types[1].type.name === "fighting") {
        setpokeTypeImageTwo(fighting);
      } else if (data.types[1].type.name === "ghost") {
        setpokeTypeImageTwo(ghost);
      } else if (data.types[1].type.name === "rock") {
        setpokeTypeImageTwo(rock);
      } else if (data.types[1].type.name === "bug") {
        setpokeTypeImageTwo(bug);
      } else if (data.types[1].type.name === "ground") {
        setpokeTypeImageTwo(ground);
      }
    }
  }, []);

  return (
    <div className="tilt rounded-3xl w-6/12">
      <div className="border-[1px] rounded-3xl">
        <div className="flex flex-col items-center">
          <div className="p-2 flex">
            <div className="text-4xl">
              <p className="text-center">ID: {data.id}</p>
              <p className="text-center capitalize">{data.name}</p>
            </div>
          </div>
          <div className="text-3xl capitalize flex items-center p-4" id="type-container">
            <div className="flex items-center">
              <img src={pokeTypeImage} alt="" className="h-auto w-[32px] self-center" />
              <p>{pokeType[0]}</p>
            </div>
            {pokeTypeImageTwo[0] === undefined ? (
              <p>Type</p>
            ) : (
              <div className="flex items-center p-1">
                <img src={pokeTypeImageTwo} alt="" className="h-auto w-[32px] self-center" />
                <p>{pokeType[1]} Type</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={data.sprites.other["official-artwork"].front_default}
            alt=""
            className=" border-t-2 border-b-2 rounded-sm"
          />
          {/* {data.abilities[1].ability.name} */}
        </div>
        <div className="p-4 w-[475px] mx-auto border-b">
          <div className="flex justify-center">
            <h1>Habilidades</h1>
          </div>
          <div className="flex justify-between capitalize mx-auto">
            <p>{data.abilities[0].ability.name}</p>
            {data.abilities[1] === undefined ? console.log("asd") : <p>{data.abilities[1].ability.name}</p>}
          </div>
        </div>
        <div className="p-4 w-[475px] mx-auto">
          <div className="flex justify-center">
            <h1>Estadisticas</h1>
          </div>
          <div className="mx-auto">
            <div className="flex justify-between capitalize">
              <p>{data.stats[0].stat.name}</p>
              <p>{data.stats[0].base_stat}</p>
            </div>
            <div className="flex justify-between capitalize">
              <p>{data.stats[1].stat.name}</p>
              <p>{data.stats[1].base_stat}</p>
            </div>
            <div className="flex justify-between capitalize">
              <p>{data.stats[2].stat.name}</p>
              <p>{data.stats[2].base_stat}</p>
            </div>
            <div className="flex justify-between capitalize">
              <p>{data.stats[3].stat.name}</p>
              <p>{data.stats[3].base_stat}</p>
            </div>
            <div className="flex justify-between capitalize">
              <p>{data.stats[4].stat.name}</p>
              <p>{data.stats[4].base_stat}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
