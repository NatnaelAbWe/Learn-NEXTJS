import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {
  console.log("what am i server or client component");
  return (
    <>
      <h1 className="text-center text-3xl mt-10 text-green-400 outline-10 shadow-2xl shadow-amber-50 outline-blue-600">
        welcome to next js
      </h1>
      <Hello />
    </>
  );
}
