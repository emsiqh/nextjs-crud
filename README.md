# Next.js CRUD Project

A complete CRUD (Create, Read, Update, Delete) application built with Next.js and TypeScript.

## Features

- ✅ Create tasks with title and description
- ✅ Read and display all tasks
- ✅ Update existing tasks
- ✅ Delete tasks with confirmation
- ✅ Toggle task completion status
- ✅ Responsive design
- ✅ Type-safe with TypeScript
- ✅ Beautiful UI with CSS

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **HTTP Client**: Axios
- **Styling**: CSS

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── api/
│   │   └── tasks/
│   │       ├── route.ts (GET, POST)
│   │       └── [id]/
│   │           ├── route.ts (GET, PUT, DELETE)
│   │           └── toggle/
│   │               └── route.ts (PATCH)
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── TaskForm.tsx
│   ├── TaskCard.tsx
│   └── TaskList.tsx
├── lib/
│   └── db.ts
├── types/
│   └── task.ts
└── package.json
```

## API Endpoints

### GET /api/tasks
Fetch all tasks

**Response:**
```json
[
  {
    "id": "1",
    "title": "Learn Next.js",
    "description": "Master Next.js fundamentals",
    "completed": false,
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  }
]
```

### POST /api/tasks
Create a new task

**Request Body:**
```json
{
  "title": "Task title",
  "description": "Task description"
}
```

### GET /api/tasks/[id]
Fetch a specific task

### PUT /api/tasks/[id]
Update a task

**Request Body:**
```json
{
  "title": "Updated title",
  "description": "Updated description"
}
```

### DELETE /api/tasks/[id]
Delete a task

### PATCH /api/tasks/[id]/toggle
Toggle task completion status

## Database

Currently uses in-memory storage. To use a real database:

1. Replace the `lib/db.ts` file with database queries
2. Install database driver (MongoDB, PostgreSQL, etc.)
3. Update API routes to use the new database functions

## Customization

- **Styling**: Modify `app/globals.css`
- **Database**: Update `lib/db.ts`
- **Components**: Edit components in the `components/` directory
- **API Logic**: Update files in `app/api/`

## License

MIT
