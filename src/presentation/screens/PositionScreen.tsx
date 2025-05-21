import {StyleSheet, Text, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox} />

      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 250,
    width: 250,
    backgroundColor: '#28C4D9',
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row',
    // gap: 10,
    // justifyContent:'center',
    // alignItems:'center'
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 220, // enough for two 100px boxes + margins/borders
    justifyContent: 'center',
  },

  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    // margin: 5,
    position: 'absolute',
    bottom: 0,
    // zIndex: 100
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    // zIndex: 500
    // margin: 5,
  },
  greenBox: {
    // width: 100,
    // height: 100,
    // flex: 1,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    ...StyleSheet.absoluteFillObject
    // zIndex: 500,
    // margin: 5,
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // right: 0,
    // left: 0,
  },
});
