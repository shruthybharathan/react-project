import React from 'react'
import PropTypes from 'prop-types'

export default function Task({
  todo,
  onDelete
})
{
    return(
        
        <div className="card-body">
                <h5 className="card-title">{todo.sno}.{" "}{todo.task}</h5>
                <p className="card-text">{todo.desc}</p>
                <a href="#" className="btn btn-primary" onClick={(e)=>onDelete(e,todo)}>Delete</a>
            </div>
    );
}
// Task.defaultProps=
// {
//   TaskName:"no value for task", 
//   Description:"no value for description"  
// }
// Task.propTypes=
// {
//  TaskName: PropTypes.string,
//  Description: PropTypes.string,
//  Slno: PropTypes.number.isRequired    
// }
// export default Task;