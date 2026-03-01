import React, {useState} from 'react'

function AddTask({onAddTask})
{
const submit= (e)=>{   
e.preventDefault();
onAddTask(task, desc);
}

const [task, setTask]=useState("")
const [desc, setDesc]=useState("")

  return(
   <div className="container">
        <div className="card shadow-sm mx-auto">
            <div className="card-body">
                <h5 className="card-title mb-4">Create New Task</h5>
                
                <form id="taskForm" onSubmit={submit}>
                    <div className="mb-3">
                        <label for="taskName" className="form-label">Task Name</label>
                        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} className="form-control" id="taskName" placeholder="e.g., Buy groceries" required />
                    </div>

                    <div className="mb-3">
                        <label for="taskDescription" className="form-label">Description</label>
                        <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="taskDescription" rows="3" placeholder="Add more details..."></textarea>
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Add Task</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  ) ;
}
export default AddTask;