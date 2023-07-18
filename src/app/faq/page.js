import React from "react";
import { apiFaq } from "@/lib/api";

export default function page() {
  return (
    <>
      <div
        className="w-full h-full absolute overflow-hidden drop-shadow-md"
        style={{
          backgroundImage: `url(/assets/images/greenpattern.png)`,
        }}
      >
        <div className="container mx-auto pt-32 relative z-3">
            <h1 className="font-esthetique text-center text-3xl md:text-5xl">Pertanyaan dan Jawaban</h1>
        </div>
      </div>
    </>
  );
}
