import React from 'react';
import '../OngoingTasks/OngoingTaskDisplay.css';
import { dummyData } from '../../data';

const OngoingTaskDisplay = () => {
  return (
    <>
      {dummyData.map((dummy) => (
        <div className="card" key={dummy.id}> 
          <div className="card-content">
            <h3 className="card-title">{dummy.title}</h3>
            <p className="card-description">{dummy.description}</p>
            <p>
              {dummy.priority === "low" ? (
                <span>Importance: !</span>
              ) : dummy.priority === "medium" ? (
                <span>Importance: !!</span>
              ) : (
                <span>Importance: !!!</span>
              )}
            </p>
            <p className="card-time">{dummy.time}</p>
            <div className="completed-icon">
              <input type="checkbox" id={`completed-${dummy.id}`} />
              <label htmlFor={`completed-${dummy.id}`}><h5>Completed</h5></label>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OngoingTaskDisplay;
