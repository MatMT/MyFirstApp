import { useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native"
import { Button } from "react-native-paper";
import { PrimaryButton } from "../../components";

export const CounterScreen = () => {
  let [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
          {counter}
        </Text>

        {/* <PrimaryButton
          label="Increment"
          onPress={() => setCounter(counter + 1)}
          onLongPress={() => setCounter(0)}
        /> */}

        <Button
          onPress={() => setCounter(counter + 1)}
          onLongPress={() => setCounter(0)}
          mode="contained"
        >
          <Text>Increment</Text>
        </Button>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 80,
        textAlign: 'center',
        color: 'black',
        fontWeight: '300'
    }
});