import { useEffect, useState } from "react";
import { getGif } from "../helpers/GetGifts";


export const getFetchGifs = (category) => {
    const [image, setImage] = useState([]) 
    const [isLoading, setIsLoading] = useState(true)
  
  const getImage = async ()=>{
    const newImage = await getGif(category);
    setImage(newImage)
    setIsLoading(false)
  }

  useEffect(()=>{
    getImage();
  },[])

  return {
    image,
    isLoading
  }
}
