import React from 'react';
import { StatusBar } from 'react-native';

import Home from './src/pages';

const dynamicModals = () => {
  return (
    <>
      <StatusBar backgroundColor="#320b80" />
      <Home />
    </>
  );
}

export default dynamicModals;