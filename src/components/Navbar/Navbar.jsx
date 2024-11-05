import React, {useState} from 'react';
import NewTaskModal from '../NewTask/NewTaskModal';
import '../Navbar/Navbar.css';

function Navbar(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return(<>
        <nav className="navbar">
            <div className="navbar-logo">DAILY TASK MANAGER</div>
            <ul className="navbar-links">
                <li><button type='button'className='btn btn-warning btn-lg' onClick={handleOpenModal}>Add Task +</button></li>
            </ul>
        </nav>
        <NewTaskModal show={isModalOpen} onClose ={handleCloseModal}/>
    </>)
}

export default Navbar;