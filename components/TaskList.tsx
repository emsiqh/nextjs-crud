'use client';

import { useEffect, useState } from 'react';
import { Task } from '@/types/task';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';
import axios from 'axios';

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (title: string, description: string) => {
    try {
      if (editingTask) {
        await axios.put(`/api/tasks/${editingTask.id}`, { title, description });
        setEditingTask(null);
      } else {
        await axios.post('/api/tasks', { title, description });
      }
      fetchTasks();
    } catch (error) {
      console.error('Failed to save task:', error);
      throw error;
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Failed to delete task:', error);
      throw error;
    }
  };

  const handleToggleTask = async (id: string) => {
    try {
      await axios.patch(`/api/tasks/${id}/toggle`);
      fetchTasks();
    } catch (error) {
      console.error('Failed to toggle task:', error);
      throw error;
    }
  };

  return (
    <div className="task-container">
      <div className="task-form-wrapper">
        <h2>{editingTask ? 'Edit Task' : 'Create New Task'}</h2>
        <TaskForm
          onSubmit={handleCreateTask}
          initialTask={editingTask || undefined}
          isLoading={loading}
        />
        {editingTask && (
          <button
            onClick={() => setEditingTask(null)}
            className="btn-cancel"
          >
            Cancel Edit
          </button>
        )}
      </div>

      <div className="task-list-wrapper">
        <h2>Tasks ({tasks.length})</h2>
        {loading ? (
          <p>Loading tasks...</p>
        ) : tasks.length === 0 ? (
          <p>No tasks yet. Create one to get started!</p>
        ) : (
          <div className="task-list">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={setEditingTask}
                onDelete={handleDeleteTask}
                onToggle={handleToggleTask}
                isLoading={loading}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
