import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <div className="flex gap-4">
        <Link
          href="/profile"
          className="rounded-lg border-gray-100 bg-blue-200 px-6 py-3 font-medium text-white transition hover:bg-red-200"
        >
          Profile
        </Link>

        <Link
          href="/contact"
          className="rounded-lg border border-gray-400 bg-white px-6 py-3 font-medium text-gray-800 transition hover:bg-red-200"
        >
          Contact
        </Link>
      </div>
    </main>
  );
}
