export interface GifModel {
  id: string;
  title: string;
  urlImage: string,
}

export const getGifs = async(category: string) => {
  const apiKey= 't8jzRcFzOlLyqIYj4UwGlWH1tQYFHTOn';
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

  const response = (await fetch(apiUrl));
  const { data } = await response.json();

  const gifs: GifModel[] = data.map( (gif: any) => ({
    id: gif.id,
    title: gif.title,
    urlImage: gif.images.original.url
  }));

  return gifs;

}