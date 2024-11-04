import React from 'react';
import Priority from '../PriorityButton/PriorityButton';

const NewTask = () =>{
    return (<>
    {/* Name of the particular task*/}
     <div className="">
     <label for="exampleInputEmail1" className="form-label">Task Name::</label>
     <input type="text" className="task-name" id="exampleInputEmail1"  />
     </div>
     {/* Description about the particular task*/}
     <div className="form-floating ">
     <label for="floatingTextarea2 ">Description ::</label>
     <textarea className="form-control p-5" placeHolder="Description about the Task" id="floatingTextarea2"></textarea>
     </div>
     <input type= 'time' />
     <Priority />
     {/* Add Task Buttons*/}
     <div>
     <button type="button" class="btn btn-warning">Add Task </button>
     </div>
    </>)
}

export default NewTask;

 // {/* */}