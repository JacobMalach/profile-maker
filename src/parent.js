import React, { useState } from 'react';
import { Entry } from './entry';
import { Graphics } from './graphics';
import './parent.css';

export function Parent() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [intellect, setIntellect] = useState('5');
  const [looks, setLooks] = useState('5');
  const [wealth, setWealth] = useState('5');
  const [health, setHealth] = useState('5');
  const [charisma, setCharisma] = useState('5');
  const [happiness, setHappiness] = useState('5');
  const [game, setGame] = useState('');
  const [anime, setAnime] = useState('');
  const [book, setBook] = useState('');
  const [movie, setMovie] = useState('');

  return (
    
    <div class="row justify-content-center">
      <h1>Profile Maker</h1>
      <div class="col-md-3">
        <Entry onChange={setName} category="Name"/>
        <Entry onChange={setGender} category="Gender"/>
        <Entry onChange={setIntellect} category="Intellect"/>
        <Entry onChange={setWealth} category="Wealth"/>
        <Entry onChange={setCharisma} category="Charisma"/>
        <Entry onChange={setGame} category="Game"/>
        <Entry onChange={setBook} category="Book"/>
      </div>
      <div class="col-md-3">
        <Entry onChange={setAge} category="Age"/>
        <Entry onChange={setCountry} category="Country"/>
        <Entry onChange={setLooks} category="Looks"/>
        <Entry onChange={setHealth} category="Health"/>
        <Entry onChange={setHappiness} category="Happiness"/>
        <Entry onChange={setAnime} category="Anime"/>
        <Entry onChange={setMovie} category="Movie"/>
      </div>
      <div class="col-md-6">
        <Graphics 
          name={name}
          age={age}
          gender={gender}
          country={country}
          intellect={intellect}
          looks={looks}
          wealth={wealth}
          health={health}
          charisma={charisma}
          happiness={happiness}
          game={game}
          anime={anime}
          book={book}
          movie={movie}/>
      </div>
    </div>
    );
};