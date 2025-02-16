import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const fileBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(fileBuffer);

  // Đảm bảo rằng bạn không ghi file vào thư mục public, ví dụ ghi vào ./uploads
  const uploadDir = path.resolve(process.cwd(), "uploads");
  await fs.mkdir(uploadDir, { recursive: true });

  const filePath = path.join(uploadDir, file.name);
  await fs.writeFile(filePath, buffer);

  // Trả về URL của file đã upload (giả sử bạn có một server phục vụ thư mục uploads)
  const fileUrl = `/uploads/${file.name}`;

  return NextResponse.json({ url: fileUrl });
}
