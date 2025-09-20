import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, toggleTaskDone }) {
  if (tasks.length === 0) {
    return <p>No tasks added yet.</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map(task => (
        <TaskItem 
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTaskDone={toggleTaskDone}
        />
      ))}
    </ul>
  );
}

export default TaskList;