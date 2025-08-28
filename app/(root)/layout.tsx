import MobileNav from "@/components/MobileNav";
import MobileNavbar from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "GK", lastname: "Hyoju" };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="full size-full flex-col">
        <div className="root-layout">
          <Image
            src="/icons/logo.svg"
            alt="horizon logo"
            height={34}
            width={34}
          />
          <MobileNav user={loggedIn} />
        </div>
        {children}
      </div>
    </main>
  );
}
