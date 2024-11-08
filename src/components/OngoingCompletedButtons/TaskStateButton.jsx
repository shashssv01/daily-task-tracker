import React, { useState } from 'react';
import OngoingTaskDisplay from '../OngoingTasks/OngoingTaskDisplay';
import CompletedTaskDisplay from '../CompletedTasks/CompletedTaskDisplay.jsx';

function TaskStateButton(){
    const[activeButton , setActiveButton] = useState(1);
    
    function handleClick(buttonId){
       setActiveButton(buttonId);
    }

    return (
        <>
        <div className="btn-group">
        <button className={activeButton === 1 ? 'btn btn-outline-warning active' : 'btn btn-outline-secondary '} onClick={() => handleClick(1)} >Ongoing</button>
        <button className={activeButton === 2 ? 'btn btn-outline-warning active' : 'btn btn-outline-secondary'} onClick={() => handleClick(2)}>Completed</button>
        </div>
        <div>
         {activeButton === 1 ? <OngoingTaskDisplay /> : <CompletedTaskDisplay />}
        </div></>
    )
};

export default TaskStateButton;