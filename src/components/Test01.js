import  Pic from '../blue.jpg';

export default function Test01(){
  return (
    <>
    <img src={Pic} alt="blue" width={200} />
    <img src="./images/blue.jpg" alt="blue" width={300} />
    </>
  )
}