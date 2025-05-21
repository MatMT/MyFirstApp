import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
} from 'react-native';

// NO USAR
// const {width, height} = Dimensions.get('window');

export default function DimensionsScreen() {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        {/* <Text>DimensionsScreen</Text> */}
        <View
          style={{
            ...styles.purpleBlox,
            width: width * 0.5,
          }}></View>
      </View>

      <Text style={styles.title}>
        w: {width}, h: {height}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    backgroundColor: 'red',
  },
  purpleBlox: {
    backgroundColor: '#5856D6',
    height: '50%',
    width: '50%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
 