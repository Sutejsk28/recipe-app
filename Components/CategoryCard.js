import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryCard(props){
    return <>
        <View style={styles.cardItem}>
            <Pressable 
                android_ripple={{color: "#ccc"}} 
                style={
                    ({pressed})=>
                        [styles.button, 
                        pressed?styles.buttonPressed:null ]
                }
                onPress={props.pressed}
            >

                <View style={[styles.cardText, {backgroundColor: props.color}]}>
                    <Text style= {styles.title}>{props.title}</Text>
                </View>
                
            </Pressable>
        </View>
    </>
}

export default CategoryCard

const styles = StyleSheet.create({
    cardItem: {
        flex:1,
        margin: 16,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 16,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS==='android'? 'hidden' : 'visible',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    cardText: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        borderRadius: 16,
        alignItems: 'center',
        
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})