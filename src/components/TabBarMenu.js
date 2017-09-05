import React from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { TabBar } from 'react-native-tab-view';

import { habilitaInclusaoContato } from '../actions/AppActions';

const ADICIONAR_CONTATO_IMG = require('../imgs/adicionar-contato.png');

const TabBarMenu = props => (
  <View style={styles.container}>
    <StatusBar backgroundColor='#114D44' />
    
    <View style={styles.headerView}>
      <View style={styles.titleView}>
        <Text style={styles.title}>WhatsApp Clone</Text>
      </View>

      <View style={styles.menuImageView}>
        <View style={styles.iconView}>
          <TouchableHighlight 
            onPress={() => { Actions.adicionarContato(); props.habilitaInclusaoContato(); }}
            underlayColor='#114D44'
          >
            <Image source={ADICIONAR_CONTATO_IMG} />
          </TouchableHighlight>
        </View>

        <View style={styles.exitTextView}>
          <Text style={styles.exitText}>Sair</Text>
        </View>
      </View>
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
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between' //Aplica um espaçamento entre os componentes
  },
  titleView: {
    height: 50,
    justifyContent: 'center'
  },
  menuImageView: {
    flexDirection: 'row',
    marginRight: 20
  },
  iconView: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  exitTextView: {
    justifyContent: 'center'
  },
  exitText: {
    fontSize: 20,
    color: '#fff'
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

export default connect(null, { habilitaInclusaoContato })(TabBarMenu);
