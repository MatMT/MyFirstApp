import {StyleSheet, Text, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <View style={styles.purpleBox} />
        <View style={styles.orangeBox} />
        <View style={styles.purpleBox} />
        <View style={styles.orangeBox} />
        <View style={styles.purpleBox} />
        <View style={styles.orangeBox} />
        <View style={styles.purpleBox} />
        <View style={styles.orangeBox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    justifyContent: 'center',
    alignItems: 'center',
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
    margin: 5,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    margin: 5,
  },
});
