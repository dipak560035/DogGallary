import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { Link } from "react-router-dom";

export default function DogCard({ breed, image }) {
  return (
    <Card
      isPressable
      className="w-64 mx-auto hover:shadow-xl transition"
    >
      <CardHeader className="flex flex-col items-center pb-2 pt-2">
        <h3 className="font-bold text-lg capitalize">{breed}</h3>
      </CardHeader>
      <CardBody className="flex justify-center">
        <Link to={`/breeds/${breed}`}>
          <Image
            src={image}
            alt={breed}
            className="w-48 h-48 object-cover rounded-md"
          />
        </Link>
      </CardBody>
    </Card>
  );
}
