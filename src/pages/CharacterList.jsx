import React from "react";
import "./characterlist.css";
import { useCharacters } from "../hooks/useCharacters";

const CharacterList = () => {

  const {error,loading,data} = useCharacters()
  if (loading) return <div>loading....</div>;
  if (error) return <div>Something went wrong.</div>;

  return (
    <div className="character_list">
      {data.characters.results.map((characterData) => (
        <div key={characterData.id}>
          <img src={characterData.image} />
          <h2>Name: {characterData.name}</h2>
          <h3>Gender: {characterData.gender}</h3>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
