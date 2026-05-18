"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourcesPage from "@/components/ResourcesPage";
import { USE_CASES } from "@/lib/data";

export default function ResourcesRoute() {
  return (
    <>
      <Header total={USE_CASES.length} />
      <main className="pt-16">
        <ResourcesPage />
      </main>
      <Footer />
    </>
  );
}
