import { NextResponse } from 'next/server';
import { getCohereResponse } from '@/lib/cohere';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await getCohereResponse(message);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}