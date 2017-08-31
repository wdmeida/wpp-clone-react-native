import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const Principal = props => (
  <View style={styles.container}>
    <Text>Página principal da aplicação</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  }
});

export default Principal;
