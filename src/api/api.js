import axios from "axios";

const BASE_URL = "https://dog.ceo/api";

// Random image (optionally for a specific breed)
export async function getRandomDogImage(breed = null) {
  const url = breed
    ? `${BASE_URL}/breed/${breed}/images/random`
    : `${BASE_URL}/breeds/image/random`;
  const res = await axios.get(url);
  return res.data.message;
}

// Get all breeds
export async function getAllBreeds() {
  const res = await axios.get(`${BASE_URL}/breeds/list/all`);
  return Object.keys(res.data.message);
}

// Get all images for a specific breed
export async function getBreedImages(breed) {
  const res = await axios.get(`${BASE_URL}/breed/${breed}/images`);
  return res.data.message;
}
