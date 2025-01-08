// import { handlers } from "@/auth"; // Referring to the auth.ts we just created
// export const { GET, POST } = handlers;

// src/app/api/auth/[...nextauth]/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Đảm bảo có các export như sau:
export async function GET(request: NextRequest) {
  // Logic xử lý cho GET
  return NextResponse.json({ message: 'Hello from GET' });
}

export async function POST(request: NextRequest) {
  // Logic xử lý cho POST
  return NextResponse.json({ message: 'Hello from POST' });
}