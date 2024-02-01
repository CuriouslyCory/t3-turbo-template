// Importing env files here to validate on build
import "./src/env.js";
import "@sudoswap/auth/env";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@sudoswap/api",
    "@sudoswap/auth",
    "@sudoswap/db",
    "@sudoswap/ui",
    "@sudoswap/react-components",
    "@sudoswap/react-hooks",
    "@sudoswap/validators",
  ],

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default config;
