import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default props => (
  <View style={styles.container}>
    <Text>Contatos</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});