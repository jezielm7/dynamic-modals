import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { Modalize } from 'react-native-modalize';

import PlayerIcon from 'react-native-vector-icons/Feather';

import styles from './styles';

const Home = () => {
  const modalRef = useRef(null);

  function showModal() {
    modalRef.current?.open();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={showModal}
      >
        <Text style={styles.text}>Open Modal</Text>
      </TouchableOpacity>

      <Modalize
        ref={modalRef}
        snapPoint={100}
      >
        <View style={styles.modalContent}>
          <View style={styles.detailArea}>
            <Image
              source={require('../assets/logo2.jpg')}
              style={styles.detailImage}
            />

            <Text style={styles.musicTitle}>Love & Hate</Text>
          </View>
          
          <TouchableOpacity>
            <PlayerIcon name="arrow-left-circle" size={30} color='#fff' />
          </TouchableOpacity>

          <TouchableOpacity>
            <PlayerIcon name="play-circle" size={42} color='#fff' />
          </TouchableOpacity>

          <TouchableOpacity>
            <PlayerIcon name="arrow-right-circle" size={30} color='#fff' />
          </TouchableOpacity>

        </View>
      </Modalize>
    </View>
  );
}

export default Home;