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
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Body harus berupa JSON yang valid" },
      { status: 400 },
    );
  }

  // body harus berupa Object, bukan Array atau null
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return NextResponse.json(
      { error: "Body harus berupa object" },
      { status: 400 },
    );
  }

  // body harus memiliki field "nama" yang berupa string dan tidak boleh kosong
  const { nama } = body as { nama?: unknown };
  if (typeof nama !== "string" || nama.trim() === "") {
    return NextResponse.json(
      { error: "Field 'nama' wajib berupa teks dan tidak boleh kosong" },
      { status: 400 },
    );
  }

  // Jika semua validasi lolos, kembalikan response dengan status 200 dan body yang diterima
  return NextResponse.json({ received: body }, { status: 200 });
}
