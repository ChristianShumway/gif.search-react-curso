import { ItemCategory } from "./ItemCategory";
import { useGifFetch } from "../hooks/useGifFetch";

interface ItemCategoryProps {
  category: string;
}

export const GridCategory = ({category}: ItemCategoryProps) => {

  const { gifs, isLoading } = useGifFetch(category);

  return (
    <div >
      {
        isLoading
        ? ( <h2> Cargando... </h2>)
        : <>
          <h1> { category } </h1>
          <div className="grid__section">
            {
              gifs.map( gif => (
                <ItemCategory
                  key={gif.id}
                  { ...gif }
                />
              ))
            }
          </div>
        </>
      }
    </div>
  )
}
