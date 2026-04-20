
// import { useEffect, useState } from "react";
// import { getRandomDogImage } from "../api/api";

// export de
//   const [image, setImage] = useState(null

//   useE
/
//       const img = a
//     fetc
//     <div className="flex flex-col items-center">
//       <h1 className="text-3xl font-bold mb-8 text-center">🐶 Random Dog</h1>
//       {image ? (
//         <i
//           src={image}
//           alt="Random Dog"
//           className="w-96 h-96 object-cover rounded-lg shadow-lg"
//         />
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   ); 
// }































import { useEffect, useState } from "react";
import { getRandomDogImage } from "../api/api";

export default function Home() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function fetchImage() {
      const img = await getRandomDogImage();
      setImage(img);
    }
    fetchImage();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-center">🐶 Random Dog</h1>
      {image ? (
        <img
          src={image}
          alt="Random Dog"
          className="w-96 h-96 object-cover rounded-lg shadow-lg"
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  ); 
}
