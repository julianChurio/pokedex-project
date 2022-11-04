import React, { useState, useEffect } from "react";
import Card from "../PokemonCard/Card";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { AiOutlineLoading } from "react-icons/ai";
import { BiErrorAlt } from "react-icons/bi";

const Container = () => {
  const [pokemon, setPokemon] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [show, setShow] = useState(true);

  const fetchData = (e) => {
    e.preventDefault();
    setShow(false);
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue.toLowerCase().replace(" ", "-")}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        setError(false);
        if (searchValue === "") setError(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      })
      .catch(() => {
        setError(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .finally(setSearchValue(""));
  };

  return (
    <div className="flex flex-row">
      <div className="min-h-screen flex items-center justify-center w-1/4 bg-container">
        <div className="">
          <form onSubmit={fetchData} className="flex flex-col">
            <input
              type="text"
              className="bg-white p-4 text-xl"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <button type="submit" className="bg-gray-900 text-white p-4">
              Buscar
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-center w-3/4 items-center bg-container">
        {show ? (
          <div className="text-4xl flex">
            <BsFillArrowLeftCircleFill className="animate-mio text-red-700" />
            <h1>Inserta Nombre o ID de un Pokémon</h1>
          </div>
        ) : loading ? (
          <div className="text-4xl flex justify-center items-center">
            <AiOutlineLoading className="text-3xl animate-spin mr-4" />
            <h1>Loading...</h1>
          </div>
        ) : error ? (
          <div className="text-4xl flex flex-col justify-center items-center">
            <BiErrorAlt className="text-6xl" />
            <h1>Error: Este Pokémon no existe</h1>
          </div>
        ) : (
          <Card data={pokemon} />
        )}
      </div>
    </div>
  );
};

export default Container;
