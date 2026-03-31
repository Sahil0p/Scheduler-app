import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">Scheduler App 🚀</h1>
      <p className="text-gray-600">
        Simple appointment booking platform
      </p>

      <Link
        href="/dashboard"
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}