import TaskList from '@/components/TaskList';

export default function Home() {
  return (
    <main className="main">
      <div className="header">
        <h1>📝 Task Manager</h1>
        <p>A simple CRUD application built with Next.js</p>
      </div>
      <TaskList />
    </main>
  );
}
