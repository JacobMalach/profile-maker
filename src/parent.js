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
  const [games, setGames] = useState('');
  const [anime, setAnime] = useState('');
  const [books, setBooks] = useState('');
  const [movies, setMovies] = useState('');

  return (
    
    <div class="bg-secondary">
      <h1>Profile Maker</h1>
      <div class="row justify-content-center">
        <div class="col-sm-2">
          <Entry onChange={setName} category="Name"/>
        </div>
        <div class="col-sm-2">
          <Entry onChange={setAge} category="Age"/>
        </div>
        <div class="col-sm-2">
          <Entry onChange={setGender} category="Gender"/>
        </div>
        <div class="col-sm-2">
          <Entry onChange={setCountry} category="Country"/>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-sm-2">
          <Entry onChange={setIntellect} category="Intellect"/>
        </div>
        <div class="col-sm-2">
          <Entry onChange={setLooks} category="Looks"/>
        </div>
        <div class="col-sm-2">
          <Entry onChange={setWealth} category="Wealth"/>
        </div>
        <div class="col-sm-2">
          <Entry onChange={setHealth} category="Health"/>
        </div>
        <div class="col-sm-2">
          <Entry onChange={setCharisma} category="Charisma"/>
        </div>
        <div class="col-sm-2">
          <Entry onChange={setHappiness} category="Happiness"/>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-sm-2">
        <Entry onChange={setGames} category="Games"/>
        </div>
        <div class="col-sm-2">
          <Entry onChange={setAnime} category="Anime"/>
        </div>
        <div class="col-sm-2">
          <Entry onChange={setBooks} category="Books"/>
        </div>
        <div class="col-sm-2">
          <Entry onChange={setMovies} category="Movies"/>
        </div>
      </div>

      <div className="bar">
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
        games={games}
        anime={anime}
        books={books}
        movies={movies}/>
      </div>
    </div>
    );
};