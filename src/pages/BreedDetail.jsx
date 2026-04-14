
//       const data = await getBreedImages(breed);
//       setImages(data);
//     }
//     fetchImages();
//   }, [breed]);

//   return (
//     <div className="flex flex-col items-center">
//       <h1 className="text-3xl font-bold mb-8 text-center capitalize">{breed} 🐶</h1>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
//         {images.map((img, i) => (
//           <Card key={i} className="hover:shadow-lg">
//             <CardBody className="p-0">
//               <Image src={img} alt={breed} className="w-full h-40 object-cove
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBreedImages } from "../api/api";
import { Card, CardBody, Image } from "@heroui/react";

export default function BreedDetail() {
  const { breed } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const data = await getBreedImages(breed);
      setImages(data);
    }
    fetchImages();
  }, [breed]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-center capitalize">{breed} 🐶</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
        {images.map((img, i) => (
          <Card key={i} className="hover:shadow-lg">
            <CardBody className="p-0">
              <Image src={img} alt={breed} className="w-full h-40 object-cover" />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
