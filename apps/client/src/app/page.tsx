import GoogleLogo from "@repo/assets/src/icons/google.svg";
import XLogo from "@repo/assets/src/icons/logo.svg";
import { Button } from "@repo/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-ds-bg h-screen w-screen flex flex-col items-center justify-center gap-4">
      <Image
        src={XLogo}
        alt="X Logo"
        width={48}
        height={48}
        className="mb-12"
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Happening now</h1>
        <p className="text-sm text-ds-text-secondary">Join today.</p>
      </div>
      <Button variant="primary" size="lg">
        <Image src={GoogleLogo} alt="Google Logo" width={24} height={24} />
        Sign in with Google
      </Button>
    </main>
  );
}
