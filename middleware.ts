import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function middleware(request: NextRequest) {
  const cookieHeader = request.headers.get("cookie");
  const sessionToken = cookieHeader?.match(/better-auth.session-token=([^;]+)/)?.[1];

  if (!sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Vérification de la session en base de données
  const session = await prisma.session.findUnique({
    where: { token: sessionToken }
  });

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};