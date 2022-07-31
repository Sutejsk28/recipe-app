import {Text, View, StyleSheet} from 'react-native'

function MealDetails({duration, complexity, affordability}){
    return <>
        <View style={styles.details}>
            <Text>{duration}min</Text>
            <Text>{complexity.toUpperCase()}</Text>
            <Text>{affordability.toUpperCase()}</Text>
        </View>
    </>
}

export default MealDetails

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 16,
        justifyContent: 'space-evenly'
    },
})