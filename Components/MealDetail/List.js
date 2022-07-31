import { View, Text, StyleSheet } from "react-native"

function List({data}){
    return data.map( (dataPoint) => (
            <View style={styles.listItem} key={dataPoint} >
                <Text>{dataPoint}</Text>
            </View>
     ) )
}

export default List

const styles = StyleSheet.create({
    listItem: {
        border: 4,
        borderRadius: 6,
        marginVertical: 4,
        marginHorizontal: 16,
        paddingVertical: 4,
        paddingHorizontal: 16,
    }
})