import { useContext } from "react"
import { StyleSheet, Text, View } from "react-native"

import MealList from "../Components/MealList/MealList"
import { MEALS } from "../data/dummy-data"
import { FavoritesContext } from "../store/context/FavoritesContext"

function FavoritesScreen(){

    const FavoritesMealsContext = useContext(FavoritesContext)

    const FavoritesMeals = MEALS.filter( (meal)=> FavoritesMealsContext.ids.includes(meal.id) )

    if(FavoritesMeals.length === 0){
        return (
            <View style={styles.root} >
                <Text style={styles.text} >Your Favorites List is empty</Text>
            </View>
        )
    }

    return <>
        <MealList items={FavoritesMeals} />
    </>
}

export default FavoritesScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
    }

})