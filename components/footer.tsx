import React from "react";

export default function Footer() {
  return (
    <footer className="container-responsive flex flex-col items-center">
      <div className="flex min-h-20 w-full rounded-t-lg bg-zinc-800 px-4 shadow">
        <ul className="flex flex-grow flex-col items-center justify-around gap-2 py-6 sm:flex-row sm:gap-0">
          <li className="text-sm text-zinc-400 sm:text-base">MGWebs. 2024</li>
          <li className="text-sm text-zinc-400 sm:text-base">
            This webpage is a work-in-progress
          </li>
        </ul>
      </div>
    </footer>
  );
}
