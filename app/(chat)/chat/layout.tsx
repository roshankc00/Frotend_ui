import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ChatList from "./_components/ChatList";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-4 gap-4 h-screen border border-gray-200">
      <div className="col-span-1 border-none bg-gray-100">
        <ChatList />
      </div>
      <div className="col-span-3 border-none bg-white">{children}</div>
    </div>
  );
}
