'use client';

import { useState } from 'react';
import { Task } from '@/types/task';

interface TaskFormProps {
  onSubmit: (title: string, description: string) => Promise<void>;
  initialTask?: Task;
  isLoading?: boolean;
}

export default function TaskForm({ onSubmit, initialTask, isLoading }: TaskFormProps) {
  const [title, setTitle] = useState(initialTask?.title || '');
  const [description, setDescription] = useState(initialTask?.description || '');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!title.trim() || !description.trim()) {
      setError('Title and description are required');
      return;
    }

    try {
      await onSubmit(title, description);
      setTitle('');
      setDescription('');
    } catch (err) {
      setError('Failed to save task');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          disabled={isLoading}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          disabled={isLoading}
        />
      </div>

      {error && <div className="error-message">{error}</div>}

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Saving...' : initialTask ? 'Update Task' : 'Create Task'}
      </button>
    </form>
  );
}
