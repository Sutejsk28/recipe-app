import { useLayoutEffect } from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../Components/MealList/MealList";

function MealsOverviewScreen({route, navigation}){

    const categoryId = route.params.categoryId

    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find((category)=>{
            return category.id === categoryId
        }).title

        navigation.setOptions({
            title: categoryTitle
        })
    },[categoryId,navigation])

    const displayedMeals = MEALS.filter((meal)=>{
        return meal.categoryIds.indexOf(categoryId) >=0
    })

    return <MealList items={displayedMeals} />

}

export default MealsOverviewScreen

