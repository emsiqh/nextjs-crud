import { Task } from '@/types/task';

// In-memory database (replace with real DB as needed)
let tasks: Task[] = [
  {
    id: '1',
    title: 'Learn Next.js',
    description: 'Master Next.js fundamentals',
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Build a project',
    description: 'Create a CRUD application',
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const db = {
  getAllTasks: () => tasks,
  
  getTaskById: (id: string) => tasks.find(t => t.id === id),
  
  createTask: (title: string, description: string): Task => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    return newTask;
  },
  
  updateTask: (id: string, title?: string, description?: string): Task | null => {
    const task = tasks.find(t => t.id === id);
    if (!task) return null;
    
    if (title) task.title = title;
    if (description) task.description = description;
    task.updatedAt = new Date().toISOString();
    
    return task;
  },
  
  toggleTask: (id: string): Task | null => {
    const task = tasks.find(t => t.id === id);
    if (!task) return null;
    
    task.completed = !task.completed;
    task.updatedAt = new Date().toISOString();
    
    return task;
  },
  
  deleteTask: (id: string): boolean => {
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) return false;
    
    tasks.splice(index, 1);
    return true;
  },
};
