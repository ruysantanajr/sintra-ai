"use client";
import { ArrowLeft } from "lucide-react";
import { BASE_PATH } from "@/lib/data";
export default function ClaudePage() {
  return (
    <div className="min-h-screen bg-abyss text-fg-1 flex items-center justify-center">
      <div className="text-center">
        <p className="font-mono text-[12px] text-fg-4 mb-4">Loading...</p>
        <a href={`${BASE_PATH}/`} className="inline-flex items-center gap-2 font-mono text-[11px] text-violet-bright">
          <ArrowLeft size={13} /> Back
        </a>
      </div>
    </div>
  );
}
