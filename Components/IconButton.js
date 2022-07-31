import { Pressable, StyleSheet } from "react-native"
import {Ionicons} from '@expo/vector-icons'

function IconButton({icon,pressed}){
    return <>
        <Pressable 
            onPress={pressed}
            style={({pressed}) => pressed && styles.button}
        >
            <Ionicons name={icon} size={24} />
        </Pressable>
    </>
}

export default IconButton

const styles = StyleSheet.create({
    button: {
        opacity: 0.5,
    }
})