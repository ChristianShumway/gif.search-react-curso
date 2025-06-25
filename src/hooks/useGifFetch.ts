import { useEffect, useState } from "react";
import { getGifs, type GifModel } from "../helpers/getGifs";

export const useGifFetch = (category: string) => {

  const[gifs, setGifs] = useState<GifModel[]>([]);
  const[isLoading, setIsLoading] = useState<boolean>(true);


  const getGifsImages = async() => {
    const currencyGifs = await getGifs(category);
    setGifs(currencyGifs);
    setIsLoading(false);
  }

  useEffect(() => {
    getGifsImages();
  }, [])

  return {
    gifs,
    isLoading
  }
}
