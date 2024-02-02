// example imports
import { NftCardExample } from "./examples/nft-card-example";

export const runtime = "edge";

export default async function HomePage() {
  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl">
          <span className="text-sudo-purple">&gt;sudoswap&lt;</span> React
          Components
        </h1>

        <div className="w-full max-w-2xl overflow-y-scroll">
          {/* example components */}
          <NftCardExample />
        </div>
      </div>
    </main>
  );
}
