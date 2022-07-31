import { useContext, useLayoutEffect } from "react"
import { Image, Text, View, StyleSheet, ScrollView } from "react-native"

import IconButton from "../Components/IconButton"
import List from "../Components/MealDetail/List"
import Subtitle from "../Components/MealDetail/Subtitle"
import MealDetails from "../Components/MealDetails"
import {MEALS} from '../data/dummy-data'
import { FavoritesContext } from "../store/context/FavoritesContext"

function MealDetailScreen({route, navigation}){

    const FavoritesMealsContext = useContext(FavoritesContext)

    const mealId = route.params.mealId
    const SelectedMeal = MEALS.find( (meal)=> meal.id===mealId )

    const MealIsFavorite = FavoritesMealsContext.ids.includes(mealId)

    function FavoriteButtonPressHandler(){
        if(MealIsFavorite){
            FavoritesMealsContext.removeFavorite(mealId)
        }else{
            
            FavoritesMealsContext.addFavorite(mealId)
        }
    }

    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: ()=> {
            return <IconButton 
                icon={MealIsFavorite? "star":"star-outline"} 
                pressed={FavoriteButtonPressHandler}
            />
        }
      })
    }, [navigation, FavoriteButtonPressHandler])

    

    return <>
        <ScrollView style={styles.root}>
            <Image style={styles.image} source={{uri: SelectedMeal.imageUrl}} />

            <Text style={styles.title} >{SelectedMeal.title}</Text>

            <MealDetails duration={SelectedMeal.duration} complexity={SelectedMeal.complexity} affordability={SelectedMeal.affordability} />
            
            <View style={styles.card} >
                <Subtitle>Ingredients</Subtitle>
                <List data={SelectedMeal.ingredients}/>
            </View>

            <View style={styles.card} >
                <Subtitle>Steps</Subtitle>
                <List data={SelectedMeal.steps}/>
            </View>

        </ScrollView>
    </>
}

export default MealDetailScreen

const styles = StyleSheet.create({
    root: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    card: {
        borderWidth: 0.5,
        borderRadius: 8,
        margin: 16,
    },
})