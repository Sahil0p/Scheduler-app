// import { prisma } from "@/lib/db";
// import { NextResponse } from "next/server";

// export async function GET(req) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const username = searchParams.get("username");

//     if (!username) {
//       return NextResponse.json(
//         { error: "Username required" },
//         { status: 400 }
//       );
//     }

//     // ✅ Find user
//     let user = await prisma.user.findFirst({
//       where: {
//         name: username,
//       },
//     });

//     // ✅ Auto-create user if not found (IMPORTANT FIX)
//     if (!user) {
//       user = await prisma.user.create({
//         data: {
//           name: username,
//           email: `${username}@test.com`,
//         },
//       });
//     }

//     return NextResponse.json(user);
//   } catch (err) {
//     console.error("USER API ERROR:", err); // 👈 VERY IMPORTANT
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }


// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({ message: "Use session instead" });
// }


import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "Username required" },
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({
    where: { username }, // ✅ use username
  });

  if (!user) {
    return NextResponse.json(
      { error: "User not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
}