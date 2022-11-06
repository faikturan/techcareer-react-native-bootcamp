/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

import Selector from '../components/LanguageSelector';

function SettingsScreen() {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Selector />
    </View>
  );
}

export default SettingsScreen;
