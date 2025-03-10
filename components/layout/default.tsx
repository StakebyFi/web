"use client";

import { Link } from "@heroui/link";
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../navbar').then(mod => mod.default), {
  ssr: false
});
const Providers = dynamic(() => import('../providers').then(mod => mod.default), {
  ssr: false,
});

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="bg-[#000] overflow-x-hidden">
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="min-h-screen w-screen flex flex-col justify-between antialiased max-w-7xl mx-auto">
            <div className="flex flex-col flex-1 pb-5 px-5 sm:px-10 items-center w-full mx-auto text-white">
              <Navbar />
              {children}
            </div>
            <footer className="w-full flex items-center justify-center py-3 mb-5">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://www.soniclabs.com/"
                title="soniclabs"
              >
                <span className="text-default-600">Built in</span>
                <p className="text-warning">Soniclabs</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
