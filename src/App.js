import Header from "./Components/Header";
import Footer from "./Components/Footer"
import TaskList from "./Components/TaskList";
import React, { useState } from 'react';
import AddTask from "./Components/AddTask";
import About from "./Components/About";
import Api from "./Components/Api";
import {Routes, Route} from 'react-router-dom';

function App() {

const onDelete= (e,todo)=>
{
  e.preventDefault();
setTask( task.filter((abc)=>
{
  return abc!==todo;
}
)   
  )
}


const onAddTask=(t, d)=>
{

let newSno= task.length==0 ? 1 : task[task.length-1].sno+1;
let newTask=
  {
   task:t,
   desc:d,
   sno:newSno
  };

setTask([...task, newTask]);
};


const [task, setTask]= useState(

[{
task: "task1rrrrrrrrrrrrrr",
desc:"desc1",
sno:1
  },
  {
task: "task2",
desc:"desc2",
sno:2
  },
  {
task: "task3",
desc:"desc3",
sno:3
  },
  {
task: "task4",
desc:"desc4",
sno:4
  },

]
)
  
  return (
    
    <div className="App">  
       <Header showSearch="true"/> 
       <Routes>
         <Route 
          path="/" 
          element={
       <div className="bg-light p-5">
        <AddTask onAddTask={onAddTask}/>
      <TaskList tasks={task} onDelete={onDelete}/>
        </div>  
        } 
        />
        <Route path="/about" element={<About />} /> 
        <Route path="/api" element={<Api/>} />
     </Routes>
       <Footer/>
    </div>
    
  );
}

export default App;
