import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import TaskStateButton from './components/OngoingCompletedButtons/TaskStateButton';

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <TaskStateButton />
    </div>
  );
}

export default App;
