import { useState } from 'react';
import './Test03.css';


const AllColors = ['red','blue','brown','purple','green'];

function ProColor({color,colors,colorChange}){
  function optionColor(){
    // const color = colors;
    // console.log(color)
    return colors.map((item,index) => (<option value={item} key={index}>{item}</option>))
  }
  function changeColor(e){
      // console.log(e.target.value)
      colorChange(e.target.value);
  }
  return (
    <p>
      <label htmlFor="color">color</label>
      <select
         id='color'
         defaultValue={color}
         onChange={changeColor}>
        {optionColor()}
      </select>
    </p>
  )
}

function ProImg({color}){
  return (
    <>
    <img src={`../images/${color}.jpg`} alt={color} />
    </>
  )
}

export default function Test03(){
  const [color,setColor] = useState('blue');
  const [colors,setColors] = useState(AllColors)
  function colorChange(selectColor){
    setColor(selectColor);
  }
  return (
    <div className="custom">
      <div className="pic">
        <ProImg 
          color = {color}/>
      </div>
      <div className="selector">
      <ProColor 
        color={color}
        colors={colors}
        colorChange={colorChange}
        />
      </div>
    </div>
  )
}