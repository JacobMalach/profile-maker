import React, { useState } from 'react';
import { Entry } from './entry';
import { Graphics } from './graphics';

export function Parent() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [intellect, setIntellect] = useState('');
  const [looks, setLooks] = useState('');
  const [wealth, setWealth] = useState('');
  const [health, setHealth] = useState('');
  const [charisma, setCharisma] = useState('');
  const [happiness, setHappiness] = useState('');
  const [games, setGames] = useState('');
  const [anime, setAnime] = useState('');
  const [books, setBooks] = useState('');
  const [movies, setMovies] = useState('');

  return (
    
    <div>
      <h1>Profile Maker</h1>
      <Entry onChange={setName} category="Name"/>
      <Entry onChange={setAge} category="Age"/>
      <Entry onChange={setGender} category="Gender"/>
      <Entry onChange={setCountry} category="Country"/>
      <Entry onChange={setIntellect} category="Intellect"/>
      <Entry onChange={setLooks} category="Looks"/>
      <Entry onChange={setWealth} category="Wealth"/>
      <Entry onChange={setHealth} category="Health"/>
      <Entry onChange={setCharisma} category="Charisma"/>
      <Entry onChange={setHappiness} category="Happiness"/>
      <Entry onChange={setGames} category="Games"/>
      <Entry onChange={setAnime} category="Anime"/>
      <Entry onChange={setBooks} category="Books"/>
      <Entry onChange={setMovies} category="Movies"/>
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
    );
};