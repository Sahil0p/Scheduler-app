// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <header className="bg-white border-b">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        
//         <Link href="/" className="text-lg sm:text-xl font-semibold">
//           Scheduler
//         </Link>

//         <nav className="flex items-center gap-4 sm:gap-6 text-sm text-gray-600">
//           <Link href="/" className="hover:text-black">
//             Home
//           </Link>
//           <Link href="/dashboard" className="hover:text-black">
//             Dashboard
//           </Link>
//         </nav>

//       </div>
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between">
        
        <Link href="/" className="font-semibold text-lg">
          Scheduler
        </Link>

        <div className="flex gap-4 items-center">
          {session ? (
            <>
              <span className="text-sm text-gray-600">
                {session.user.name}
              </span>
              <button onClick={() => signOut()}>
                Logout
              </button>
            </>
          ) : (
            <button onClick={() => signIn("google")}>
              Login
            </button>
          )}
        </div>

      </div>
    </header>
  );
}