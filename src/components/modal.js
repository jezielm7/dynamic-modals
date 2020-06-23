import React, { useRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Modalize } from 'react-native-modalize';

import styles from './styles';

const Modal = () => {
  const modalRef = useRef(null);
  
  return (
    <View >
      <Modalize
        ref={modalRef}
        snapPoint={180}
      >
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.upBtn}>
            <Text style={{ color: '#f2c144' }}>Update 🖍</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.delBtn}>
            <Text style={{ color: '#304050' }}>Delete 🗑</Text>
          </TouchableOpacity>
        </View>
      </Modalize>
    </View>
  );
}

export default Modal;