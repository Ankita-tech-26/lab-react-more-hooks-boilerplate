import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [taskArr, setTaskArr] = useState([]);
  let [task, setTask] = useState("");
  let [toggle,setToggle]=useState(false)
  function handleChange(e){
    // console.log(e.target.value)
    let task = e.target.value;
    setTask(task)
  }

  let handleSubmit=(e)=>{
    e.prevent.Default();
    let newTask={task:task, toggle:false}
    setTaskArr([...taskArr,newTask]);
    console.log(taskArr);


  }

  const handleToggle=()=> {
    setToggle(!Toggle)
  }
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange}/>

    </form>
    <div>
      {taskArr?.map((task)=>{
        return <div>
          <h1>{toggle?"This is hidden content":task}</h1>
          <button onClick={handleToggle}>Toggle</button>
        </div>
      })}
    </div>
    
    
    </>
  )

}

export default App
