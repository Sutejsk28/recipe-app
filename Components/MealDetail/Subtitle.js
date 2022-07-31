import { View, Text, StyleSheet } from "react-native"

function Subtitle({children}){
    return (
        <>
            <View>
                <Text style={styles.subtitle}>{children}</Text>
            </View>
        </>
    )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: 16,
        marginVertical: 8,
    }
})