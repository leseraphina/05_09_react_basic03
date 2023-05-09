export default function Test02(){

  // const AllSize = [7,8,9,10,11,12,13];
  const AllSize = (function(min,max){
    const sizes = [];
    for(let i = min ; i <= max ; i ++){
      sizes.push(i);
      sizes.push(i + 0.5);
      console.log(sizes)
    }
    return sizes;
  })(7,13)

  console.log(AllSize);
  function optionSize(){
    const sizes = AllSize;
    // console.log(sizes)
    return sizes.map((item,index) => (<option valu={item} key={index}>{item}</option>))
  }
  return (
    <p>
        <label htmlFor="size"> size</label>
        <select>
        {optionSize()}
          {/* <option value=""></option> */}
        </select>
    </p>
  )
}