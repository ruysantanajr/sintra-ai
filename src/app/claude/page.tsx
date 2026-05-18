"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClaudePage from "@/components/ClaudePage";
import { USE_CASES } from "@/lib/data";

export default function ClaudeRoute() {
  return (
    <>
      <Header total={USE_CASES.length} />
      <main className="pt-16">
        <ClaudePage />
      </main>
      <Footer />
    </>
  );
}
