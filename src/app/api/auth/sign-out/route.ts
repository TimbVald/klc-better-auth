import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function getCookieValue(cookieHeader: string | null, name: string) {
  if (!cookieHeader) return undefined;
  const match = cookieHeader.match(new RegExp(`${name}=([^;]+)`));
  return match ? match[1] : undefined;
}

export async function POST(request: NextRequest) {
  const cookieHeader = request.headers.get("cookie");
  const sessionToken = getCookieValue(cookieHeader, "better-auth.session-token");
  console.log("Session token reçu :", sessionToken);

  let deleted = 0;
  if (sessionToken) {
    const res = await prisma.session.deleteMany({
      where: { token: sessionToken }
    });
    deleted = res.count;
    console.log("Nombre de sessions supprimées :", deleted);
  }

  const response = NextResponse.json({ success: true, message: "Déconnexion réussie", deleted });
  response.cookies.set("better-auth.session-token", "", {
    httpOnly: true,
    path: "/",
    expires: new Date(0),
    sameSite: "lax",
  });
  return response;
} 