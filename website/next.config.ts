import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  redirects: [
      {
        source: '/_not-found',
        destination: '/',
        permanent: true,
      },
    ]
};

export default nextConfig;
