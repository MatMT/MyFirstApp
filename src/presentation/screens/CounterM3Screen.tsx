import React from "react";
import { useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native"
import { Button, FAB } from "react-native-paper";
import { PrimaryButton } from "../../components";
import { globalStyles } from "../theme/global.style";

import Icon from "@react-native-vector-icons/material-design-icons";

export const CounterM3Screen = () => {
  let [counter, setCounter] = useState(0);

  return (
    <View style={globalStyles.container}>
        
        <Text style={globalStyles.title}>
          {counter}
        </Text>

        {Platform.OS === 'android' ? (
          <>
            <Text>Hello from Android</Text>
            <Icon name="android" size={30} color="black" />
          </>
        ) : (
          <>
            <Text>Hello from Apple</Text>
            <Icon name="apple" size={30} color="black" />
          </>
        )}
        
        <FAB
          icon="plus"
          style={globalStyles.fab}
          onPress={() => setCounter(counter + 1)}
          onLongPress={() => setCounter(0)}
        />

    </View>
  )
}
