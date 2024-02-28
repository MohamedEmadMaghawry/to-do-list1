import './App.css';
import { useRef, useState } from 'react';
function App() {
  const [x,setx]= useState([])
  const inputRef= useRef()
  const add = ()=>{
  const value=inputRef.current.value
  const newdata={completed : false , value}
  setx([...x,newdata])
  inputRef.current.value=""
}
  const itemDone =(index) =>{
  const newx=[...x]
  newx[index].completed= !newx[index].completed
setx(newx)
  }
const todelete= (index)=>{
  const newx=[...x]
  newx.splice(index,1)
  setx(newx)
}
    

  return (
    <div className="App container">
      <h2>To do list</h2>
      <ul>
        {
          x.map(({value,completed},index)=>{
            return <div className='div10'>
              <li className={completed ? "diffstyle" : ""} onClick={ ()=>itemDone(index)}>{value}</li>
              <span onClick={()=>todelete(index)}>x</span>
            </div>
          })
        }
      </ul>
      <input ref={inputRef} placeholder='Enter Your Task...' />
      <button onClick={add}>Add</button>
    </div>
  );
}

export default App;
