import React, { useState } from 'react';
import { Template } from './Template';


export function Graphics(props) {
    const[image, setImage] = useState('');

    const convertImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        }
        reader.readAsDataURL(file);
    }

    return (
        <div>
            <input
            class="form-control w-75 m-1"
            type="file"
            onChange={(e) => {
                convertImage(e);
            }}>
            </input>
            <Template 
            name={props.name}
            age={props.age}
            gender={props.gender}
            country={props.country}
            intellect={props.intellect}
            looks={props.looks}
            wealth={props.wealth}
            health={props.health}
            charisma={props.charisma}
            happiness={props.happiness}
            game={props.game}
            anime={props.anime}
            book={props.book}
            movie={props.movie}
            image={image}/>
        </div>
    );
} 