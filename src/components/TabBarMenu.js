import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabBar } from 'react-native-tab-view';

export default props => (
  <View style={styles.container}>
    <StatusBar backgroundColor='#114D44' />
    
    <View style={styles.titleBox}>
      <Text style={styles.title}>WhatsApp Clone</Text>
    </View>
    
    <TabBar {...props} style={styles.tabBar} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#115E54',
    elevation: 4,
    marginBottom: 6
  },
  titleBox: {
    height: 50,
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 20
  },
  tabBar: {
    backgroundColor: '#115E54',
    elevation: 0
  }
});
