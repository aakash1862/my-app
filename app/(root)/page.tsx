import Image from "next/image";
import Hello from "../components/hello";

// A way to call Metadata for each page, this will take precedence over the metadata in layout.tsx
// export async function generateMetadata() {
//   return {
//     title: "Home",
//     description: "This is the home page of my full stack app",
//   };
// }

async function Home() {
  console.log("Hello from the Home component -- Server component"); /** This will be visible on Console of Developer Tools on browser. */
  
  // Fetch albums data
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Failed to fetch data");
  const albums = await response.json();
  
  return (
    <>
      <h1 className="text-3xl bg-black-500 text-white p-4 shadow-md">Welcome to my-app full stack app</h1>
      <Hello />
      
      {/* Albums grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {albums.map((album: {id: number, title: string }) => (
          <div key={album.id} className="bg-white shadow-md rounded-lg p-4 transition hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">Album Title: {album.title}</h3>
            <p className="text-gray-600">Album ID: {album.id}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;