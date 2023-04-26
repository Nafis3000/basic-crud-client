import React from 'react';
import { useGetTasksQuery, useDeleteTaskMutation, useUpdateTaskMutation } from '../api';



function TasksList() {
  const { data: tasks, error, isLoading } = useGetTasksQuery();
    const [deleteTask] = useDeleteTaskMutation();
    const [updateTask] = useUpdateTaskMutation();
    const { refetch } = useGetTasksQuery();

    const handleDelete = async (id) => {
        await deleteTask(id);
        await refetch();
    };

    const handleUpdate = async (task) => {
        await updateTask(task);
        await refetch();
    };



  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.error}</div>;


  return (
    <article>
        {tasks.map((task) => (
            <div key={task._id}>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <p>{task.completed ? "Completed" : "Not Completed"}</p>
                <input type='checkbox' checked={task.completed} onChange={() => handleUpdate({...task, completed: !task.completed})}/>
                <button onClick={() => handleDelete(task._id)}>Delete</button>
            </div>
        ))}
    </article>
  );
}

export default TasksList;