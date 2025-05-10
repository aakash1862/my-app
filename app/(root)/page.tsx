import Image from "next/image";
import Hello from "../components/hello";

export default function Home() {
  console.log("Hello from the Home component -- Server component"); /** This will be visible on Console of Developer Tools on browser. */
  return (
    <>
      <h1 className="text-3xl">Welcome to my-app full stack app</h1>
      <Hello />
    </>
  );
}

/** Any change will be visible on the UI immediately because of HMR(Hot Module Replacement) in Next.js. */