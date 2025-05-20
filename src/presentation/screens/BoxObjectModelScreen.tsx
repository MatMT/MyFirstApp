import { StyleSheet, Text, View } from "react-native"

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        {/* <Text style={styles.title}>
            BoxObjectModel
        </Text> */}
        <View style={styles.purpleBox}>
            <Text style={{color: 'white'}}>Hello World!</Text>
        </View>
        
        {/* <View style={styles.purpleBox}></View> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    title: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderWidth: 10,
        fontSize: 30
    },
    purpleBox: {
        height: 30,
        backgroundColor: 'purple',
        marginHorizontal: 20,
        marginVertical: 50,
        padding: 5
    }
})