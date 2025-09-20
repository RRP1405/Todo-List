function TaskItem({ task, deleteTask, toggleTaskDone }) {
  return (
    <li style={{ 
      marginBottom: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <span 
        onClick={() => toggleTaskDone(task.id)}
        style={{ 
          textDecoration: task.completed ? 'line-through' : 'none',
          cursor: 'pointer'
        }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;