import { Image, Pressable, StyleSheet, Text, View, Platform } from "react-native";
import MealDetails from "../MealDetails";

function MealItem({title, imageUrl, duration, complexity, affordability, pressed}){
    return <>
        <View style={styles.mealItem}>
            <Pressable onPress={pressed} android_ripple={{color: "#ccc"}}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                <MealDetails duration={duration} complexity={complexity} affordability={affordability} />    
                </View>
            </Pressable>
        </View>
    </>
}

export default MealItem

const styles = StyleSheet.create({
    mealItem:{
        margin: 24,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS==='android'? 'hidden' : 'visible',
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        margin: 16,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
   
})
