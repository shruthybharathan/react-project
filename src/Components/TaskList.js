import React from 'react'
import Task from './Task'

function TaskList({tasks, onDelete})
{
return(

 <div className="container mt-5">
        <h2 className="text-center">Tasks</h2>

        {/* <button className="btn btn-success mt-3">Click Me</button> */}
        <div className="row">
          {tasks.map((t) => (
            <div className="card mt-4 col-md-6 mb-4" key={t.sno}>
      <Task
        
        todo={t}
        onDelete={onDelete}
      />
       </div>
    ))}</div>
       
        {/* <div className="card mt-4">
            <Task TaskName={tasks[1].task} Description={tasks[1].desc}  Slno={tasks[1].sno} />
        </div>
        <div className="card mt-4">
            <Task TaskName={tasks[2].task} Description={tasks[2].desc}  Slno={tasks[2].sno} />
        </div>
        <div className="card mt-4">
            <Task TaskName={tasks[3].task} Description={tasks[3].desc}  Slno={tasks[3].sno} />
        </div> */}
    </div>

);
}
export default TaskList;