import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball Z']);
    
    const onNewCategory = (e) =>{ 
        if(categories.includes(e))return;
         setCategories([ e, ... categories]);
      
    }
    
    

  return (
    <>
    <h1>GiftExpertApp</h1>

    <AddCategory onNewCategory = { onNewCategory }/>
    
   
      {
        categories.map((category)=>
         (
            <GiftGrid key={category} category = {category}/>
          )
        )
      }       
        
   
    </>
    
  )
}
