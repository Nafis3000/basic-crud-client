import React, { useState } from 'react';
import { useCreateTaskMutation } from '../api'
import { useGetTasksQuery } from '../api';

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createTask] = useCreateTaskMutation();
  const { refetch } = useGetTasksQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;
    await createTask({ title, description, completed: false });
    await refetch();
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea type="text" placeholder="Task description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;