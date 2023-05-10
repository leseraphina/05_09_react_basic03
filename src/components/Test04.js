import { useState } from "react";

const allSize = [7,8,9,10,11,12,13]


function String({num}){
  return (
    <span>{num}</span>
  )
}

function ProSize({num,numAll,sizeChange}){
  function optionSize(){
    // const sizes = allSize;
    return numAll.map((item,index)=> (<option value={item} key={index}>{item}</option>))
  }

  function changeSize(e){
    return sizeChange(e.target.value);
  }

  return (
  <>
  <label htmlFor="size">size</label>
  <select
    id="size"
    defaultValue={num}
    onChange = {changeSize}
    >
    {optionSize()}
  </select>
  </>
  )
}



export default function Test04(){
 const [num,setNum] = useState('9');
 const [numAll,setNumAll] = useState(allSize);
//  console.log(sizes)
  function sizeChange(selectSize){
    setNum(selectSize)
  }
 return (
  <div className="num">
    <p className="no">
 
    <String num={num} />
    </p>
    <p className="select">
     <ProSize
       num={num}
       numAll = {numAll}
       sizeChange = {sizeChange} />
    </p>
  </div>
 )

}