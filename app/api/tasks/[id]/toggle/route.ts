import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const task = db.toggleTask(params.id);
    if (!task) {
      return NextResponse.json(
        { error: 'Task not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to toggle task' },
      { status: 500 }
    );
  }
}
