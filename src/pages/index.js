import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';

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
        snapPoint={160}
        HeaderComponent={
          <View style={{ backgroundColor: '#282a40'}}>
            <Text style={styles.modalTitle}>Options</Text>
          </View>
        }
      >
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.upBtn}>
            <Text style={{ color: '#f2c144' }}>Update  🖍</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.delBtn}>
            <Text style={{ color: '#304050' }}>Delete  🗑</Text>
          </TouchableOpacity>
        </View>
      </Modalize>
    </View>
  );
}

export default Home;