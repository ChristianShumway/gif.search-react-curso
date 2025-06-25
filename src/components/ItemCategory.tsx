
interface PropsItem {
  title: string;
  urlImage: string;
}

export const ItemCategory = ({title, urlImage}: PropsItem) => {
  return (
    <div className="item__grid">
      <img src={urlImage} alt={title} />
      <span> { title } </span>
    </div>
  )
}
