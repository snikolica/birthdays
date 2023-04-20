import React from "react";
import Person from "./Person";

export default function List({ people, setPeople }) {
  return (
    <div className="container">
      {people.map((person) => {
        const { id, name, age, img } = person;
        return (
           <Person key={id} {...person}/>
        );
      })}
       <button onClick={()=> setPeople([])}>{people ? 'clear all' : 'refresh'}</button>
    </div>
  );
}
