import { Platform, SafeAreaView, StatusBar, Text } from "react-native"
import { View } from "react-native"
import { HelloWorldScreen } from "./src/presentation/screens/HelloWorldScreen"
import { CounterScreen } from "./src/presentation/screens/CounterScreen"
import { PaperProvider } from "react-native-paper"
import { CounterM3Screen } from "./src/presentation/screens/CounterM3Screen"

import Icon from "@react-native-vector-icons/material-design-icons"
import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen';
import DimensionsScreen from "./src/presentation/screens/DimensionsScreen"
// import { GridScreen } from "./src/presentation/screens/GridScreen"
import { PositionScreen } from "./src/presentation/screens/PositionScreen"
import { FlexBox } from "./src/presentation/screens/FlexBox"
import { HomeWorkScreen } from "./src/presentation/screens/HomeWorkScreen"

export const App = () => {
  return (
    <PaperProvider
      settings={{ 
        icon:(props) => <Icon {...props} />
      }}
    >

      <SafeAreaView style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 
        StatusBar.currentHeight : 0
        }}>
      {/* <SafeAreaView style={{height: 300}}> */}
          {/* <CounterM3Screen /> */}
          {/* <BoxObjectModelScreen /> */}
          {/* <DimensionsScreen /> */}
          {/* <GridScreen /> */}
          {/* <PositionScreen /> */}
          {/* <FlexBox /> */}
          <HomeWorkScreen />
      </SafeAreaView>

    </PaperProvider>
  )
}