import React from 'react';

function TaskStateButton(){
    return (
        <div class="tab-container">
        <button class="tab tab--1">Ongoing</button>
        <button class="tab tab--2">Completed</button>
        <div class="indicator"></div>
    </div>
    )
};

export default TaskStateButton;