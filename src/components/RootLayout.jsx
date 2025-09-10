import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex justify-center w-full py-8 px-4">
        <div className="w-full max-w-6xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
