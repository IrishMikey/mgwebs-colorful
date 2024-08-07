import React from "react";

export default function Footer() {
  return (
    <footer className="m-auto flex max-w-[50rem] flex-col items-center px-4">
      <div className="flex w-full rounded-t-lg bg-zinc-800 shadow min-h-20 px-4">

      <ul className="flex justify-around items-center flex-grow flex-col sm:flex-row ">
        <li className="text-zinc-400">MGWebs. 2024</li>
        <li className="text-zinc-400">This webpage is a work-in-progress</li>
      </ul>
      </div>
    </footer>
  );
}
