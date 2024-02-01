import { Button } from "@sudoswap/ui/button";

import { NftCardExample } from "./examples/nft-card-example";

export const runtime = "edge";

export default async function HomePage() {
  // You can await this here if you don't want to show Suspense fallback below
  //const posts = api.post.all();

  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          &gt;sudoswap&lt; React Components
        </h1>

        <div className="w-full max-w-2xl overflow-y-scroll">
          {/* example components */}
          <NftCardExample />
          <Button>Click Me</Button>
        </div>
      </div>
    </main>
  );
}
