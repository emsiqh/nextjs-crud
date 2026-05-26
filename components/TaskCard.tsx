'use client';

import { Task } from '@/types/task';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => Promise<void>;
  onToggle: (id: string) => Promise<void>;
  isLoading?: boolean;
}

export default function TaskCard({
  task,
  onEdit,
  onDelete,
  onToggle,
  isLoading,
}: TaskCardProps) {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      await onDelete(task.id);
    }
  };

  return (
    <div className={`task-card ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          disabled={isLoading}
          className="task-checkbox"
        />
        <div className="task-info">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <small>Created: {new Date(task.createdAt).toLocaleDateString()}</small>
        </div>
      </div>

      <div className="task-actions">
        <button
          onClick={() => onEdit(task)}
          className="btn-edit"
          disabled={isLoading}
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="btn-delete"
          disabled={isLoading}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
