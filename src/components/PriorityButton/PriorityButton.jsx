import React , {useState} from 'react';


function PriorityButton(){
    const [activeButton, setActiveButton] = useState(null); // Track which button is active

    const handleClick = (buttonId) => {
      setActiveButton(buttonId);
    };
      
    return (
        <div class="btn-group" role="group" >
        <button type="button" className={activeButton === 1 ? 'btn btn-outline-success active' : 'btn btn-outline-success '} onClick={() => handleClick(1)}>Low!</button>
        <button type="button" className={activeButton === 2 ? 'btn btn-outline-warning active' : 'btn btn-outline-warning '} onClick={() => handleClick(2)}>Medium!!</button>
        <button type="button" className={activeButton === 3 ? 'btn btn-outline-danger active' : 'btn btn-outline-danger '} onClick={() => handleClick(3)}>High!!!</button>
        </div>
    )
};

export default PriorityButton;
