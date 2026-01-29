import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: __dirname, // fuerza a Turbopack a usar la carpeta correcta
  },
};

export default nextConfig;
