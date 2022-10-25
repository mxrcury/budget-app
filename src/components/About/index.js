import React, { useState } from "react";
import { withProfiler } from "../../HOCs";
import { Text } from "./styles";

const list = new Array(20)
  .fill(0)
  .map((el) => `item ${Math.random().toFixed(2)}`);

const List = ({ list }) => {
  const [filter,setFilter] = useState('')

  const filteredList = list.filter(el=>el.includes(filter))


  return (
    <>
    <input type='text' value={filter} onChange={e=>setFilter(e.target.value)}/>
    <ul>
      {filteredList.map((el,i) => (
        <li key={`${el}_${i}`} >{el}</li>
      ))}
    </ul>
    </>
  );
}


const Clicker = () => {
  const [n, setN] = useState(0);
  return (
    <>
      <div>Clicked {n} times.</div>
      <button onClick={() => setN(n + 1)}>Click</button>
    </>
  )

}

const About = () => {
  return (
    <div>
      <Text>About Page.</Text>
      <List list={list} />
      <Clicker/>
    </div>
  );
};

export default withProfiler(About,'About')
