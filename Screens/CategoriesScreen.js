import {Button, FlatList} from 'react-native'
import { useLayoutEffect } from 'react'

import {CATEGORIES} from '../data/dummy-data'
import CategoryCard from '../Components/CategoryCard'
import FavoritesScreen from './FavoritesScreen'


function CategoriesScreen({navigation}){

    function FavButtonHandler(){
        navigation.navigate('Favorites')
    }

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: ()=> {
              return <Button title='Favorites' onPress={FavButtonHandler}></Button>
          }
        })
      }, [navigation])

    function renderCategoryItem(itemData){

        function PressHandler(){
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            })
        }
        return <>
            <CategoryCard 
                title={itemData.item.title} 
                color={itemData.item.color} 
                pressed={PressHandler} 
            />
        </>
    }

    return <>
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={ (item) => item.id } 
            renderItem={renderCategoryItem} 
            numColumns={2}
        />
    </>
}

export default CategoriesScreen