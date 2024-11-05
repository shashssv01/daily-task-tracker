import React from 'react';
import PriorityButton from '../PriorityButton/PriorityButton';

const NewTaskModal = ({show, onClose}) =>{
    if (!show) {
        return null;
    }

    return (<div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>ADD NEW TASK</h2>
            <form>
                <div className="form-group ">
                    <label htmlFor="name">Task Name: </label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Description:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor='name'>Pick an End Time: </label>
                    <input type='time' id="deadline" name="time" required />
                </div>
                <div className="form-group">
                    <PriorityButton />
                </div>
                <button type="submit" className='btn btn-warning'>Submit</button>
                <button type="button" className='btn btn-secondary' onClick={onClose}>Close</button>
            </form>
        </div>
    </div>)
}

export default NewTaskModal;

 // {/* */}