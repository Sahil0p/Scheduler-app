// "use client";

// import { useSession } from "next-auth/react";
// import Navbar from "@/components/Navbar";
// import DashboardCard from "@/components/DashboardCard";
// import Loader from "@/components/Loader";

// export default function Dashboard() {
//   const { data: session, status } = useSession();

//   if (status === "loading") return <Loader />;

//   if (!session) {
//     return (
//       <div className="p-10 text-center">
//         Please login to access dashboard
//       </div>
//     );
//   }

//   const username = session.user.name; // ✅ dynamic

//   return (
//     <>
//       <Navbar />

//       <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        
//         <div className="mb-6 sm:mb-8">
//           <h1 className="text-xl sm:text-3xl font-semibold">
//             Dashboard
//           </h1>
//           <p className="text-gray-500 mt-2 text-sm">
//             Share your booking link
//           </p>
//         </div>

//         <DashboardCard username={username} />
//       </div>
//     </>
//   );
// }


"use client";

import { useSession, signIn } from "next-auth/react";
import Navbar from "@/components/Navbar";
import DashboardCard from "@/components/DashboardCard";
import Loader from "@/components/Loader";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") return <Loader />;

  // 🔥 UPDATED LOGIN UI
  if (!session) {
    return (
      <>
        <Navbar />

        <div className="h-[70vh] flex flex-col items-center justify-center gap-4">
          <p className="text-gray-600 text-lg">
            Please login to access dashboard
          </p>

          <button
            onClick={() => signIn("google")}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
          >
            Login with Google
          </button>
        </div>
      </>
    );
  }

  const username = session.user.username;

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-6">
          Welcome, {session.user.name}
        </h1>

        <DashboardCard username={username} />
      </div>
    </>
  );
}