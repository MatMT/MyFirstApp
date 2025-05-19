import { SafeAreaView, Text } from "react-native"
import { View } from "react-native"
import { HelloWorldScreen } from "./src/presentation/screens/HelloWorldScreen"
import { CounterScreen } from "./src/presentation/screens/CounterScreen"
import { PaperProvider } from "react-native-paper"
import { CounterM3Screen } from "./src/presentation/screens/CounterM3Screen"

import Icon from "@react-native-vector-icons/material-design-icons"

export const App = () => {
  return (
    <PaperProvider
      settings={{ 
        icon:(props) => <Icon {...props} />
      }}
    >
      <SafeAreaView style={{flex: 1}}>
          <CounterM3Screen />
      </SafeAreaView>
    </PaperProvider>
  )
}