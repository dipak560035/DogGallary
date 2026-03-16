import { useEffect, useState } from "react";
import { getAllBreeds, getRandomDogImage } from "../api/api";
import DogCard from "../components/DogCard";

export default function BreedList() {
  const [breeds, setBreeds] = useState([]);
  const [images, setImages] = useState({});

  useEffect(() => {
    async function fetchBreeds() {
      const allBreeds = await getAllBreeds();
      setBreeds(allBreeds);

      const imgPromises = allBreeds.map(async (breed) => {
        const img = await getRandomDogImage();
        return { breed, image: img };
      });

      const imgResults = await Promise.all(imgPromises);
      const imgMap = {};
      imgResults.forEach((item) => (imgMap[item.breed] = item.image));
      setImages(imgMap);
    }

    fetchBreeds();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-center">🐶 Dog Breeds</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {breeds.map((breed) => (
          <DogCard
            key={breed}
            breed={breed}
            image={images[breed] || "https://via.placeholder.com/300"}
          />
        ))}
      </div>
    </div>// done
  );
}
