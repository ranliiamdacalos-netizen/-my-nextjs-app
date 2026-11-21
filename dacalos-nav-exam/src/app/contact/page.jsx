"use client";

import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#09090b] text-white px-6 py-12">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="relative z-10 w-full max-w-lg">
        <button
          onClick={() => router.push("/")}
          className="mb-12 px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-900/80 text-sm text-zinc-400 transition-all duration-300 hover:bg-red-200 hover:text-white hover:border-red-200 hover:shadow-lg hover:shadow-blue-500/20"
        >
          Back to Home
        </button>

        <div className="space-y-4">
          <a
            href="mailto:ranlidacalos738@gmail.com"
            className="group flex items-center justify-between p-5 bg-zinc-900/80 border border-zinc-800 rounded-2xl hover:border-blue-500/50 hover:bg-zinc-900 transition-all duration-300"
          >
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">
                Email
              </p>
              <p className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                ranlidacalos738@gmail.com
              </p>
            </div>
            <span className="text-xl text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"></span>
          </a>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-800">
          <p className="text-xs text-zinc-600 tracking-widest uppercase text-center"></p>
        </div>
      </div>
    </main>
  );
}
