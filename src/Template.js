import React, { useState, useEffect, useRef } from 'react';
import { Download } from './download';

export function Template(props) {
  
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = prepCanvas();
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 1000, 1000);
    ctx.fillStyle = 'black';
    ctx.font = "30px Helvetica";
    ctx.fillText("Upload Image", 450, 450);
    ctx.font = "40px Century Gothic";
    ctx.fillStyle = 'black';
    ctx.fillText("Info:", 10, 40)
    ctx.fillText("Stats:", 310, 40)
    ctx.fillText("Favorites:", 10, 310)
    for (let i = 0; i < 4; i ++) {
      ctx.fillRect(10, 50 + (i * 54), 110, 45);
      ctx.fillRect(10, 320 + (i * 54), 110, 45);
    }
    for (let i = 0; i < 6; i++) {
      ctx.fillRect(310, 50 + (i * 35), 110, 30);
    }
    ctx.fillStyle = 'white';
    ctx.font = "25px Century Gothic";
    var info = ["Name", "Age", "Gender", "Country"];
    var favs = ["Game", "Anime", "Book", "Movie"];
    for (let i = 0; i < 4; i++) {
      ctx.fillText(info[i], 15, 80 + (i * 54));
      ctx.fillText(favs[i], 15, 350 + (i * 54));
    }
    ctx.font = "20px Century Gothic";
    var stats = ["Intellect", "Looks", "Wealth", "Health", "Charisma", "Happiness"];
    for(let i = 0; i < 6; i++) {
      ctx.fillText(stats[i], 315, 72 + (i * 35));
    }
    for (let i = 0; i < 4; i++) {
      ctx.strokeRect(120, 51 + (i * 54), 160, 43);
      ctx.strokeRect(120, 321 + (i * 54), 270, 43);
    }
    for (let i = 0; i < 6; i++) {
      statBar(420, 51 + (i * 35), 5);
    }
  }, [])

  useEffect(() => {
    replaceText(props.name, 135, 80, 130)
  }, [props.name])

  useEffect(() => {
    replaceText(props.age, 135, 134, 130)
  }, [props.age])

  useEffect(() => {
    replaceText(props.gender, 135, 188, 130)
  }, [props.gender])

  useEffect(() => {
    replaceText(props.country, 135, 242, 130)
  }, [props.country])

  useEffect(() => {
    replaceText(props.game, 135, 350, 240)
  }, [props.game])

  useEffect(() => {
    replaceText(props.anime, 135, 404, 240)
  }, [props.anime])

  useEffect(() => {
    replaceText(props.book, 135, 458, 240)
  }, [props.book])

  useEffect(() => {
    replaceText(props.movie, 135, 512, 240)
  }, [props.movie])

  useEffect(() => {
    statBar(420, 51, props.intellect);
  }, [props.intellect])
  

  useEffect(() => {
    statBar(420, 86, props.looks);
  }, [props.looks])

  useEffect(() => {
    statBar(420, 121, props.wealth);
  }, [props.wealth])

  useEffect(() => {
    statBar(420, 156, props.health);
  }, [props.health])

  useEffect(() => {
    statBar(420, 191, props.charisma);
  }, [props.charisma])

  useEffect(() => {
    statBar(420, 226, props.happiness);
  }, [props.happiness])

  useEffect(() => {
    const ctx = prepCanvas();
    const imgSrc = props.image;
    var img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 405, 270, 300, 300);
    }
    img.src = imgSrc;
  }, [props.image])

  const prepCanvas = () => {
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.font = "25px Century Gothic";
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'black';
    ctx.lineWidth = 2;
    return ctx;
  }

  const replaceText = (text, x, y, width) => {
    const ctx = prepCanvas();
    ctx.fillStyle = 'white';
    ctx.fillRect(x - 5, y - 28, width + 10, 35);
    ctx.fillStyle = 'black';
    ctx.fillText(text, x, y, width);
  }

  const statBar = (x, y, stat) => {
    const ctx = prepCanvas();
    ctx.fillStyle = 'lime';
    ctx.strokeStyle = 'black';
    for (let i = 0; i < stat; i++) {
      ctx.fillRect(x + 28 * i, y, 28, 28);
      ctx.strokeRect(x + 28 * i, y, 28, 28);
    }
    ctx.fillStyle = 'white';
    for (let i = stat; i < 10; i++) {
      ctx.fillRect(x + 28 * i, y, 28, 28);
      ctx.strokeRect(x + 28 * i, y, 28, 28);
    }
  }

  const handleClick = () => {
    const image = canvasRef.current.toDataURL();
    const link = document.createElement('a');
    link.href = image;
    link.download = 'profile.png';
    link.click();
  }

  return (
    <div>
      <canvas ref={canvasRef} height="600" width="720" background style={{border:"black 3px solid"}}/>
      <Download onClick={handleClick}></Download>
    </div>
  );
  
}