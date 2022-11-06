/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

function HomeScreen() {
  const {t} = useTranslation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 28}}>{t('common:hello')}</Text>
    </View>
  );
}

export default HomeScreen;
