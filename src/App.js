import React from 'react';
import TasksList from './components/TasksList';
import AddTask from './components/AddTask';
// import DeleteTask from './components/DeleteTask';

function App() {
  return (
    <div className="App">
      <h1>Basic CRUD</h1>
      <AddTask />
      <TasksList />
      {/* <DeleteTask /> */}
    </div>
  );
}

export default App;
