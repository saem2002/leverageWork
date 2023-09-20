import React from 'react';

const AddTaskButton = ({ addTask }) => {
  return (
    <button onClick={addTask}>
      +
    </button>
  );
};

export default AddTaskButton;
