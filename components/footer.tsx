import React from "react";

export default function Footer() {
  return (
    <footer className="flex max-w-[50rem] rounded-t-lg bg-zinc-800 shadow min-h-20 px-4">
      <ul className="flex justify-around items-center flex-grow flex-col">
        <li>MGWebs 2024</li>
        <li className="text-zinc-400">This webpage is a work-in-progress</li>
      </ul>
    </footer>
  );
}
