import { GifItem } from "./GifItem";
import { getFetchGifs } from "../hooks/getFetchGifs";

export const GiftGrid = ({category}) => {  

  const { image, isLoading} = getFetchGifs(category)   

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando..</h2>)
      }
      <div className="card-grid">
        {
        image.map(( image)=>(
          <GifItem key={image.id} 
          { ... image}
          />
        ))
        }
      </div>
    </>
    
  )
}
