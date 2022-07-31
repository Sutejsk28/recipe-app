import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id)=>{} ,
    removeFavorite: (id)=>{}
})

function FavoritesContextProvider({children}){

    const [FavoritesIds,setFavoritesIds ] = useState([])

    function addFavorite(id){
        
        setFavoritesIds( (currentFavoritesIds)=>[...currentFavoritesIds, id] )
    }

    function removeFavorite(id){
        setFavoritesIds( (currentFavoritesIds) => 
            currentFavoritesIds.filter( (mealId)=>
                mealId !==id 
            ) 
        )
    }

    const values = {
        ids: FavoritesIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <FavoritesContext.Provider value={values} >{children}</FavoritesContext.Provider>
}
export default FavoritesContextProvider
