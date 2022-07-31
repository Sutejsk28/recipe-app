import {View, FlatList, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import MealItem from './MealItem'

function MealList({items}){

    const navigation = useNavigation();

    function renderMealItem(itemData){

        const item = itemData.item

        const itemPropsList = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        }

        function PressHandler(){
            navigation.navigate('MealDetails', {
                mealId: itemData.item.id
            })
        }

        return <>
            <MealItem {...itemPropsList} pressed={PressHandler} />
        </>
    }

    return <>
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={ (items)=>items.id }
                renderItem={renderMealItem}
            />
        </View>
    </>
}

export default MealList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})