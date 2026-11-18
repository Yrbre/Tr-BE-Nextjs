import { NextResponse } from "next/server";

// GET /api/health
export async function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
}

// POST /api/health
export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({ received: body }, { status: 200 });
}
