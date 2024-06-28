"use client";
import { LoginPage } from "./login/LoginPage";
export default function Home() {
  return (
    <div className="flex w-full h-screen  items-center justify-center bg-gradient-to-b from-[rgb(177,170,164)] to-[rgb(220,215,205)]">
      <LoginPage />
    </div>
  );
}
