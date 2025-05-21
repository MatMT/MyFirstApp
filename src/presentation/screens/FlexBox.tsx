import {ScrollView, StyleSheet, useWindowDimensions, View} from 'react-native';
import {Text} from 'react-native-paper';

export const FlexBox = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.box,
          {
            ...styles.whiteBox,
          },
        ]}
      />

      <View
        style={[
          styles.box,
          {
            ...styles.blueBox,
          },
        ]}
      />

      <View
        style={[
          styles.box,
          {
            ...styles.redBox,
          },
        ]}
      />

      <View
        style={[
          styles.box,
          {
            ...styles.whiteBox,
          },
        ]}
      />

      <View
        style={[
          styles.box,
          {
            ...styles.blueBox,
          },
        ]}
      />

      <View
        style={[
          styles.box,
          {
            ...styles.redBox,
          },
        ]}
      />

        <View
        style={[
          styles.box,
          {
            ...styles.whiteBox,
          },
        ]}
      />

      <View
        style={[
          styles.box,
          {
            ...styles.blueBox,
          },
        ]}
      />

      <View
        style={[
          styles.box,
          {
            ...styles.redBox,
          },
        ]}
      />

        <View
        style={[
          styles.box,
          {
            ...styles.whiteBox,
          },
        ]}
      />

      <View
        style={[
          styles.box,
          {
            ...styles.blueBox,
          },
        ]}
      />

      <View
        style={[
          styles.box,
          {
            ...styles.redBox,
          },
        ]}
      />

        <View
        style={[
          styles.box,
          {
            ...styles.whiteBox,
          },
        ]}
      />

      <View
        style={[
          styles.box,
          {
            ...styles.blueBox,
          },
        ]}
      />

      <View
        style={[
          styles.box,
          {
            ...styles.redBox,
          },
        ]}
      />


        <View
        style={[
          styles.box,
          {
            ...styles.whiteBox,
          },
        ]}
      />

      <View
        style={[
          styles.box,
          {
            ...styles.blueBox,
          },
        ]}
      />

      <View
        style={[
          styles.box,
          {
            ...styles.redBox,
          },
        ]}
      />

        <View
        style={[
          styles.box,
          {
            ...styles.whiteBox,
          },
        ]}
      />

      <View
        style={[
          styles.box,
          {
            ...styles.blueBox,
          },
        ]}
      />

      <View
        style={[
          styles.box,
          {
            ...styles.redBox,
          },
        ]}
      />
      

        <View
        style={[
          styles.box,
          {
            ...styles.whiteBox,
          },
        ]}
      />

      <View
        style={[
          styles.box,
          {
            ...styles.blueBox,
          },
        ]}
      />

      <View
        style={[
          styles.box,
          {
            ...styles.redBox,
          },
        ]}
      />

        <View
        style={[
          styles.box,
          {
            ...styles.whiteBox,
          },
        ]}
      />

      <View
        style={[
          styles.box,
          {
            ...styles.blueBox,
          },
        ]}
      />

      <View
        style={[
          styles.box,
          {
            ...styles.redBox,
          },
        ]}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    // flex: 1
    width: 100,
    height: 100,
  },
  redBox: {
    backgroundColor: '#5856D6',
  },
  whiteBox: {
    backgroundColor: '#4240a2',
  },
  blueBox: {
    backgroundColor: '#2e2d71',
  },
});
